import os from "os";
import path from "path";
import Piscina from "piscina";
import { SIMULATION_CASES } from "./constant";
import { setting } from "./setting";
import ticTacToeDb from "../../TicTacToeDb";
import type { CsvData, DbRow, WorkerData, WorkerResult } from "./typing";
import { saveToCSV } from "../saveToCsv";
import { getIsTestingDb } from "../getIsTestingDb";

const THREADS = os.cpus().length;
const FILENAME = "temp-result/simulation-times-result.csv";
const CSV_HEADER = [
  "simulationCase",
  "sampleSize",
  "simulationTimes",
  "precision",
  "requiredSimulations",
] satisfies (keyof CsvData[number])[];

const isTestingDB = getIsTestingDb();

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
  minThreads: THREADS,
  maxThreads: THREADS,
});

async function main() {
  await ticTacToeDb.connectToDatabase();

  const promiseArr: Promise<WorkerResult>[] = [];
  for (let simulationCase of SIMULATION_CASES) {
    const workerData: WorkerData = {
      simulationCase,
      sampleSize: setting.sampleSize,
      simulationTimes: setting.simulationTimes,
      precision: setting.precision,
      logResult: true,
    };
    const promise = piscina.run(workerData).then(async (workerResult: WorkerResult) => {
      const dbRow: DbRow = { ...workerResult, createdAt: new Date() };

      if (isTestingDB) {
        await ticTacToeDb.collections.testCollection.insertOne(dbRow);
      } else {
        await ticTacToeDb.collections.simulationTimes.insertOne(dbRow);
      }
      return workerResult;
    });
    promiseArr.push(promise);
  }

  const result = await Promise.all(promiseArr);
  const csvData: CsvData = result.map((row) => ({
    simulationCase: row.simulationCase,
    sampleSize: row.sampleSize,
    simulationTimes: row.simulationTimes,
    precision: row.precision,
    requiredSimulations: row.requiredSimulations,
  }));
  saveToCSV(csvData, CSV_HEADER, FILENAME);

  ticTacToeDb.client.close();
}

console.log(new Date(), "start main()");
console.time("main");
main();
console.timeEnd("main");
