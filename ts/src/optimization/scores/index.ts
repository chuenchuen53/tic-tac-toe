import os from "os";
import fs from "fs";
import path from "path";
import Piscina from "piscina";
import type { WorkerData, ResultRow } from "./typing";
import { solverDataFromCsv } from "./solverDataFromCsv";

const THREADS = os.cpus().length;
const FILENAME = "./temp-result/percent.csv";

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
  minThreads: THREADS,
  maxThreads: THREADS,
});

async function main() {
  const solverDataArr = await solverDataFromCsv();

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
    const promise = piscina.run(workerData).then((percent: ResultRow) => {
      console.timeEnd(`${loseScore} ${drawScore} ${winScore}`);
      return percent;
    });
    promiseArr.push(promise);
  }

  const result = await Promise.all(promiseArr);

  saveToCSV(result, FILENAME);
}

function saveToCSV(data: ResultRow[], fileName: string) {
  const header =
    "loseScore,drawScore,winScore,simulationTimes,startFirst_lose,startFirst_draw,startFirst_win,startSecond_lose,startSecond_draw,startSecond_win,overall_lose,overall_draw,overall_win\n";
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
    x.startFirst_lose,
    x.startFirst_draw,
    x.startFirst_win,
    x.startSecond_lose,
    x.startSecond_draw,
    x.startSecond_win,
    x.overall_lose,
    x.overall_draw,
    x.overall_win,
  ];
}

main();
