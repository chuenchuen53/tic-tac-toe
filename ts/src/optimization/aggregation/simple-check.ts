import ticTacToeDb from "../../TicTacToeDb";
import { SIMULATION_CASES } from "../constant";
import { DbRow } from "../simulationResult/typing";
import { getN, meanAndSdFromResult, ratioFromResult } from "../simulationTimes/requiredSimulationTimes";
import { ResultMap as RowMap } from "./typing";

const THRESHOLD_FOR_RATIO_DIFF_OF_DIFF_SET = 0.005;

async function main() {
  await ticTacToeDb.connectToDatabase();

  const allRows = (await ticTacToeDb.collections.simulationResult.find().toArray()) as unknown as DbRow[];
  console.log("allRows.length", allRows.length);

  const rowMap: RowMap = {};
  for (let simulationCase of SIMULATION_CASES) {
    const result = allRows.filter((result) => result.simulationCase === simulationCase);
    rowMap[simulationCase] = result;
  }

  const ratioMap: Record<string, ReturnType<typeof ratioFromResult>> = {};
  for (let simulationCase of SIMULATION_CASES) {
    const rows = rowMap[simulationCase];
    const allResult = rows.map((row) => row.result);
    ratioMap[simulationCase] = ratioFromResult(allResult, rows[0].simulationTimes);
  }

  for (let simulationCase of SIMULATION_CASES) {
    const ratioArr = ratioMap[simulationCase].flat();
    for (let cell of ratioArr) {
      const loseArr = cell.lose.sort((a, b) => a - b);
      const drawArr = cell.draw.sort((a, b) => a - b);
      const winArr = cell.win.sort((a, b) => a - b);

      const loseDiff = loseArr[loseArr.length - 1] - loseArr[0];
      const drawDiff = drawArr[drawArr.length - 1] - drawArr[0];
      const winDiff = winArr[winArr.length - 1] - winArr[0];

      if (
        loseDiff > THRESHOLD_FOR_RATIO_DIFF_OF_DIFF_SET ||
        drawDiff > THRESHOLD_FOR_RATIO_DIFF_OF_DIFF_SET ||
        winDiff > THRESHOLD_FOR_RATIO_DIFF_OF_DIFF_SET
      ) {
        console.log(
          "simulationCase",
          simulationCase,
          "cell",
          cell,
          "loseDiff",
          loseDiff,
          "drawDiff",
          drawDiff,
          "winDiff",
          winDiff
        );
      }
    }
  }

  const meanAndSdMap: Record<string, ReturnType<typeof meanAndSdFromResult>> = {};
  for (let simulationCase of SIMULATION_CASES) {
    const ratioArr = ratioMap[simulationCase];
    meanAndSdMap[simulationCase] = meanAndSdFromResult(ratioArr);
  }

  const precision = 0.01;
  const NValuesMap: Record<
    string,
    {
      lose: (number | null)[][];
      draw: (number | null)[][];
      win: (number | null)[][];
    }
  > = {};
  for (let simulationCase of SIMULATION_CASES) {
    const meanAndSdArr = meanAndSdMap[simulationCase];
    const NValues = {
      lose: meanAndSdArr.map((row) => row.map((cell) => (cell === null ? null : getN(cell.lose, precision)))),
      draw: meanAndSdArr.map((row) => row.map((cell) => (cell === null ? null : getN(cell.draw, precision)))),
      win: meanAndSdArr.map((row) => row.map((cell) => (cell === null ? null : getN(cell.win, precision)))),
    };
    NValuesMap[simulationCase] = NValues;
  }

  const maxNMap: Record<string, number> = {};
  for (let simulationCase of SIMULATION_CASES) {
    const NValues = NValuesMap[simulationCase];
    const maxN = Math.max(
      ...NValues.lose.map((row) => Math.max(...row.map((cell) => cell ?? 0))),
      ...NValues.draw.map((row) => Math.max(...row.map((cell) => cell ?? 0))),
      ...NValues.win.map((row) => Math.max(...row.map((cell) => cell ?? 0)))
    );
    maxNMap[simulationCase] = maxN;
  }

  0 && console.log(JSON.stringify(meanAndSdMap));
  console.log(JSON.stringify(maxNMap, null, 2));

  ticTacToeDb.client.close();
}

main();
