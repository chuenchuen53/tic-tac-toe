import ticTacToeDb from ".";
import { envVariables } from "../envVariables";

if (envVariables.ENV === "prod") throw new Error("This script is only for development.");

ticTacToeDb.connectToDatabase().then(async () => {
  const promises = [
    ticTacToeDb.collections.scores.deleteMany({}),
    ticTacToeDb.collections.simulationTimes.deleteMany({}),
    ticTacToeDb.collections.simulationResult.deleteMany({}),
  ];
  await Promise.all(promises);
  console.log("all collections in db are cleared");
  ticTacToeDb.client.close();
});
