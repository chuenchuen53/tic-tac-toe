import os from "os";
import path from "path";
import Piscina from "piscina";
import { setting } from "./setting";
import ticTacToeDb from "../../TicTacToeDb";
import type { DbRow, WorkerData, WorkerResult } from "./typing";
import { getIsTestingDb } from "../getIsTestingDb";
import { assertFn } from "../boardConfigurationAssert";

assertFn();

const THREADS = os.cpus().length;

const isTestingDB = getIsTestingDb();

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
  minThreads: THREADS,
  maxThreads: THREADS,
});

async function main() {
  await ticTacToeDb.connectToDatabase();

  const promiseArr: Promise<WorkerResult>[] = [];
  for (let simulationCase of setting.cases) {
    for (let setNumber = 1; setNumber <= setting.numberOfSet; setNumber++) {
      const workerData: WorkerData = {
        simulationCase,
        simulationTimes: setting.simulationTimes,
        setNumber,
        logResult: true,
      };
      const promise = piscina.run(workerData).then(async (workerResult: WorkerResult) => {
        const dbRow: DbRow = { ...workerResult, createdAt: new Date() };

        if (isTestingDB) {
          await ticTacToeDb.collections.testCollection.insertOne(dbRow);
        } else {
          await ticTacToeDb.collections.simulationResult.insertOne(dbRow);
        }
        return workerResult;
      });
      promiseArr.push(promise);
    }
  }

  await Promise.all(promiseArr);

  ticTacToeDb.client.close();
}

console.log(new Date(), "start main()");
console.time("main");
main();
console.timeEnd("main");
