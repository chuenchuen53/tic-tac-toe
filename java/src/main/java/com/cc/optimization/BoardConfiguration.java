package com.cc.optimization;

import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class BoardConfiguration {
    private static final TicTacToeElement x = TicTacToeElement.X;
    public static HashMap<SimulationCase, String> boardStrMap = new HashMap<>() {{
        put(SimulationCase.EMPTY, "EEE-EEE-EEE");
        put(SimulationCase.FILL_X0, "XEE-EEE-EEE");
        put(SimulationCase.FILL_X1, "EXE-EEE-EEE");
        put(SimulationCase.FILL_X2, "EEX-EEE-EEE");
        put(SimulationCase.FILL_X3, "EEE-XEE-EEE");
        put(SimulationCase.FILL_X4, "EEE-EXE-EEE");
        put(SimulationCase.FILL_X5, "EEE-EEX-EEE");
        put(SimulationCase.FILL_X6, "EEE-EEE-XEE");
        put(SimulationCase.FILL_X7, "EEE-EEE-EXE");
        put(SimulationCase.FILL_X8, "EEE-EEE-EEX");
        put(SimulationCase.FILL_X0_O1, "XOE-EEE-EEE");
        put(SimulationCase.FILL_X0_O2, "XEO-EEE-EEE");
        put(SimulationCase.FILL_X0_O3, "XEE-OEE-EEE");
        put(SimulationCase.FILL_X0_O4, "XEE-EOE-EEE");
        put(SimulationCase.FILL_X0_O5, "XEE-EEO-EEE");
        put(SimulationCase.FILL_X0_O6, "XEE-EEE-OEE");
        put(SimulationCase.FILL_X0_O7, "XEE-EEE-EOE");
        put(SimulationCase.FILL_X0_O8, "XEE-EEE-EEO");
        put(SimulationCase.FILL_X1_O0, "OXE-EEE-EEE");
        put(SimulationCase.FILL_X1_O2, "EXO-EEE-EEE");
        put(SimulationCase.FILL_X1_O3, "EXE-OEE-EEE");
        put(SimulationCase.FILL_X1_O4, "EXE-EOE-EEE");
        put(SimulationCase.FILL_X1_O5, "EXE-EEO-EEE");
        put(SimulationCase.FILL_X1_O6, "EXE-EEE-OEE");
        put(SimulationCase.FILL_X1_O7, "EXE-EEE-EOE");
        put(SimulationCase.FILL_X1_O8, "EXE-EEE-EEO");
        put(SimulationCase.FILL_X2_O0, "OEX-EEE-EEE");
        put(SimulationCase.FILL_X2_O1, "EOX-EEE-EEE");
        put(SimulationCase.FILL_X2_O3, "EEX-OEE-EEE");
        put(SimulationCase.FILL_X2_O4, "EEX-EOE-EEE");
        put(SimulationCase.FILL_X2_O5, "EEX-EEO-EEE");
        put(SimulationCase.FILL_X2_O6, "EEX-EEE-OEE");
        put(SimulationCase.FILL_X2_O7, "EEX-EEE-EOE");
        put(SimulationCase.FILL_X2_O8, "EEX-EEE-EEO");
        put(SimulationCase.FILL_X3_O0, "OEE-XEE-EEE");
        put(SimulationCase.FILL_X3_O1, "EOE-XEE-EEE");
        put(SimulationCase.FILL_X3_O2, "EEO-XEE-EEE");
        put(SimulationCase.FILL_X3_O4, "EEE-XOE-EEE");
        put(SimulationCase.FILL_X3_O5, "EEE-XEO-EEE");
        put(SimulationCase.FILL_X3_O6, "EEE-XEE-OEE");
        put(SimulationCase.FILL_X3_O7, "EEE-XEE-EOE");
        put(SimulationCase.FILL_X3_O8, "EEE-XEE-EEO");
        put(SimulationCase.FILL_X4_O0, "OEE-EXE-EEE");
        put(SimulationCase.FILL_X4_O1, "EOE-EXE-EEE");
        put(SimulationCase.FILL_X4_O2, "EEO-EXE-EEE");
        put(SimulationCase.FILL_X4_O3, "EEE-OXE-EEE");
        put(SimulationCase.FILL_X4_O5, "EEE-EXO-EEE");
        put(SimulationCase.FILL_X4_O6, "EEE-EXE-OEE");
        put(SimulationCase.FILL_X4_O7, "EEE-EXE-EOE");
        put(SimulationCase.FILL_X4_O8, "EEE-EXE-EEO");
        put(SimulationCase.FILL_X5_O0, "OEE-EEX-EEE");
        put(SimulationCase.FILL_X5_O1, "EOE-EEX-EEE");
        put(SimulationCase.FILL_X5_O2, "EEO-EEX-EEE");
        put(SimulationCase.FILL_X5_O3, "EEE-OEX-EEE");
        put(SimulationCase.FILL_X5_O4, "EEE-EOX-EEE");
        put(SimulationCase.FILL_X5_O6, "EEE-EEX-OEE");
        put(SimulationCase.FILL_X5_O7, "EEE-EEX-EOE");
        put(SimulationCase.FILL_X5_O8, "EEE-EEX-EEO");
        put(SimulationCase.FILL_X6_O0, "OEE-EEE-XEE");
        put(SimulationCase.FILL_X6_O1, "EOE-EEE-XEE");
        put(SimulationCase.FILL_X6_O2, "EEO-EEE-XEE");
        put(SimulationCase.FILL_X6_O3, "EEE-OEE-XEE");
        put(SimulationCase.FILL_X6_O4, "EEE-EOE-XEE");
        put(SimulationCase.FILL_X6_O5, "EEE-EEO-XEE");
        put(SimulationCase.FILL_X6_O7, "EEE-EEE-XOE");
        put(SimulationCase.FILL_X6_O8, "EEE-EEE-XEO");
        put(SimulationCase.FILL_X7_O0, "OEE-EEE-EXE");
        put(SimulationCase.FILL_X7_O1, "EOE-EEE-EXE");
        put(SimulationCase.FILL_X7_O2, "EEO-EEE-EXE");
        put(SimulationCase.FILL_X7_O3, "EEE-OEE-EXE");
        put(SimulationCase.FILL_X7_O4, "EEE-EOE-EXE");
        put(SimulationCase.FILL_X7_O5, "EEE-EEO-EXE");
        put(SimulationCase.FILL_X7_O6, "EEE-EEE-OXE");
        put(SimulationCase.FILL_X7_O8, "EEE-EEE-EXO");
        put(SimulationCase.FILL_X8_O0, "OEE-EEE-EEX");
        put(SimulationCase.FILL_X8_O1, "EOE-EEE-EEX");
        put(SimulationCase.FILL_X8_O2, "EEO-EEE-EEX");
        put(SimulationCase.FILL_X8_O3, "EEE-OEE-EEX");
        put(SimulationCase.FILL_X8_O4, "EEE-EOE-EEX");
        put(SimulationCase.FILL_X8_O5, "EEE-EEO-EEX");
        put(SimulationCase.FILL_X8_O6, "EEE-EEE-OEX");
        put(SimulationCase.FILL_X8_O7, "EEE-EEE-EOX");
        put(SimulationCase.FILL_X0_O1_X2, "XOX-EEE-EEE");
        put(SimulationCase.FILL_X0_O1_X3, "XOE-XEE-EEE");
        put(SimulationCase.FILL_X0_O1_X4, "XOE-EXE-EEE");
        put(SimulationCase.FILL_X0_O1_X5, "XOE-EEX-EEE");
        put(SimulationCase.FILL_X0_O1_X6, "XOE-EEE-XEE");
        put(SimulationCase.FILL_X0_O1_X7, "XOE-EEE-EXE");
        put(SimulationCase.FILL_X0_O1_X8, "XOE-EEE-EEX");
        put(SimulationCase.FILL_X0_O2_X1, "XXO-EEE-EEE");
        put(SimulationCase.FILL_X0_O2_X3, "XEO-XEE-EEE");
        put(SimulationCase.FILL_X0_O2_X4, "XEO-EXE-EEE");
        put(SimulationCase.FILL_X0_O2_X5, "XEO-EEX-EEE");
        put(SimulationCase.FILL_X0_O2_X6, "XEO-EEE-XEE");
        put(SimulationCase.FILL_X0_O2_X7, "XEO-EEE-EXE");
        put(SimulationCase.FILL_X0_O2_X8, "XEO-EEE-EEX");
        put(SimulationCase.FILL_X0_O3_X1, "XXE-OEE-EEE");
        put(SimulationCase.FILL_X0_O3_X2, "XEX-OEE-EEE");
        put(SimulationCase.FILL_X0_O3_X4, "XEE-OXE-EEE");
        put(SimulationCase.FILL_X0_O3_X5, "XEE-OEX-EEE");
        put(SimulationCase.FILL_X0_O3_X6, "XEE-OEE-XEE");
        put(SimulationCase.FILL_X0_O3_X7, "XEE-OEE-EXE");
        put(SimulationCase.FILL_X0_O3_X8, "XEE-OEE-EEX");
        put(SimulationCase.FILL_X0_O4_X1, "XXE-EOE-EEE");
        put(SimulationCase.FILL_X0_O4_X2, "XEX-EOE-EEE");
        put(SimulationCase.FILL_X0_O4_X3, "XEE-XOE-EEE");
        put(SimulationCase.FILL_X0_O4_X5, "XEE-EOX-EEE");
        put(SimulationCase.FILL_X0_O4_X6, "XEE-EOE-XEE");
        put(SimulationCase.FILL_X0_O4_X7, "XEE-EOE-EXE");
        put(SimulationCase.FILL_X0_O4_X8, "XEE-EOE-EEX");
        put(SimulationCase.FILL_X0_O5_X1, "XXE-EEO-EEE");
        put(SimulationCase.FILL_X0_O5_X2, "XEX-EEO-EEE");
        put(SimulationCase.FILL_X0_O5_X3, "XEE-XEO-EEE");
        put(SimulationCase.FILL_X0_O5_X4, "XEE-EXO-EEE");
        put(SimulationCase.FILL_X0_O5_X6, "XEE-EEO-XEE");
        put(SimulationCase.FILL_X0_O5_X7, "XEE-EEO-EXE");
        put(SimulationCase.FILL_X0_O5_X8, "XEE-EEO-EEX");
        put(SimulationCase.FILL_X0_O6_X1, "XXE-EEE-OEE");
        put(SimulationCase.FILL_X0_O6_X2, "XEX-EEE-OEE");
        put(SimulationCase.FILL_X0_O6_X3, "XEE-XEE-OEE");
        put(SimulationCase.FILL_X0_O6_X4, "XEE-EXE-OEE");
        put(SimulationCase.FILL_X0_O6_X5, "XEE-EEX-OEE");
        put(SimulationCase.FILL_X0_O6_X7, "XEE-EEE-OXE");
        put(SimulationCase.FILL_X0_O6_X8, "XEE-EEE-OEX");
        put(SimulationCase.FILL_X0_O7_X1, "XXE-EEE-EOE");
        put(SimulationCase.FILL_X0_O7_X2, "XEX-EEE-EOE");
        put(SimulationCase.FILL_X0_O7_X3, "XEE-XEE-EOE");
        put(SimulationCase.FILL_X0_O7_X4, "XEE-EXE-EOE");
        put(SimulationCase.FILL_X0_O7_X5, "XEE-EEX-EOE");
        put(SimulationCase.FILL_X0_O7_X6, "XEE-EEE-XOE");
        put(SimulationCase.FILL_X0_O7_X8, "XEE-EEE-EOX");
        put(SimulationCase.FILL_X0_O8_X1, "XXE-EEE-EEO");
        put(SimulationCase.FILL_X0_O8_X2, "XEX-EEE-EEO");
        put(SimulationCase.FILL_X0_O8_X3, "XEE-XEE-EEO");
        put(SimulationCase.FILL_X0_O8_X4, "XEE-EXE-EEO");
        put(SimulationCase.FILL_X0_O8_X5, "XEE-EEX-EEO");
        put(SimulationCase.FILL_X0_O8_X6, "XEE-EEE-XEO");
        put(SimulationCase.FILL_X0_O8_X7, "XEE-EEE-EXO");
        put(SimulationCase.FILL_X1_O0_X2, "OXX-EEE-EEE");
        put(SimulationCase.FILL_X1_O0_X3, "OXE-XEE-EEE");
        put(SimulationCase.FILL_X1_O0_X4, "OXE-EXE-EEE");
        put(SimulationCase.FILL_X1_O0_X5, "OXE-EEX-EEE");
        put(SimulationCase.FILL_X1_O0_X6, "OXE-EEE-XEE");
        put(SimulationCase.FILL_X1_O0_X7, "OXE-EEE-EXE");
        put(SimulationCase.FILL_X1_O0_X8, "OXE-EEE-EEX");
        put(SimulationCase.FILL_X1_O2_X3, "EXO-XEE-EEE");
        put(SimulationCase.FILL_X1_O2_X4, "EXO-EXE-EEE");
        put(SimulationCase.FILL_X1_O2_X5, "EXO-EEX-EEE");
        put(SimulationCase.FILL_X1_O2_X6, "EXO-EEE-XEE");
        put(SimulationCase.FILL_X1_O2_X7, "EXO-EEE-EXE");
        put(SimulationCase.FILL_X1_O2_X8, "EXO-EEE-EEX");
        put(SimulationCase.FILL_X1_O3_X2, "EXX-OEE-EEE");
        put(SimulationCase.FILL_X1_O3_X4, "EXE-OXE-EEE");
        put(SimulationCase.FILL_X1_O3_X5, "EXE-OEX-EEE");
        put(SimulationCase.FILL_X1_O3_X6, "EXE-OEE-XEE");
        put(SimulationCase.FILL_X1_O3_X7, "EXE-OEE-EXE");
        put(SimulationCase.FILL_X1_O3_X8, "EXE-OEE-EEX");
        put(SimulationCase.FILL_X1_O4_X2, "EXX-EOE-EEE");
        put(SimulationCase.FILL_X1_O4_X3, "EXE-XOE-EEE");
        put(SimulationCase.FILL_X1_O4_X5, "EXE-EOX-EEE");
        put(SimulationCase.FILL_X1_O4_X6, "EXE-EOE-XEE");
        put(SimulationCase.FILL_X1_O4_X7, "EXE-EOE-EXE");
        put(SimulationCase.FILL_X1_O4_X8, "EXE-EOE-EEX");
        put(SimulationCase.FILL_X1_O5_X2, "EXX-EEO-EEE");
        put(SimulationCase.FILL_X1_O5_X3, "EXE-XEO-EEE");
        put(SimulationCase.FILL_X1_O5_X4, "EXE-EXO-EEE");
        put(SimulationCase.FILL_X1_O5_X6, "EXE-EEO-XEE");
        put(SimulationCase.FILL_X1_O5_X7, "EXE-EEO-EXE");
        put(SimulationCase.FILL_X1_O5_X8, "EXE-EEO-EEX");
        put(SimulationCase.FILL_X1_O6_X2, "EXX-EEE-OEE");
        put(SimulationCase.FILL_X1_O6_X3, "EXE-XEE-OEE");
        put(SimulationCase.FILL_X1_O6_X4, "EXE-EXE-OEE");
        put(SimulationCase.FILL_X1_O6_X5, "EXE-EEX-OEE");
        put(SimulationCase.FILL_X1_O6_X7, "EXE-EEE-OXE");
        put(SimulationCase.FILL_X1_O6_X8, "EXE-EEE-OEX");
        put(SimulationCase.FILL_X1_O7_X2, "EXX-EEE-EOE");
        put(SimulationCase.FILL_X1_O7_X3, "EXE-XEE-EOE");
        put(SimulationCase.FILL_X1_O7_X4, "EXE-EXE-EOE");
        put(SimulationCase.FILL_X1_O7_X5, "EXE-EEX-EOE");
        put(SimulationCase.FILL_X1_O7_X6, "EXE-EEE-XOE");
        put(SimulationCase.FILL_X1_O7_X8, "EXE-EEE-EOX");
        put(SimulationCase.FILL_X1_O8_X2, "EXX-EEE-EEO");
        put(SimulationCase.FILL_X1_O8_X3, "EXE-XEE-EEO");
        put(SimulationCase.FILL_X1_O8_X4, "EXE-EXE-EEO");
        put(SimulationCase.FILL_X1_O8_X5, "EXE-EEX-EEO");
        put(SimulationCase.FILL_X1_O8_X6, "EXE-EEE-XEO");
        put(SimulationCase.FILL_X1_O8_X7, "EXE-EEE-EXO");
        put(SimulationCase.FILL_X2_O0_X3, "OEX-XEE-EEE");
        put(SimulationCase.FILL_X2_O0_X4, "OEX-EXE-EEE");
        put(SimulationCase.FILL_X2_O0_X5, "OEX-EEX-EEE");
        put(SimulationCase.FILL_X2_O0_X6, "OEX-EEE-XEE");
        put(SimulationCase.FILL_X2_O0_X7, "OEX-EEE-EXE");
        put(SimulationCase.FILL_X2_O0_X8, "OEX-EEE-EEX");
        put(SimulationCase.FILL_X2_O1_X3, "EOX-XEE-EEE");
        put(SimulationCase.FILL_X2_O1_X4, "EOX-EXE-EEE");
        put(SimulationCase.FILL_X2_O1_X5, "EOX-EEX-EEE");
        put(SimulationCase.FILL_X2_O1_X6, "EOX-EEE-XEE");
        put(SimulationCase.FILL_X2_O1_X7, "EOX-EEE-EXE");
        put(SimulationCase.FILL_X2_O1_X8, "EOX-EEE-EEX");
        put(SimulationCase.FILL_X2_O3_X4, "EEX-OXE-EEE");
        put(SimulationCase.FILL_X2_O3_X5, "EEX-OEX-EEE");
        put(SimulationCase.FILL_X2_O3_X6, "EEX-OEE-XEE");
        put(SimulationCase.FILL_X2_O3_X7, "EEX-OEE-EXE");
        put(SimulationCase.FILL_X2_O3_X8, "EEX-OEE-EEX");
        put(SimulationCase.FILL_X2_O4_X3, "EEX-XOE-EEE");
        put(SimulationCase.FILL_X2_O4_X5, "EEX-EOX-EEE");
        put(SimulationCase.FILL_X2_O4_X6, "EEX-EOE-XEE");
        put(SimulationCase.FILL_X2_O4_X7, "EEX-EOE-EXE");
        put(SimulationCase.FILL_X2_O4_X8, "EEX-EOE-EEX");
        put(SimulationCase.FILL_X2_O5_X3, "EEX-XEO-EEE");
        put(SimulationCase.FILL_X2_O5_X4, "EEX-EXO-EEE");
        put(SimulationCase.FILL_X2_O5_X6, "EEX-EEO-XEE");
        put(SimulationCase.FILL_X2_O5_X7, "EEX-EEO-EXE");
        put(SimulationCase.FILL_X2_O5_X8, "EEX-EEO-EEX");
        put(SimulationCase.FILL_X2_O6_X3, "EEX-XEE-OEE");
        put(SimulationCase.FILL_X2_O6_X4, "EEX-EXE-OEE");
        put(SimulationCase.FILL_X2_O6_X5, "EEX-EEX-OEE");
        put(SimulationCase.FILL_X2_O6_X7, "EEX-EEE-OXE");
        put(SimulationCase.FILL_X2_O6_X8, "EEX-EEE-OEX");
        put(SimulationCase.FILL_X2_O7_X3, "EEX-XEE-EOE");
        put(SimulationCase.FILL_X2_O7_X4, "EEX-EXE-EOE");
        put(SimulationCase.FILL_X2_O7_X5, "EEX-EEX-EOE");
        put(SimulationCase.FILL_X2_O7_X6, "EEX-EEE-XOE");
        put(SimulationCase.FILL_X2_O7_X8, "EEX-EEE-EOX");
        put(SimulationCase.FILL_X2_O8_X3, "EEX-XEE-EEO");
        put(SimulationCase.FILL_X2_O8_X4, "EEX-EXE-EEO");
        put(SimulationCase.FILL_X2_O8_X5, "EEX-EEX-EEO");
        put(SimulationCase.FILL_X2_O8_X6, "EEX-EEE-XEO");
        put(SimulationCase.FILL_X2_O8_X7, "EEX-EEE-EXO");
        put(SimulationCase.FILL_X3_O0_X4, "OEE-XXE-EEE");
        put(SimulationCase.FILL_X3_O0_X5, "OEE-XEX-EEE");
        put(SimulationCase.FILL_X3_O0_X6, "OEE-XEE-XEE");
        put(SimulationCase.FILL_X3_O0_X7, "OEE-XEE-EXE");
        put(SimulationCase.FILL_X3_O0_X8, "OEE-XEE-EEX");
        put(SimulationCase.FILL_X3_O1_X4, "EOE-XXE-EEE");
        put(SimulationCase.FILL_X3_O1_X5, "EOE-XEX-EEE");
        put(SimulationCase.FILL_X3_O1_X6, "EOE-XEE-XEE");
        put(SimulationCase.FILL_X3_O1_X7, "EOE-XEE-EXE");
        put(SimulationCase.FILL_X3_O1_X8, "EOE-XEE-EEX");
        put(SimulationCase.FILL_X3_O2_X4, "EEO-XXE-EEE");
        put(SimulationCase.FILL_X3_O2_X5, "EEO-XEX-EEE");
        put(SimulationCase.FILL_X3_O2_X6, "EEO-XEE-XEE");
        put(SimulationCase.FILL_X3_O2_X7, "EEO-XEE-EXE");
        put(SimulationCase.FILL_X3_O2_X8, "EEO-XEE-EEX");
        put(SimulationCase.FILL_X3_O4_X5, "EEE-XOX-EEE");
        put(SimulationCase.FILL_X3_O4_X6, "EEE-XOE-XEE");
        put(SimulationCase.FILL_X3_O4_X7, "EEE-XOE-EXE");
        put(SimulationCase.FILL_X3_O4_X8, "EEE-XOE-EEX");
        put(SimulationCase.FILL_X3_O5_X4, "EEE-XXO-EEE");
        put(SimulationCase.FILL_X3_O5_X6, "EEE-XEO-XEE");
        put(SimulationCase.FILL_X3_O5_X7, "EEE-XEO-EXE");
        put(SimulationCase.FILL_X3_O5_X8, "EEE-XEO-EEX");
        put(SimulationCase.FILL_X3_O6_X4, "EEE-XXE-OEE");
        put(SimulationCase.FILL_X3_O6_X5, "EEE-XEX-OEE");
        put(SimulationCase.FILL_X3_O6_X7, "EEE-XEE-OXE");
        put(SimulationCase.FILL_X3_O6_X8, "EEE-XEE-OEX");
        put(SimulationCase.FILL_X3_O7_X4, "EEE-XXE-EOE");
        put(SimulationCase.FILL_X3_O7_X5, "EEE-XEX-EOE");
        put(SimulationCase.FILL_X3_O7_X6, "EEE-XEE-XOE");
        put(SimulationCase.FILL_X3_O7_X8, "EEE-XEE-EOX");
        put(SimulationCase.FILL_X3_O8_X4, "EEE-XXE-EEO");
        put(SimulationCase.FILL_X3_O8_X5, "EEE-XEX-EEO");
        put(SimulationCase.FILL_X3_O8_X6, "EEE-XEE-XEO");
        put(SimulationCase.FILL_X3_O8_X7, "EEE-XEE-EXO");
        put(SimulationCase.FILL_X4_O0_X5, "OEE-EXX-EEE");
        put(SimulationCase.FILL_X4_O0_X6, "OEE-EXE-XEE");
        put(SimulationCase.FILL_X4_O0_X7, "OEE-EXE-EXE");
        put(SimulationCase.FILL_X4_O0_X8, "OEE-EXE-EEX");
        put(SimulationCase.FILL_X4_O1_X5, "EOE-EXX-EEE");
        put(SimulationCase.FILL_X4_O1_X6, "EOE-EXE-XEE");
        put(SimulationCase.FILL_X4_O1_X7, "EOE-EXE-EXE");
        put(SimulationCase.FILL_X4_O1_X8, "EOE-EXE-EEX");
        put(SimulationCase.FILL_X4_O2_X5, "EEO-EXX-EEE");
        put(SimulationCase.FILL_X4_O2_X6, "EEO-EXE-XEE");
        put(SimulationCase.FILL_X4_O2_X7, "EEO-EXE-EXE");
        put(SimulationCase.FILL_X4_O2_X8, "EEO-EXE-EEX");
        put(SimulationCase.FILL_X4_O3_X5, "EEE-OXX-EEE");
        put(SimulationCase.FILL_X4_O3_X6, "EEE-OXE-XEE");
        put(SimulationCase.FILL_X4_O3_X7, "EEE-OXE-EXE");
        put(SimulationCase.FILL_X4_O3_X8, "EEE-OXE-EEX");
        put(SimulationCase.FILL_X4_O5_X6, "EEE-EXO-XEE");
        put(SimulationCase.FILL_X4_O5_X7, "EEE-EXO-EXE");
        put(SimulationCase.FILL_X4_O5_X8, "EEE-EXO-EEX");
        put(SimulationCase.FILL_X4_O6_X5, "EEE-EXX-OEE");
        put(SimulationCase.FILL_X4_O6_X7, "EEE-EXE-OXE");
        put(SimulationCase.FILL_X4_O6_X8, "EEE-EXE-OEX");
        put(SimulationCase.FILL_X4_O7_X5, "EEE-EXX-EOE");
        put(SimulationCase.FILL_X4_O7_X6, "EEE-EXE-XOE");
        put(SimulationCase.FILL_X4_O7_X8, "EEE-EXE-EOX");
        put(SimulationCase.FILL_X4_O8_X5, "EEE-EXX-EEO");
        put(SimulationCase.FILL_X4_O8_X6, "EEE-EXE-XEO");
        put(SimulationCase.FILL_X4_O8_X7, "EEE-EXE-EXO");
        put(SimulationCase.FILL_X5_O0_X6, "OEE-EEX-XEE");
        put(SimulationCase.FILL_X5_O0_X7, "OEE-EEX-EXE");
        put(SimulationCase.FILL_X5_O0_X8, "OEE-EEX-EEX");
        put(SimulationCase.FILL_X5_O1_X6, "EOE-EEX-XEE");
        put(SimulationCase.FILL_X5_O1_X7, "EOE-EEX-EXE");
        put(SimulationCase.FILL_X5_O1_X8, "EOE-EEX-EEX");
        put(SimulationCase.FILL_X5_O2_X6, "EEO-EEX-XEE");
        put(SimulationCase.FILL_X5_O2_X7, "EEO-EEX-EXE");
        put(SimulationCase.FILL_X5_O2_X8, "EEO-EEX-EEX");
        put(SimulationCase.FILL_X5_O3_X6, "EEE-OEX-XEE");
        put(SimulationCase.FILL_X5_O3_X7, "EEE-OEX-EXE");
        put(SimulationCase.FILL_X5_O3_X8, "EEE-OEX-EEX");
        put(SimulationCase.FILL_X5_O4_X6, "EEE-EOX-XEE");
        put(SimulationCase.FILL_X5_O4_X7, "EEE-EOX-EXE");
        put(SimulationCase.FILL_X5_O4_X8, "EEE-EOX-EEX");
        put(SimulationCase.FILL_X5_O6_X7, "EEE-EEX-OXE");
        put(SimulationCase.FILL_X5_O6_X8, "EEE-EEX-OEX");
        put(SimulationCase.FILL_X5_O7_X6, "EEE-EEX-XOE");
        put(SimulationCase.FILL_X5_O7_X8, "EEE-EEX-EOX");
        put(SimulationCase.FILL_X5_O8_X6, "EEE-EEX-XEO");
        put(SimulationCase.FILL_X5_O8_X7, "EEE-EEX-EXO");
        put(SimulationCase.FILL_X6_O0_X7, "OEE-EEE-XXE");
        put(SimulationCase.FILL_X6_O0_X8, "OEE-EEE-XEX");
        put(SimulationCase.FILL_X6_O1_X7, "EOE-EEE-XXE");
        put(SimulationCase.FILL_X6_O1_X8, "EOE-EEE-XEX");
        put(SimulationCase.FILL_X6_O2_X7, "EEO-EEE-XXE");
        put(SimulationCase.FILL_X6_O2_X8, "EEO-EEE-XEX");
        put(SimulationCase.FILL_X6_O3_X7, "EEE-OEE-XXE");
        put(SimulationCase.FILL_X6_O3_X8, "EEE-OEE-XEX");
        put(SimulationCase.FILL_X6_O4_X7, "EEE-EOE-XXE");
        put(SimulationCase.FILL_X6_O4_X8, "EEE-EOE-XEX");
        put(SimulationCase.FILL_X6_O5_X7, "EEE-EEO-XXE");
        put(SimulationCase.FILL_X6_O5_X8, "EEE-EEO-XEX");
        put(SimulationCase.FILL_X6_O7_X8, "EEE-EEE-XOX");
        put(SimulationCase.FILL_X6_O8_X7, "EEE-EEE-XXO");
        put(SimulationCase.FILL_X7_O0_X8, "OEE-EEE-EXX");
        put(SimulationCase.FILL_X7_O1_X8, "EOE-EEE-EXX");
        put(SimulationCase.FILL_X7_O2_X8, "EEO-EEE-EXX");
        put(SimulationCase.FILL_X7_O3_X8, "EEE-OEE-EXX");
        put(SimulationCase.FILL_X7_O4_X8, "EEE-EOE-EXX");
        put(SimulationCase.FILL_X7_O5_X8, "EEE-EEO-EXX");
        put(SimulationCase.FILL_X7_O6_X8, "EEE-EEE-OXX");
    }};

    public static String boardToStr(TicTacToe x) {
        return Arrays.stream(x.getBoard())
                .map(row -> Arrays.stream(row)
                        .map(e -> e == TicTacToeElement.X ? "X" : e == TicTacToeElement.O ? "O" : "E")
                        .collect(Collectors.joining()))
                .collect(Collectors.joining("-"));
    }

    public static String boardToStrInvertXO(TicTacToe x) {
        return Arrays.stream(x.getBoard())
                .map(row -> Arrays.stream(row)
                        .map(e -> e == TicTacToeElement.X ? "O" : e == TicTacToeElement.O ? "X" : "E")
                        .collect(Collectors.joining()))
                .collect(Collectors.joining("-"));
    }

    @NotNull
    public static TicTacToe getTicTacToe(@NotNull SimulationCase simulationCase) {
        TicTacToe ticTacToe = new TicTacToe(x);
        for (int[] move : getInputArr(simulationCase)) {
            ticTacToe.input(move[0], move[1]);
        }
        return ticTacToe;
    }

    @Nullable
    public static SimulationCase getMatchCase(TicTacToe ticTacToe) {
        if (ticTacToe.getFilled() < 4) {
            if (ticTacToe.getStartTurn() == x) {
                String str = boardToStr(ticTacToe);
                for (Map.Entry<SimulationCase, String> entry : boardStrMap.entrySet()) {
                    if (entry.getValue().equals(str)) return entry.getKey();
                }
            } else {
                String invertStr = boardToStrInvertXO(ticTacToe);
                for (Map.Entry<SimulationCase, String> entry : boardStrMap.entrySet()) {
                    if (entry.getValue().equals(invertStr)) return entry.getKey();
                }
            }
        }

        return null;
    }

    public static int[][] getInputArr(SimulationCase simulationCase) {
        String value = simulationCase.value;
        if (value.equals("empty")) {
            return new int[0][0];
        }

//        String.match() is not available in Java.
//        replaced with String.replaceAll() to
//        remove all non-digit characters from the input string,
//        and the result is then converted to an integer array
//        using String.chars() and Character.getNumericValue().
        int[] oneDIndex = value.replaceAll("\\D+", "")
                .chars()
                .map(Character::getNumericValue)
                .toArray();
        int[][] twoDIndex = new int[oneDIndex.length][2];
        for (int i = 0; i < oneDIndex.length; i++) {
            twoDIndex[i][0] = Math.floorDiv(oneDIndex[i], 3);
            twoDIndex[i][1] = oneDIndex[i] % 3;
        }

        return twoDIndex;
    }
}
