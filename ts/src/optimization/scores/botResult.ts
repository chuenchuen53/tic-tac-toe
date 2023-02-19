import TicTacToe from "../../TicTacToe";
import TicTacToeSolver from "../../TicTacToeSolver";
import { TicTacToeElement, GameStatus } from "../../typing";
import { BotResult, BotResultCount, BotResultData, SolverData } from "./typing";

const BOT = TicTacToeElement.X;
const BOT_WINS = GameStatus.X_WINS;
const OPPONENT = TicTacToeElement.O;
const OPPONENT_WINS = GameStatus.O_WINS;

export function botResult(solverData: SolverData, sampleSize: number): BotResultData {
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

  const startFirst = {
    win: botStartFirst.win,
    lose: botStartFirst.lose,
    draw: botStartFirst.draw,
  };

  const startSecond = {
    win: botStartSecond.win,
    lose: botStartSecond.lose,
    draw: botStartSecond.draw,
  };

  return {
    sampleSize,
    startFirst,
    startSecond,
  };
}

function resultWithBotStartFirst(solver: TicTacToeSolver): BotResult {
  const ticTacToe = solver.getTicTacToe();
  let gameStatus = ticTacToe.getGameStatus();
  while (gameStatus === GameStatus.IN_PROGRESS) {
    const [row, col] = solver.getBestMove();
    ticTacToe.input(row, col);
    gameStatus = ticTacToe.getGameStatus();

    if (gameStatus === GameStatus.IN_PROGRESS) {
      const randomMove = solver.getRandomMove();
      ticTacToe.input(randomMove[0], randomMove[1]);
      gameStatus = ticTacToe.getGameStatus();
    }
  }

  return getBotResultFromGameStatus(gameStatus);
}

function resultWithBotStartSecond(solver: TicTacToeSolver): BotResult {
  const ticTacToe = solver.getTicTacToe();
  let gameStatus = ticTacToe.getGameStatus();
  while (gameStatus === GameStatus.IN_PROGRESS) {
    const randomMove = solver.getRandomMove();
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
