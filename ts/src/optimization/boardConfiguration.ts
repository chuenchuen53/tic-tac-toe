import TicTacToe from "../TicTacToe";
import { TicTacToeElement } from "../typing";
import type { SimulationCase } from "./constant";

const inputMap: Record<SimulationCase, number[][]> = {
  empty: [],
  fill_x0: [[0, 0]],
  fill_x1: [[0, 1]],
  fill_x2: [[0, 2]],
  fill_x3: [[1, 0]],
  fill_x4: [[1, 1]],
  fill_x5: [[1, 2]],
  fill_x6: [[2, 0]],
  fill_x7: [[2, 1]],
  fill_x8: [[2, 2]],
  fill_x0_o1: [
    [0, 0],
    [0, 1],
  ],
  fill_x0_o2: [
    [0, 0],
    [0, 2],
  ],
  fill_x0_o3: [
    [0, 0],
    [1, 0],
  ],
  fill_x0_o4: [
    [0, 0],
    [1, 1],
  ],
  fill_x0_o5: [
    [0, 0],
    [1, 2],
  ],
  fill_x0_o6: [
    [0, 0],
    [2, 0],
  ],
  fill_x0_o7: [
    [0, 0],
    [2, 1],
  ],
  fill_x0_o8: [
    [0, 0],
    [2, 2],
  ],
  fill_x1_o0: [
    [0, 1],
    [0, 0],
  ],
  fill_x1_o2: [
    [0, 1],
    [0, 2],
  ],
  fill_x1_o3: [
    [0, 1],
    [1, 0],
  ],
  fill_x1_o4: [
    [0, 1],
    [1, 1],
  ],
  fill_x1_o5: [
    [0, 1],
    [1, 2],
  ],
  fill_x1_o6: [
    [0, 1],
    [2, 0],
  ],
  fill_x1_o7: [
    [0, 1],
    [2, 1],
  ],
  fill_x1_o8: [
    [0, 1],
    [2, 2],
  ],
  fill_x2_o0: [
    [0, 2],
    [0, 0],
  ],
  fill_x2_o1: [
    [0, 2],
    [0, 1],
  ],
  fill_x2_o3: [
    [0, 2],
    [1, 0],
  ],
  fill_x2_o4: [
    [0, 2],
    [1, 1],
  ],
  fill_x2_o5: [
    [0, 2],
    [1, 2],
  ],
  fill_x2_o6: [
    [0, 2],
    [2, 0],
  ],
  fill_x2_o7: [
    [0, 2],
    [2, 1],
  ],
  fill_x2_o8: [
    [0, 2],
    [2, 2],
  ],
  fill_x3_o0: [
    [1, 0],
    [0, 0],
  ],
  fill_x3_o1: [
    [1, 0],
    [0, 1],
  ],
  fill_x3_o2: [
    [1, 0],
    [0, 2],
  ],
  fill_x3_o4: [
    [1, 0],
    [1, 1],
  ],
  fill_x3_o5: [
    [1, 0],
    [1, 2],
  ],
  fill_x3_o6: [
    [1, 0],
    [2, 0],
  ],
  fill_x3_o7: [
    [1, 0],
    [2, 1],
  ],
  fill_x3_o8: [
    [1, 0],
    [2, 2],
  ],
  fill_x4_o0: [
    [1, 1],
    [0, 0],
  ],
  fill_x4_o1: [
    [1, 1],
    [0, 1],
  ],
  fill_x4_o2: [
    [1, 1],
    [0, 2],
  ],
  fill_x4_o3: [
    [1, 1],
    [1, 0],
  ],
  fill_x4_o5: [
    [1, 1],
    [1, 2],
  ],
  fill_x4_o6: [
    [1, 1],
    [2, 0],
  ],
  fill_x4_o7: [
    [1, 1],
    [2, 1],
  ],
  fill_x4_o8: [
    [1, 1],
    [2, 2],
  ],
  fill_x5_o0: [
    [1, 2],
    [0, 0],
  ],
  fill_x5_o1: [
    [1, 2],
    [0, 1],
  ],
  fill_x5_o2: [
    [1, 2],
    [0, 2],
  ],
  fill_x5_o3: [
    [1, 2],
    [1, 0],
  ],
  fill_x5_o4: [
    [1, 2],
    [1, 1],
  ],
  fill_x5_o6: [
    [1, 2],
    [2, 0],
  ],
  fill_x5_o7: [
    [1, 2],
    [2, 1],
  ],
  fill_x5_o8: [
    [1, 2],
    [2, 2],
  ],
  fill_x6_o0: [
    [2, 0],
    [0, 0],
  ],
  fill_x6_o1: [
    [2, 0],
    [0, 1],
  ],
  fill_x6_o2: [
    [2, 0],
    [0, 2],
  ],
  fill_x6_o3: [
    [2, 0],
    [1, 0],
  ],
  fill_x6_o4: [
    [2, 0],
    [1, 1],
  ],
  fill_x6_o5: [
    [2, 0],
    [1, 2],
  ],
  fill_x6_o7: [
    [2, 0],
    [2, 1],
  ],
  fill_x6_o8: [
    [2, 0],
    [2, 2],
  ],
  fill_x7_o0: [
    [2, 1],
    [0, 0],
  ],
  fill_x7_o1: [
    [2, 1],
    [0, 1],
  ],
  fill_x7_o2: [
    [2, 1],
    [0, 2],
  ],
  fill_x7_o3: [
    [2, 1],
    [1, 0],
  ],
  fill_x7_o4: [
    [2, 1],
    [1, 1],
  ],
  fill_x7_o5: [
    [2, 1],
    [1, 2],
  ],
  fill_x7_o6: [
    [2, 1],
    [2, 0],
  ],
  fill_x7_o8: [
    [2, 1],
    [2, 2],
  ],
  fill_x8_o0: [
    [2, 2],
    [0, 0],
  ],
  fill_x8_o1: [
    [2, 2],
    [0, 1],
  ],
  fill_x8_o2: [
    [2, 2],
    [0, 2],
  ],
  fill_x8_o3: [
    [2, 2],
    [1, 0],
  ],
  fill_x8_o4: [
    [2, 2],
    [1, 1],
  ],
  fill_x8_o5: [
    [2, 2],
    [1, 2],
  ],
  fill_x8_o6: [
    [2, 2],
    [2, 0],
  ],
  fill_x8_o7: [
    [2, 2],
    [2, 1],
  ],
};

export const boardStrMap: Record<SimulationCase, string> = {
  empty: "EEE-EEE-EEE",
  fill_x0: "XEE-EEE-EEE",
  fill_x1: "EXE-EEE-EEE",
  fill_x2: "EEX-EEE-EEE",
  fill_x3: "EEE-XEE-EEE",
  fill_x4: "EEE-EXE-EEE",
  fill_x5: "EEE-EEX-EEE",
  fill_x6: "EEE-EEE-XEE",
  fill_x7: "EEE-EEE-EXE",
  fill_x8: "EEE-EEE-EEX",
  fill_x0_o1: "XOE-EEE-EEE",
  fill_x0_o2: "XEO-EEE-EEE",
  fill_x0_o3: "XEE-OEE-EEE",
  fill_x0_o4: "XEE-EOE-EEE",
  fill_x0_o5: "XEE-EEO-EEE",
  fill_x0_o6: "XEE-EEE-OEE",
  fill_x0_o7: "XEE-EEE-EOE",
  fill_x0_o8: "XEE-EEE-EEO",
  fill_x1_o0: "OXE-EEE-EEE",
  fill_x1_o2: "EXO-EEE-EEE",
  fill_x1_o3: "EXE-OEE-EEE",
  fill_x1_o4: "EXE-EOE-EEE",
  fill_x1_o5: "EXE-EEO-EEE",
  fill_x1_o6: "EXE-EEE-OEE",
  fill_x1_o7: "EXE-EEE-EOE",
  fill_x1_o8: "EXE-EEE-EEO",
  fill_x2_o0: "OEX-EEE-EEE",
  fill_x2_o1: "EOX-EEE-EEE",
  fill_x2_o3: "EEX-OEE-EEE",
  fill_x2_o4: "EEX-EOE-EEE",
  fill_x2_o5: "EEX-EEO-EEE",
  fill_x2_o6: "EEX-EEE-OEE",
  fill_x2_o7: "EEX-EEE-EOE",
  fill_x2_o8: "EEX-EEE-EEO",
  fill_x3_o0: "OEE-XEE-EEE",
  fill_x3_o1: "EOE-XEE-EEE",
  fill_x3_o2: "EEO-XEE-EEE",
  fill_x3_o4: "EEE-XOE-EEE",
  fill_x3_o5: "EEE-XEO-EEE",
  fill_x3_o6: "EEE-XEE-OEE",
  fill_x3_o7: "EEE-XEE-EOE",
  fill_x3_o8: "EEE-XEE-EEO",
  fill_x4_o0: "OEE-EXE-EEE",
  fill_x4_o1: "EOE-EXE-EEE",
  fill_x4_o2: "EEO-EXE-EEE",
  fill_x4_o3: "EEE-OXE-EEE",
  fill_x4_o5: "EEE-EXO-EEE",
  fill_x4_o6: "EEE-EXE-OEE",
  fill_x4_o7: "EEE-EXE-EOE",
  fill_x4_o8: "EEE-EXE-EEO",
  fill_x5_o0: "OEE-EEX-EEE",
  fill_x5_o1: "EOE-EEX-EEE",
  fill_x5_o2: "EEO-EEX-EEE",
  fill_x5_o3: "EEE-OEX-EEE",
  fill_x5_o4: "EEE-EOX-EEE",
  fill_x5_o6: "EEE-EEX-OEE",
  fill_x5_o7: "EEE-EEX-EOE",
  fill_x5_o8: "EEE-EEX-EEO",
  fill_x6_o0: "OEE-EEE-XEE",
  fill_x6_o1: "EOE-EEE-XEE",
  fill_x6_o2: "EEO-EEE-XEE",
  fill_x6_o3: "EEE-OEE-XEE",
  fill_x6_o4: "EEE-EOE-XEE",
  fill_x6_o5: "EEE-EEO-XEE",
  fill_x6_o7: "EEE-EEE-XOE",
  fill_x6_o8: "EEE-EEE-XEO",
  fill_x7_o0: "OEE-EEE-EXE",
  fill_x7_o1: "EOE-EEE-EXE",
  fill_x7_o2: "EEO-EEE-EXE",
  fill_x7_o3: "EEE-OEE-EXE",
  fill_x7_o4: "EEE-EOE-EXE",
  fill_x7_o5: "EEE-EEO-EXE",
  fill_x7_o6: "EEE-EEE-OXE",
  fill_x7_o8: "EEE-EEE-EXO",
  fill_x8_o0: "OEE-EEE-EEX",
  fill_x8_o1: "EOE-EEE-EEX",
  fill_x8_o2: "EEO-EEE-EEX",
  fill_x8_o3: "EEE-OEE-EEX",
  fill_x8_o4: "EEE-EOE-EEX",
  fill_x8_o5: "EEE-EEO-EEX",
  fill_x8_o6: "EEE-EEE-OEX",
  fill_x8_o7: "EEE-EEE-EOX",
};

export function boardToStr(x: TicTacToe) {
  return x
    .getBoard()
    .map((row) => row.map((e) => (e === TicTacToeElement.X ? "X" : e === TicTacToeElement.O ? "O" : "E")).join(""))
    .join("-");
}

export function boardToStrInvertXO(x: TicTacToe) {
  return x
    .getBoard()
    .map((row) => row.map((e) => (e === TicTacToeElement.X ? "O" : e === TicTacToeElement.O ? "X" : "E")).join(""))
    .join("-");
}

export function getTicTacToe(simulationCase: SimulationCase): TicTacToe {
  const x = TicTacToeElement.X;
  let r = new TicTacToe(x);
  for (const [row, col] of inputMap[simulationCase]) {
    r.input(row, col);
  }
  return r;
}

export function getMatchCase(ticTacToe: TicTacToe): SimulationCase | null {
  if (ticTacToe.getFilled() < 3) {
    if (ticTacToe.getStartTurn() === TicTacToeElement.X) {
      const str = boardToStr(ticTacToe);
      for (const [key, value] of Object.entries(boardStrMap)) {
        if (str === value) return key as SimulationCase;
      }
    } else {
      const invertStr = boardToStrInvertXO(ticTacToe);
      for (const [key, value] of Object.entries(boardStrMap)) {
        if (invertStr === value) return key as SimulationCase;
      }
    }
  }

  return null;
}
