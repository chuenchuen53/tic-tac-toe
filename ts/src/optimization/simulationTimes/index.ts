import path from "path";
import Piscina from "piscina";
import ticTacToeDb from "../../TicTacToeDb";
import DateTimeUtil from "../DateTimeUtil";
import { envVariables } from "../../envVariables";
import { setting } from "./setting";
import type { DbRow, WorkerData, WorkerResult } from "./typing";

const THREADS = envVariables.THREADS;

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
  minThreads: THREADS,
  maxThreads: THREADS,
});

async function main() {
  const start = new Date();
  console.log(`${DateTimeUtil.formatDate(start)} start main()`);

  await ticTacToeDb.connect();

  const generateCases = setting.cases.slice();

  const promiseArr: Promise<WorkerResult>[] = [];

  for (const simulationCase of generateCases) {
    const workerData: WorkerData = {
      simulationCase,
      sampleSize: setting.sampleSize,
      simulationTimes: setting.simulationTimes,
      precision: setting.precision,
      logResult: true,
    };
    const promise = piscina.run(workerData).then(async (workerResult: WorkerResult) => {
      const dbRow: DbRow = { ...workerResult, createdAt: new Date() };
      await ticTacToeDb.simulationTimes.insertOne(dbRow);
      return workerResult;
    });
    promiseArr.push(promise);
  }

  await Promise.all(promiseArr);

  ticTacToeDb.close();
  const end = new Date();
  console.log(
    `${DateTimeUtil.formatDate(end)} finish main(), (execution time: ${DateTimeUtil.formatDurationToSec(start, end)})`
  );
}

main();
