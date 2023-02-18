import TicTacToe from "./TicTacToe";
import { TicTacToeElement, GameStatus } from "./typing";

export default class TicTacToeSolver {
  private readonly loseScore: number;
  private readonly drawScore: number;
  private readonly winScore: number;
  private readonly simulationTimes: number;
  private readonly ticTacToe: TicTacToe;

  constructor(loseScore: number, drawScore: number, winScore: number, simulationTimes: number, ticTacToe: TicTacToe) {
    this.loseScore = loseScore;
    this.drawScore = drawScore;
    this.winScore = winScore;
    this.simulationTimes = simulationTimes;
    this.ticTacToe = ticTacToe;
  }

  static getAvailableMoves(board: (TicTacToeElement | null)[][]): number[][] {
    const moves: number[][] = [];

    for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
      for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
        if (board[row][col] === null) {
          moves.push([row, col]);
        }
      }
    }

    return moves;
  }

  public getBestMove(): number[] {
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
    const scores: (number | null)[][] = [];
    const board = this.ticTacToe.getBoard();

    for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
      scores[row] = [];
      for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
        if (board[row][col] !== null) {
          scores[row][col] = null;
        } else {
          let score = 0;
          for (let i = 0; i < this.simulationTimes; i++) {
            score += this.simulateGame(row, col);
          }
          scores[row][col] = score;
        }
      }
    }

    return scores;
  }

  private simulateGame(row: number, col: number): number {
    const player = this.ticTacToe.getTurn();
    const simulatedGame = TicTacToe.clone(this.ticTacToe);
    simulatedGame.input(row, col);

    while (simulatedGame.getGameStatus() === GameStatus.IN_PROGRESS) {
      const availableMoves = TicTacToeSolver.getAvailableMoves(simulatedGame.getBoard());
      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      simulatedGame.input(randomMove[0], randomMove[1]);
    }

    const gameStatus = simulatedGame.getGameStatus();
    const winner =
      gameStatus === GameStatus.X_WINS
        ? TicTacToeElement.X
        : gameStatus === GameStatus.O_WINS
        ? TicTacToeElement.O
        : null;
    if (winner === player) {
      return this.winScore;
    } else if (winner !== null) {
      return this.loseScore;
    } else {
      return this.drawScore;
    }
  }
}
