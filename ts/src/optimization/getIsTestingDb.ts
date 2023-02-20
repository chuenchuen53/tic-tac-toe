import dotenv from "dotenv";

dotenv.config();
const IS_TESTING_DB = process.env.IS_TESTING_DB;

export function getIsTestingDb() {
  switch (IS_TESTING_DB) {
    case "true":
      return true;
    case "false":
      return false;
    case undefined:
      throw Error("IS_TESTING_DB is not defined");
    default:
      throw Error("IS_TESTING_DB is can only be true or false");
  }
}
