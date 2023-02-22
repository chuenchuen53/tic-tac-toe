import ticTacToeDb from "../../TicTacToeDb";
import { SimulationResult } from "../../typing";
import { SIMULATION_CASES } from "../constant";
import { DbRow } from "../simulationResult/typing";
import { ResultMap as RowMap } from "./typing";

async function main() {
  await ticTacToeDb.connectToDatabase();

  const allRows = (await ticTacToeDb.collections.simulationResult.find().toArray()) as unknown as DbRow[];

  const rowMap: RowMap = {};
  for (let simulationCase of SIMULATION_CASES) {
    const result = allRows.filter((result) => result.simulationCase === simulationCase);
    rowMap[simulationCase] = result;
  }

  const aggregationMap: Record<string, SimulationResult> = {};

  for (let simulationCase of SIMULATION_CASES) {
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

  console.log(JSON.stringify(aggregationMap, null, 2));

  ticTacToeDb.client.close();
}

main();
