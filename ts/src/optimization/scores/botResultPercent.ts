import TicTacToe from "../../TicTacToe";
import TicTacToeSolver from "../../TicTacToeSolver";
import { TicTacToeElement, GameStatus } from "../../typing";
import { BotResult, BotResultCount, BotResultPercent, SolverData } from "./typing";

const BOT = TicTacToeElement.X;
const BOT_WINS = GameStatus.X_WINS;
const OPPONENT = TicTacToeElement.O;
const OPPONENT_WINS = GameStatus.O_WINS;

export function botResultPercent(solverData: SolverData, sampleSize: number): BotResultPercent {
  const { loseScore, drawScore, winScore, simulationTimes } = solverData;
  let botStartFirst: BotResultCount = {
    win: 0,
    lose: 0,
    draw: 0,
  };
  let botStartSecond: BotResultCount = {
    win: 0,
    lose: 0,
    draw: 0,
  };

  for (let i = 0; i < sampleSize; i++) {
    const result = resultWithBotStartFirst(loseScore, drawScore, winScore, simulationTimes);
    botStartFirst[result]++;
  }
  for (let i = 0; i < sampleSize; i++) {
    const result = resultWithBotStartSecond(loseScore, drawScore, winScore, simulationTimes);
    botStartSecond[result]++;
  }

  const startFirst = {
    win: botStartFirst.win / sampleSize,
    lose: botStartFirst.lose / sampleSize,
    draw: botStartFirst.draw / sampleSize,
  };

  const startSecond = {
    win: botStartSecond.win / sampleSize,
    lose: botStartSecond.lose / sampleSize,
    draw: botStartSecond.draw / sampleSize,
  };

  const overall = {
    win: (botStartFirst.win + botStartSecond.win) / (sampleSize * 2),
    lose: (botStartFirst.lose + botStartSecond.lose) / (sampleSize * 2),
    draw: (botStartFirst.draw + botStartSecond.draw) / (sampleSize * 2),
  };

  return {
    startFirst,
    startSecond,
    overall,
  };
}

function resultWithBotStartFirst(
  loseScore: number,
  drawScore: number,
  winScore: number,
  simulationTimes: number
): BotResult {
  const ticTacToe = new TicTacToe(BOT);
  const solver = new TicTacToeSolver(loseScore, drawScore, winScore, simulationTimes, ticTacToe);
  let gameStatus = ticTacToe.getGameStatus();
  while (gameStatus === GameStatus.IN_PROGRESS) {
    const [row, col] = solver.getBestMove();
    ticTacToe.input(row, col);
    gameStatus = ticTacToe.getGameStatus();

    if (gameStatus === GameStatus.IN_PROGRESS) {
      const availableMoves = TicTacToeSolver.getAvailableMoves(ticTacToe.getBoard());
      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      ticTacToe.input(randomMove[0], randomMove[1]);
      gameStatus = ticTacToe.getGameStatus();
    }
  }

  return getBotResultFromGameStatus(gameStatus);
}

function resultWithBotStartSecond(
  loseScore: number,
  drawScore: number,
  winScore: number,
  simulationTimes: number
): BotResult {
  const ticTacToe = new TicTacToe(OPPONENT);
  const solver = new TicTacToeSolver(loseScore, drawScore, winScore, simulationTimes, ticTacToe);
  let gameStatus = ticTacToe.getGameStatus();
  while (gameStatus === GameStatus.IN_PROGRESS) {
    const availableMoves = TicTacToeSolver.getAvailableMoves(ticTacToe.getBoard());
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    ticTacToe.input(randomMove[0], randomMove[1]);
    gameStatus = ticTacToe.getGameStatus();

    if (gameStatus === GameStatus.IN_PROGRESS) {
      const [row, col] = solver.getBestMove();
      ticTacToe.input(row, col);
      gameStatus = ticTacToe.getGameStatus();
    }
  }

  return getBotResultFromGameStatus(gameStatus);
}

function getBotResultFromGameStatus(gameStatus: GameStatus.X_WINS | GameStatus.O_WINS | GameStatus.DRAW): BotResult {
  if (gameStatus === BOT_WINS) {
    return "win";
  } else if (gameStatus === OPPONENT_WINS) {
    return "lose";
  } else {
    return "draw";
  }
}
