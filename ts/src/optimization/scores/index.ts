import os from "os";
import fs from "fs";
import path from "path";
import { Collection } from "mongodb";
import Piscina from "piscina";
import ticTacToeDb from "../../TicTacToeDb";
import type { WorkerData, ResultRow, SolverData } from "./typing";
import { solverDataFromCsv } from "./solverDataFromCsv";

const THREADS = os.cpus().length;
const FILENAME = "./temp-result/scores.csv";

let testCollection: Collection;
let scoresCollection: Collection;

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
  minThreads: THREADS,
  maxThreads: THREADS,
});

async function run() {
  await ticTacToeDb.connectToDatabase();
  testCollection = ticTacToeDb.collections.testCollection;
  scoresCollection = ticTacToeDb.collections.scores;

  if (!Math.random()) {
    console.log(testCollection);
  }

  await main();
  ticTacToeDb.client.close();
}

async function main() {
  const allSolverDataArr = await solverDataFromCsv();
  const solverDataArr: SolverData[] = allSolverDataArr.slice(0, 3245);

  const promiseArr: Promise<ResultRow>[] = [];

  for (let i = 0; i < solverDataArr.length; i++) {
    const { loseScore, drawScore, winScore, simulationTimes } = solverDataArr[i];
    console.time(`${loseScore} ${drawScore} ${winScore}`);

    const workerData: WorkerData = {
      loseScore,
      drawScore,
      winScore,
      simulationTimes,
      log: true,
    };
    const promise = piscina.run(workerData).then(async (result: ResultRow) => {
      console.timeEnd(`${loseScore} ${drawScore} ${winScore}`);
      await scoresCollection.insertOne(result);
      return result;
    });
    promiseArr.push(promise);
  }

  const result = await Promise.all(promiseArr);

  saveToCSV(result, FILENAME);
}

function saveToCSV(data: ResultRow[], fileName: string) {
  const header =
    "loseScore,drawScore,winScore,simulationTimes,sampleSize,startFirst_lose,startFirst_draw,startFirst_win,startSecond_lose,startSecond_draw,startSecond_win\n";
  let csv = header;
  data.forEach((row) => (csv += rowToArr(row).join(",") + "\n"));
  fs.writeFileSync(fileName, csv);
  console.log(`Result saved to ${fileName}`);
}

function rowToArr(x: ResultRow): number[] {
  return [
    x.loseScore,
    x.drawScore,
    x.winScore,
    x.simulationTimes,
    x.sampleSize,
    x.startFirst_lose,
    x.startFirst_draw,
    x.startFirst_win,
    x.startSecond_lose,
    x.startSecond_draw,
    x.startSecond_win,
  ];
}

run();
