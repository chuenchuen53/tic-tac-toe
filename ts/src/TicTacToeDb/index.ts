import dotenv from "dotenv";
import * as mongoDB from "mongodb";

dotenv.config();
const DB_CONN_STRING = process.env.DB_CONN_STRING;
const DB_NAME = process.env.DB_NAME;
if (!DB_CONN_STRING) throw new Error("DB_CONN_STRING is not set in env");
if (!DB_NAME) throw new Error("DB_NAME is not set in env");

interface MyCollections {
  testCollection: mongoDB.Collection;
  scores: mongoDB.Collection;
  simulationTimes: mongoDB.Collection;
}

class TicTacToeDb {
  static readonly DB_CONN_STRING = DB_CONN_STRING!;
  static readonly DB_NAME = DB_NAME!;
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
      testCollection: this.db.collection("testCollection"),
      scores: this.db.collection("scores"),
      simulationTimes: this.db.collection("simulationTimes"),
    };

    console.log(`Successfully connected to database: ${this.db.databaseName}`);
  }
}

const ticTacToeDb = TicTacToeDb.getInstance();
export default ticTacToeDb;
