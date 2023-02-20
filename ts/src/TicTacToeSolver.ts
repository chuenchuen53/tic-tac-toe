import TicTacToe from "./TicTacToe";
import { GameStatus, GameResult, SimulationResult, GameResultCount } from "./typing";

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

  public getTicTacToe(): TicTacToe {
    return this.ticTacToe;
  }

  public getRandomMove(): number[] {
    const availableMoves = this.ticTacToe.getAvailableMoves();
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
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
    const scores: (number | null)[][] = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    const simulationResult = this.getSimulationResult();
    for (let row = 0; row < TicTacToe.BOARD_SIZE; row++) {
      for (let col = 0; col < TicTacToe.BOARD_SIZE; col++) {
        const gameResultCount = simulationResult[row][col];
        if (gameResultCount === null) continue;
        scores[row][col] =
          gameResultCount.win * this.winScore +
          gameResultCount.draw * this.drawScore +
          gameResultCount.lose * this.loseScore;
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
