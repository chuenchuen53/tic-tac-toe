import CalcUtil from "../../util/CalcUtil";
import TicTacToeSolver from "../../TicTacToeSolver";
import TicTacToe from "../../TicTacToe";
import { TicTacToeElement } from "../../typing";

export default function requiredSimulationTimes(
  loseScore: number,
  drawScore: number,
  winScore: number,
  simulationTimes: number,
  sampleSize: number,
  log = false
): number {
  const diff = Math.max(
    1,
    Math.min(
      Math.abs(Math.abs(loseScore) - drawScore), // for-prettier
      winScore - drawScore
    )
  );
  const precision = 0.1 * diff * simulationTimes;

  const empty = new TicTacToeSolver(loseScore, drawScore, winScore, simulationTimes, new TicTacToe(TicTacToeElement.X));
  const scoresArr: number[][] = Array.from({ length: 9 }, () => Array(sampleSize).fill(0));
  for (let i = 0; i < sampleSize; i++) {
    const arr = empty.calculateScores();
    for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
      for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
        scoresArr[row * 3 + col][i] = arr[row][col] as number;
      }
    }
  }

  const meanAndSdArr = scoresArr.map((scores) => CalcUtil.meanAndSD(scores));

  // get required simulate times
  // assume 99.9% confidence interval => z-statistic = 3.29
  // equation => n = (z * sampleSd / precision) ** 2
  const n = meanAndSdArr.map((x) => ((3.29 * x.sd) / precision) ** 2);
  const result = Math.ceil(Math.max(...n) * simulationTimes);

  if (log) {
    console.log("meanAndSdArr", meanAndSdArr);
    console.log("n", n);
    console.log("result", result);
  }

  return result;
}
