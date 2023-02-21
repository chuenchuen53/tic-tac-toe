import ticTacToeDb from ".";

ticTacToeDb.connectToDatabase().then(() => {
  ticTacToeDb.collections.testCollection.deleteMany({}).then(() => {
    console.log("testCollection deleted");
    ticTacToeDb.client.close();
  });
});
