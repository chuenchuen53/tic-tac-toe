export const SIMULATION_CASES = [
  "empty",
  "fill_x0",
  "fill_x1",
  "fill_x2",
  "fill_x3",
  "fill_x4",
  "fill_x5",
  "fill_x6",
  "fill_x7",
  "fill_x8",
] as const;

export type SimulationCase = typeof SIMULATION_CASES[number];
