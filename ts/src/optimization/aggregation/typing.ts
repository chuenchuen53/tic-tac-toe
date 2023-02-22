import { DbRow } from "../simulationResult/typing";

export interface ResultMap {
  [key: string]: DbRow[];
}
