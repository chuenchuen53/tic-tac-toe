package com.cc.optimization;

import com.cc.optimization.simulationresult.SimulationCase;
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
    private static final HashMap<SimulationCase, int[][]> inputMap = new HashMap<>() {{
        put(SimulationCase.EMPTY, new int[][]{});
        put(SimulationCase.FILL_X0, new int[][]{{0, 0}});
        put(SimulationCase.FILL_X1, new int[][]{{0, 1}});
        put(SimulationCase.FILL_X2, new int[][]{{0, 2}});
        put(SimulationCase.FILL_X3, new int[][]{{1, 0}});
        put(SimulationCase.FILL_X4, new int[][]{{1, 1}});
        put(SimulationCase.FILL_X5, new int[][]{{1, 2}});
        put(SimulationCase.FILL_X6, new int[][]{{2, 0}});
        put(SimulationCase.FILL_X7, new int[][]{{2, 1}});
        put(SimulationCase.FILL_X8, new int[][]{{2, 2}});
        put(SimulationCase.FILL_X0_O1, new int[][]{{0, 0}, {0, 1}});
        put(SimulationCase.FILL_X0_O2, new int[][]{{0, 0}, {0, 2}});
        put(SimulationCase.FILL_X0_O3, new int[][]{{0, 0}, {1, 0}});
        put(SimulationCase.FILL_X0_O4, new int[][]{{0, 0}, {1, 1}});
        put(SimulationCase.FILL_X0_O5, new int[][]{{0, 0}, {1, 2}});
        put(SimulationCase.FILL_X0_O6, new int[][]{{0, 0}, {2, 0}});
        put(SimulationCase.FILL_X0_O7, new int[][]{{0, 0}, {2, 1}});
        put(SimulationCase.FILL_X0_O8, new int[][]{{0, 0}, {2, 2}});
        put(SimulationCase.FILL_X1_O0, new int[][]{{0, 1}, {0, 0}});
        put(SimulationCase.FILL_X1_O2, new int[][]{{0, 1}, {0, 2}});
        put(SimulationCase.FILL_X1_O3, new int[][]{{0, 1}, {1, 0}});
        put(SimulationCase.FILL_X1_O4, new int[][]{{0, 1}, {1, 1}});
        put(SimulationCase.FILL_X1_O5, new int[][]{{0, 1}, {1, 2}});
        put(SimulationCase.FILL_X1_O6, new int[][]{{0, 1}, {2, 0}});
        put(SimulationCase.FILL_X1_O7, new int[][]{{0, 1}, {2, 1}});
        put(SimulationCase.FILL_X1_O8, new int[][]{{0, 1}, {2, 2}});
        put(SimulationCase.FILL_X2_O0, new int[][]{{0, 2}, {0, 0}});
        put(SimulationCase.FILL_X2_O1, new int[][]{{0, 2}, {0, 1}});
        put(SimulationCase.FILL_X2_O3, new int[][]{{0, 2}, {1, 0}});
        put(SimulationCase.FILL_X2_O4, new int[][]{{0, 2}, {1, 1}});
        put(SimulationCase.FILL_X2_O5, new int[][]{{0, 2}, {1, 2}});
        put(SimulationCase.FILL_X2_O6, new int[][]{{0, 2}, {2, 0}});
        put(SimulationCase.FILL_X2_O7, new int[][]{{0, 2}, {2, 1}});
        put(SimulationCase.FILL_X2_O8, new int[][]{{0, 2}, {2, 2}});
        put(SimulationCase.FILL_X3_O0, new int[][]{{1, 0}, {0, 0}});
        put(SimulationCase.FILL_X3_O1, new int[][]{{1, 0}, {0, 1}});
        put(SimulationCase.FILL_X3_O2, new int[][]{{1, 0}, {0, 2}});
        put(SimulationCase.FILL_X3_O4, new int[][]{{1, 0}, {1, 1}});
        put(SimulationCase.FILL_X3_O5, new int[][]{{1, 0}, {1, 2}});
        put(SimulationCase.FILL_X3_O6, new int[][]{{1, 0}, {2, 0}});
        put(SimulationCase.FILL_X3_O7, new int[][]{{1, 0}, {2, 1}});
        put(SimulationCase.FILL_X3_O8, new int[][]{{1, 0}, {2, 2}});
        put(SimulationCase.FILL_X4_O0, new int[][]{{1, 1}, {0, 0}});
        put(SimulationCase.FILL_X4_O1, new int[][]{{1, 1}, {0, 1}});
        put(SimulationCase.FILL_X4_O2, new int[][]{{1, 1}, {0, 2}});
        put(SimulationCase.FILL_X4_O3, new int[][]{{1, 1}, {1, 0}});
        put(SimulationCase.FILL_X4_O5, new int[][]{{1, 1}, {1, 2}});
        put(SimulationCase.FILL_X4_O6, new int[][]{{1, 1}, {2, 0}});
        put(SimulationCase.FILL_X4_O7, new int[][]{{1, 1}, {2, 1}});
        put(SimulationCase.FILL_X4_O8, new int[][]{{1, 1}, {2, 2}});
        put(SimulationCase.FILL_X5_O0, new int[][]{{1, 2}, {0, 0}});
        put(SimulationCase.FILL_X5_O1, new int[][]{{1, 2}, {0, 1}});
        put(SimulationCase.FILL_X5_O2, new int[][]{{1, 2}, {0, 2}});
        put(SimulationCase.FILL_X5_O3, new int[][]{{1, 2}, {1, 0}});
        put(SimulationCase.FILL_X5_O4, new int[][]{{1, 2}, {1, 1}});
        put(SimulationCase.FILL_X5_O6, new int[][]{{1, 2}, {2, 0}});
        put(SimulationCase.FILL_X5_O7, new int[][]{{1, 2}, {2, 1}});
        put(SimulationCase.FILL_X5_O8, new int[][]{{1, 2}, {2, 2}});
        put(SimulationCase.FILL_X6_O0, new int[][]{{2, 0}, {0, 0}});
        put(SimulationCase.FILL_X6_O1, new int[][]{{2, 0}, {0, 1}});
        put(SimulationCase.FILL_X6_O2, new int[][]{{2, 0}, {0, 2}});
        put(SimulationCase.FILL_X6_O3, new int[][]{{2, 0}, {1, 0}});
        put(SimulationCase.FILL_X6_O4, new int[][]{{2, 0}, {1, 1}});
        put(SimulationCase.FILL_X6_O5, new int[][]{{2, 0}, {1, 2}});
        put(SimulationCase.FILL_X6_O7, new int[][]{{2, 0}, {2, 1}});
        put(SimulationCase.FILL_X6_O8, new int[][]{{2, 0}, {2, 2}});
        put(SimulationCase.FILL_X7_O0, new int[][]{{2, 1}, {0, 0}});
        put(SimulationCase.FILL_X7_O1, new int[][]{{2, 1}, {0, 1}});
        put(SimulationCase.FILL_X7_O2, new int[][]{{2, 1}, {0, 2}});
        put(SimulationCase.FILL_X7_O3, new int[][]{{2, 1}, {1, 0}});
        put(SimulationCase.FILL_X7_O4, new int[][]{{2, 1}, {1, 1}});
        put(SimulationCase.FILL_X7_O5, new int[][]{{2, 1}, {1, 2}});
        put(SimulationCase.FILL_X7_O6, new int[][]{{2, 1}, {2, 0}});
        put(SimulationCase.FILL_X7_O8, new int[][]{{2, 1}, {2, 2}});
        put(SimulationCase.FILL_X8_O0, new int[][]{{2, 2}, {0, 0}});
        put(SimulationCase.FILL_X8_O1, new int[][]{{2, 2}, {0, 1}});
        put(SimulationCase.FILL_X8_O2, new int[][]{{2, 2}, {0, 2}});
        put(SimulationCase.FILL_X8_O3, new int[][]{{2, 2}, {1, 0}});
        put(SimulationCase.FILL_X8_O4, new int[][]{{2, 2}, {1, 1}});
        put(SimulationCase.FILL_X8_O5, new int[][]{{2, 2}, {1, 2}});
        put(SimulationCase.FILL_X8_O6, new int[][]{{2, 2}, {2, 0}});
        put(SimulationCase.FILL_X8_O7, new int[][]{{2, 2}, {2, 1}});
    }};
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
        for (int[] move : inputMap.get(simulationCase)) {
            ticTacToe.input(move[0], move[1]);
        }
        return ticTacToe;
    }

    @Nullable
    public static SimulationCase getMatchCase(TicTacToe ticTacToe) {
        if (ticTacToe.getFilled() < 3) {
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
}
