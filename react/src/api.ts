import { Board, GameStatus, TicTacToeElement } from "./typing/TicTacToe";

const PREFIX = "http://localhost:8080/api/";

export interface GetGameResponse {
  board: Board;
  turn: TicTacToeElement;
  gameStatus: GameStatus;
}

export class Api {
  static async getGame(): Promise<GetGameResponse | null> {
    try {
      const res = await fetch(PREFIX + "board");
      return await res.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async input(rowIndex: number, columnIndex: number): Promise<GetGameResponse | null> {
    try {
      const res = await fetch(PREFIX + "input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rowIndex,
          columnIndex,
        }),
      });
      return await res.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async resetGame(): Promise<GetGameResponse | null> {
    try {
      const res = await fetch(PREFIX + "reset", {
        method: "DELETE",
      });
      return await res.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
