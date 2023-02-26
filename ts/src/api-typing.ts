import { GameStatus, TicTacToeElement } from "./typing";

export interface GetGameResponse {
  board: (TicTacToeElement | null)[][];
  turn: TicTacToeElement;
  gameStatus: GameStatus;
  scores: (number | null)[][] | null;
  bestMove: number[] | null;
}

export interface InputRequest {
  rowIndex: number;
  columnIndex: number;
}
