import path from "path";
import Piscina from "piscina";

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
});

const testSet = [
  [-10, 12, 20],
  [-18, 8, 16],
  [-16, 8, 14],
  [-12, 14, 20],
  [-16, 4, 12],
  [-2, 14, 18],
  [-18, 4, 20],
  [-8, 6, 20],
  [-12, 4, 8],
  [-3, 15, 18],
  [-2, 4, 12],
  [-16, 16, 20],
  [-8, 2, 20],
  [-8, 16, 18],
  [-6, 9, 15],
  [-10, 5, 20],
  [-4, 4, 14],
  [-20, 12, 16],
  [-18, 10, 16],
  [-12, 8, 16],
  [-18, 12, 15],
  [-12, 14, 20],
  [-16, 8, 20],
  [-2, 10, 18],
];

async function main() {
  const promiseArr: Promise<number[]>[] = [];

  for (let i = 0; i < testSet.length; i++) {
    const [loseScore, drawScore, winScore] = testSet[i];
    console.time(`${loseScore} ${drawScore} ${winScore}`);

    const promise = piscina.run({ loseScore, drawScore, winScore, log: false }).then((simulationTimes: number) => {
      console.log("result: ", loseScore, drawScore, winScore, simulationTimes);
      console.timeEnd(`${loseScore} ${drawScore} ${winScore}`);
      return [loseScore, drawScore, winScore, simulationTimes];
    });
    promiseArr.push(promise);
  }

  const result = await Promise.all(promiseArr);
  console.log("result: ", result);
}

main();
