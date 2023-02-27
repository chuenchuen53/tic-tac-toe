import TicTacToe from "../TicTacToe";
import { TicTacToeElement, GameStatus } from "../TicTacToe/typing";
import TicTacToeSolver from "../TicTacToeSolver";
import { GetGameResponse } from "./api-typing";

export function getGameData(ticTacToe: TicTacToe, ticTacToeSolver: TicTacToeSolver): GetGameResponse {
  const gameStatus = ticTacToe.getGameStatus();

  return {
    board: ticTacToe.getBoard() as (TicTacToeElement | null)[][],
    turn: ticTacToe.getTurn(),
    gameStatus,
    scores: gameStatus === GameStatus.IN_PROGRESS ? ticTacToeSolver.calculateScores() : null,
    bestMove: gameStatus === GameStatus.IN_PROGRESS ? ticTacToeSolver.getBestMove() : null,
  };
}
