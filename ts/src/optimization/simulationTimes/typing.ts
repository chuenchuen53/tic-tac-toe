import { SimulationResult } from "../../typing";
import { SimulationCase } from "../constant";

export interface WorkerData {
  simulationCase: SimulationCase;
  sampleSize: number;
  simulationTimes: number;
  precision: number;
  logResult: boolean;
}

export interface WorkerResult {
  simulationCase: SimulationCase;
  sampleSize: number;
  simulationTimes: number;
  precision: number;
  allResult: SimulationResult[];
  requiredSimulations: number;
}

export type CsvData = Omit<WorkerResult, "allResult">[];

export interface DbRow extends WorkerResult {
  createdAt: Date;
}
