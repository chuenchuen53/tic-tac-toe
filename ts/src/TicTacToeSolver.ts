import { getMatchCase } from "./optimization/boardConfiguration";
import { SimulationCase } from "./optimization/constant";
import PresetSimulationResult from "./optimization/PresetSimulationResult";
import TicTacToe from "./TicTacToe";
import { GameStatus, GameResult, SimulationResult, GameResultCount } from "./typing";

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
    }

    const scores: (number | null)[][] = this.calculateScores();
    let maxScore = -Infinity;
    let bestMove: number[] = [];

    for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
      for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
        const score = scores[row][col];
        if (score === null) continue;
        if (score > maxScore) {
          bestMove = [row, col];
          maxScore = score;
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

    for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
      for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
        if (board[row][col] === null) {
          const gameResultCount: GameResultCount = {
            lose: 0,
            draw: 0,
            win: 0,
          };
          for (let i = 0; i < this.simulationTimes; i++) {
            const gameResult = this.simulateGame(row, col);
            gameResultCount[gameResult]++;
          }
          result[row][col] = gameResultCount;
        }
      }
    }

    return result;
  }

  public updateMatchCase(): void {
    if (this.ticTacToe.getFilled() < 4) {
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
