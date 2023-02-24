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

function getThreeMoveKey(row1: number, col1: number, row2: number, col2: number, row3: number, col3: number): string {
  const i1 = to1DIndex(row1, col1);
  const i3 = to1DIndex(row3, col3);

  if (i1 > i3) {
    return `fill_x${i3}_o${to1DIndex(row2, col2)}_x${i1}`;
  } else {
    return `fill_x${i1}_o${to1DIndex(row2, col2)}_x${i3}`;
  }
}

function getFourMoveKey(
  row1: number,
  col1: number,
  row2: number,
  col2: number,
  row3: number,
  col3: number,
  row4: number,
  col4: number
): string {
  const i1 = to1DIndex(row1, col1);
  const i2 = to1DIndex(row2, col2);
  const i3 = to1DIndex(row3, col3);
  const i4 = to1DIndex(row4, col4);

  const [newI1, newI3] = i1 > i3 ? [i3, i1] : [i1, i3];
  const [newI2, newI4] = i2 > i4 ? [i4, i2] : [i2, i4];

  return `fill_x${newI1}_o${newI2}_x${newI3}_o${newI4}`;
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

  it(`input 3 case`, () => {
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
      const xStartFirstMove3 = xStartFirstSolver.getRandomMove();
      xStartFirst.input(xStartFirstMove3[0], xStartFirstMove3[1]);
      xStartFirstSolver.updateMatchCase();

      const expectedKeyForXStartFirst = getThreeMoveKey(
        xStartFirstMove[0],
        xStartFirstMove[1],
        xStartFirstMove2[0],
        xStartFirstMove2[1],
        xStartFirstMove3[0],
        xStartFirstMove3[1]
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
      const oStartFirstMove3 = oStartFirstSolver.getRandomMove();
      oStartFirst.input(oStartFirstMove3[0], oStartFirstMove3[1]);
      oStartFirstSolver.updateMatchCase();

      const expectedKeyForOStartFirst = getThreeMoveKey(
        oStartFirstMove[0],
        oStartFirstMove[1],
        oStartFirstMove2[0],
        oStartFirstMove2[1],
        oStartFirstMove3[0],
        oStartFirstMove3[1]
      );
      expect(getMatchCase(oStartFirst)).toBe(expectedKeyForOStartFirst);
      expect(oStartFirstSolver.getMatchCase()).toBe(expectedKeyForOStartFirst);
    }
  });

  it(`input 4 case`, () => {
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
      const xStartFirstMove3 = xStartFirstSolver.getRandomMove();
      xStartFirst.input(xStartFirstMove3[0], xStartFirstMove3[1]);
      const xStartFirstMove4 = xStartFirstSolver.getRandomMove();
      xStartFirst.input(xStartFirstMove4[0], xStartFirstMove4[1]);
      xStartFirstSolver.updateMatchCase();

      const expectedKeyForXStartFirst = getFourMoveKey(
        xStartFirstMove[0],
        xStartFirstMove[1],
        xStartFirstMove2[0],
        xStartFirstMove2[1],
        xStartFirstMove3[0],
        xStartFirstMove3[1],
        xStartFirstMove4[0],
        xStartFirstMove4[1]
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
      const oStartFirstMove3 = oStartFirstSolver.getRandomMove();
      oStartFirst.input(oStartFirstMove3[0], oStartFirstMove3[1]);
      const oStartFirstMove4 = oStartFirstSolver.getRandomMove();
      oStartFirst.input(oStartFirstMove4[0], oStartFirstMove4[1]);
      oStartFirstSolver.updateMatchCase();

      const expectedKeyForOStartFirst = getFourMoveKey(
        oStartFirstMove[0],
        oStartFirstMove[1],
        oStartFirstMove2[0],
        oStartFirstMove2[1],
        oStartFirstMove3[0],
        oStartFirstMove3[1],
        oStartFirstMove4[0],
        oStartFirstMove4[1]
      );
      expect(getMatchCase(oStartFirst)).toBe(expectedKeyForOStartFirst);
      expect(oStartFirstSolver.getMatchCase()).toBe(expectedKeyForOStartFirst);
    }
  });

  it(`input more than 4 case`, () => {
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
        }
      }

      oStartFirstSolver.updateMatchCase();
      const expectedKeyForOStartFirst = null;
      expect(getMatchCase(oStartFirst)).toBe(expectedKeyForOStartFirst);
      expect(oStartFirstSolver.getMatchCase()).toBe(expectedKeyForOStartFirst);
    }
  });
});
