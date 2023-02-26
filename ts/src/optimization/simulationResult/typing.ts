import { SimulationResult } from "../../TicTacToeSolver/typing";
import { SimulationCase } from "../constant";

export interface WorkerData {
  simulationCase: SimulationCase;
  simulationTimes: number;
  setNumber: number;
  logResult: boolean;
}

export interface WorkerResult {
  simulationCase: SimulationCase;
  simulationTimes: number;
  setNumber: number;
  result: SimulationResult;
}

export interface DbRow extends WorkerResult {
  createdAt: Date;
}
