package com.cc.tictactoesolver;

import com.cc.optimization.BoardConfiguration;
import com.cc.optimization.PresetSimulationResult;
import com.cc.optimization.SimulationCase;
import com.cc.tictactoe.*;
import org.jetbrains.annotations.NotNull;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;


public class TicTacToeSolver {
    private final int loseScore;
    private final int drawScore;
    private final int winScore;
    private final int simulationTimes;
    private final TicTacToe ticTacToe;
    private final ThreadLocalRandom random = ThreadLocalRandom.current();
    private SimulationCase matchCase;

    public TicTacToeSolver(int loseScore, int drawScore, int winScore, int simulationTimes, TicTacToe ticTacToe) {
        this.loseScore = loseScore;
        this.drawScore = drawScore;
        this.winScore = winScore;
        this.simulationTimes = simulationTimes;
        this.ticTacToe = ticTacToe;
        this.matchCase = null;
        this.updateMatchCase();
    }

    public TicTacToe getTicTacToe() {
        return ticTacToe;
    }

    public SimulationCase getMatchCase() {
        return matchCase;
    }

    public int[] getRandomMove() {
        if (ticTacToe.getFilled() == 9) {
            throw new RuntimeException("should not call getRandomMove when the board is full");
        }
        List<int[]> availableMoves = ticTacToe.getAvailableMoves();
        return availableMoves.get(random.nextInt(availableMoves.size()));
    }

    public int[] getBestMove() {
        if (ticTacToe.getFilled() == 9) {
            throw new RuntimeException("should not call getBestMove when the board is full");
        } else if (ticTacToe.getFilled() == 8) {
            return ticTacToe.getAvailableMoves().get(0);
        }

        Integer[][] scores = calculateScore();
        int maxScore = Integer.MIN_VALUE;
        int[] bestMove = new int[2];

        for (int row = 0; row < TicTacToe.BOARD_SIZE; row++) {
            for (int col = 0; col < TicTacToe.BOARD_SIZE; col++) {
                if (scores[row][col] == null) continue;
                int score = scores[row][col];
                if (score > maxScore) {
                    maxScore = score;
                    bestMove[0] = row;
                    bestMove[1] = col;
                } else if (score == maxScore && random.nextBoolean()) {
                    bestMove[0] = row;
                    bestMove[1] = col;
                }
            }
        }

        return bestMove;
    }

    public Integer[][] calculateScore() {
        Integer[][] scores = new Integer[TicTacToe.BOARD_SIZE][TicTacToe.BOARD_SIZE];

        updateMatchCase();
        GameResultCount[][] simulationResult = matchCase != null
                ? PresetSimulationResult.getPresetResult(matchCase)
                : getSimulationResult();

        for (int row = 0; row < TicTacToe.BOARD_SIZE; row++) {
            for (int col = 0; col < TicTacToe.BOARD_SIZE; col++) {
                if (simulationResult[row][col] == null) continue;
                GameResultCount r = simulationResult[row][col];
                scores[row][col] = r.getLose() * loseScore + r.getDraw() * drawScore + r.getWin() * winScore;
            }
        }

        return scores;
    }

    @NotNull
    public GameResultCount[][] getSimulationResult() {
        GameResultCount[][] result = new GameResultCount[TicTacToe.BOARD_SIZE][TicTacToe.BOARD_SIZE];
        TicTacToeElement[][] board = ticTacToe.getBoard();

        if (ticTacToe.getFilled() == 8) {
            GameResultCount gameResultCount = new GameResultCount();
            int[] lastMove = ticTacToe.getAvailableMoves().get(0);
            int row = lastMove[0];
            int col = lastMove[1];
            GameResult gameResult = simulateGame(row, col);
            gameResultCount.add(gameResult, simulationTimes);
            result[row][col] = gameResultCount;
        } else if (ticTacToe.getFilled() == 7) {
            List<int[]> availableMoves = ticTacToe.getAvailableMoves();
            int[] emptyPosition1 = availableMoves.get(0);
            int[] emptyPosition2 = availableMoves.get(1);
            int row1 = emptyPosition1[0];
            int col1 = emptyPosition1[1];
            int row2 = emptyPosition2[0];
            int col2 = emptyPosition2[1];

            GameResultCount gameResultCount1 = new GameResultCount();
            GameResult gameResult1 = simulateGame(row1, col1);
            gameResultCount1.add(gameResult1, simulationTimes);
            result[row1][col1] = gameResultCount1;

            GameResultCount gameResultCount2 = new GameResultCount();
            GameResult gameResult2 = simulateGame(row2, col2);
            gameResultCount2.add(gameResult2, simulationTimes);
            result[row2][col2] = gameResultCount2;
        } else {
            for (int row = 0; row < TicTacToe.BOARD_SIZE; row++) {
                for (int col = 0; col < TicTacToe.BOARD_SIZE; col++) {
                    if (board[row][col] == null) {
                        GameResultCount gameResultCount = new GameResultCount();
                        for (int i = 0; i < simulationTimes; i++) {
                            GameResult gameResult = simulateGame(row, col);
                            gameResultCount.add(gameResult);
                        }
                        result[row][col] = gameResultCount;
                    }
                }
            }
        }

        return result;
    }

    public void updateMatchCase() {
        if (ticTacToe.getFilled() < 5) {
            matchCase = BoardConfiguration.getMatchCase(ticTacToe);
        } else if (matchCase != null) {
            matchCase = null;
        }
    }

    @NotNull
    private GameResult simulateGame(int row, int col) {
        TicTacToeElement player = ticTacToe.getTurn();
        TicTacToe simulatedGame = TicTacToe.clone(ticTacToe);
        simulatedGame.input(row, col);

        while (simulatedGame.getGameStatus() == GameStatus.IN_PROGRESS) {
            List<int[]> availableMoves = simulatedGame.getAvailableMoves();
            int[] randomMove = availableMoves.get(random.nextInt(availableMoves.size()));
            simulatedGame.input(randomMove[0], randomMove[1]);
        }

        GameStatus gameStatus = simulatedGame.getGameStatus();
        TicTacToeElement winner = TicTacToe.winnerFromGameStatus(gameStatus);

        if (winner == null) {
            return GameResult.DRAW;
        } else if (winner == player) {
            return GameResult.WIN;
        } else {
            return GameResult.LOSE;
        }
    }
}
