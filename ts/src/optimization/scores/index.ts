import path from "path";
import Piscina from "piscina";
import ticTacToeDb from "../../TicTacToeDb";
import { effectiveCombination } from "../effectiveCombination";
import DateTimeUtil from "../DateTimeUtil";
import { envVariables } from "../../envVariables";
import { setting } from "./settings";
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

  const allCombination = effectiveCombination();
  const generateCombination = allCombination.slice(0, 389);

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
      await ticTacToeDb.scores.insertOne(dbRow);
    });
    promiseArr.push(promise);
  }

  await Promise.all(promiseArr);

  await ticTacToeDb.close();

  const end = new Date();
  console.log(
    `${DateTimeUtil.formatDate(end)} finish main(), (execution time: ${DateTimeUtil.formatDurationToSec(start, end)})`
  );
}

main();
