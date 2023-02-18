import requiredSimulationTimes from "./requiredSimulationTimes";
import CalcUtil from "../../util/CalcUtil";

interface WorkerData {
  loseScore: number;
  drawScore: number;
  winScore: number;
  log?: boolean;
}

const trails = [
  { simulationTimes: 1000, sampleSize: 250 },
  { simulationTimes: 1500, sampleSize: 200 },
];

export default function getRequiredSimulationTimes({ loseScore, drawScore, winScore, log }: WorkerData) {
  console.log("run", loseScore, drawScore, winScore);
  const resultArr = trails.map(({ simulationTimes, sampleSize }) =>
    requiredSimulationTimes(loseScore, drawScore, winScore, simulationTimes, sampleSize, log)
  );
  const avgResult = resultArr.reduce((acc, cur) => acc + cur, 0) / resultArr.length;
  const roundedAvgResult = CalcUtil.roundUpToHundred(avgResult);

  if (log) {
    console.log("resultArr", resultArr);
    console.log("avgResult", avgResult);
    console.log("rounded result", roundedAvgResult);
  }

  return roundedAvgResult;
}
