import { assert } from "console";
import TicTacToe from "../../TicTacToe";
import { TicTacToeElement } from "../../typing";
import type { SimulationCase } from "./constant";

export function getTicTacToe(simulationCase: SimulationCase): TicTacToe {
  const x = TicTacToeElement.X;

  switch (simulationCase) {
    case "empty":
      return new TicTacToe(x);
    case "fill_x0": {
      const r = new TicTacToe(x);
      r.input(0, 0);
      return r;
    }
    case "fill_x1": {
      const r = new TicTacToe(x);
      r.input(0, 1);
      return r;
    }
    case "fill_x2": {
      const r = new TicTacToe(x);
      r.input(0, 2);
      return r;
    }
    case "fill_x3": {
      const r = new TicTacToe(x);
      r.input(1, 0);
      return r;
    }
    case "fill_x4": {
      const r = new TicTacToe(x);
      r.input(1, 1);
      return r;
    }
    case "fill_x5": {
      const r = new TicTacToe(x);
      r.input(1, 2);
      return r;
    }
    case "fill_x6": {
      const r = new TicTacToe(x);
      r.input(2, 0);
      return r;
    }
    case "fill_x7": {
      const r = new TicTacToe(x);
      r.input(2, 1);
      return r;
    }
    case "fill_x8": {
      const r = new TicTacToe(x);
      r.input(2, 2);
      return r;
    }
  }
}

function boardToStr(x: TicTacToe) {
  return x
    .getBoard()
    .map((row) => row.map((e) => (e === TicTacToeElement.X ? "X" : e === TicTacToeElement.O ? "O" : "E")).join(""))
    .join("-");
}

assert(boardToStr(getTicTacToe("empty")) === "EEE-EEE-EEE", "empty");
assert(boardToStr(getTicTacToe("fill_x0")) === "XEE-EEE-EEE", "fill_x0");
assert(boardToStr(getTicTacToe("fill_x1")) === "EXE-EEE-EEE", "fill_x1");
assert(boardToStr(getTicTacToe("fill_x2")) === "EEX-EEE-EEE", "fill_x2");
assert(boardToStr(getTicTacToe("fill_x3")) === "EEE-XEE-EEE", "fill_x3");
assert(boardToStr(getTicTacToe("fill_x4")) === "EEE-EXE-EEE", "fill_x4");
assert(boardToStr(getTicTacToe("fill_x5")) === "EEE-EEX-EEE", "fill_x5");
assert(boardToStr(getTicTacToe("fill_x6")) === "EEE-EEE-XEE", "fill_x6");
assert(boardToStr(getTicTacToe("fill_x7")) === "EEE-EEE-EXE", "fill_x7");
assert(boardToStr(getTicTacToe("fill_x8")) === "EEE-EEE-EEX", "fill_x8");
