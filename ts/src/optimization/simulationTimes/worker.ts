import DateTimeUtil from "../DateTimeUtil";
import requiredSimulationTimes from "./requiredSimulationTimes";
import type { WorkerData, WorkerResult } from "./typing";

export default function getRequiredSimulationTimes({
  simulationCase,
  sampleSize,
  simulationTimes,
  precision,
  logResult,
}: WorkerData): WorkerResult {
  const start = new Date();
  const startStr = DateTimeUtil.formatDate(start);
  console.log(
    `start ${startStr} simulationCase ${simulationCase} sampleSize ${sampleSize} simulationTimes ${simulationTimes} precision ${precision}`
  );

  const result = requiredSimulationTimes(simulationCase, sampleSize, simulationTimes, precision, logResult);

  const end = new Date();
  const endStr = DateTimeUtil.formatDate(end);
  const timeSpent = DateTimeUtil.formatDurationToSec(start, end);
  console.log(
    `finish ${endStr} simulationCase ${simulationCase} sampleSize ${sampleSize} simulationTimes ${simulationTimes} precision ${precision} timeSpent ${timeSpent}`
  );
  return result;
}
