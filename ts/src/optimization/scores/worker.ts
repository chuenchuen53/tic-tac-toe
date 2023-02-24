import DateTimeUtil from "../DateTimeUtil";
import { botResult } from "./botResult";
import type { WorkerResult, WorkerData } from "./typing";

export default function getBotResult({
  loseScore,
  drawScore,
  winScore,
  simulationTimes,
  sampleSize,
  logResult,
}: WorkerData): WorkerResult {
  const start = new Date();
  const startStr = DateTimeUtil.formatDate(start);
  console.log(
    `start ${startStr} scores ${loseScore},${drawScore},${winScore} simulationTimes ${simulationTimes} sampleSize ${sampleSize}`
  );

  const result = botResult({ loseScore, drawScore, winScore, simulationTimes, sampleSize, logResult });
  const resultRow: WorkerResult = {
    loseScore,
    drawScore,
    winScore,
    simulationTimes,
    sampleSize,
    startFirst_lose: result.startFirst_lose,
    startFirst_draw: result.startFirst_draw,
    startFirst_win: result.startFirst_win,
    startSecond_lose: result.startSecond_lose,
    startSecond_draw: result.startSecond_draw,
    startSecond_win: result.startSecond_win,
  };

  if (logResult) {
    console.log(JSON.stringify(resultRow));
  }

  const end = new Date();
  const endStr = DateTimeUtil.formatDate(end);
  const timeSpent = DateTimeUtil.formatDurationToSec(start, end);
  console.log(
    `finish ${endStr} scores ${loseScore},${drawScore},${winScore} simulationTimes ${simulationTimes} sampleSize ${sampleSize} timeSpent ${timeSpent}`
  );

  return resultRow;
}
