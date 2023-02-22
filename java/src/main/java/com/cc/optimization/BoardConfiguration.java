package com.cc.optimization;

import com.cc.optimization.simulationresult.SimulationCase;
import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;
import org.jetbrains.annotations.NotNull;

public class BoardConfiguration {
    private static final TicTacToeElement x = TicTacToeElement.X;

    @NotNull
    public static TicTacToe getTicTacToe(@NotNull SimulationCase simulationCase) {
        switch (simulationCase) {
            case EMPTY:
                return new TicTacToe(x);
            case FILL_X0: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                return r;
            }
            case FILL_X1: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                return r;
            }
            case FILL_X2: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                return r;
            }
            case FILL_X3: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                return r;
            }
            case FILL_X4: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                return r;
            }
            case FILL_X5: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                return r;
            }
            case FILL_X6: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                return r;
            }
            case FILL_X7: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                return r;
            }
            case FILL_X8: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                return r;
            }
            case FILL_X0_O1: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                r.input(0, 1);
                return r;
            }
            case FILL_X0_O2: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                r.input(0, 2);
                return r;
            }
            case FILL_X0_O3: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                r.input(1, 0);
                return r;
            }
            case FILL_X0_O4: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                r.input(1, 1);
                return r;
            }
            case FILL_X0_O5: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                r.input(1, 2);
                return r;
            }
            case FILL_X0_O6: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                r.input(2, 0);
                return r;
            }
            case FILL_X0_O7: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                r.input(2, 1);
                return r;
            }
            case FILL_X0_O8: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 0);
                r.input(2, 2);
                return r;
            }
            case FILL_X1_O0: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                r.input(0, 0);
                return r;
            }
            case FILL_X1_O2: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                r.input(0, 2);
                return r;
            }
            case FILL_X1_O3: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                r.input(1, 0);
                return r;
            }
            case FILL_X1_O4: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                r.input(1, 1);
                return r;
            }
            case FILL_X1_O5: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                r.input(1, 2);
                return r;
            }
            case FILL_X1_O6: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                r.input(2, 0);
                return r;
            }
            case FILL_X1_O7: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                r.input(2, 1);
                return r;
            }
            case FILL_X1_O8: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 1);
                r.input(2, 2);
                return r;
            }
            case FILL_X2_O0: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                r.input(0, 0);
                return r;
            }
            case FILL_X2_O1: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                r.input(0, 1);
                return r;
            }
            case FILL_X2_O3: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                r.input(1, 0);
                return r;
            }
            case FILL_X2_O4: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                r.input(1, 1);
                return r;
            }
            case FILL_X2_O5: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                r.input(1, 2);
                return r;
            }
            case FILL_X2_O6: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                r.input(2, 0);
                return r;
            }
            case FILL_X2_O7: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                r.input(2, 1);
                return r;
            }
            case FILL_X2_O8: {
                TicTacToe r = new TicTacToe(x);
                r.input(0, 2);
                r.input(2, 2);
                return r;
            }
            case FILL_X3_O0: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                r.input(0, 0);
                return r;
            }
            case FILL_X3_O1: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                r.input(0, 1);
                return r;
            }
            case FILL_X3_O2: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                r.input(0, 2);
                return r;
            }
            case FILL_X3_O4: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                r.input(1, 1);
                return r;
            }
            case FILL_X3_O5: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                r.input(1, 2);
                return r;
            }
            case FILL_X3_O6: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                r.input(2, 0);
                return r;
            }
            case FILL_X3_O7: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                r.input(2, 1);
                return r;
            }
            case FILL_X3_O8: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 0);
                r.input(2, 2);
                return r;
            }
            case FILL_X4_O0: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                r.input(0, 0);
                return r;
            }
            case FILL_X4_O1: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                r.input(0, 1);
                return r;
            }
            case FILL_X4_O2: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                r.input(0, 2);
                return r;
            }
            case FILL_X4_O3: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                r.input(1, 0);
                return r;
            }
            case FILL_X4_O5: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                r.input(1, 2);
                return r;
            }
            case FILL_X4_O6: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                r.input(2, 0);
                return r;
            }
            case FILL_X4_O7: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                r.input(2, 1);
                return r;
            }
            case FILL_X4_O8: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 1);
                r.input(2, 2);
                return r;
            }
            case FILL_X5_O0: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                r.input(0, 0);
                return r;
            }
            case FILL_X5_O1: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                r.input(0, 1);
                return r;
            }
            case FILL_X5_O2: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                r.input(0, 2);
                return r;
            }
            case FILL_X5_O3: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                r.input(1, 0);
                return r;
            }
            case FILL_X5_O4: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                r.input(1, 1);
                return r;
            }
            case FILL_X5_O6: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                r.input(2, 0);
                return r;
            }
            case FILL_X5_O7: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                r.input(2, 1);
                return r;
            }
            case FILL_X5_O8: {
                TicTacToe r = new TicTacToe(x);
                r.input(1, 2);
                r.input(2, 2);
                return r;
            }
            case FILL_X6_O0: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                r.input(0, 0);
                return r;
            }
            case FILL_X6_O1: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                r.input(0, 1);
                return r;
            }
            case FILL_X6_O2: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                r.input(0, 2);
                return r;
            }
            case FILL_X6_O3: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                r.input(1, 0);
                return r;
            }
            case FILL_X6_O4: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                r.input(1, 1);
                return r;
            }
            case FILL_X6_O5: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                r.input(1, 2);
                return r;
            }
            case FILL_X6_O7: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                r.input(2, 1);
                return r;
            }
            case FILL_X6_O8: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 0);
                r.input(2, 2);
                return r;
            }
            case FILL_X7_O0: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                r.input(0, 0);
                return r;
            }
            case FILL_X7_O1: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                r.input(0, 1);
                return r;
            }
            case FILL_X7_O2: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                r.input(0, 2);
                return r;
            }
            case FILL_X7_O3: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                r.input(1, 0);
                return r;
            }
            case FILL_X7_O4: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                r.input(1, 1);
                return r;
            }
            case FILL_X7_O5: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                r.input(1, 2);
                return r;
            }
            case FILL_X7_O6: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                r.input(2, 0);
                return r;
            }
            case FILL_X7_O8: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 1);
                r.input(2, 2);
                return r;
            }
            case FILL_X8_O0: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                r.input(0, 0);
                return r;
            }
            case FILL_X8_O1: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                r.input(0, 1);
                return r;
            }
            case FILL_X8_O2: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                r.input(0, 2);
                return r;
            }
            case FILL_X8_O3: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                r.input(1, 0);
                return r;
            }
            case FILL_X8_O4: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                r.input(1, 1);
                return r;
            }
            case FILL_X8_O5: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                r.input(1, 2);
                return r;
            }
            case FILL_X8_O6: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                r.input(2, 0);
                return r;
            }
            case FILL_X8_O7: {
                TicTacToe r = new TicTacToe(x);
                r.input(2, 2);
                r.input(2, 1);
                return r;
            }
            default:
                throw new IllegalStateException("Unexpected value: " + simulationCase);
        }
    }
}
