package com.cc.test;

import com.cc.optimization.BoardConfiguration;
import com.cc.optimization.Constant;
import com.cc.optimization.SimulationCase;
import com.cc.tictactoe.GameStatus;
import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;
import com.cc.tictactoe.TicTacToeSolver;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.nullValue;

public class BoardConfigurationTest {
    static int dummyLoseScore = -10;
    static int dummyDrawScore = 0;
    static int dummyWinScore = 10;
    static int dummySimulationTimes = 10000;
    static int sampleSize = 10000;


    @Test
    public void getTicTacToeTest() {
        for (SimulationCase simulationCase : Constant.cases) {
            TicTacToe ticTacToe = BoardConfiguration.getTicTacToe(simulationCase);
            String boardString = BoardConfiguration.boardToStr(ticTacToe);
            assertThat(boardString, equalTo(BoardConfiguration.boardStrMap.get(simulationCase)));
        }
    }

    @Test
    public void matchCaseInput1() {
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

    @Test
    public void matchCaseInput2() {
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
            int[] xStartFirstMove2 = xStartFirstSolver.getRandomMove();
            xStartFirst.input(xStartFirstMove2[0], xStartFirstMove2[1]);
            xStartFirstSolver.updateMatchCase();

            String expectedKeyForXStartFirst = getTwoMoveKey(xStartFirstMove[0], xStartFirstMove[1],
                    xStartFirstMove2[0], xStartFirstMove2[1]);
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
            int[] oStartFirstMove2 = oStartFirstSolver.getRandomMove();
            oStartFirst.input(oStartFirstMove2[0], oStartFirstMove2[1]);
            oStartFirstSolver.updateMatchCase();

            String expectedKeyForOStartFirst = getTwoMoveKey(oStartFirstMove[0], oStartFirstMove[1],
                    oStartFirstMove2[0], oStartFirstMove2[1]);
            assertThat(BoardConfiguration.getMatchCase(oStartFirst).name(), equalTo(expectedKeyForOStartFirst));
            assertThat(oStartFirstSolver.getMatchCase().name(), equalTo(expectedKeyForOStartFirst));
        }
    }

    @Test
    public void matchCaseInput3() {
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
            int[] xStartFirstMove2 = xStartFirstSolver.getRandomMove();
            xStartFirst.input(xStartFirstMove2[0], xStartFirstMove2[1]);
            int[] xStartFirstMove3 = xStartFirstSolver.getRandomMove();
            xStartFirst.input(xStartFirstMove3[0], xStartFirstMove3[1]);
            xStartFirstSolver.updateMatchCase();

            String expectedKeyForXStartFirst = getThreeMoveKey(
                    xStartFirstMove[0], xStartFirstMove[1],
                    xStartFirstMove2[0], xStartFirstMove2[1],
                    xStartFirstMove3[0], xStartFirstMove3[1]);
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
            int[] oStartFirstMove2 = oStartFirstSolver.getRandomMove();
            oStartFirst.input(oStartFirstMove2[0], oStartFirstMove2[1]);
            int[] oStartFirstMove3 = oStartFirstSolver.getRandomMove();
            oStartFirst.input(oStartFirstMove3[0], oStartFirstMove3[1]);
            oStartFirstSolver.updateMatchCase();

            String expectedKeyForOStartFirst = getThreeMoveKey(oStartFirstMove[0], oStartFirstMove[1],
                    oStartFirstMove2[0], oStartFirstMove2[1],
                    oStartFirstMove3[0], oStartFirstMove3[1]);
            assertThat(BoardConfiguration.getMatchCase(oStartFirst).name(), equalTo(expectedKeyForOStartFirst));
            assertThat(oStartFirstSolver.getMatchCase().name(), equalTo(expectedKeyForOStartFirst));
        }
    }

    @Test
    public void matchCaseInput4() {
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
            int[] xStartFirstMove2 = xStartFirstSolver.getRandomMove();
            xStartFirst.input(xStartFirstMove2[0], xStartFirstMove2[1]);
            int[] xStartFirstMove3 = xStartFirstSolver.getRandomMove();
            xStartFirst.input(xStartFirstMove3[0], xStartFirstMove3[1]);
            int[] xStartFirstMove4 = xStartFirstSolver.getRandomMove();
            xStartFirst.input(xStartFirstMove4[0], xStartFirstMove4[1]);
            xStartFirstSolver.updateMatchCase();

            String expectedKeyForXStartFirst = getFourMoveKey(
                    xStartFirstMove[0], xStartFirstMove[1],
                    xStartFirstMove2[0], xStartFirstMove2[1],
                    xStartFirstMove3[0], xStartFirstMove3[1],
                    xStartFirstMove4[0], xStartFirstMove4[1]);
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
            int[] oStartFirstMove2 = oStartFirstSolver.getRandomMove();
            oStartFirst.input(oStartFirstMove2[0], oStartFirstMove2[1]);
            int[] oStartFirstMove3 = oStartFirstSolver.getRandomMove();
            oStartFirst.input(oStartFirstMove3[0], oStartFirstMove3[1]);
            int[] oStartFirstMove4 = oStartFirstSolver.getRandomMove();
            oStartFirst.input(oStartFirstMove4[0], oStartFirstMove4[1]);
            oStartFirstSolver.updateMatchCase();

            String expectedKeyForOStartFirst = getFourMoveKey(oStartFirstMove[0], oStartFirstMove[1],
                    oStartFirstMove2[0], oStartFirstMove2[1],
                    oStartFirstMove3[0], oStartFirstMove3[1],
                    oStartFirstMove4[0], oStartFirstMove4[1]);
            assertThat(BoardConfiguration.getMatchCase(oStartFirst).name(), equalTo(expectedKeyForOStartFirst));
            assertThat(oStartFirstSolver.getMatchCase().name(), equalTo(expectedKeyForOStartFirst));
        }
    }

    @Test
    public void matchCaseInputMoreThan4() {
        for (int i = 0; i < sampleSize; i++) {
            TicTacToe xStartFirst = new TicTacToe(TicTacToeElement.X);
            TicTacToeSolver xStartFirstSolver = new TicTacToeSolver(
                    dummyLoseScore,
                    dummyDrawScore,
                    dummyWinScore,
                    dummySimulationTimes,
                    xStartFirst
            );

            for (int j = 0; j < randomInt(5, 10); j++) {
                if (xStartFirst.getGameStatus() == GameStatus.IN_PROGRESS) {
                    int[] randomMove = xStartFirstSolver.getRandomMove();
                    xStartFirst.input(randomMove[0], randomMove[1]);
                }
            }

            xStartFirstSolver.updateMatchCase();
            assertThat(BoardConfiguration.getMatchCase(xStartFirst), nullValue());
            assertThat(xStartFirstSolver.getMatchCase(), nullValue());

            TicTacToe oStartFirst = new TicTacToe(TicTacToeElement.O);
            TicTacToeSolver oStartFirstSolver = new TicTacToeSolver(
                    dummyLoseScore,
                    dummyDrawScore,
                    dummyWinScore,
                    dummySimulationTimes,
                    oStartFirst
            );
            for (int j = 0; j < randomInt(5, 10); j++) {
                if (oStartFirst.getGameStatus() == GameStatus.IN_PROGRESS) {
                    int[] randomMove = oStartFirstSolver.getRandomMove();
                    oStartFirst.input(randomMove[0], randomMove[1]);
                }
            }

            oStartFirstSolver.updateMatchCase();
            assertThat(BoardConfiguration.getMatchCase(oStartFirst), nullValue());
            assertThat(oStartFirstSolver.getMatchCase(), nullValue());
        }
    }

    private int to1DIndex(int row, int col) {
        return row * 3 + col;
    }

    private String getOneMoveKey(int row, int col) {
        return "FILL_X" + to1DIndex(row, col);
    }

    private String getTwoMoveKey(int row1, int col1, int row2, int col2) {
        return "FILL_X" + to1DIndex(row1, col1) + "_O" + to1DIndex(row2, col2);
    }

    private String getThreeMoveKey(int row1, int col1, int row2, int col2, int row3, int col3) {
        int i1 = to1DIndex(row1, col1);
        int i3 = to1DIndex(row3, col3);

        if (i1 > i3) {
            return "FILL_X" + i3 + "_O" + to1DIndex(row2, col2) + "_X" + i1;
        } else {
            return "FILL_X" + i1 + "_O" + to1DIndex(row2, col2) + "_X" + i3;
        }
    }

    private String getFourMoveKey(int row1, int col1, int row2, int col2, int row3, int col3, int row4, int col4) {
        int i1 = to1DIndex(row1, col1);
        int i2 = to1DIndex(row2, col2);
        int i3 = to1DIndex(row3, col3);
        int i4 = to1DIndex(row4, col4);

        int newI1 = Math.min(i1, i3);
        int newI3 = Math.max(i1, i3);
        int newI2 = Math.min(i2, i4);
        int newI4 = Math.max(i2, i4);

        return "FILL_X" + newI1 + "_O" + newI2 + "_X" + newI3 + "_O" + newI4;
    }

    private int randomInt(int min, int max) {
        return (int) (Math.random() * (max - min)) + min;
    }
}