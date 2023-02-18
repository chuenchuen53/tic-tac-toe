import { botResultPercent } from "./botResultPercent";
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
  const result = botResultPercent({ loseScore, drawScore, winScore, simulationTimes }, SAMPLE_SIZE);
  const resultRow: ResultRow = {
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
    overall_lose: result.overall.lose,
    overall_draw: result.overall.draw,
    overall_win: result.overall.win,
  };
  if (log) {
    console.log("resultRow", resultRow);
  }

  return resultRow;
}
