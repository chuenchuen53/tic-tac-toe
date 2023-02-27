/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fs from "fs";
import ticTacToeDb from "../../../TicTacToeDb";
import { GameResult, SimulationResult } from "../../../TicTacToeSolver/typing";
import { SimulationCase, SIMULATION_CASES } from "../../constant";
import { DbRow } from "../../simulationResult/typing";
import { ResultMap as RowMap } from "./typing";

const FILE_PATH = "temp-result/aggregation.json";
const UPPERCASE_KEY_FILE_PATH = "temp-result/aggregation-uppercase-key.json";
const THRESHOLD_FOR_SIMILAR_POSITION = 0.005;

async function main() {
  await ticTacToeDb.connect();

  const allRows = (await ticTacToeDb.simulationResult.find().toArray()) as unknown as DbRow[];
  console.log("allRows.length", allRows.length);
  ticTacToeDb.close();

  const rowMap: RowMap = {};
  for (const simulationCase of SIMULATION_CASES) {
    const result = allRows.filter((result) => result.simulationCase === simulationCase);
    rowMap[simulationCase] = result;
  }

  const aggregationMap: Record<string, SimulationResult> = {};

  for (const simulationCase of SIMULATION_CASES) {
    const rows = rowMap[simulationCase];
    const allResult = rows.map((row) => row.result);
    const aggregatedResult = allResult[0];
    for (let i = 1; i < allResult.length; i++) {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (aggregatedResult[row][col]) {
            aggregatedResult[row][col]!.lose += allResult[i][row][col]!.lose;
            aggregatedResult[row][col]!.draw += allResult[i][row][col]!.draw;
            aggregatedResult[row][col]!.win += allResult[i][row][col]!.win;
          }
        }
      }
    }
    aggregationMap[simulationCase] = aggregatedResult;
  }

  const output: Record<string, SimulationResult> = {};
  for (const simulationCase of SIMULATION_CASES) {
    output[simulationCase] = makeEquivalentPositionSameResult(aggregationMap, simulationCase);
  }

  const uppercaseOutput: Record<string, SimulationResult> = {};
  for (const key in output) {
    uppercaseOutput[key.toUpperCase()] = output[key];
  }

  fs.writeFileSync(FILE_PATH, JSON.stringify(output, null, 0));
  console.log(`File written to ${FILE_PATH}`);

  fs.writeFileSync(UPPERCASE_KEY_FILE_PATH, JSON.stringify(uppercaseOutput, null, 0));
  console.log(`File written to ${UPPERCASE_KEY_FILE_PATH}`);
}

function makeEquivalentPositionSameResult(
  aggregationMap: Record<string, SimulationResult>,
  simulationCase: SimulationCase
) {
  const result = aggregationMap[simulationCase];
  const resultRatio = result.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      if (!cell) return null;
      const total = cell.lose + cell.draw + cell.win;
      return {
        lose: cell.lose / total,
        draw: cell.draw / total,
        win: cell.win / total,
        rowIndex,
        colIndex,
      };
    })
  );

  const resultRatioFlatten = resultRatio.flat();

  const equivalentPosition = resultRatio.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      const similarPosition = resultRatioFlatten
        .filter((x) => similarLoseDrawWinRatio(cell, x, THRESHOLD_FOR_SIMILAR_POSITION))
        .map((x) => [x!.rowIndex, x!.colIndex]);

      // if case of null, return itself
      return similarPosition.length === 0 ? [[rowIndex, colIndex]] : similarPosition;
    });
  });

  return result.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      const [r, c] = equivalentPosition[rowIndex][colIndex][0];
      return result[r][c];
    })
  );
}

function similarLoseDrawWinRatio(
  a: Record<GameResult, number> | null,
  b: Record<GameResult, number> | null,
  threshold: number
) {
  if (a === null || b === null) return false;
  const loseDiff = Math.abs(a.lose - b.lose);
  const drawDiff = Math.abs(a.draw - b.draw);
  const winDiff = Math.abs(a.win - b.win);
  return loseDiff < threshold && drawDiff < threshold && winDiff < threshold;
}

main();
