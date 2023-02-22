import * as mongoDB from "mongodb";
import { envVariables } from "../envVariables";

interface MyCollections {
  scores: mongoDB.Collection;
  simulationTimes: mongoDB.Collection;
  simulationResult: mongoDB.Collection;
}

class TicTacToeDb {
  static readonly DB_CONN_STRING = envVariables.DB_CONN_STRING;
  static readonly DB_NAME = envVariables.ENV === "prod" ? envVariables.DB_NAME : envVariables.DB_NAME_FOR_DEV;
  private static instance: TicTacToeDb;
  public client: mongoDB.MongoClient;
  public db: mongoDB.Db;
  public collections: MyCollections;

  public static getInstance(): TicTacToeDb {
    if (!TicTacToeDb.instance) {
      TicTacToeDb.instance = new TicTacToeDb();
    }
    return TicTacToeDb.instance;
  }

  // prevent instantiation of the class from outside.
  private constructor() {}

  async connectToDatabase() {
    this.client = new mongoDB.MongoClient(TicTacToeDb.DB_CONN_STRING);
    await this.client.connect();
    this.db = this.client.db(TicTacToeDb.DB_NAME);
    this.collections = {
      scores: this.db.collection("scores"),
      simulationTimes: this.db.collection("simulationTimes"),
      simulationResult: this.db.collection("simulationResult"),
    };

    console.log(`Successfully connected to database: ${this.db.databaseName}`);
  }
}

const ticTacToeDb = TicTacToeDb.getInstance();
export default ticTacToeDb;
