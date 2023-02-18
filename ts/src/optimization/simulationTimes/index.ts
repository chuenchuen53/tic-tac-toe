import os from "os";
import fs from "fs";
import path from "path";
import Piscina from "piscina";
import { effectiveCombination } from "../effectiveCombination";

const THREADS = os.cpus().length;
const FILENAME = "./temp-result/simulation-times.csv";

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
  minThreads: THREADS,
  maxThreads: THREADS,
});

const allEffectiveCombination = effectiveCombination();
const generateSet = allEffectiveCombination.slice(0, 555);

async function main() {
  const promiseArr: Promise<number[]>[] = [];

  for (let i = 0; i < generateSet.length; i++) {
    const [loseScore, drawScore, winScore] = generateSet[i];
    console.time(`${loseScore} ${drawScore} ${winScore}`);

    const promise = piscina.run({ loseScore, drawScore, winScore, log: true }).then((simulationTimes: number) => {
      console.log("result: ", loseScore, drawScore, winScore, simulationTimes);
      console.timeEnd(`${loseScore} ${drawScore} ${winScore}`);
      return [loseScore, drawScore, winScore, simulationTimes];
    });
    promiseArr.push(promise);
  }

  const result = await Promise.all(promiseArr);
  console.log("result: ", result);

  saveToCSV(result, FILENAME);
}

function saveToCSV(data: number[][], fileName: string) {
  const header = "loseScore,drawScore,winScore,simulationTimes\n";
  let csv = header;
  data.forEach((row) => (csv += row.join(",") + "\n"));
  fs.writeFileSync(fileName, csv);
  console.log(`Result saved to ${fileName}`);
}

main();
