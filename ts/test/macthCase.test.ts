import { getMatchCase } from "../src/optimization/boardConfiguration";
import TicTacToe from "../src/TicTacToe";
import TicTacToeSolver from "../src/TicTacToeSolver";
import { GameStatus, TicTacToeElement } from "../src/typing";

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

function getTwoMoveKey(row1: number, col1: number, row2: number, col2: number): string {
  return `fill_x${to1DIndex(row1, col1)}_o${to1DIndex(row2, col2)}`;
}

/**
 *
 * @param min number inclusive
 * @param max number exclusive
 */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

describe("match case test", () => {
  it(`empty case`, () => {
    const xStartFirst = new TicTacToe(TicTacToeElement.X);
    const oStartFirst = new TicTacToe(TicTacToeElement.O);
    expect(getMatchCase(xStartFirst)).toBe("empty");
    expect(getMatchCase(oStartFirst)).toBe("empty");
  });

  it(`input 1 case`, () => {
    for (let i = 0; i < sampleSize; i++) {
      const xStartFirst = new TicTacToe(TicTacToeElement.X);
      const xStartFirstSolver = new TicTacToeSolver(
        dummyLoseScore,
        dummyDrawScore,
        dummyWinScore,
        dummySimulationTimes,
        xStartFirst
      );
      const xStartFirstMove = xStartFirstSolver.getRandomMove();
      xStartFirst.input(xStartFirstMove[0], xStartFirstMove[1]);
      xStartFirstSolver.updateMatchCase();

      const expectedKeyForXStartFirst = getOneMoveKey(xStartFirstMove[0], xStartFirstMove[1]);
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
      const oStartFirstMove = oStartFirstSolver.getRandomMove();
      oStartFirst.input(oStartFirstMove[0], oStartFirstMove[1]);
      oStartFirstSolver.updateMatchCase();

      const expectedKeyForOStartFirst = getOneMoveKey(oStartFirstMove[0], oStartFirstMove[1]);
      expect(getMatchCase(oStartFirst)).toBe(expectedKeyForOStartFirst);
      expect(oStartFirstSolver.getMatchCase()).toBe(expectedKeyForOStartFirst);
    }
  });

  it(`input 2 case`, () => {
    for (let i = 0; i < sampleSize; i++) {
      const xStartFirst = new TicTacToe(TicTacToeElement.X);
      const xStartFirstSolver = new TicTacToeSolver(
        dummyLoseScore,
        dummyDrawScore,
        dummyWinScore,
        dummySimulationTimes,
        xStartFirst
      );
      const xStartFirstMove = xStartFirstSolver.getRandomMove();
      xStartFirst.input(xStartFirstMove[0], xStartFirstMove[1]);
      const xStartFirstMove2 = xStartFirstSolver.getRandomMove();
      xStartFirst.input(xStartFirstMove2[0], xStartFirstMove2[1]);
      xStartFirstSolver.updateMatchCase();

      const expectedKeyForXStartFirst = getTwoMoveKey(
        xStartFirstMove[0],
        xStartFirstMove[1],
        xStartFirstMove2[0],
        xStartFirstMove2[1]
      );
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
      const oStartFirstMove = oStartFirstSolver.getRandomMove();
      oStartFirst.input(oStartFirstMove[0], oStartFirstMove[1]);
      const oStartFirstMove2 = oStartFirstSolver.getRandomMove();
      oStartFirst.input(oStartFirstMove2[0], oStartFirstMove2[1]);
      oStartFirstSolver.updateMatchCase();

      const expectedKeyForOStartFirst = getTwoMoveKey(
        oStartFirstMove[0],
        oStartFirstMove[1],
        oStartFirstMove2[0],
        oStartFirstMove2[1]
      );
      expect(getMatchCase(oStartFirst)).toBe(expectedKeyForOStartFirst);
      expect(oStartFirstSolver.getMatchCase()).toBe(expectedKeyForOStartFirst);
    }
  });

  it(`input more than 2 case`, () => {
    for (let i = 0; i < sampleSize; i++) {
      const xStartFirst = new TicTacToe(TicTacToeElement.X);
      const xStartFirstSolver = new TicTacToeSolver(
        dummyLoseScore,
        dummyDrawScore,
        dummyWinScore,
        dummySimulationTimes,
        xStartFirst
      );

      for (let j = 0; j < randomInt(3, 10); j++) {
        if (xStartFirst.getGameStatus() === GameStatus.IN_PROGRESS) {
          const randomMove = xStartFirstSolver.getRandomMove();
          xStartFirst.input(randomMove[0], randomMove[1]);
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

      for (let j = 0; j < randomInt(3, 10); j++) {
        if (oStartFirst.getGameStatus() === GameStatus.IN_PROGRESS) {
          const randomMove = oStartFirstSolver.getRandomMove();
          oStartFirst.input(randomMove[0], randomMove[1]);
        }
      }

      oStartFirstSolver.updateMatchCase();
      const expectedKeyForOStartFirst = null;
      expect(getMatchCase(oStartFirst)).toBe(expectedKeyForOStartFirst);
      expect(oStartFirstSolver.getMatchCase()).toBe(expectedKeyForOStartFirst);
    }
  });
});
