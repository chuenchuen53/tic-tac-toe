import CalcUtil from "../../util/CalcUtil";
import TicTacToeSolver from "../../TicTacToeSolver";
import { SimulationResult } from "../../typing";
import { SimulationCase } from "../constant";
import { getTicTacToe } from "../boardConfiguration";
import { WorkerResult } from "./typing";

const dummyScores = {
  lose: -10,
  draw: 8,
  win: 10,
};

interface ResultCount {
  lose: number[];
  draw: number[];
  win: number[];
}

export default function requiredSimulationTimes(
  simulationCase: SimulationCase,
  sampleSize: number,
  simulationTimes: number,
  precision: number,
  log = false
): WorkerResult {
  const allResult: SimulationResult[] = [];
  const ticTacToe = getTicTacToe(simulationCase);
  const ticTacToeSolver = new TicTacToeSolver(
    dummyScores.lose,
    dummyScores.draw,
    dummyScores.win,
    simulationTimes,
    ticTacToe
  );
  for (let i = 0; i < sampleSize; i++) {
    const result = ticTacToeSolver.getSimulationResult();
    allResult.push(result);
  }

  const ratioArr = ratioFromResult(allResult, simulationTimes);
  const meanAndSdArr = meanAndSdFromResult(ratioArr);

  const NValues = {
    lose: meanAndSdArr.map((row) => row.map((cell) => (cell === null ? null : getN(cell.lose, precision)))),
    draw: meanAndSdArr.map((row) => row.map((cell) => (cell === null ? null : getN(cell.draw, precision)))),
    win: meanAndSdArr.map((row) => row.map((cell) => (cell === null ? null : getN(cell.win, precision)))),
  };

  const maxN = Math.max(
    ...NValues.lose.map((row) => Math.max(...row.map((cell) => cell ?? 0))),
    ...NValues.draw.map((row) => Math.max(...row.map((cell) => cell ?? 0))),
    ...NValues.win.map((row) => Math.max(...row.map((cell) => cell ?? 0)))
  );

  const result = simulationTimes * maxN;

  if (log) {
    console.log("simulationCase", simulationCase);
    console.log(
      "mean",
      meanAndSdArr.map((x) =>
        x.map((y) =>
          y ? `{lose: ${y.lose.mean.toFixed(2)}, draw: ${y.draw.mean.toFixed(2)}, win: ${y.win.mean.toFixed(2)}}` : null
        )
      )
    );
    console.log(
      "sd",
      meanAndSdArr.map((x) =>
        x.map((y) =>
          y ? `{lose: ${y.lose.sd.toFixed(2)}, draw: ${y.draw.sd.toFixed(2)}, win: ${y.win.sd.toFixed(2)}}` : null
        )
      )
    );
    console.log("NValues", NValues);
    console.log("result", result);
  }

  return {
    simulationCase,
    sampleSize,
    simulationTimes,
    precision,
    allResult,
    requiredSimulations: result,
  };
}

function countTemplate(): ResultCount {
  return {
    lose: [],
    draw: [],
    win: [],
  };
}

export function getN(x: { sd: number }, precision: number): number {
  // get required simulate times
  // assume 99.9% confidence interval => z-statistic = 3.29
  // assume 99% confidence interval => z-statistic = 2.58
  // assume 95% confidence interval => z-statistic = 1.96
  // equation => n = (z * sampleSd / precision) ** 2
  return ((2.58 * x.sd) / precision) ** 2;
}

export function ratioFromResult(allResult: SimulationResult[], simulationTimes: number): ResultCount[][] {
  const ratioArr = [
    [countTemplate(), countTemplate(), countTemplate()],
    [countTemplate(), countTemplate(), countTemplate()],
    [countTemplate(), countTemplate(), countTemplate()],
  ];

  for (const result of allResult) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const gameResultCount = result[i][j];
        if (gameResultCount === null) continue;
        ratioArr[i][j].lose.push(gameResultCount.lose / simulationTimes);
        ratioArr[i][j].draw.push(gameResultCount.draw / simulationTimes);
        ratioArr[i][j].win.push(gameResultCount.win / simulationTimes);
      }
    }
  }

  return ratioArr;
}

export function meanAndSdFromResult(ratioArr: ResultCount[][]) {
  return ratioArr.map((row) =>
    row.map((cell) =>
      cell.lose.length === 0
        ? null
        : {
            lose: CalcUtil.meanAndSD(cell.lose),
            draw: CalcUtil.meanAndSD(cell.draw),
            win: CalcUtil.meanAndSD(cell.win),
          }
    )
  );
}
