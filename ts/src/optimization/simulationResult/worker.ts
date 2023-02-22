import TicTacToeSolver from "../../TicTacToeSolver";
import { getTicTacToe } from "../boardConfiguration";
import DateTimeUtil from "../DateTimeUtil";
import type { WorkerData, WorkerResult } from "./typing";

const dummyScores = {
  lose: -10,
  draw: 8,
  win: 10,
};

export default function getRequiredSimulationTimes({
  simulationCase,
  simulationTimes,
  setNumber,
  logResult,
}: WorkerData): WorkerResult {
  const start = new Date();
  console.log(
    `start ${DateTimeUtil.formatDate(
      start
    )} simulationCase ${simulationCase} simulationTimes ${simulationTimes} setNumber ${setNumber}`
  );

  const ticTacToe = getTicTacToe(simulationCase);
  const solver = new TicTacToeSolver(dummyScores.lose, dummyScores.draw, dummyScores.win, simulationTimes, ticTacToe);

  const result = solver.getSimulationResult();

  if (logResult) {
    console.log(result);
  }

  const end = new Date();
  console.log(
    `finish ${DateTimeUtil.formatDate(
      end
    )} simulationCase ${simulationCase} simulationTimes ${simulationTimes} setNumber ${setNumber} timeSpent ${DateTimeUtil.formatDurationToSec(
      start,
      end
    )}`
  );

  return {
    simulationCase,
    simulationTimes,
    setNumber,
    result,
  };
}
