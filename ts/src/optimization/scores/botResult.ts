import TicTacToe from "../../TicTacToe";
import TicTacToeSolver from "../../TicTacToeSolver";
import { TicTacToeElement, GameStatus, GameResultCount, GameResult } from "../../typing";
import { FlattenBotResult, WorkerData } from "./typing";

const BOT = TicTacToeElement.X;
const OPPONENT = TicTacToeElement.O;

export function botResult(workerData: WorkerData): FlattenBotResult {
  const { loseScore, drawScore, winScore, simulationTimes, sampleSize } = workerData;
  let botStartFirst: GameResultCount = {
    lose: 0,
    draw: 0,
    win: 0,
  };
  let botStartSecond: GameResultCount = {
    lose: 0,
    draw: 0,
    win: 0,
  };

  const ticTacToeBotFirst = new TicTacToe(BOT);
  const solverBotFirst = new TicTacToeSolver(loseScore, drawScore, winScore, simulationTimes, ticTacToeBotFirst);
  for (let i = 0; i < sampleSize; i++) {
    const result = resultWithBotStartFirst(solverBotFirst);
    botStartFirst[result]++;
    ticTacToeBotFirst.resetBoard(BOT);
  }

  const ticTacToeBotSecond = new TicTacToe(OPPONENT);
  const solverBotSecond = new TicTacToeSolver(loseScore, drawScore, winScore, simulationTimes, ticTacToeBotSecond);
  for (let i = 0; i < sampleSize; i++) {
    const result = resultWithBotStartSecond(solverBotSecond);
    botStartSecond[result]++;
    ticTacToeBotSecond.resetBoard(OPPONENT);
  }

  const flattenBotResult: FlattenBotResult = {
    startFirst_lose: botStartFirst.lose,
    startFirst_draw: botStartFirst.draw,
    startFirst_win: botStartFirst.win,
    startSecond_lose: botStartSecond.lose,
    startSecond_draw: botStartSecond.draw,
    startSecond_win: botStartSecond.win,
  };

  return flattenBotResult;
}

function resultWithBotStartFirst(solver: TicTacToeSolver): GameResult {
  const ticTacToe = solver.getTicTacToe();
  let gameStatus = ticTacToe.getGameStatus();
  while (gameStatus === GameStatus.IN_PROGRESS) {
    const bestMove = solver.getBestMove();
    ticTacToe.input(bestMove[0], bestMove[1]);
    gameStatus = ticTacToe.getGameStatus();

    if (gameStatus === GameStatus.IN_PROGRESS) {
      const randomMove = solver.getRandomMove();
      ticTacToe.input(randomMove[0], randomMove[1]);
      gameStatus = ticTacToe.getGameStatus();
    }
  }

  return getBotResultFromGameStatus(gameStatus);
}

function resultWithBotStartSecond(solver: TicTacToeSolver): GameResult {
  const ticTacToe = solver.getTicTacToe();
  let gameStatus = ticTacToe.getGameStatus();
  while (gameStatus === GameStatus.IN_PROGRESS) {
    const randomMove = solver.getRandomMove();
    ticTacToe.input(randomMove[0], randomMove[1]);
    gameStatus = ticTacToe.getGameStatus();

    if (gameStatus === GameStatus.IN_PROGRESS) {
      const bestMove = solver.getBestMove();
      ticTacToe.input(bestMove[0], bestMove[1]);
      gameStatus = ticTacToe.getGameStatus();
    }
  }

  return getBotResultFromGameStatus(gameStatus);
}

function getBotResultFromGameStatus(gameStatus: GameStatus): GameResult {
  const winner = TicTacToe.winnerFromGameStatus(gameStatus);
  if (winner === BOT) {
    return "win";
  } else if (winner === OPPONENT) {
    return "lose";
  } else {
    return "draw";
  }
}
