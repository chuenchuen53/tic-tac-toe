import dotenv from "dotenv";

dotenv.config();
const ENV = process.env.NODE_ENV;
const DB_CONN_STRING = process.env.DB_CONN_STRING;
const DB_NAME = process.env.DB_NAME;
const DB_NAME_FOR_DEV = process.env.DB_NAME_FOR_DEV;

if (!ENV) throw new Error("NODE_ENV is not set in env");
if (!(ENV === "dev" || ENV === "prod")) {
  throw new Error("NODE_ENV must be either dev or prod");
}

if (!DB_CONN_STRING) throw new Error("DB_CONN_STRING is not set in env");
if (!DB_NAME) throw new Error("DB_NAME is not set in env");
if (!DB_NAME_FOR_DEV) throw new Error("DB_NAME_FOR_DEV is not set in env");

export const envVariables = Object.freeze({
  ENV,
  DB_CONN_STRING,
  DB_NAME,
  DB_NAME_FOR_DEV,
});
