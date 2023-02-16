import { GameStatus, TicTacToeElement } from "./typing";

export interface GetGameResponse {
  board: (TicTacToeElement | null)[][];
  turn: TicTacToeElement;
  gameStatus: GameStatus;
}

export interface InputRequest {
  rowIndex: number;
  columnIndex: number;
}
