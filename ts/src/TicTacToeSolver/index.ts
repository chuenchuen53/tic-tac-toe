import { getMatchCase } from "../optimization/boardConfiguration";
import { SimulationCase } from "../optimization/constant";
import PresetSimulationResult from "../optimization/PresetSimulationResult";
import TicTacToe from "../TicTacToe";
import { GameStatus } from "../TicTacToe/typing";
import gameResultCountFactory from "./gameResultCountFactory";
import { GameResult, SimulationResult } from "./typing";

export default class TicTacToeSolver {
  private readonly loseScore: number;
  private readonly drawScore: number;
  private readonly winScore: number;
  private readonly simulationTimes: number;
  private readonly ticTacToe: TicTacToe;
  private matchCase: SimulationCase | null;

  constructor(loseScore: number, drawScore: number, winScore: number, simulationTimes: number, ticTacToe: TicTacToe) {
    this.loseScore = loseScore;
    this.drawScore = drawScore;
    this.winScore = winScore;
    this.simulationTimes = simulationTimes;
    this.ticTacToe = ticTacToe;
    this.matchCase = null;
    this.updateMatchCase();
  }

  public getTicTacToe(): TicTacToe {
    return this.ticTacToe;
  }

  public getMatchCase(): SimulationCase | null {
    return this.matchCase;
  }

  public getRandomMove(): number[] {
    if (this.ticTacToe.getFilled() === 9) {
      throw new Error("should not call getRandomMove when the board is full");
    }
    const availableMoves = this.ticTacToe.getAvailableMoves();
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }

  public getBestMove(): number[] {
    if (this.ticTacToe.getFilled() === 9) {
      throw new Error("should not call getBestMove when the board is full");
    } else if (this.ticTacToe.getFilled() === 8) {
      return this.ticTacToe.getAvailableMoves()[0];
    }

    const scores: (number | null)[][] = this.calculateScores();
    let maxScore = -Infinity;
    let bestMove: number[] = [];

    for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
      for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
        const score = scores[row][col];
        if (score === null) continue;
        if (score > maxScore) {
          maxScore = score;
          bestMove = [row, col];
        } else if (score === maxScore && Math.random() > 0.5) {
          bestMove = [row, col];
        }
      }
    }

    return bestMove;
  }

  public calculateScores(): (number | null)[][] {
    const scores: (number | null)[][] = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    this.updateMatchCase();
    const simulationResult = this.matchCase
      ? PresetSimulationResult.getPresetResult(this.matchCase)
      : this.getSimulationResult();

    for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
      for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
        const gameResultCount = simulationResult[row][col];
        if (gameResultCount === null) continue;
        scores[row][col] =
          gameResultCount.lose * this.loseScore +
          gameResultCount.draw * this.drawScore +
          gameResultCount.win * this.winScore;
      }
    }

    return scores;
  }

  public getSimulationResult(): SimulationResult {
    const result: SimulationResult = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const board = this.ticTacToe.getBoard();

    if (this.ticTacToe.getFilled() === 8) {
      const gameResultCount = gameResultCountFactory();
      const lastMove = this.ticTacToe.getAvailableMoves()[0];
      const row = lastMove[0];
      const col = lastMove[1];
      const gameResult = this.simulateGame(row, col);
      gameResultCount[gameResult]++;
      result[row][col] = gameResultCount;
    } else if (this.ticTacToe.getFilled() === 7) {
      const availableMoves = this.ticTacToe.getAvailableMoves();
      const emptyPosition0 = availableMoves[0];
      const emptyPosition1 = availableMoves[1];
      const row0 = emptyPosition0[0];
      const col0 = emptyPosition0[1];
      const row1 = emptyPosition1[0];
      const col1 = emptyPosition1[1];

      const gameResultCount0 = gameResultCountFactory();
      const gameResult0 = this.simulateGame(row0, col0);
      gameResultCount0[gameResult0] = gameResultCount0[gameResult0] + this.simulationTimes;
      result[row0][col0] = gameResultCount0;

      const gameResultCount1 = gameResultCountFactory();
      const gameResult1 = this.simulateGame(row1, col1);
      gameResultCount1[gameResult1] = gameResultCount1[gameResult1] + this.simulationTimes;
      result[row1][col1] = gameResultCount1;
    } else {
      for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
        for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
          if (board[row][col] === null) {
            const gameResultCount = gameResultCountFactory();
            for (let i = 0; i < this.simulationTimes; i++) {
              const gameResult = this.simulateGame(row, col);
              gameResultCount[gameResult]++;
            }
            result[row][col] = gameResultCount;
          }
        }
      }
    }

    return result;
  }

  public updateMatchCase(): void {
    if (this.ticTacToe.getFilled() < 5) {
      this.matchCase = getMatchCase(this.ticTacToe);
    } else if (this.matchCase) {
      this.matchCase = null;
    }
  }

  private simulateGame(row: number, col: number): GameResult {
    const player = this.ticTacToe.getTurn();
    const simulatedGame = TicTacToe.clone(this.ticTacToe);
    simulatedGame.input(row, col);

    while (simulatedGame.getGameStatus() === GameStatus.IN_PROGRESS) {
      const availableMoves = simulatedGame.getAvailableMoves();
      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      simulatedGame.input(randomMove[0], randomMove[1]);
    }

    const gameStatus = simulatedGame.getGameStatus();
    const winner = TicTacToe.winnerFromGameStatus(gameStatus);

    if (winner === null) {
      return "draw";
    } else if (winner === player) {
      return "win";
    } else {
      return "lose";
    }
  }
}
