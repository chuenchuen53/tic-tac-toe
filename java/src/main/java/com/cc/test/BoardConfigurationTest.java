package com.cc.test;

import com.cc.optimization.BoardConfiguration;
import com.cc.optimization.SimulationCase;
import com.cc.optimization.simulationresult.Setting;
import com.cc.tictactoe.GameStatus;
import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;
import com.cc.tictactoesolver.TicTacToeSolver;
import org.jetbrains.annotations.Contract;
import org.jetbrains.annotations.NotNull;
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
        for (SimulationCase simulationCase : Setting.cases) {
            TicTacToe ticTacToe = BoardConfiguration.getTicTacToe(simulationCase);
            String boardString = BoardConfiguration.boardToStr(ticTacToe);
            assertThat(boardString, equalTo(BoardConfiguration.boardStrMap.get(simulationCase)));
        }
    }

    @Test
    public void matchCaseTest() {
        for (int i = 0; i < sampleSize; i++) {
            matchCaseTest(TicTacToeElement.X);
            matchCaseTest(TicTacToeElement.O);
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
                } else {
                    break;
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
                } else {
                    break;
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

    @Contract(pure = true)
    @NotNull
    private String getOneMoveKey(int row, int col) {
        return "FILL_X" + to1DIndex(row, col);
    }

    @NotNull
    private String getTwoMoveKey(int row1, int col1, int row2, int col2) {
        return "FILL_X" + to1DIndex(row1, col1) + "_O" + to1DIndex(row2, col2);
    }

    @NotNull
    private String getThreeMoveKey(int row1, int col1, int row2, int col2, int row3, int col3) {
        int i1 = to1DIndex(row1, col1);
        int i3 = to1DIndex(row3, col3);

        if (i1 > i3) {
            return "FILL_X" + i3 + "_O" + to1DIndex(row2, col2) + "_X" + i1;
        } else {
            return "FILL_X" + i1 + "_O" + to1DIndex(row2, col2) + "_X" + i3;
        }
    }

    @NotNull
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

    private void matchCaseTest(TicTacToeElement startTurn) {
        TicTacToe ticTacToe = new TicTacToe(startTurn);
        TicTacToeSolver solver = new TicTacToeSolver(dummyLoseScore, dummyDrawScore, dummyWinScore,
                dummySimulationTimes, ticTacToe);
        assertThat(BoardConfiguration.getMatchCase(ticTacToe), equalTo(SimulationCase.EMPTY));
        assertThat(solver.getMatchCase(), equalTo(SimulationCase.EMPTY));

        int[] move1 = solver.getRandomMove();
        ticTacToe.input(move1[0], move1[1]);
        solver.updateMatchCase();
        String expected1 = getOneMoveKey(move1[0], move1[1]);
        assertThat(BoardConfiguration.getMatchCase(ticTacToe).toString(), equalTo(expected1));
        assertThat(solver.getMatchCase().toString(), equalTo(expected1));

        int[] move2 = solver.getRandomMove();
        ticTacToe.input(move2[0], move2[1]);
        solver.updateMatchCase();
        String expected2 = getTwoMoveKey(move1[0], move1[1], move2[0], move2[1]);
        assertThat(BoardConfiguration.getMatchCase(ticTacToe).toString(), equalTo(expected2));
        assertThat(solver.getMatchCase().toString(), equalTo(expected2));

        int[] move3 = solver.getRandomMove();
        ticTacToe.input(move3[0], move3[1]);
        solver.updateMatchCase();
        String expected3 = getThreeMoveKey(move1[0], move1[1], move2[0], move2[1], move3[0], move3[1]);
        assertThat(BoardConfiguration.getMatchCase(ticTacToe).toString(), equalTo(expected3));
        assertThat(solver.getMatchCase().toString(), equalTo(expected3));

        int[] move4 = solver.getRandomMove();
        ticTacToe.input(move4[0], move4[1]);
        solver.updateMatchCase();
        String expected4 = getFourMoveKey(move1[0], move1[1], move2[0], move2[1], move3[0], move3[1], move4[0],
                move4[1]);
        assertThat(BoardConfiguration.getMatchCase(ticTacToe).toString(), equalTo(expected4));
        assertThat(solver.getMatchCase().toString(), equalTo(expected4));
    }
}