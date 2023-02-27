import * as mongoDB from "mongodb";
import { envVariables } from "../envVariables";

class TicTacToeDb {
  static readonly DB_CONN_STRING = envVariables.DB_CONN_STRING;
  static readonly DB_NAME = envVariables.ENV === "prod" ? envVariables.DB_NAME : envVariables.DB_NAME_FOR_DEV;
  private static instance: TicTacToeDb;
  private client: mongoDB.MongoClient;
  private db: mongoDB.Db;
  public scores: mongoDB.Collection;
  public simulationTimes: mongoDB.Collection;
  public simulationResult: mongoDB.Collection;

  public static getInstance(): TicTacToeDb {
    if (!TicTacToeDb.instance) {
      TicTacToeDb.instance = new TicTacToeDb();
    }
    return TicTacToeDb.instance;
  }

  // prevent instantiation of the class from outside.
  private constructor() {}

  async connect() {
    this.client = new mongoDB.MongoClient(TicTacToeDb.DB_CONN_STRING);
    await this.client.connect();
    this.db = this.client.db(TicTacToeDb.DB_NAME);
    this.scores = this.db.collection("scores");
    this.simulationTimes = this.db.collection("simulationTimes");
    this.simulationResult = this.db.collection("simulationResult");
    console.log(`Successfully connected to database: ${this.db.databaseName}`);
  }

  async close() {
    await this.client.close();
  }
}

const ticTacToeDb = TicTacToeDb.getInstance();
export default ticTacToeDb;
