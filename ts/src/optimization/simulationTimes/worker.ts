import requiredSimulationTimes from "./requiredSimulationTimes";
import CalcUtil from "../../util/CalcUtil";

interface WorkerData {
  loseScore: number;
  drawScore: number;
  winScore: number;
  log?: boolean;
}

const trails = [
  { simulationTimes: 1000, sampleSize: 50 },
  { simulationTimes: 1500, sampleSize: 50 },
  { simulationTimes: 2000, sampleSize: 50 },
  // { simulationTimes: 1000, sampleSize: 500 },
  // { simulationTimes: 1500, sampleSize: 500 },
  // { simulationTimes: 2000, sampleSize: 500 },
];
const finalSampleSize = 100;

export default function getRequiredSimulationTimes({ loseScore, drawScore, winScore, log }: WorkerData) {
  console.log("run", loseScore, drawScore, winScore);
  const resultArr = trails.map(({ simulationTimes, sampleSize }) =>
    requiredSimulationTimes(loseScore, drawScore, winScore, simulationTimes, sampleSize, log)
  );
  const avgResult = resultArr.reduce((acc, cur) => acc + cur, 0) / resultArr.length;

  if (log) {
    console.log("resultArr", resultArr);
    console.log("avgResult", avgResult);
  }

  const finalResult = requiredSimulationTimes(
    loseScore,
    drawScore,
    winScore,
    Math.min(1000, avgResult),
    finalSampleSize,
    log
  );
  // const finalResult = requiredSimulationTimes(loseScore, drawScore, winScore, avgResult, finalSampleSize, log);
  const finalSimulationTimes = CalcUtil.roundUpToHundred(finalResult);

  if (log) {
    console.log("finalResult", finalResult);
    console.log("rounded result", finalSimulationTimes);
  }

  return finalSimulationTimes;
}
