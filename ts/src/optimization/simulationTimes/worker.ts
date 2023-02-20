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
  console.log(`${start} start ${simulationCase}`);

  const result = requiredSimulationTimes(simulationCase, sampleSize, simulationTimes, precision, logResult);

  const end = new Date();
  console.log(`${end} finish ${simulationCase} (total time ${end.getTime() - start.getTime()}ms)`);
  return result;
}
