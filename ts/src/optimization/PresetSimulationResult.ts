import fs from "fs";
import { SimulationResult } from "../TicTacToeSolver/typing";
import { SimulationCase } from "./constant";

export default class PresetSimulationResult {
  private static data: Record<SimulationCase, SimulationResult> = JSON.parse(
    fs.readFileSync("data/result.json", "utf8")
  );

  public static getPresetResult(simulationCase: SimulationCase): SimulationResult {
    return this.data[simulationCase];
  }
}
