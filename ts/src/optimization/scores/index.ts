import os from "os";
import path from "path";
import Piscina from "piscina";
import ticTacToeDb from "../../TicTacToeDb";
import type { DbRow, WorkerData, WorkerResult } from "./typing";
import { effectiveCombination } from "../effectiveCombination";
import { setting } from "./settings";
import { assertFn } from "../boardConfigurationAssert";
import DateTimeUtil from "../DateTimeUtil";

assertFn();

const THREADS = os.cpus().length;

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
  minThreads: THREADS,
  maxThreads: THREADS,
});

async function main() {
  const start = new Date();
  console.log(`${DateTimeUtil.formatDate(start)} start main()`);

  await ticTacToeDb.connectToDatabase();

  const allCombination = effectiveCombination();
  const generateCombination = allCombination.slice();

  const promiseArr: Promise<void>[] = [];

  for (let i = 0; i < generateCombination.length; i++) {
    const [loseScore, drawScore, winScore] = generateCombination[i];
    const workerData: WorkerData = {
      loseScore,
      drawScore,
      winScore,
      simulationTimes: setting.simulationTimes,
      sampleSize: setting.sampleSize,
      logResult: true,
    };
    const promise = piscina.run(workerData).then(async (result: WorkerResult) => {
      const dbRow: DbRow = { ...result, createdAt: new Date() };
      await ticTacToeDb.collections.scores.insertOne(dbRow);
    });
    promiseArr.push(promise);
  }

  await Promise.all(promiseArr);

  await ticTacToeDb.client.close();

  const end = new Date();
  console.log(
    `${DateTimeUtil.formatDate(end)} finish main(), (execution time: ${DateTimeUtil.formatDurationToSec(start, end)})`
  );
}

main();
