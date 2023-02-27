import { envVariables } from "../envVariables";
import ticTacToeDb from ".";

if (envVariables.ENV === "prod") throw new Error("This script is only for development.");

ticTacToeDb.connect().then(async () => {
  const promises = [
    ticTacToeDb.scores.deleteMany({}),
    ticTacToeDb.simulationTimes.deleteMany({}),
    ticTacToeDb.simulationResult.deleteMany({}),
  ];
  await Promise.all(promises);
  console.log("all collections in db are cleared");
  ticTacToeDb.close();
});
