import { getMatchCase } from "../src/optimization/boardConfiguration";
import TicTacToe from "../src/TicTacToe";
import TicTacToeSolver from "../src/TicTacToeSolver";
import { GameStatus, TicTacToeElement } from "../src/TicTacToe/typing";

const dummyLoseScore = -10;
const dummyDrawScore = 0;
const dummyWinScore = 10;
const dummySimulationTimes = 1000;
const sampleSize = 10000;

function to1DIndex(row: number, col: number): number {
  return row * 3 + col;
}

function getOneMoveKey(row: number, col: number): string {
  return `fill_x${to1DIndex(row, col)}`;
}

function getTwoMoveKey(row0: number, col0: number, row1: number, col1: number): string {
  return `fill_x${to1DIndex(row0, col0)}_o${to1DIndex(row1, col1)}`;
}

function getThreeMoveKey(row0: number, col0: number, row1: number, col1: number, row2: number, col2: number): string {
  const i0 = to1DIndex(row0, col0);
  const i2 = to1DIndex(row2, col2);

  if (i0 > i2) {
    return `fill_x${i2}_o${to1DIndex(row1, col1)}_x${i0}`;
  } else {
    return `fill_x${i0}_o${to1DIndex(row1, col1)}_x${i2}`;
  }
}

function getFourMoveKey(
  row0: number,
  col0: number,
  row1: number,
  col1: number,
  row2: number,
  col2: number,
  row3: number,
  col3: number
): string {
  const i0 = to1DIndex(row0, col0);
  const i1 = to1DIndex(row1, col1);
  const i2 = to1DIndex(row2, col2);
  const i3 = to1DIndex(row3, col3);

  const [newI0, newI2] = i0 > i2 ? [i2, i0] : [i0, i2];
  const [newI1, newI3] = i1 > i3 ? [i3, i1] : [i1, i3];

  return `fill_x${newI0}_o${newI1}_x${newI2}_o${newI3}`;
}

/**
 *
 * @param min number inclusive
 * @param max number exclusive
 */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

function matchCaseTest(startTurn: TicTacToeElement) {
  const ticTacToe = new TicTacToe(startTurn);
  const solver = new TicTacToeSolver(dummyLoseScore, dummyDrawScore, dummyWinScore, dummySimulationTimes, ticTacToe);

  expect(getMatchCase(ticTacToe)).toBe("empty");
  expect(solver.getMatchCase()).toBe("empty");

  const move1 = solver.getRandomMove();
  ticTacToe.input(move1[0], move1[1]);
  solver.updateMatchCase();
  const expected1 = getOneMoveKey(move1[0], move1[1]);
  expect(getMatchCase(ticTacToe)).toBe(expected1);
  expect(solver.getMatchCase()).toBe(expected1);

  const move2 = solver.getRandomMove();
  ticTacToe.input(move2[0], move2[1]);
  solver.updateMatchCase();
  const expected2 = getTwoMoveKey(move1[0], move1[1], move2[0], move2[1]);
  expect(getMatchCase(ticTacToe)).toBe(expected2);
  expect(solver.getMatchCase()).toBe(expected2);

  const move3 = solver.getRandomMove();
  ticTacToe.input(move3[0], move3[1]);
  solver.updateMatchCase();
  const expected3 = getThreeMoveKey(move1[0], move1[1], move2[0], move2[1], move3[0], move3[1]);
  expect(getMatchCase(ticTacToe)).toBe(expected3);
  expect(solver.getMatchCase()).toBe(expected3);

  const move4 = solver.getRandomMove();
  ticTacToe.input(move4[0], move4[1]);
  solver.updateMatchCase();
  const expected4 = getFourMoveKey(move1[0], move1[1], move2[0], move2[1], move3[0], move3[1], move4[0], move4[1]);
  expect(getMatchCase(ticTacToe)).toBe(expected4);
  expect(solver.getMatchCase()).toBe(expected4);
}

describe("match case test", () => {
  it("with match case", () => {
    for (let i = 0; i < sampleSize; i++) {
      matchCaseTest(TicTacToeElement.X);
      matchCaseTest(TicTacToeElement.O);
    }
  });

  it("input more than 4 case", () => {
    for (let i = 0; i < sampleSize; i++) {
      const xStartFirst = new TicTacToe(TicTacToeElement.X);
      const xStartFirstSolver = new TicTacToeSolver(
        dummyLoseScore,
        dummyDrawScore,
        dummyWinScore,
        dummySimulationTimes,
        xStartFirst
      );

      for (let j = 0; j < randomInt(5, 10); j++) {
        if (xStartFirst.getGameStatus() === GameStatus.IN_PROGRESS) {
          const randomMove = xStartFirstSolver.getRandomMove();
          xStartFirst.input(randomMove[0], randomMove[1]);
        } else {
          break;
        }
      }

      xStartFirstSolver.updateMatchCase();
      const expectedKeyForXStartFirst = null;
      expect(getMatchCase(xStartFirst)).toBe(expectedKeyForXStartFirst);
      expect(xStartFirstSolver.getMatchCase()).toBe(expectedKeyForXStartFirst);

      const oStartFirst = new TicTacToe(TicTacToeElement.O);
      const oStartFirstSolver = new TicTacToeSolver(
        dummyLoseScore,
        dummyDrawScore,
        dummyWinScore,
        dummySimulationTimes,
        oStartFirst
      );

      for (let j = 0; j < randomInt(5, 10); j++) {
        if (oStartFirst.getGameStatus() === GameStatus.IN_PROGRESS) {
          const randomMove = oStartFirstSolver.getRandomMove();
          oStartFirst.input(randomMove[0], randomMove[1]);
        } else {
          break;
        }
      }

      oStartFirstSolver.updateMatchCase();
      const expectedKeyForOStartFirst = null;
      expect(getMatchCase(oStartFirst)).toBe(expectedKeyForOStartFirst);
      expect(oStartFirstSolver.getMatchCase()).toBe(expectedKeyForOStartFirst);
    }
  });
});
