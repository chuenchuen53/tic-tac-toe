import TicTacToe from "../TicTacToe";
import { TicTacToeElement } from "../typing";
import type { SimulationCase } from "./constant";

export function getTicTacToe(simulationCase: SimulationCase): TicTacToe {
  const x = TicTacToeElement.X;
  let r = new TicTacToe(x);

  switch (simulationCase) {
    case "empty":
      return r;

    case "fill_x0": {
      r.input(0, 0);
      return r;
    }
    case "fill_x1": {
      r.input(0, 1);
      return r;
    }
    case "fill_x2": {
      r.input(0, 2);
      return r;
    }
    case "fill_x3": {
      r.input(1, 0);
      return r;
    }
    case "fill_x4": {
      r.input(1, 1);
      return r;
    }
    case "fill_x5": {
      r.input(1, 2);
      return r;
    }
    case "fill_x6": {
      r.input(2, 0);
      return r;
    }
    case "fill_x7": {
      r.input(2, 1);
      return r;
    }
    case "fill_x8": {
      r.input(2, 2);
      return r;
    }
    case "fill_x0_o1": {
      r.input(0, 0);
      r.input(0, 1);
      return r;
    }

    case "fill_x0_o2": {
      r.input(0, 0);
      r.input(0, 2);
      return r;
    }
    case "fill_x0_o3": {
      r.input(0, 0);
      r.input(1, 0);
      return r;
    }
    case "fill_x0_o4": {
      r.input(0, 0);
      r.input(1, 1);
      return r;
    }
    case "fill_x0_o5": {
      r.input(0, 0);
      r.input(1, 2);
      return r;
    }
    case "fill_x0_o6": {
      r.input(0, 0);
      r.input(2, 0);
      return r;
    }
    case "fill_x0_o7": {
      r.input(0, 0);
      r.input(2, 1);
      return r;
    }
    case "fill_x0_o8": {
      r.input(0, 0);
      r.input(2, 2);
      return r;
    }
    case "fill_x1_o0": {
      r.input(0, 1);
      r.input(0, 0);
      return r;
    }
    case "fill_x1_o2": {
      r.input(0, 1);
      r.input(0, 2);
      return r;
    }
    case "fill_x1_o3": {
      r.input(0, 1);
      r.input(1, 0);
      return r;
    }
    case "fill_x1_o4": {
      r.input(0, 1);
      r.input(1, 1);
      return r;
    }
    case "fill_x1_o5": {
      r.input(0, 1);
      r.input(1, 2);
      return r;
    }
    case "fill_x1_o6": {
      r.input(0, 1);
      r.input(2, 0);
      return r;
    }
    case "fill_x1_o7": {
      r.input(0, 1);
      r.input(2, 1);
      return r;
    }
    case "fill_x1_o8": {
      r.input(0, 1);
      r.input(2, 2);
      return r;
    }
    case "fill_x2_o0": {
      r.input(0, 2);
      r.input(0, 0);
      return r;
    }
    case "fill_x2_o1": {
      r.input(0, 2);
      r.input(0, 1);
      return r;
    }
    case "fill_x2_o3": {
      r.input(0, 2);
      r.input(1, 0);
      return r;
    }
    case "fill_x2_o4": {
      r.input(0, 2);
      r.input(1, 1);
      return r;
    }
    case "fill_x2_o5": {
      r.input(0, 2);
      r.input(1, 2);
      return r;
    }
    case "fill_x2_o6": {
      r.input(0, 2);
      r.input(2, 0);
      return r;
    }
    case "fill_x2_o7": {
      r.input(0, 2);
      r.input(2, 1);
      return r;
    }
    case "fill_x2_o8": {
      r.input(0, 2);
      r.input(2, 2);
      return r;
    }
    case "fill_x3_o0": {
      r.input(1, 0);
      r.input(0, 0);
      return r;
    }
    case "fill_x3_o1": {
      r.input(1, 0);
      r.input(0, 1);
      return r;
    }
    case "fill_x3_o2": {
      r.input(1, 0);
      r.input(0, 2);
      return r;
    }
    case "fill_x3_o4": {
      r.input(1, 0);
      r.input(1, 1);
      return r;
    }
    case "fill_x3_o5": {
      r.input(1, 0);
      r.input(1, 2);
      return r;
    }
    case "fill_x3_o6": {
      r.input(1, 0);
      r.input(2, 0);
      return r;
    }
    case "fill_x3_o7": {
      r.input(1, 0);
      r.input(2, 1);
      return r;
    }
    case "fill_x3_o8": {
      r.input(1, 0);
      r.input(2, 2);
      return r;
    }
    case "fill_x4_o0": {
      r.input(1, 1);
      r.input(0, 0);
      return r;
    }
    case "fill_x4_o1": {
      r.input(1, 1);
      r.input(0, 1);
      return r;
    }
    case "fill_x4_o2": {
      r.input(1, 1);
      r.input(0, 2);
      return r;
    }
    case "fill_x4_o3": {
      r.input(1, 1);
      r.input(1, 0);
      return r;
    }
    case "fill_x4_o5": {
      r.input(1, 1);
      r.input(1, 2);
      return r;
    }
    case "fill_x4_o6": {
      r.input(1, 1);
      r.input(2, 0);
      return r;
    }
    case "fill_x4_o7": {
      r.input(1, 1);
      r.input(2, 1);
      return r;
    }
    case "fill_x4_o8": {
      r.input(1, 1);
      r.input(2, 2);
      return r;
    }
    case "fill_x5_o0": {
      r.input(1, 2);
      r.input(0, 0);
      return r;
    }
    case "fill_x5_o1": {
      r.input(1, 2);
      r.input(0, 1);
      return r;
    }
    case "fill_x5_o2": {
      r.input(1, 2);
      r.input(0, 2);
      return r;
    }
    case "fill_x5_o3": {
      r.input(1, 2);
      r.input(1, 0);
      return r;
    }
    case "fill_x5_o4": {
      r.input(1, 2);
      r.input(1, 1);
      return r;
    }
    case "fill_x5_o6": {
      r.input(1, 2);
      r.input(2, 0);
      return r;
    }
    case "fill_x5_o7": {
      r.input(1, 2);
      r.input(2, 1);
      return r;
    }
    case "fill_x5_o8": {
      r.input(1, 2);
      r.input(2, 2);
      return r;
    }
    case "fill_x6_o0": {
      r.input(2, 0);
      r.input(0, 0);
      return r;
    }
    case "fill_x6_o1": {
      r.input(2, 0);
      r.input(0, 1);
      return r;
    }
    case "fill_x6_o2": {
      r.input(2, 0);
      r.input(0, 2);
      return r;
    }
    case "fill_x6_o3": {
      r.input(2, 0);
      r.input(1, 0);
      return r;
    }
    case "fill_x6_o4": {
      r.input(2, 0);
      r.input(1, 1);
      return r;
    }
    case "fill_x6_o5": {
      r.input(2, 0);
      r.input(1, 2);
      return r;
    }
    case "fill_x6_o7": {
      r.input(2, 0);
      r.input(2, 1);
      return r;
    }
    case "fill_x6_o8": {
      r.input(2, 0);
      r.input(2, 2);
      return r;
    }
    case "fill_x7_o0": {
      r.input(2, 1);
      r.input(0, 0);
      return r;
    }
    case "fill_x7_o1": {
      r.input(2, 1);
      r.input(0, 1);
      return r;
    }
    case "fill_x7_o2": {
      r.input(2, 1);
      r.input(0, 2);
      return r;
    }
    case "fill_x7_o3": {
      r.input(2, 1);
      r.input(1, 0);
      return r;
    }
    case "fill_x7_o4": {
      r.input(2, 1);
      r.input(1, 1);
      return r;
    }
    case "fill_x7_o5": {
      r.input(2, 1);
      r.input(1, 2);
      return r;
    }
    case "fill_x7_o6": {
      r.input(2, 1);
      r.input(2, 0);
      return r;
    }
    case "fill_x7_o8": {
      r.input(2, 1);
      r.input(2, 2);
      return r;
    }
    case "fill_x8_o0": {
      r.input(2, 2);
      r.input(0, 0);
      return r;
    }
    case "fill_x8_o1": {
      r.input(2, 2);
      r.input(0, 1);
      return r;
    }
    case "fill_x8_o2": {
      r.input(2, 2);
      r.input(0, 2);
      return r;
    }
    case "fill_x8_o3": {
      r.input(2, 2);
      r.input(1, 0);
      return r;
    }
    case "fill_x8_o4": {
      r.input(2, 2);
      r.input(1, 1);
      return r;
    }
    case "fill_x8_o5": {
      r.input(2, 2);
      r.input(1, 2);
      return r;
    }
    case "fill_x8_o6": {
      r.input(2, 2);
      r.input(2, 0);
      return r;
    }
    case "fill_x8_o7": {
      r.input(2, 2);
      r.input(2, 1);
      return r;
    }
  }
}
