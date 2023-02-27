import TicTacToe from "../TicTacToe";
import { TicTacToeElement } from "../TicTacToe/typing";
import type { SimulationCase } from "./constant";

export const boardStrMap: Record<SimulationCase, string> = {
  empty: "EEE-EEE-EEE",
  fill_x0: "XEE-EEE-EEE",
  fill_x1: "EXE-EEE-EEE",
  fill_x2: "EEX-EEE-EEE",
  fill_x3: "EEE-XEE-EEE",
  fill_x4: "EEE-EXE-EEE",
  fill_x5: "EEE-EEX-EEE",
  fill_x6: "EEE-EEE-XEE",
  fill_x7: "EEE-EEE-EXE",
  fill_x8: "EEE-EEE-EEX",
  fill_x0_o1: "XOE-EEE-EEE",
  fill_x0_o2: "XEO-EEE-EEE",
  fill_x0_o3: "XEE-OEE-EEE",
  fill_x0_o4: "XEE-EOE-EEE",
  fill_x0_o5: "XEE-EEO-EEE",
  fill_x0_o6: "XEE-EEE-OEE",
  fill_x0_o7: "XEE-EEE-EOE",
  fill_x0_o8: "XEE-EEE-EEO",
  fill_x1_o0: "OXE-EEE-EEE",
  fill_x1_o2: "EXO-EEE-EEE",
  fill_x1_o3: "EXE-OEE-EEE",
  fill_x1_o4: "EXE-EOE-EEE",
  fill_x1_o5: "EXE-EEO-EEE",
  fill_x1_o6: "EXE-EEE-OEE",
  fill_x1_o7: "EXE-EEE-EOE",
  fill_x1_o8: "EXE-EEE-EEO",
  fill_x2_o0: "OEX-EEE-EEE",
  fill_x2_o1: "EOX-EEE-EEE",
  fill_x2_o3: "EEX-OEE-EEE",
  fill_x2_o4: "EEX-EOE-EEE",
  fill_x2_o5: "EEX-EEO-EEE",
  fill_x2_o6: "EEX-EEE-OEE",
  fill_x2_o7: "EEX-EEE-EOE",
  fill_x2_o8: "EEX-EEE-EEO",
  fill_x3_o0: "OEE-XEE-EEE",
  fill_x3_o1: "EOE-XEE-EEE",
  fill_x3_o2: "EEO-XEE-EEE",
  fill_x3_o4: "EEE-XOE-EEE",
  fill_x3_o5: "EEE-XEO-EEE",
  fill_x3_o6: "EEE-XEE-OEE",
  fill_x3_o7: "EEE-XEE-EOE",
  fill_x3_o8: "EEE-XEE-EEO",
  fill_x4_o0: "OEE-EXE-EEE",
  fill_x4_o1: "EOE-EXE-EEE",
  fill_x4_o2: "EEO-EXE-EEE",
  fill_x4_o3: "EEE-OXE-EEE",
  fill_x4_o5: "EEE-EXO-EEE",
  fill_x4_o6: "EEE-EXE-OEE",
  fill_x4_o7: "EEE-EXE-EOE",
  fill_x4_o8: "EEE-EXE-EEO",
  fill_x5_o0: "OEE-EEX-EEE",
  fill_x5_o1: "EOE-EEX-EEE",
  fill_x5_o2: "EEO-EEX-EEE",
  fill_x5_o3: "EEE-OEX-EEE",
  fill_x5_o4: "EEE-EOX-EEE",
  fill_x5_o6: "EEE-EEX-OEE",
  fill_x5_o7: "EEE-EEX-EOE",
  fill_x5_o8: "EEE-EEX-EEO",
  fill_x6_o0: "OEE-EEE-XEE",
  fill_x6_o1: "EOE-EEE-XEE",
  fill_x6_o2: "EEO-EEE-XEE",
  fill_x6_o3: "EEE-OEE-XEE",
  fill_x6_o4: "EEE-EOE-XEE",
  fill_x6_o5: "EEE-EEO-XEE",
  fill_x6_o7: "EEE-EEE-XOE",
  fill_x6_o8: "EEE-EEE-XEO",
  fill_x7_o0: "OEE-EEE-EXE",
  fill_x7_o1: "EOE-EEE-EXE",
  fill_x7_o2: "EEO-EEE-EXE",
  fill_x7_o3: "EEE-OEE-EXE",
  fill_x7_o4: "EEE-EOE-EXE",
  fill_x7_o5: "EEE-EEO-EXE",
  fill_x7_o6: "EEE-EEE-OXE",
  fill_x7_o8: "EEE-EEE-EXO",
  fill_x8_o0: "OEE-EEE-EEX",
  fill_x8_o1: "EOE-EEE-EEX",
  fill_x8_o2: "EEO-EEE-EEX",
  fill_x8_o3: "EEE-OEE-EEX",
  fill_x8_o4: "EEE-EOE-EEX",
  fill_x8_o5: "EEE-EEO-EEX",
  fill_x8_o6: "EEE-EEE-OEX",
  fill_x8_o7: "EEE-EEE-EOX",
  fill_x0_o1_x2: "XOX-EEE-EEE",
  fill_x0_o1_x3: "XOE-XEE-EEE",
  fill_x0_o1_x4: "XOE-EXE-EEE",
  fill_x0_o1_x5: "XOE-EEX-EEE",
  fill_x0_o1_x6: "XOE-EEE-XEE",
  fill_x0_o1_x7: "XOE-EEE-EXE",
  fill_x0_o1_x8: "XOE-EEE-EEX",
  fill_x0_o2_x1: "XXO-EEE-EEE",
  fill_x0_o2_x3: "XEO-XEE-EEE",
  fill_x0_o2_x4: "XEO-EXE-EEE",
  fill_x0_o2_x5: "XEO-EEX-EEE",
  fill_x0_o2_x6: "XEO-EEE-XEE",
  fill_x0_o2_x7: "XEO-EEE-EXE",
  fill_x0_o2_x8: "XEO-EEE-EEX",
  fill_x0_o3_x1: "XXE-OEE-EEE",
  fill_x0_o3_x2: "XEX-OEE-EEE",
  fill_x0_o3_x4: "XEE-OXE-EEE",
  fill_x0_o3_x5: "XEE-OEX-EEE",
  fill_x0_o3_x6: "XEE-OEE-XEE",
  fill_x0_o3_x7: "XEE-OEE-EXE",
  fill_x0_o3_x8: "XEE-OEE-EEX",
  fill_x0_o4_x1: "XXE-EOE-EEE",
  fill_x0_o4_x2: "XEX-EOE-EEE",
  fill_x0_o4_x3: "XEE-XOE-EEE",
  fill_x0_o4_x5: "XEE-EOX-EEE",
  fill_x0_o4_x6: "XEE-EOE-XEE",
  fill_x0_o4_x7: "XEE-EOE-EXE",
  fill_x0_o4_x8: "XEE-EOE-EEX",
  fill_x0_o5_x1: "XXE-EEO-EEE",
  fill_x0_o5_x2: "XEX-EEO-EEE",
  fill_x0_o5_x3: "XEE-XEO-EEE",
  fill_x0_o5_x4: "XEE-EXO-EEE",
  fill_x0_o5_x6: "XEE-EEO-XEE",
  fill_x0_o5_x7: "XEE-EEO-EXE",
  fill_x0_o5_x8: "XEE-EEO-EEX",
  fill_x0_o6_x1: "XXE-EEE-OEE",
  fill_x0_o6_x2: "XEX-EEE-OEE",
  fill_x0_o6_x3: "XEE-XEE-OEE",
  fill_x0_o6_x4: "XEE-EXE-OEE",
  fill_x0_o6_x5: "XEE-EEX-OEE",
  fill_x0_o6_x7: "XEE-EEE-OXE",
  fill_x0_o6_x8: "XEE-EEE-OEX",
  fill_x0_o7_x1: "XXE-EEE-EOE",
  fill_x0_o7_x2: "XEX-EEE-EOE",
  fill_x0_o7_x3: "XEE-XEE-EOE",
  fill_x0_o7_x4: "XEE-EXE-EOE",
  fill_x0_o7_x5: "XEE-EEX-EOE",
  fill_x0_o7_x6: "XEE-EEE-XOE",
  fill_x0_o7_x8: "XEE-EEE-EOX",
  fill_x0_o8_x1: "XXE-EEE-EEO",
  fill_x0_o8_x2: "XEX-EEE-EEO",
  fill_x0_o8_x3: "XEE-XEE-EEO",
  fill_x0_o8_x4: "XEE-EXE-EEO",
  fill_x0_o8_x5: "XEE-EEX-EEO",
  fill_x0_o8_x6: "XEE-EEE-XEO",
  fill_x0_o8_x7: "XEE-EEE-EXO",
  fill_x1_o0_x2: "OXX-EEE-EEE",
  fill_x1_o0_x3: "OXE-XEE-EEE",
  fill_x1_o0_x4: "OXE-EXE-EEE",
  fill_x1_o0_x5: "OXE-EEX-EEE",
  fill_x1_o0_x6: "OXE-EEE-XEE",
  fill_x1_o0_x7: "OXE-EEE-EXE",
  fill_x1_o0_x8: "OXE-EEE-EEX",
  fill_x1_o2_x3: "EXO-XEE-EEE",
  fill_x1_o2_x4: "EXO-EXE-EEE",
  fill_x1_o2_x5: "EXO-EEX-EEE",
  fill_x1_o2_x6: "EXO-EEE-XEE",
  fill_x1_o2_x7: "EXO-EEE-EXE",
  fill_x1_o2_x8: "EXO-EEE-EEX",
  fill_x1_o3_x2: "EXX-OEE-EEE",
  fill_x1_o3_x4: "EXE-OXE-EEE",
  fill_x1_o3_x5: "EXE-OEX-EEE",
  fill_x1_o3_x6: "EXE-OEE-XEE",
  fill_x1_o3_x7: "EXE-OEE-EXE",
  fill_x1_o3_x8: "EXE-OEE-EEX",
  fill_x1_o4_x2: "EXX-EOE-EEE",
  fill_x1_o4_x3: "EXE-XOE-EEE",
  fill_x1_o4_x5: "EXE-EOX-EEE",
  fill_x1_o4_x6: "EXE-EOE-XEE",
  fill_x1_o4_x7: "EXE-EOE-EXE",
  fill_x1_o4_x8: "EXE-EOE-EEX",
  fill_x1_o5_x2: "EXX-EEO-EEE",
  fill_x1_o5_x3: "EXE-XEO-EEE",
  fill_x1_o5_x4: "EXE-EXO-EEE",
  fill_x1_o5_x6: "EXE-EEO-XEE",
  fill_x1_o5_x7: "EXE-EEO-EXE",
  fill_x1_o5_x8: "EXE-EEO-EEX",
  fill_x1_o6_x2: "EXX-EEE-OEE",
  fill_x1_o6_x3: "EXE-XEE-OEE",
  fill_x1_o6_x4: "EXE-EXE-OEE",
  fill_x1_o6_x5: "EXE-EEX-OEE",
  fill_x1_o6_x7: "EXE-EEE-OXE",
  fill_x1_o6_x8: "EXE-EEE-OEX",
  fill_x1_o7_x2: "EXX-EEE-EOE",
  fill_x1_o7_x3: "EXE-XEE-EOE",
  fill_x1_o7_x4: "EXE-EXE-EOE",
  fill_x1_o7_x5: "EXE-EEX-EOE",
  fill_x1_o7_x6: "EXE-EEE-XOE",
  fill_x1_o7_x8: "EXE-EEE-EOX",
  fill_x1_o8_x2: "EXX-EEE-EEO",
  fill_x1_o8_x3: "EXE-XEE-EEO",
  fill_x1_o8_x4: "EXE-EXE-EEO",
  fill_x1_o8_x5: "EXE-EEX-EEO",
  fill_x1_o8_x6: "EXE-EEE-XEO",
  fill_x1_o8_x7: "EXE-EEE-EXO",
  fill_x2_o0_x3: "OEX-XEE-EEE",
  fill_x2_o0_x4: "OEX-EXE-EEE",
  fill_x2_o0_x5: "OEX-EEX-EEE",
  fill_x2_o0_x6: "OEX-EEE-XEE",
  fill_x2_o0_x7: "OEX-EEE-EXE",
  fill_x2_o0_x8: "OEX-EEE-EEX",
  fill_x2_o1_x3: "EOX-XEE-EEE",
  fill_x2_o1_x4: "EOX-EXE-EEE",
  fill_x2_o1_x5: "EOX-EEX-EEE",
  fill_x2_o1_x6: "EOX-EEE-XEE",
  fill_x2_o1_x7: "EOX-EEE-EXE",
  fill_x2_o1_x8: "EOX-EEE-EEX",
  fill_x2_o3_x4: "EEX-OXE-EEE",
  fill_x2_o3_x5: "EEX-OEX-EEE",
  fill_x2_o3_x6: "EEX-OEE-XEE",
  fill_x2_o3_x7: "EEX-OEE-EXE",
  fill_x2_o3_x8: "EEX-OEE-EEX",
  fill_x2_o4_x3: "EEX-XOE-EEE",
  fill_x2_o4_x5: "EEX-EOX-EEE",
  fill_x2_o4_x6: "EEX-EOE-XEE",
  fill_x2_o4_x7: "EEX-EOE-EXE",
  fill_x2_o4_x8: "EEX-EOE-EEX",
  fill_x2_o5_x3: "EEX-XEO-EEE",
  fill_x2_o5_x4: "EEX-EXO-EEE",
  fill_x2_o5_x6: "EEX-EEO-XEE",
  fill_x2_o5_x7: "EEX-EEO-EXE",
  fill_x2_o5_x8: "EEX-EEO-EEX",
  fill_x2_o6_x3: "EEX-XEE-OEE",
  fill_x2_o6_x4: "EEX-EXE-OEE",
  fill_x2_o6_x5: "EEX-EEX-OEE",
  fill_x2_o6_x7: "EEX-EEE-OXE",
  fill_x2_o6_x8: "EEX-EEE-OEX",
  fill_x2_o7_x3: "EEX-XEE-EOE",
  fill_x2_o7_x4: "EEX-EXE-EOE",
  fill_x2_o7_x5: "EEX-EEX-EOE",
  fill_x2_o7_x6: "EEX-EEE-XOE",
  fill_x2_o7_x8: "EEX-EEE-EOX",
  fill_x2_o8_x3: "EEX-XEE-EEO",
  fill_x2_o8_x4: "EEX-EXE-EEO",
  fill_x2_o8_x5: "EEX-EEX-EEO",
  fill_x2_o8_x6: "EEX-EEE-XEO",
  fill_x2_o8_x7: "EEX-EEE-EXO",
  fill_x3_o0_x4: "OEE-XXE-EEE",
  fill_x3_o0_x5: "OEE-XEX-EEE",
  fill_x3_o0_x6: "OEE-XEE-XEE",
  fill_x3_o0_x7: "OEE-XEE-EXE",
  fill_x3_o0_x8: "OEE-XEE-EEX",
  fill_x3_o1_x4: "EOE-XXE-EEE",
  fill_x3_o1_x5: "EOE-XEX-EEE",
  fill_x3_o1_x6: "EOE-XEE-XEE",
  fill_x3_o1_x7: "EOE-XEE-EXE",
  fill_x3_o1_x8: "EOE-XEE-EEX",
  fill_x3_o2_x4: "EEO-XXE-EEE",
  fill_x3_o2_x5: "EEO-XEX-EEE",
  fill_x3_o2_x6: "EEO-XEE-XEE",
  fill_x3_o2_x7: "EEO-XEE-EXE",
  fill_x3_o2_x8: "EEO-XEE-EEX",
  fill_x3_o4_x5: "EEE-XOX-EEE",
  fill_x3_o4_x6: "EEE-XOE-XEE",
  fill_x3_o4_x7: "EEE-XOE-EXE",
  fill_x3_o4_x8: "EEE-XOE-EEX",
  fill_x3_o5_x4: "EEE-XXO-EEE",
  fill_x3_o5_x6: "EEE-XEO-XEE",
  fill_x3_o5_x7: "EEE-XEO-EXE",
  fill_x3_o5_x8: "EEE-XEO-EEX",
  fill_x3_o6_x4: "EEE-XXE-OEE",
  fill_x3_o6_x5: "EEE-XEX-OEE",
  fill_x3_o6_x7: "EEE-XEE-OXE",
  fill_x3_o6_x8: "EEE-XEE-OEX",
  fill_x3_o7_x4: "EEE-XXE-EOE",
  fill_x3_o7_x5: "EEE-XEX-EOE",
  fill_x3_o7_x6: "EEE-XEE-XOE",
  fill_x3_o7_x8: "EEE-XEE-EOX",
  fill_x3_o8_x4: "EEE-XXE-EEO",
  fill_x3_o8_x5: "EEE-XEX-EEO",
  fill_x3_o8_x6: "EEE-XEE-XEO",
  fill_x3_o8_x7: "EEE-XEE-EXO",
  fill_x4_o0_x5: "OEE-EXX-EEE",
  fill_x4_o0_x6: "OEE-EXE-XEE",
  fill_x4_o0_x7: "OEE-EXE-EXE",
  fill_x4_o0_x8: "OEE-EXE-EEX",
  fill_x4_o1_x5: "EOE-EXX-EEE",
  fill_x4_o1_x6: "EOE-EXE-XEE",
  fill_x4_o1_x7: "EOE-EXE-EXE",
  fill_x4_o1_x8: "EOE-EXE-EEX",
  fill_x4_o2_x5: "EEO-EXX-EEE",
  fill_x4_o2_x6: "EEO-EXE-XEE",
  fill_x4_o2_x7: "EEO-EXE-EXE",
  fill_x4_o2_x8: "EEO-EXE-EEX",
  fill_x4_o3_x5: "EEE-OXX-EEE",
  fill_x4_o3_x6: "EEE-OXE-XEE",
  fill_x4_o3_x7: "EEE-OXE-EXE",
  fill_x4_o3_x8: "EEE-OXE-EEX",
  fill_x4_o5_x6: "EEE-EXO-XEE",
  fill_x4_o5_x7: "EEE-EXO-EXE",
  fill_x4_o5_x8: "EEE-EXO-EEX",
  fill_x4_o6_x5: "EEE-EXX-OEE",
  fill_x4_o6_x7: "EEE-EXE-OXE",
  fill_x4_o6_x8: "EEE-EXE-OEX",
  fill_x4_o7_x5: "EEE-EXX-EOE",
  fill_x4_o7_x6: "EEE-EXE-XOE",
  fill_x4_o7_x8: "EEE-EXE-EOX",
  fill_x4_o8_x5: "EEE-EXX-EEO",
  fill_x4_o8_x6: "EEE-EXE-XEO",
  fill_x4_o8_x7: "EEE-EXE-EXO",
  fill_x5_o0_x6: "OEE-EEX-XEE",
  fill_x5_o0_x7: "OEE-EEX-EXE",
  fill_x5_o0_x8: "OEE-EEX-EEX",
  fill_x5_o1_x6: "EOE-EEX-XEE",
  fill_x5_o1_x7: "EOE-EEX-EXE",
  fill_x5_o1_x8: "EOE-EEX-EEX",
  fill_x5_o2_x6: "EEO-EEX-XEE",
  fill_x5_o2_x7: "EEO-EEX-EXE",
  fill_x5_o2_x8: "EEO-EEX-EEX",
  fill_x5_o3_x6: "EEE-OEX-XEE",
  fill_x5_o3_x7: "EEE-OEX-EXE",
  fill_x5_o3_x8: "EEE-OEX-EEX",
  fill_x5_o4_x6: "EEE-EOX-XEE",
  fill_x5_o4_x7: "EEE-EOX-EXE",
  fill_x5_o4_x8: "EEE-EOX-EEX",
  fill_x5_o6_x7: "EEE-EEX-OXE",
  fill_x5_o6_x8: "EEE-EEX-OEX",
  fill_x5_o7_x6: "EEE-EEX-XOE",
  fill_x5_o7_x8: "EEE-EEX-EOX",
  fill_x5_o8_x6: "EEE-EEX-XEO",
  fill_x5_o8_x7: "EEE-EEX-EXO",
  fill_x6_o0_x7: "OEE-EEE-XXE",
  fill_x6_o0_x8: "OEE-EEE-XEX",
  fill_x6_o1_x7: "EOE-EEE-XXE",
  fill_x6_o1_x8: "EOE-EEE-XEX",
  fill_x6_o2_x7: "EEO-EEE-XXE",
  fill_x6_o2_x8: "EEO-EEE-XEX",
  fill_x6_o3_x7: "EEE-OEE-XXE",
  fill_x6_o3_x8: "EEE-OEE-XEX",
  fill_x6_o4_x7: "EEE-EOE-XXE",
  fill_x6_o4_x8: "EEE-EOE-XEX",
  fill_x6_o5_x7: "EEE-EEO-XXE",
  fill_x6_o5_x8: "EEE-EEO-XEX",
  fill_x6_o7_x8: "EEE-EEE-XOX",
  fill_x6_o8_x7: "EEE-EEE-XXO",
  fill_x7_o0_x8: "OEE-EEE-EXX",
  fill_x7_o1_x8: "EOE-EEE-EXX",
  fill_x7_o2_x8: "EEO-EEE-EXX",
  fill_x7_o3_x8: "EEE-OEE-EXX",
  fill_x7_o4_x8: "EEE-EOE-EXX",
  fill_x7_o5_x8: "EEE-EEO-EXX",
  fill_x7_o6_x8: "EEE-EEE-OXX",
  fill_x0_o1_x2_o3: "XOX-OEE-EEE",
  fill_x0_o1_x2_o4: "XOX-EOE-EEE",
  fill_x0_o1_x2_o5: "XOX-EEO-EEE",
  fill_x0_o1_x2_o6: "XOX-EEE-OEE",
  fill_x0_o1_x2_o7: "XOX-EEE-EOE",
  fill_x0_o1_x2_o8: "XOX-EEE-EEO",
  fill_x0_o1_x3_o2: "XOO-XEE-EEE",
  fill_x0_o1_x3_o4: "XOE-XOE-EEE",
  fill_x0_o1_x3_o5: "XOE-XEO-EEE",
  fill_x0_o1_x3_o6: "XOE-XEE-OEE",
  fill_x0_o1_x3_o7: "XOE-XEE-EOE",
  fill_x0_o1_x3_o8: "XOE-XEE-EEO",
  fill_x0_o1_x4_o2: "XOO-EXE-EEE",
  fill_x0_o1_x4_o3: "XOE-OXE-EEE",
  fill_x0_o1_x4_o5: "XOE-EXO-EEE",
  fill_x0_o1_x4_o6: "XOE-EXE-OEE",
  fill_x0_o1_x4_o7: "XOE-EXE-EOE",
  fill_x0_o1_x4_o8: "XOE-EXE-EEO",
  fill_x0_o1_x5_o2: "XOO-EEX-EEE",
  fill_x0_o1_x5_o3: "XOE-OEX-EEE",
  fill_x0_o1_x5_o4: "XOE-EOX-EEE",
  fill_x0_o1_x5_o6: "XOE-EEX-OEE",
  fill_x0_o1_x5_o7: "XOE-EEX-EOE",
  fill_x0_o1_x5_o8: "XOE-EEX-EEO",
  fill_x0_o1_x6_o2: "XOO-EEE-XEE",
  fill_x0_o1_x6_o3: "XOE-OEE-XEE",
  fill_x0_o1_x6_o4: "XOE-EOE-XEE",
  fill_x0_o1_x6_o5: "XOE-EEO-XEE",
  fill_x0_o1_x6_o7: "XOE-EEE-XOE",
  fill_x0_o1_x6_o8: "XOE-EEE-XEO",
  fill_x0_o1_x7_o2: "XOO-EEE-EXE",
  fill_x0_o1_x7_o3: "XOE-OEE-EXE",
  fill_x0_o1_x7_o4: "XOE-EOE-EXE",
  fill_x0_o1_x7_o5: "XOE-EEO-EXE",
  fill_x0_o1_x7_o6: "XOE-EEE-OXE",
  fill_x0_o1_x7_o8: "XOE-EEE-EXO",
  fill_x0_o1_x8_o2: "XOO-EEE-EEX",
  fill_x0_o1_x8_o3: "XOE-OEE-EEX",
  fill_x0_o1_x8_o4: "XOE-EOE-EEX",
  fill_x0_o1_x8_o5: "XOE-EEO-EEX",
  fill_x0_o1_x8_o6: "XOE-EEE-OEX",
  fill_x0_o1_x8_o7: "XOE-EEE-EOX",
  fill_x0_o2_x1_o3: "XXO-OEE-EEE",
  fill_x0_o2_x1_o4: "XXO-EOE-EEE",
  fill_x0_o2_x1_o5: "XXO-EEO-EEE",
  fill_x0_o2_x1_o6: "XXO-EEE-OEE",
  fill_x0_o2_x1_o7: "XXO-EEE-EOE",
  fill_x0_o2_x1_o8: "XXO-EEE-EEO",
  fill_x0_o2_x3_o4: "XEO-XOE-EEE",
  fill_x0_o2_x3_o5: "XEO-XEO-EEE",
  fill_x0_o2_x3_o6: "XEO-XEE-OEE",
  fill_x0_o2_x3_o7: "XEO-XEE-EOE",
  fill_x0_o2_x3_o8: "XEO-XEE-EEO",
  fill_x0_o2_x4_o3: "XEO-OXE-EEE",
  fill_x0_o2_x4_o5: "XEO-EXO-EEE",
  fill_x0_o2_x4_o6: "XEO-EXE-OEE",
  fill_x0_o2_x4_o7: "XEO-EXE-EOE",
  fill_x0_o2_x4_o8: "XEO-EXE-EEO",
  fill_x0_o2_x5_o3: "XEO-OEX-EEE",
  fill_x0_o2_x5_o4: "XEO-EOX-EEE",
  fill_x0_o2_x5_o6: "XEO-EEX-OEE",
  fill_x0_o2_x5_o7: "XEO-EEX-EOE",
  fill_x0_o2_x5_o8: "XEO-EEX-EEO",
  fill_x0_o2_x6_o3: "XEO-OEE-XEE",
  fill_x0_o2_x6_o4: "XEO-EOE-XEE",
  fill_x0_o2_x6_o5: "XEO-EEO-XEE",
  fill_x0_o2_x6_o7: "XEO-EEE-XOE",
  fill_x0_o2_x6_o8: "XEO-EEE-XEO",
  fill_x0_o2_x7_o3: "XEO-OEE-EXE",
  fill_x0_o2_x7_o4: "XEO-EOE-EXE",
  fill_x0_o2_x7_o5: "XEO-EEO-EXE",
  fill_x0_o2_x7_o6: "XEO-EEE-OXE",
  fill_x0_o2_x7_o8: "XEO-EEE-EXO",
  fill_x0_o2_x8_o3: "XEO-OEE-EEX",
  fill_x0_o2_x8_o4: "XEO-EOE-EEX",
  fill_x0_o2_x8_o5: "XEO-EEO-EEX",
  fill_x0_o2_x8_o6: "XEO-EEE-OEX",
  fill_x0_o2_x8_o7: "XEO-EEE-EOX",
  fill_x0_o3_x1_o4: "XXE-OOE-EEE",
  fill_x0_o3_x1_o5: "XXE-OEO-EEE",
  fill_x0_o3_x1_o6: "XXE-OEE-OEE",
  fill_x0_o3_x1_o7: "XXE-OEE-EOE",
  fill_x0_o3_x1_o8: "XXE-OEE-EEO",
  fill_x0_o3_x2_o4: "XEX-OOE-EEE",
  fill_x0_o3_x2_o5: "XEX-OEO-EEE",
  fill_x0_o3_x2_o6: "XEX-OEE-OEE",
  fill_x0_o3_x2_o7: "XEX-OEE-EOE",
  fill_x0_o3_x2_o8: "XEX-OEE-EEO",
  fill_x0_o3_x4_o5: "XEE-OXO-EEE",
  fill_x0_o3_x4_o6: "XEE-OXE-OEE",
  fill_x0_o3_x4_o7: "XEE-OXE-EOE",
  fill_x0_o3_x4_o8: "XEE-OXE-EEO",
  fill_x0_o3_x5_o4: "XEE-OOX-EEE",
  fill_x0_o3_x5_o6: "XEE-OEX-OEE",
  fill_x0_o3_x5_o7: "XEE-OEX-EOE",
  fill_x0_o3_x5_o8: "XEE-OEX-EEO",
  fill_x0_o3_x6_o4: "XEE-OOE-XEE",
  fill_x0_o3_x6_o5: "XEE-OEO-XEE",
  fill_x0_o3_x6_o7: "XEE-OEE-XOE",
  fill_x0_o3_x6_o8: "XEE-OEE-XEO",
  fill_x0_o3_x7_o4: "XEE-OOE-EXE",
  fill_x0_o3_x7_o5: "XEE-OEO-EXE",
  fill_x0_o3_x7_o6: "XEE-OEE-OXE",
  fill_x0_o3_x7_o8: "XEE-OEE-EXO",
  fill_x0_o3_x8_o4: "XEE-OOE-EEX",
  fill_x0_o3_x8_o5: "XEE-OEO-EEX",
  fill_x0_o3_x8_o6: "XEE-OEE-OEX",
  fill_x0_o3_x8_o7: "XEE-OEE-EOX",
  fill_x0_o4_x1_o5: "XXE-EOO-EEE",
  fill_x0_o4_x1_o6: "XXE-EOE-OEE",
  fill_x0_o4_x1_o7: "XXE-EOE-EOE",
  fill_x0_o4_x1_o8: "XXE-EOE-EEO",
  fill_x0_o4_x2_o5: "XEX-EOO-EEE",
  fill_x0_o4_x2_o6: "XEX-EOE-OEE",
  fill_x0_o4_x2_o7: "XEX-EOE-EOE",
  fill_x0_o4_x2_o8: "XEX-EOE-EEO",
  fill_x0_o4_x3_o5: "XEE-XOO-EEE",
  fill_x0_o4_x3_o6: "XEE-XOE-OEE",
  fill_x0_o4_x3_o7: "XEE-XOE-EOE",
  fill_x0_o4_x3_o8: "XEE-XOE-EEO",
  fill_x0_o4_x5_o6: "XEE-EOX-OEE",
  fill_x0_o4_x5_o7: "XEE-EOX-EOE",
  fill_x0_o4_x5_o8: "XEE-EOX-EEO",
  fill_x0_o4_x6_o5: "XEE-EOO-XEE",
  fill_x0_o4_x6_o7: "XEE-EOE-XOE",
  fill_x0_o4_x6_o8: "XEE-EOE-XEO",
  fill_x0_o4_x7_o5: "XEE-EOO-EXE",
  fill_x0_o4_x7_o6: "XEE-EOE-OXE",
  fill_x0_o4_x7_o8: "XEE-EOE-EXO",
  fill_x0_o4_x8_o5: "XEE-EOO-EEX",
  fill_x0_o4_x8_o6: "XEE-EOE-OEX",
  fill_x0_o4_x8_o7: "XEE-EOE-EOX",
  fill_x0_o5_x1_o6: "XXE-EEO-OEE",
  fill_x0_o5_x1_o7: "XXE-EEO-EOE",
  fill_x0_o5_x1_o8: "XXE-EEO-EEO",
  fill_x0_o5_x2_o6: "XEX-EEO-OEE",
  fill_x0_o5_x2_o7: "XEX-EEO-EOE",
  fill_x0_o5_x2_o8: "XEX-EEO-EEO",
  fill_x0_o5_x3_o6: "XEE-XEO-OEE",
  fill_x0_o5_x3_o7: "XEE-XEO-EOE",
  fill_x0_o5_x3_o8: "XEE-XEO-EEO",
  fill_x0_o5_x4_o6: "XEE-EXO-OEE",
  fill_x0_o5_x4_o7: "XEE-EXO-EOE",
  fill_x0_o5_x4_o8: "XEE-EXO-EEO",
  fill_x0_o5_x6_o7: "XEE-EEO-XOE",
  fill_x0_o5_x6_o8: "XEE-EEO-XEO",
  fill_x0_o5_x7_o6: "XEE-EEO-OXE",
  fill_x0_o5_x7_o8: "XEE-EEO-EXO",
  fill_x0_o5_x8_o6: "XEE-EEO-OEX",
  fill_x0_o5_x8_o7: "XEE-EEO-EOX",
  fill_x0_o6_x1_o7: "XXE-EEE-OOE",
  fill_x0_o6_x1_o8: "XXE-EEE-OEO",
  fill_x0_o6_x2_o7: "XEX-EEE-OOE",
  fill_x0_o6_x2_o8: "XEX-EEE-OEO",
  fill_x0_o6_x3_o7: "XEE-XEE-OOE",
  fill_x0_o6_x3_o8: "XEE-XEE-OEO",
  fill_x0_o6_x4_o7: "XEE-EXE-OOE",
  fill_x0_o6_x4_o8: "XEE-EXE-OEO",
  fill_x0_o6_x5_o7: "XEE-EEX-OOE",
  fill_x0_o6_x5_o8: "XEE-EEX-OEO",
  fill_x0_o6_x7_o8: "XEE-EEE-OXO",
  fill_x0_o6_x8_o7: "XEE-EEE-OOX",
  fill_x0_o7_x1_o8: "XXE-EEE-EOO",
  fill_x0_o7_x2_o8: "XEX-EEE-EOO",
  fill_x0_o7_x3_o8: "XEE-XEE-EOO",
  fill_x0_o7_x4_o8: "XEE-EXE-EOO",
  fill_x0_o7_x5_o8: "XEE-EEX-EOO",
  fill_x0_o7_x6_o8: "XEE-EEE-XOO",
  fill_x1_o0_x2_o3: "OXX-OEE-EEE",
  fill_x1_o0_x2_o4: "OXX-EOE-EEE",
  fill_x1_o0_x2_o5: "OXX-EEO-EEE",
  fill_x1_o0_x2_o6: "OXX-EEE-OEE",
  fill_x1_o0_x2_o7: "OXX-EEE-EOE",
  fill_x1_o0_x2_o8: "OXX-EEE-EEO",
  fill_x1_o0_x3_o2: "OXO-XEE-EEE",
  fill_x1_o0_x3_o4: "OXE-XOE-EEE",
  fill_x1_o0_x3_o5: "OXE-XEO-EEE",
  fill_x1_o0_x3_o6: "OXE-XEE-OEE",
  fill_x1_o0_x3_o7: "OXE-XEE-EOE",
  fill_x1_o0_x3_o8: "OXE-XEE-EEO",
  fill_x1_o0_x4_o2: "OXO-EXE-EEE",
  fill_x1_o0_x4_o3: "OXE-OXE-EEE",
  fill_x1_o0_x4_o5: "OXE-EXO-EEE",
  fill_x1_o0_x4_o6: "OXE-EXE-OEE",
  fill_x1_o0_x4_o7: "OXE-EXE-EOE",
  fill_x1_o0_x4_o8: "OXE-EXE-EEO",
  fill_x1_o0_x5_o2: "OXO-EEX-EEE",
  fill_x1_o0_x5_o3: "OXE-OEX-EEE",
  fill_x1_o0_x5_o4: "OXE-EOX-EEE",
  fill_x1_o0_x5_o6: "OXE-EEX-OEE",
  fill_x1_o0_x5_o7: "OXE-EEX-EOE",
  fill_x1_o0_x5_o8: "OXE-EEX-EEO",
  fill_x1_o0_x6_o2: "OXO-EEE-XEE",
  fill_x1_o0_x6_o3: "OXE-OEE-XEE",
  fill_x1_o0_x6_o4: "OXE-EOE-XEE",
  fill_x1_o0_x6_o5: "OXE-EEO-XEE",
  fill_x1_o0_x6_o7: "OXE-EEE-XOE",
  fill_x1_o0_x6_o8: "OXE-EEE-XEO",
  fill_x1_o0_x7_o2: "OXO-EEE-EXE",
  fill_x1_o0_x7_o3: "OXE-OEE-EXE",
  fill_x1_o0_x7_o4: "OXE-EOE-EXE",
  fill_x1_o0_x7_o5: "OXE-EEO-EXE",
  fill_x1_o0_x7_o6: "OXE-EEE-OXE",
  fill_x1_o0_x7_o8: "OXE-EEE-EXO",
  fill_x1_o0_x8_o2: "OXO-EEE-EEX",
  fill_x1_o0_x8_o3: "OXE-OEE-EEX",
  fill_x1_o0_x8_o4: "OXE-EOE-EEX",
  fill_x1_o0_x8_o5: "OXE-EEO-EEX",
  fill_x1_o0_x8_o6: "OXE-EEE-OEX",
  fill_x1_o0_x8_o7: "OXE-EEE-EOX",
  fill_x1_o2_x3_o4: "EXO-XOE-EEE",
  fill_x1_o2_x3_o5: "EXO-XEO-EEE",
  fill_x1_o2_x3_o6: "EXO-XEE-OEE",
  fill_x1_o2_x3_o7: "EXO-XEE-EOE",
  fill_x1_o2_x3_o8: "EXO-XEE-EEO",
  fill_x1_o2_x4_o3: "EXO-OXE-EEE",
  fill_x1_o2_x4_o5: "EXO-EXO-EEE",
  fill_x1_o2_x4_o6: "EXO-EXE-OEE",
  fill_x1_o2_x4_o7: "EXO-EXE-EOE",
  fill_x1_o2_x4_o8: "EXO-EXE-EEO",
  fill_x1_o2_x5_o3: "EXO-OEX-EEE",
  fill_x1_o2_x5_o4: "EXO-EOX-EEE",
  fill_x1_o2_x5_o6: "EXO-EEX-OEE",
  fill_x1_o2_x5_o7: "EXO-EEX-EOE",
  fill_x1_o2_x5_o8: "EXO-EEX-EEO",
  fill_x1_o2_x6_o3: "EXO-OEE-XEE",
  fill_x1_o2_x6_o4: "EXO-EOE-XEE",
  fill_x1_o2_x6_o5: "EXO-EEO-XEE",
  fill_x1_o2_x6_o7: "EXO-EEE-XOE",
  fill_x1_o2_x6_o8: "EXO-EEE-XEO",
  fill_x1_o2_x7_o3: "EXO-OEE-EXE",
  fill_x1_o2_x7_o4: "EXO-EOE-EXE",
  fill_x1_o2_x7_o5: "EXO-EEO-EXE",
  fill_x1_o2_x7_o6: "EXO-EEE-OXE",
  fill_x1_o2_x7_o8: "EXO-EEE-EXO",
  fill_x1_o2_x8_o3: "EXO-OEE-EEX",
  fill_x1_o2_x8_o4: "EXO-EOE-EEX",
  fill_x1_o2_x8_o5: "EXO-EEO-EEX",
  fill_x1_o2_x8_o6: "EXO-EEE-OEX",
  fill_x1_o2_x8_o7: "EXO-EEE-EOX",
  fill_x1_o3_x2_o4: "EXX-OOE-EEE",
  fill_x1_o3_x2_o5: "EXX-OEO-EEE",
  fill_x1_o3_x2_o6: "EXX-OEE-OEE",
  fill_x1_o3_x2_o7: "EXX-OEE-EOE",
  fill_x1_o3_x2_o8: "EXX-OEE-EEO",
  fill_x1_o3_x4_o5: "EXE-OXO-EEE",
  fill_x1_o3_x4_o6: "EXE-OXE-OEE",
  fill_x1_o3_x4_o7: "EXE-OXE-EOE",
  fill_x1_o3_x4_o8: "EXE-OXE-EEO",
  fill_x1_o3_x5_o4: "EXE-OOX-EEE",
  fill_x1_o3_x5_o6: "EXE-OEX-OEE",
  fill_x1_o3_x5_o7: "EXE-OEX-EOE",
  fill_x1_o3_x5_o8: "EXE-OEX-EEO",
  fill_x1_o3_x6_o4: "EXE-OOE-XEE",
  fill_x1_o3_x6_o5: "EXE-OEO-XEE",
  fill_x1_o3_x6_o7: "EXE-OEE-XOE",
  fill_x1_o3_x6_o8: "EXE-OEE-XEO",
  fill_x1_o3_x7_o4: "EXE-OOE-EXE",
  fill_x1_o3_x7_o5: "EXE-OEO-EXE",
  fill_x1_o3_x7_o6: "EXE-OEE-OXE",
  fill_x1_o3_x7_o8: "EXE-OEE-EXO",
  fill_x1_o3_x8_o4: "EXE-OOE-EEX",
  fill_x1_o3_x8_o5: "EXE-OEO-EEX",
  fill_x1_o3_x8_o6: "EXE-OEE-OEX",
  fill_x1_o3_x8_o7: "EXE-OEE-EOX",
  fill_x1_o4_x2_o5: "EXX-EOO-EEE",
  fill_x1_o4_x2_o6: "EXX-EOE-OEE",
  fill_x1_o4_x2_o7: "EXX-EOE-EOE",
  fill_x1_o4_x2_o8: "EXX-EOE-EEO",
  fill_x1_o4_x3_o5: "EXE-XOO-EEE",
  fill_x1_o4_x3_o6: "EXE-XOE-OEE",
  fill_x1_o4_x3_o7: "EXE-XOE-EOE",
  fill_x1_o4_x3_o8: "EXE-XOE-EEO",
  fill_x1_o4_x5_o6: "EXE-EOX-OEE",
  fill_x1_o4_x5_o7: "EXE-EOX-EOE",
  fill_x1_o4_x5_o8: "EXE-EOX-EEO",
  fill_x1_o4_x6_o5: "EXE-EOO-XEE",
  fill_x1_o4_x6_o7: "EXE-EOE-XOE",
  fill_x1_o4_x6_o8: "EXE-EOE-XEO",
  fill_x1_o4_x7_o5: "EXE-EOO-EXE",
  fill_x1_o4_x7_o6: "EXE-EOE-OXE",
  fill_x1_o4_x7_o8: "EXE-EOE-EXO",
  fill_x1_o4_x8_o5: "EXE-EOO-EEX",
  fill_x1_o4_x8_o6: "EXE-EOE-OEX",
  fill_x1_o4_x8_o7: "EXE-EOE-EOX",
  fill_x1_o5_x2_o6: "EXX-EEO-OEE",
  fill_x1_o5_x2_o7: "EXX-EEO-EOE",
  fill_x1_o5_x2_o8: "EXX-EEO-EEO",
  fill_x1_o5_x3_o6: "EXE-XEO-OEE",
  fill_x1_o5_x3_o7: "EXE-XEO-EOE",
  fill_x1_o5_x3_o8: "EXE-XEO-EEO",
  fill_x1_o5_x4_o6: "EXE-EXO-OEE",
  fill_x1_o5_x4_o7: "EXE-EXO-EOE",
  fill_x1_o5_x4_o8: "EXE-EXO-EEO",
  fill_x1_o5_x6_o7: "EXE-EEO-XOE",
  fill_x1_o5_x6_o8: "EXE-EEO-XEO",
  fill_x1_o5_x7_o6: "EXE-EEO-OXE",
  fill_x1_o5_x7_o8: "EXE-EEO-EXO",
  fill_x1_o5_x8_o6: "EXE-EEO-OEX",
  fill_x1_o5_x8_o7: "EXE-EEO-EOX",
  fill_x1_o6_x2_o7: "EXX-EEE-OOE",
  fill_x1_o6_x2_o8: "EXX-EEE-OEO",
  fill_x1_o6_x3_o7: "EXE-XEE-OOE",
  fill_x1_o6_x3_o8: "EXE-XEE-OEO",
  fill_x1_o6_x4_o7: "EXE-EXE-OOE",
  fill_x1_o6_x4_o8: "EXE-EXE-OEO",
  fill_x1_o6_x5_o7: "EXE-EEX-OOE",
  fill_x1_o6_x5_o8: "EXE-EEX-OEO",
  fill_x1_o6_x7_o8: "EXE-EEE-OXO",
  fill_x1_o6_x8_o7: "EXE-EEE-OOX",
  fill_x1_o7_x2_o8: "EXX-EEE-EOO",
  fill_x1_o7_x3_o8: "EXE-XEE-EOO",
  fill_x1_o7_x4_o8: "EXE-EXE-EOO",
  fill_x1_o7_x5_o8: "EXE-EEX-EOO",
  fill_x1_o7_x6_o8: "EXE-EEE-XOO",
  fill_x2_o0_x3_o1: "OOX-XEE-EEE",
  fill_x2_o0_x3_o4: "OEX-XOE-EEE",
  fill_x2_o0_x3_o5: "OEX-XEO-EEE",
  fill_x2_o0_x3_o6: "OEX-XEE-OEE",
  fill_x2_o0_x3_o7: "OEX-XEE-EOE",
  fill_x2_o0_x3_o8: "OEX-XEE-EEO",
  fill_x2_o0_x4_o1: "OOX-EXE-EEE",
  fill_x2_o0_x4_o3: "OEX-OXE-EEE",
  fill_x2_o0_x4_o5: "OEX-EXO-EEE",
  fill_x2_o0_x4_o6: "OEX-EXE-OEE",
  fill_x2_o0_x4_o7: "OEX-EXE-EOE",
  fill_x2_o0_x4_o8: "OEX-EXE-EEO",
  fill_x2_o0_x5_o1: "OOX-EEX-EEE",
  fill_x2_o0_x5_o3: "OEX-OEX-EEE",
  fill_x2_o0_x5_o4: "OEX-EOX-EEE",
  fill_x2_o0_x5_o6: "OEX-EEX-OEE",
  fill_x2_o0_x5_o7: "OEX-EEX-EOE",
  fill_x2_o0_x5_o8: "OEX-EEX-EEO",
  fill_x2_o0_x6_o1: "OOX-EEE-XEE",
  fill_x2_o0_x6_o3: "OEX-OEE-XEE",
  fill_x2_o0_x6_o4: "OEX-EOE-XEE",
  fill_x2_o0_x6_o5: "OEX-EEO-XEE",
  fill_x2_o0_x6_o7: "OEX-EEE-XOE",
  fill_x2_o0_x6_o8: "OEX-EEE-XEO",
  fill_x2_o0_x7_o1: "OOX-EEE-EXE",
  fill_x2_o0_x7_o3: "OEX-OEE-EXE",
  fill_x2_o0_x7_o4: "OEX-EOE-EXE",
  fill_x2_o0_x7_o5: "OEX-EEO-EXE",
  fill_x2_o0_x7_o6: "OEX-EEE-OXE",
  fill_x2_o0_x7_o8: "OEX-EEE-EXO",
  fill_x2_o0_x8_o1: "OOX-EEE-EEX",
  fill_x2_o0_x8_o3: "OEX-OEE-EEX",
  fill_x2_o0_x8_o4: "OEX-EOE-EEX",
  fill_x2_o0_x8_o5: "OEX-EEO-EEX",
  fill_x2_o0_x8_o6: "OEX-EEE-OEX",
  fill_x2_o0_x8_o7: "OEX-EEE-EOX",
  fill_x2_o1_x3_o4: "EOX-XOE-EEE",
  fill_x2_o1_x3_o5: "EOX-XEO-EEE",
  fill_x2_o1_x3_o6: "EOX-XEE-OEE",
  fill_x2_o1_x3_o7: "EOX-XEE-EOE",
  fill_x2_o1_x3_o8: "EOX-XEE-EEO",
  fill_x2_o1_x4_o3: "EOX-OXE-EEE",
  fill_x2_o1_x4_o5: "EOX-EXO-EEE",
  fill_x2_o1_x4_o6: "EOX-EXE-OEE",
  fill_x2_o1_x4_o7: "EOX-EXE-EOE",
  fill_x2_o1_x4_o8: "EOX-EXE-EEO",
  fill_x2_o1_x5_o3: "EOX-OEX-EEE",
  fill_x2_o1_x5_o4: "EOX-EOX-EEE",
  fill_x2_o1_x5_o6: "EOX-EEX-OEE",
  fill_x2_o1_x5_o7: "EOX-EEX-EOE",
  fill_x2_o1_x5_o8: "EOX-EEX-EEO",
  fill_x2_o1_x6_o3: "EOX-OEE-XEE",
  fill_x2_o1_x6_o4: "EOX-EOE-XEE",
  fill_x2_o1_x6_o5: "EOX-EEO-XEE",
  fill_x2_o1_x6_o7: "EOX-EEE-XOE",
  fill_x2_o1_x6_o8: "EOX-EEE-XEO",
  fill_x2_o1_x7_o3: "EOX-OEE-EXE",
  fill_x2_o1_x7_o4: "EOX-EOE-EXE",
  fill_x2_o1_x7_o5: "EOX-EEO-EXE",
  fill_x2_o1_x7_o6: "EOX-EEE-OXE",
  fill_x2_o1_x7_o8: "EOX-EEE-EXO",
  fill_x2_o1_x8_o3: "EOX-OEE-EEX",
  fill_x2_o1_x8_o4: "EOX-EOE-EEX",
  fill_x2_o1_x8_o5: "EOX-EEO-EEX",
  fill_x2_o1_x8_o6: "EOX-EEE-OEX",
  fill_x2_o1_x8_o7: "EOX-EEE-EOX",
  fill_x2_o3_x4_o5: "EEX-OXO-EEE",
  fill_x2_o3_x4_o6: "EEX-OXE-OEE",
  fill_x2_o3_x4_o7: "EEX-OXE-EOE",
  fill_x2_o3_x4_o8: "EEX-OXE-EEO",
  fill_x2_o3_x5_o4: "EEX-OOX-EEE",
  fill_x2_o3_x5_o6: "EEX-OEX-OEE",
  fill_x2_o3_x5_o7: "EEX-OEX-EOE",
  fill_x2_o3_x5_o8: "EEX-OEX-EEO",
  fill_x2_o3_x6_o4: "EEX-OOE-XEE",
  fill_x2_o3_x6_o5: "EEX-OEO-XEE",
  fill_x2_o3_x6_o7: "EEX-OEE-XOE",
  fill_x2_o3_x6_o8: "EEX-OEE-XEO",
  fill_x2_o3_x7_o4: "EEX-OOE-EXE",
  fill_x2_o3_x7_o5: "EEX-OEO-EXE",
  fill_x2_o3_x7_o6: "EEX-OEE-OXE",
  fill_x2_o3_x7_o8: "EEX-OEE-EXO",
  fill_x2_o3_x8_o4: "EEX-OOE-EEX",
  fill_x2_o3_x8_o5: "EEX-OEO-EEX",
  fill_x2_o3_x8_o6: "EEX-OEE-OEX",
  fill_x2_o3_x8_o7: "EEX-OEE-EOX",
  fill_x2_o4_x3_o5: "EEX-XOO-EEE",
  fill_x2_o4_x3_o6: "EEX-XOE-OEE",
  fill_x2_o4_x3_o7: "EEX-XOE-EOE",
  fill_x2_o4_x3_o8: "EEX-XOE-EEO",
  fill_x2_o4_x5_o6: "EEX-EOX-OEE",
  fill_x2_o4_x5_o7: "EEX-EOX-EOE",
  fill_x2_o4_x5_o8: "EEX-EOX-EEO",
  fill_x2_o4_x6_o5: "EEX-EOO-XEE",
  fill_x2_o4_x6_o7: "EEX-EOE-XOE",
  fill_x2_o4_x6_o8: "EEX-EOE-XEO",
  fill_x2_o4_x7_o5: "EEX-EOO-EXE",
  fill_x2_o4_x7_o6: "EEX-EOE-OXE",
  fill_x2_o4_x7_o8: "EEX-EOE-EXO",
  fill_x2_o4_x8_o5: "EEX-EOO-EEX",
  fill_x2_o4_x8_o6: "EEX-EOE-OEX",
  fill_x2_o4_x8_o7: "EEX-EOE-EOX",
  fill_x2_o5_x3_o6: "EEX-XEO-OEE",
  fill_x2_o5_x3_o7: "EEX-XEO-EOE",
  fill_x2_o5_x3_o8: "EEX-XEO-EEO",
  fill_x2_o5_x4_o6: "EEX-EXO-OEE",
  fill_x2_o5_x4_o7: "EEX-EXO-EOE",
  fill_x2_o5_x4_o8: "EEX-EXO-EEO",
  fill_x2_o5_x6_o7: "EEX-EEO-XOE",
  fill_x2_o5_x6_o8: "EEX-EEO-XEO",
  fill_x2_o5_x7_o6: "EEX-EEO-OXE",
  fill_x2_o5_x7_o8: "EEX-EEO-EXO",
  fill_x2_o5_x8_o6: "EEX-EEO-OEX",
  fill_x2_o5_x8_o7: "EEX-EEO-EOX",
  fill_x2_o6_x3_o7: "EEX-XEE-OOE",
  fill_x2_o6_x3_o8: "EEX-XEE-OEO",
  fill_x2_o6_x4_o7: "EEX-EXE-OOE",
  fill_x2_o6_x4_o8: "EEX-EXE-OEO",
  fill_x2_o6_x5_o7: "EEX-EEX-OOE",
  fill_x2_o6_x5_o8: "EEX-EEX-OEO",
  fill_x2_o6_x7_o8: "EEX-EEE-OXO",
  fill_x2_o6_x8_o7: "EEX-EEE-OOX",
  fill_x2_o7_x3_o8: "EEX-XEE-EOO",
  fill_x2_o7_x4_o8: "EEX-EXE-EOO",
  fill_x2_o7_x5_o8: "EEX-EEX-EOO",
  fill_x2_o7_x6_o8: "EEX-EEE-XOO",
  fill_x3_o0_x4_o1: "OOE-XXE-EEE",
  fill_x3_o0_x4_o2: "OEO-XXE-EEE",
  fill_x3_o0_x4_o5: "OEE-XXO-EEE",
  fill_x3_o0_x4_o6: "OEE-XXE-OEE",
  fill_x3_o0_x4_o7: "OEE-XXE-EOE",
  fill_x3_o0_x4_o8: "OEE-XXE-EEO",
  fill_x3_o0_x5_o1: "OOE-XEX-EEE",
  fill_x3_o0_x5_o2: "OEO-XEX-EEE",
  fill_x3_o0_x5_o4: "OEE-XOX-EEE",
  fill_x3_o0_x5_o6: "OEE-XEX-OEE",
  fill_x3_o0_x5_o7: "OEE-XEX-EOE",
  fill_x3_o0_x5_o8: "OEE-XEX-EEO",
  fill_x3_o0_x6_o1: "OOE-XEE-XEE",
  fill_x3_o0_x6_o2: "OEO-XEE-XEE",
  fill_x3_o0_x6_o4: "OEE-XOE-XEE",
  fill_x3_o0_x6_o5: "OEE-XEO-XEE",
  fill_x3_o0_x6_o7: "OEE-XEE-XOE",
  fill_x3_o0_x6_o8: "OEE-XEE-XEO",
  fill_x3_o0_x7_o1: "OOE-XEE-EXE",
  fill_x3_o0_x7_o2: "OEO-XEE-EXE",
  fill_x3_o0_x7_o4: "OEE-XOE-EXE",
  fill_x3_o0_x7_o5: "OEE-XEO-EXE",
  fill_x3_o0_x7_o6: "OEE-XEE-OXE",
  fill_x3_o0_x7_o8: "OEE-XEE-EXO",
  fill_x3_o0_x8_o1: "OOE-XEE-EEX",
  fill_x3_o0_x8_o2: "OEO-XEE-EEX",
  fill_x3_o0_x8_o4: "OEE-XOE-EEX",
  fill_x3_o0_x8_o5: "OEE-XEO-EEX",
  fill_x3_o0_x8_o6: "OEE-XEE-OEX",
  fill_x3_o0_x8_o7: "OEE-XEE-EOX",
  fill_x3_o1_x4_o2: "EOO-XXE-EEE",
  fill_x3_o1_x4_o5: "EOE-XXO-EEE",
  fill_x3_o1_x4_o6: "EOE-XXE-OEE",
  fill_x3_o1_x4_o7: "EOE-XXE-EOE",
  fill_x3_o1_x4_o8: "EOE-XXE-EEO",
  fill_x3_o1_x5_o2: "EOO-XEX-EEE",
  fill_x3_o1_x5_o4: "EOE-XOX-EEE",
  fill_x3_o1_x5_o6: "EOE-XEX-OEE",
  fill_x3_o1_x5_o7: "EOE-XEX-EOE",
  fill_x3_o1_x5_o8: "EOE-XEX-EEO",
  fill_x3_o1_x6_o2: "EOO-XEE-XEE",
  fill_x3_o1_x6_o4: "EOE-XOE-XEE",
  fill_x3_o1_x6_o5: "EOE-XEO-XEE",
  fill_x3_o1_x6_o7: "EOE-XEE-XOE",
  fill_x3_o1_x6_o8: "EOE-XEE-XEO",
  fill_x3_o1_x7_o2: "EOO-XEE-EXE",
  fill_x3_o1_x7_o4: "EOE-XOE-EXE",
  fill_x3_o1_x7_o5: "EOE-XEO-EXE",
  fill_x3_o1_x7_o6: "EOE-XEE-OXE",
  fill_x3_o1_x7_o8: "EOE-XEE-EXO",
  fill_x3_o1_x8_o2: "EOO-XEE-EEX",
  fill_x3_o1_x8_o4: "EOE-XOE-EEX",
  fill_x3_o1_x8_o5: "EOE-XEO-EEX",
  fill_x3_o1_x8_o6: "EOE-XEE-OEX",
  fill_x3_o1_x8_o7: "EOE-XEE-EOX",
  fill_x3_o2_x4_o5: "EEO-XXO-EEE",
  fill_x3_o2_x4_o6: "EEO-XXE-OEE",
  fill_x3_o2_x4_o7: "EEO-XXE-EOE",
  fill_x3_o2_x4_o8: "EEO-XXE-EEO",
  fill_x3_o2_x5_o4: "EEO-XOX-EEE",
  fill_x3_o2_x5_o6: "EEO-XEX-OEE",
  fill_x3_o2_x5_o7: "EEO-XEX-EOE",
  fill_x3_o2_x5_o8: "EEO-XEX-EEO",
  fill_x3_o2_x6_o4: "EEO-XOE-XEE",
  fill_x3_o2_x6_o5: "EEO-XEO-XEE",
  fill_x3_o2_x6_o7: "EEO-XEE-XOE",
  fill_x3_o2_x6_o8: "EEO-XEE-XEO",
  fill_x3_o2_x7_o4: "EEO-XOE-EXE",
  fill_x3_o2_x7_o5: "EEO-XEO-EXE",
  fill_x3_o2_x7_o6: "EEO-XEE-OXE",
  fill_x3_o2_x7_o8: "EEO-XEE-EXO",
  fill_x3_o2_x8_o4: "EEO-XOE-EEX",
  fill_x3_o2_x8_o5: "EEO-XEO-EEX",
  fill_x3_o2_x8_o6: "EEO-XEE-OEX",
  fill_x3_o2_x8_o7: "EEO-XEE-EOX",
  fill_x3_o4_x5_o6: "EEE-XOX-OEE",
  fill_x3_o4_x5_o7: "EEE-XOX-EOE",
  fill_x3_o4_x5_o8: "EEE-XOX-EEO",
  fill_x3_o4_x6_o5: "EEE-XOO-XEE",
  fill_x3_o4_x6_o7: "EEE-XOE-XOE",
  fill_x3_o4_x6_o8: "EEE-XOE-XEO",
  fill_x3_o4_x7_o5: "EEE-XOO-EXE",
  fill_x3_o4_x7_o6: "EEE-XOE-OXE",
  fill_x3_o4_x7_o8: "EEE-XOE-EXO",
  fill_x3_o4_x8_o5: "EEE-XOO-EEX",
  fill_x3_o4_x8_o6: "EEE-XOE-OEX",
  fill_x3_o4_x8_o7: "EEE-XOE-EOX",
  fill_x3_o5_x4_o6: "EEE-XXO-OEE",
  fill_x3_o5_x4_o7: "EEE-XXO-EOE",
  fill_x3_o5_x4_o8: "EEE-XXO-EEO",
  fill_x3_o5_x6_o7: "EEE-XEO-XOE",
  fill_x3_o5_x6_o8: "EEE-XEO-XEO",
  fill_x3_o5_x7_o6: "EEE-XEO-OXE",
  fill_x3_o5_x7_o8: "EEE-XEO-EXO",
  fill_x3_o5_x8_o6: "EEE-XEO-OEX",
  fill_x3_o5_x8_o7: "EEE-XEO-EOX",
  fill_x3_o6_x4_o7: "EEE-XXE-OOE",
  fill_x3_o6_x4_o8: "EEE-XXE-OEO",
  fill_x3_o6_x5_o7: "EEE-XEX-OOE",
  fill_x3_o6_x5_o8: "EEE-XEX-OEO",
  fill_x3_o6_x7_o8: "EEE-XEE-OXO",
  fill_x3_o6_x8_o7: "EEE-XEE-OOX",
  fill_x3_o7_x4_o8: "EEE-XXE-EOO",
  fill_x3_o7_x5_o8: "EEE-XEX-EOO",
  fill_x3_o7_x6_o8: "EEE-XEE-XOO",
  fill_x4_o0_x5_o1: "OOE-EXX-EEE",
  fill_x4_o0_x5_o2: "OEO-EXX-EEE",
  fill_x4_o0_x5_o3: "OEE-OXX-EEE",
  fill_x4_o0_x5_o6: "OEE-EXX-OEE",
  fill_x4_o0_x5_o7: "OEE-EXX-EOE",
  fill_x4_o0_x5_o8: "OEE-EXX-EEO",
  fill_x4_o0_x6_o1: "OOE-EXE-XEE",
  fill_x4_o0_x6_o2: "OEO-EXE-XEE",
  fill_x4_o0_x6_o3: "OEE-OXE-XEE",
  fill_x4_o0_x6_o5: "OEE-EXO-XEE",
  fill_x4_o0_x6_o7: "OEE-EXE-XOE",
  fill_x4_o0_x6_o8: "OEE-EXE-XEO",
  fill_x4_o0_x7_o1: "OOE-EXE-EXE",
  fill_x4_o0_x7_o2: "OEO-EXE-EXE",
  fill_x4_o0_x7_o3: "OEE-OXE-EXE",
  fill_x4_o0_x7_o5: "OEE-EXO-EXE",
  fill_x4_o0_x7_o6: "OEE-EXE-OXE",
  fill_x4_o0_x7_o8: "OEE-EXE-EXO",
  fill_x4_o0_x8_o1: "OOE-EXE-EEX",
  fill_x4_o0_x8_o2: "OEO-EXE-EEX",
  fill_x4_o0_x8_o3: "OEE-OXE-EEX",
  fill_x4_o0_x8_o5: "OEE-EXO-EEX",
  fill_x4_o0_x8_o6: "OEE-EXE-OEX",
  fill_x4_o0_x8_o7: "OEE-EXE-EOX",
  fill_x4_o1_x5_o2: "EOO-EXX-EEE",
  fill_x4_o1_x5_o3: "EOE-OXX-EEE",
  fill_x4_o1_x5_o6: "EOE-EXX-OEE",
  fill_x4_o1_x5_o7: "EOE-EXX-EOE",
  fill_x4_o1_x5_o8: "EOE-EXX-EEO",
  fill_x4_o1_x6_o2: "EOO-EXE-XEE",
  fill_x4_o1_x6_o3: "EOE-OXE-XEE",
  fill_x4_o1_x6_o5: "EOE-EXO-XEE",
  fill_x4_o1_x6_o7: "EOE-EXE-XOE",
  fill_x4_o1_x6_o8: "EOE-EXE-XEO",
  fill_x4_o1_x7_o2: "EOO-EXE-EXE",
  fill_x4_o1_x7_o3: "EOE-OXE-EXE",
  fill_x4_o1_x7_o5: "EOE-EXO-EXE",
  fill_x4_o1_x7_o6: "EOE-EXE-OXE",
  fill_x4_o1_x7_o8: "EOE-EXE-EXO",
  fill_x4_o1_x8_o2: "EOO-EXE-EEX",
  fill_x4_o1_x8_o3: "EOE-OXE-EEX",
  fill_x4_o1_x8_o5: "EOE-EXO-EEX",
  fill_x4_o1_x8_o6: "EOE-EXE-OEX",
  fill_x4_o1_x8_o7: "EOE-EXE-EOX",
  fill_x4_o2_x5_o3: "EEO-OXX-EEE",
  fill_x4_o2_x5_o6: "EEO-EXX-OEE",
  fill_x4_o2_x5_o7: "EEO-EXX-EOE",
  fill_x4_o2_x5_o8: "EEO-EXX-EEO",
  fill_x4_o2_x6_o3: "EEO-OXE-XEE",
  fill_x4_o2_x6_o5: "EEO-EXO-XEE",
  fill_x4_o2_x6_o7: "EEO-EXE-XOE",
  fill_x4_o2_x6_o8: "EEO-EXE-XEO",
  fill_x4_o2_x7_o3: "EEO-OXE-EXE",
  fill_x4_o2_x7_o5: "EEO-EXO-EXE",
  fill_x4_o2_x7_o6: "EEO-EXE-OXE",
  fill_x4_o2_x7_o8: "EEO-EXE-EXO",
  fill_x4_o2_x8_o3: "EEO-OXE-EEX",
  fill_x4_o2_x8_o5: "EEO-EXO-EEX",
  fill_x4_o2_x8_o6: "EEO-EXE-OEX",
  fill_x4_o2_x8_o7: "EEO-EXE-EOX",
  fill_x4_o3_x5_o6: "EEE-OXX-OEE",
  fill_x4_o3_x5_o7: "EEE-OXX-EOE",
  fill_x4_o3_x5_o8: "EEE-OXX-EEO",
  fill_x4_o3_x6_o5: "EEE-OXO-XEE",
  fill_x4_o3_x6_o7: "EEE-OXE-XOE",
  fill_x4_o3_x6_o8: "EEE-OXE-XEO",
  fill_x4_o3_x7_o5: "EEE-OXO-EXE",
  fill_x4_o3_x7_o6: "EEE-OXE-OXE",
  fill_x4_o3_x7_o8: "EEE-OXE-EXO",
  fill_x4_o3_x8_o5: "EEE-OXO-EEX",
  fill_x4_o3_x8_o6: "EEE-OXE-OEX",
  fill_x4_o3_x8_o7: "EEE-OXE-EOX",
  fill_x4_o5_x6_o7: "EEE-EXO-XOE",
  fill_x4_o5_x6_o8: "EEE-EXO-XEO",
  fill_x4_o5_x7_o6: "EEE-EXO-OXE",
  fill_x4_o5_x7_o8: "EEE-EXO-EXO",
  fill_x4_o5_x8_o6: "EEE-EXO-OEX",
  fill_x4_o5_x8_o7: "EEE-EXO-EOX",
  fill_x4_o6_x5_o7: "EEE-EXX-OOE",
  fill_x4_o6_x5_o8: "EEE-EXX-OEO",
  fill_x4_o6_x7_o8: "EEE-EXE-OXO",
  fill_x4_o6_x8_o7: "EEE-EXE-OOX",
  fill_x4_o7_x5_o8: "EEE-EXX-EOO",
  fill_x4_o7_x6_o8: "EEE-EXE-XOO",
  fill_x5_o0_x6_o1: "OOE-EEX-XEE",
  fill_x5_o0_x6_o2: "OEO-EEX-XEE",
  fill_x5_o0_x6_o3: "OEE-OEX-XEE",
  fill_x5_o0_x6_o4: "OEE-EOX-XEE",
  fill_x5_o0_x6_o7: "OEE-EEX-XOE",
  fill_x5_o0_x6_o8: "OEE-EEX-XEO",
  fill_x5_o0_x7_o1: "OOE-EEX-EXE",
  fill_x5_o0_x7_o2: "OEO-EEX-EXE",
  fill_x5_o0_x7_o3: "OEE-OEX-EXE",
  fill_x5_o0_x7_o4: "OEE-EOX-EXE",
  fill_x5_o0_x7_o6: "OEE-EEX-OXE",
  fill_x5_o0_x7_o8: "OEE-EEX-EXO",
  fill_x5_o0_x8_o1: "OOE-EEX-EEX",
  fill_x5_o0_x8_o2: "OEO-EEX-EEX",
  fill_x5_o0_x8_o3: "OEE-OEX-EEX",
  fill_x5_o0_x8_o4: "OEE-EOX-EEX",
  fill_x5_o0_x8_o6: "OEE-EEX-OEX",
  fill_x5_o0_x8_o7: "OEE-EEX-EOX",
  fill_x5_o1_x6_o2: "EOO-EEX-XEE",
  fill_x5_o1_x6_o3: "EOE-OEX-XEE",
  fill_x5_o1_x6_o4: "EOE-EOX-XEE",
  fill_x5_o1_x6_o7: "EOE-EEX-XOE",
  fill_x5_o1_x6_o8: "EOE-EEX-XEO",
  fill_x5_o1_x7_o2: "EOO-EEX-EXE",
  fill_x5_o1_x7_o3: "EOE-OEX-EXE",
  fill_x5_o1_x7_o4: "EOE-EOX-EXE",
  fill_x5_o1_x7_o6: "EOE-EEX-OXE",
  fill_x5_o1_x7_o8: "EOE-EEX-EXO",
  fill_x5_o1_x8_o2: "EOO-EEX-EEX",
  fill_x5_o1_x8_o3: "EOE-OEX-EEX",
  fill_x5_o1_x8_o4: "EOE-EOX-EEX",
  fill_x5_o1_x8_o6: "EOE-EEX-OEX",
  fill_x5_o1_x8_o7: "EOE-EEX-EOX",
  fill_x5_o2_x6_o3: "EEO-OEX-XEE",
  fill_x5_o2_x6_o4: "EEO-EOX-XEE",
  fill_x5_o2_x6_o7: "EEO-EEX-XOE",
  fill_x5_o2_x6_o8: "EEO-EEX-XEO",
  fill_x5_o2_x7_o3: "EEO-OEX-EXE",
  fill_x5_o2_x7_o4: "EEO-EOX-EXE",
  fill_x5_o2_x7_o6: "EEO-EEX-OXE",
  fill_x5_o2_x7_o8: "EEO-EEX-EXO",
  fill_x5_o2_x8_o3: "EEO-OEX-EEX",
  fill_x5_o2_x8_o4: "EEO-EOX-EEX",
  fill_x5_o2_x8_o6: "EEO-EEX-OEX",
  fill_x5_o2_x8_o7: "EEO-EEX-EOX",
  fill_x5_o3_x6_o4: "EEE-OOX-XEE",
  fill_x5_o3_x6_o7: "EEE-OEX-XOE",
  fill_x5_o3_x6_o8: "EEE-OEX-XEO",
  fill_x5_o3_x7_o4: "EEE-OOX-EXE",
  fill_x5_o3_x7_o6: "EEE-OEX-OXE",
  fill_x5_o3_x7_o8: "EEE-OEX-EXO",
  fill_x5_o3_x8_o4: "EEE-OOX-EEX",
  fill_x5_o3_x8_o6: "EEE-OEX-OEX",
  fill_x5_o3_x8_o7: "EEE-OEX-EOX",
  fill_x5_o4_x6_o7: "EEE-EOX-XOE",
  fill_x5_o4_x6_o8: "EEE-EOX-XEO",
  fill_x5_o4_x7_o6: "EEE-EOX-OXE",
  fill_x5_o4_x7_o8: "EEE-EOX-EXO",
  fill_x5_o4_x8_o6: "EEE-EOX-OEX",
  fill_x5_o4_x8_o7: "EEE-EOX-EOX",
  fill_x5_o6_x7_o8: "EEE-EEX-OXO",
  fill_x5_o6_x8_o7: "EEE-EEX-OOX",
  fill_x5_o7_x6_o8: "EEE-EEX-XOO",
  fill_x6_o0_x7_o1: "OOE-EEE-XXE",
  fill_x6_o0_x7_o2: "OEO-EEE-XXE",
  fill_x6_o0_x7_o3: "OEE-OEE-XXE",
  fill_x6_o0_x7_o4: "OEE-EOE-XXE",
  fill_x6_o0_x7_o5: "OEE-EEO-XXE",
  fill_x6_o0_x7_o8: "OEE-EEE-XXO",
  fill_x6_o0_x8_o1: "OOE-EEE-XEX",
  fill_x6_o0_x8_o2: "OEO-EEE-XEX",
  fill_x6_o0_x8_o3: "OEE-OEE-XEX",
  fill_x6_o0_x8_o4: "OEE-EOE-XEX",
  fill_x6_o0_x8_o5: "OEE-EEO-XEX",
  fill_x6_o0_x8_o7: "OEE-EEE-XOX",
  fill_x6_o1_x7_o2: "EOO-EEE-XXE",
  fill_x6_o1_x7_o3: "EOE-OEE-XXE",
  fill_x6_o1_x7_o4: "EOE-EOE-XXE",
  fill_x6_o1_x7_o5: "EOE-EEO-XXE",
  fill_x6_o1_x7_o8: "EOE-EEE-XXO",
  fill_x6_o1_x8_o2: "EOO-EEE-XEX",
  fill_x6_o1_x8_o3: "EOE-OEE-XEX",
  fill_x6_o1_x8_o4: "EOE-EOE-XEX",
  fill_x6_o1_x8_o5: "EOE-EEO-XEX",
  fill_x6_o1_x8_o7: "EOE-EEE-XOX",
  fill_x6_o2_x7_o3: "EEO-OEE-XXE",
  fill_x6_o2_x7_o4: "EEO-EOE-XXE",
  fill_x6_o2_x7_o5: "EEO-EEO-XXE",
  fill_x6_o2_x7_o8: "EEO-EEE-XXO",
  fill_x6_o2_x8_o3: "EEO-OEE-XEX",
  fill_x6_o2_x8_o4: "EEO-EOE-XEX",
  fill_x6_o2_x8_o5: "EEO-EEO-XEX",
  fill_x6_o2_x8_o7: "EEO-EEE-XOX",
  fill_x6_o3_x7_o4: "EEE-OOE-XXE",
  fill_x6_o3_x7_o5: "EEE-OEO-XXE",
  fill_x6_o3_x7_o8: "EEE-OEE-XXO",
  fill_x6_o3_x8_o4: "EEE-OOE-XEX",
  fill_x6_o3_x8_o5: "EEE-OEO-XEX",
  fill_x6_o3_x8_o7: "EEE-OEE-XOX",
  fill_x6_o4_x7_o5: "EEE-EOO-XXE",
  fill_x6_o4_x7_o8: "EEE-EOE-XXO",
  fill_x6_o4_x8_o5: "EEE-EOO-XEX",
  fill_x6_o4_x8_o7: "EEE-EOE-XOX",
  fill_x6_o5_x7_o8: "EEE-EEO-XXO",
  fill_x6_o5_x8_o7: "EEE-EEO-XOX",
  fill_x7_o0_x8_o1: "OOE-EEE-EXX",
  fill_x7_o0_x8_o2: "OEO-EEE-EXX",
  fill_x7_o0_x8_o3: "OEE-OEE-EXX",
  fill_x7_o0_x8_o4: "OEE-EOE-EXX",
  fill_x7_o0_x8_o5: "OEE-EEO-EXX",
  fill_x7_o0_x8_o6: "OEE-EEE-OXX",
  fill_x7_o1_x8_o2: "EOO-EEE-EXX",
  fill_x7_o1_x8_o3: "EOE-OEE-EXX",
  fill_x7_o1_x8_o4: "EOE-EOE-EXX",
  fill_x7_o1_x8_o5: "EOE-EEO-EXX",
  fill_x7_o1_x8_o6: "EOE-EEE-OXX",
  fill_x7_o2_x8_o3: "EEO-OEE-EXX",
  fill_x7_o2_x8_o4: "EEO-EOE-EXX",
  fill_x7_o2_x8_o5: "EEO-EEO-EXX",
  fill_x7_o2_x8_o6: "EEO-EEE-OXX",
  fill_x7_o3_x8_o4: "EEE-OOE-EXX",
  fill_x7_o3_x8_o5: "EEE-OEO-EXX",
  fill_x7_o3_x8_o6: "EEE-OEE-OXX",
  fill_x7_o4_x8_o5: "EEE-EOO-EXX",
  fill_x7_o4_x8_o6: "EEE-EOE-OXX",
  fill_x7_o5_x8_o6: "EEE-EEO-OXX",
};

function getInputArr(simulationCase: SimulationCase): number[][] {
  if (simulationCase === "empty") return [];

  const oneDIndex = simulationCase.match(/\d/g) || [];
  const twoDIndex = oneDIndex.map((index) => [Math.floor(Number(index) / 3), Number(index) % 3]);
  return twoDIndex;
}

export function boardToStr(x: TicTacToe) {
  return x
    .getBoard()
    .map((row) => row.map((e) => (e === TicTacToeElement.X ? "X" : e === TicTacToeElement.O ? "O" : "E")).join(""))
    .join("-");
}

export function boardToStrInvertXO(x: TicTacToe) {
  return x
    .getBoard()
    .map((row) => row.map((e) => (e === TicTacToeElement.X ? "O" : e === TicTacToeElement.O ? "X" : "E")).join(""))
    .join("-");
}

export function getTicTacToe(simulationCase: SimulationCase): TicTacToe {
  const x = TicTacToeElement.X;
  const r = new TicTacToe(x);
  for (const [row, col] of getInputArr(simulationCase)) {
    r.input(row, col);
  }
  return r;
}

export function getMatchCase(ticTacToe: TicTacToe): SimulationCase | null {
  if (ticTacToe.getFilled() < 5) {
    if (ticTacToe.getStartTurn() === TicTacToeElement.X) {
      const str = boardToStr(ticTacToe);
      for (const [key, value] of Object.entries(boardStrMap)) {
        if (str === value) return key as SimulationCase;
      }
    } else {
      const invertStr = boardToStrInvertXO(ticTacToe);
      for (const [key, value] of Object.entries(boardStrMap)) {
        if (invertStr === value) return key as SimulationCase;
      }
    }
  }

  return null;
}
