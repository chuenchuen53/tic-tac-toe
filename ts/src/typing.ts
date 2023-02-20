export enum TicTacToeElement {
  X = "X",
  O = "O",
}

export enum GameStatus {
  IN_PROGRESS = "IN_PROGRESS",
  X_WINS = "X_WINS",
  O_WINS = "O_WINS",
  DRAW = "DRAW",
}

export type GameResult = "lose" | "draw" | "win";

export type GameResultCount = Record<GameResult, number>;

export type SimulationResult = (GameResultCount | null)[][];
