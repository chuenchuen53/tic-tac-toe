export interface WorkerData {
  loseScore: number;
  drawScore: number;
  winScore: number;
  simulationTimes: number;
  sampleSize: number;
  logResult: boolean;
}

export interface FlattenBotResult {
  startFirst_lose: number;
  startFirst_draw: number;
  startFirst_win: number;
  startSecond_lose: number;
  startSecond_draw: number;
  startSecond_win: number;
}

export interface WorkerResult extends FlattenBotResult {
  loseScore: number;
  drawScore: number;
  winScore: number;
  simulationTimes: number;
  sampleSize: number;
}

export interface DbRow extends WorkerResult {
  createdAt: Date;
}
