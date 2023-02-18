import fs from "fs";
import { parse } from "csv-parse";
import { SolverData } from "./typing";

const filePath = "data/simulation-times-result.csv";
const csvData = fs.readFileSync(filePath, "utf8");

export async function solverDataFromCsv(): Promise<SolverData[]> {
  return new Promise((resolve, reject) => {
    const records: SolverData[] = [];
    const parser = parse({ delimiter: "," });
    parser.on("readable", function () {
      let record;
      while ((record = parser.read()) !== null) {
        records.push(record);
      }
    });
    parser.on("error", function (err) {
      console.error(err.message);
      reject(err);
    });
    parser.on("end", function () {
      const recordsWithoutHeader = records.slice(1);
      const solverData: SolverData[] = recordsWithoutHeader.map((record) => ({
        loseScore: Number(record[0]),
        drawScore: Number(record[1]),
        winScore: Number(record[2]),
        simulationTimes: Number(record[3]),
      }));
      resolve(solverData);
    });
    parser.write(csvData);
    parser.end();
  });
}
