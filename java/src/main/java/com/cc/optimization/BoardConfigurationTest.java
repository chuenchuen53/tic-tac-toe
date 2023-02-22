package com.cc.optimization;

import com.cc.optimization.simulationresult.SimulationCase;
import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;
import com.cc.tictactoe.TicTacToeSolver;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;


class BoardConfigurationTest {
    static int dummyLoseScore = -10;
    static int dummyDrawScore = 0;
    static int dummyWinScore = 10;
    static int dummySimulationTimes = 10000;
    static int sampleSize = 10000;

    public static void main(String[] args) {
        var a = new BoardConfigurationTest();
        a.boardConfiguration();
        a.matchCaseInput1();
    }

    @Test
    void boardConfiguration() {
        for (SimulationCase simulationCase : Constant.cases) {
            TicTacToe ticTacToe = BoardConfiguration.getTicTacToe(simulationCase);
            String boardString = BoardConfiguration.boardToStr(ticTacToe);
            assertThat(boardString, equalTo(BoardConfiguration.boardStrMap.get(simulationCase)));
        }
    }

    @Test
    void matchCaseInput1() {
        for (int i = 0; i < sampleSize; i++) {
            TicTacToe xStartFirst = new TicTacToe(TicTacToeElement.X);
            TicTacToeSolver xStartFirstSolver = new TicTacToeSolver(
                    dummyLoseScore,
                    dummyDrawScore,
                    dummyWinScore,
                    dummySimulationTimes,
                    xStartFirst
            );
            int[] xStartFirstMove = xStartFirstSolver.getRandomMove();
            xStartFirst.input(xStartFirstMove[0], xStartFirstMove[1]);
            xStartFirstSolver.updateMatchCase();

            String expectedKeyForXStartFirst = getOneMoveKey(xStartFirstMove[0], xStartFirstMove[1]);
            assertThat(BoardConfiguration.getMatchCase(xStartFirst).name(), equalTo(expectedKeyForXStartFirst));
            assertThat(xStartFirstSolver.getMatchCase().name(), equalTo(expectedKeyForXStartFirst));

            TicTacToe oStartFirst = new TicTacToe(TicTacToeElement.O);
            TicTacToeSolver oStartFirstSolver = new TicTacToeSolver(
                    dummyLoseScore,
                    dummyDrawScore,
                    dummyWinScore,
                    dummySimulationTimes,
                    oStartFirst
            );
            int[] oStartFirstMove = oStartFirstSolver.getRandomMove();
            oStartFirst.input(oStartFirstMove[0], oStartFirstMove[1]);
            oStartFirstSolver.updateMatchCase();

            String expectedKeyForOStartFirst = getOneMoveKey(oStartFirstMove[0], oStartFirstMove[1]);
            assertThat(BoardConfiguration.getMatchCase(oStartFirst).name(), equalTo(expectedKeyForOStartFirst));
            assertThat(oStartFirstSolver.getMatchCase().name(), equalTo(expectedKeyForOStartFirst));
        }
    }

    int to1DIndex(int row, int col) {
        return row * 3 + col;
    }

    String getOneMoveKey(int row, int col) {
        return "FILL_X" + to1DIndex(row, col);
    }

    public String getTwoMoveKey(int row1, int col1, int row2, int col2) {
        return "FILL_X" + to1DIndex(row1, col1) + "_O" + to1DIndex(row2, col2);
    }
}