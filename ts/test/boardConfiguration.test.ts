import { boardStrMap, boardToStr, getTicTacToe } from "../src/optimization/boardConfiguration";
import { SIMULATION_CASES } from "../src/optimization/constant";

describe("test suite for boardConfiguration", () => {
  for (let simulationCases of SIMULATION_CASES) {
    it(`${simulationCases} configuration test`, () => {
      const board = getTicTacToe(simulationCases);
      const boardStr = boardToStr(board);
      expect(boardStrMap[simulationCases]).toBe(boardStr);
    });
  }
});
