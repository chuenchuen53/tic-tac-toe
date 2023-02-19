import { botResult } from "./botResult";
import type { ResultRow, WorkerData } from "./typing";

const SAMPLE_SIZE = 1000;

export default function getBotResultPercent({
  loseScore,
  drawScore,
  winScore,
  simulationTimes,
  log,
}: WorkerData): ResultRow {
  console.log("run", loseScore, drawScore, winScore);
  const result = botResult({ loseScore, drawScore, winScore, simulationTimes }, SAMPLE_SIZE);
  const resultRow: ResultRow = {
    sampleSize: SAMPLE_SIZE,
    loseScore,
    drawScore,
    winScore,
    simulationTimes,
    startFirst_lose: result.startFirst.lose,
    startFirst_draw: result.startFirst.draw,
    startFirst_win: result.startFirst.win,
    startSecond_lose: result.startSecond.lose,
    startSecond_draw: result.startSecond.draw,
    startSecond_win: result.startSecond.win,
  };
  if (log) {
    console.log("resultRow", resultRow);
  }

  return resultRow;
}
