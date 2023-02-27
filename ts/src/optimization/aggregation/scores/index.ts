import fs from "fs";
import tictacToeDb from "../../../TicTacToeDb";
import { DbRow } from "../../scores/typing";
import { AggregatedRow } from "./typing";

const LOSE_THRESHOLD = 0.005;
const ALL_FILE_PATH = "temp-result/aggregated-scores-result.csv";
const QUALIFIED_FILE_PATH = "temp-result/qualified-scores-result.csv";

async function main() {
  await tictacToeDb.connect();
  const allRows: DbRow[] = (await tictacToeDb.scores.find().toArray()) as any;
  tictacToeDb.close();

  console.log("allRows.length", allRows.length);

  const aggregatedRows: AggregatedRow[] = [];
  for (const row of allRows) {
    let aggregatedRow = aggregatedRows.find(
      (r) => r.loseScore === row.loseScore && r.drawScore === row.drawScore && r.winScore === row.winScore
    );
    if (!aggregatedRow) {
      aggregatedRow = {
        loseScore: row.loseScore,
        drawScore: row.drawScore,
        winScore: row.winScore,
        sampleSize: 0,
        startFirst_lose: 0,
        startFirst_draw: 0,
        startFirst_win: 0,
        startSecond_lose: 0,
        startSecond_draw: 0,
        startSecond_win: 0,
      };
      aggregatedRows.push(aggregatedRow);
    }
    aggregatedRow.sampleSize += row.sampleSize;
    aggregatedRow.startFirst_lose += row.startFirst_lose;
    aggregatedRow.startFirst_draw += row.startFirst_draw;
    aggregatedRow.startFirst_win += row.startFirst_win;
    aggregatedRow.startSecond_lose += row.startSecond_lose;
    aggregatedRow.startSecond_draw += row.startSecond_draw;
    aggregatedRow.startSecond_win += row.startSecond_win;
  }

  fs.writeFileSync(ALL_FILE_PATH, aggregatedRowToCsv(aggregatedRows));
  console.log(`File written to ${ALL_FILE_PATH}`);

  const filteredRows = aggregatedRows.filter(
    (r) => r.startFirst_lose / r.sampleSize < LOSE_THRESHOLD && r.startSecond_lose / r.sampleSize < LOSE_THRESHOLD
  );
  fs.writeFileSync(QUALIFIED_FILE_PATH, aggregatedRowToCsv(filteredRows));
  console.log(`File written to ${QUALIFIED_FILE_PATH}`);
}

function aggregatedRowToCsv(aggregatedRows: AggregatedRow[]) {
  const header =
    "loseScore,drawScore,winScore,sampleSize,startFirst_lose,startFirst_draw,startFirst_win,startSecond_lose,startSecond_draw,startSecond_win";
  const rows = aggregatedRows.map(
    (r) =>
      `${r.loseScore},${r.drawScore},${r.winScore},${r.sampleSize},${r.startFirst_lose},${r.startFirst_draw},${r.startFirst_win},${r.startSecond_lose},${r.startSecond_draw},${r.startSecond_win}`
  );
  return [header, ...rows].join("\n");
}

main();
