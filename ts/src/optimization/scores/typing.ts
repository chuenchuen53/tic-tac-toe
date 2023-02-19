export interface SolverData {
  loseScore: number;
  drawScore: number;
  winScore: number;
  simulationTimes: number;
}

export interface WorkerData extends SolverData {
  log: boolean;
}

export type BotResult = "win" | "lose" | "draw";
export type BotResultCount = Record<BotResult, number>;

export interface BotResultData {
  sampleSize: number;
  startFirst: BotResultCount;
  startSecond: BotResultCount;
}

export interface FlattenBotResultPercent {
  sampleSize: number;
  startFirst_lose: number;
  startFirst_draw: number;
  startFirst_win: number;
  startSecond_lose: number;
  startSecond_draw: number;
  startSecond_win: number;
}

export type ResultRow = SolverData & FlattenBotResultPercent;
