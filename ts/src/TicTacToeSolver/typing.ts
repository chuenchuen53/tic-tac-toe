export type GameResult = "lose" | "draw" | "win";

export type GameResultCount = Record<GameResult, number>;

export type SimulationResult = (GameResultCount | null)[][];
