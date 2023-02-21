import TicTacToeSolver from "../../TicTacToeSolver";
import { getTicTacToe } from "../boardConfiguration";
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
  console.log(`${start} start ${simulationCase} setNumber ${setNumber}`);

  const ticTacToe = getTicTacToe(simulationCase);
  const solver = new TicTacToeSolver(dummyScores.lose, dummyScores.draw, dummyScores.win, simulationTimes, ticTacToe);

  const result = solver.getSimulationResult();

  const end = new Date();

  if (logResult) {
    console.log(result);
  }

  console.log(
    `${end} finish ${simulationCase} setNumber ${setNumber} (total time ${end.getTime() - start.getTime()}ms)`
  );

  return {
    simulationCase,
    simulationTimes,
    setNumber,
    result,
  };
}
