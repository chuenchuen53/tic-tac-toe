package com.cc.tictactoe;

import java.util.List;
import java.util.Random;

public class TicTacToeSolver {
    private final int loseScore;
    private final int drawScore;
    private final int winScore;
    private final int simulationTimes;
    private final TicTacToe ticTacToe;
    private final Random random = new Random();

    public TicTacToeSolver(int loseScore, int drawScore, int winScore, int simulationTimes, TicTacToe ticTacToe) {
        this.loseScore = loseScore;
        this.drawScore = drawScore;
        this.winScore = winScore;
        this.simulationTimes = simulationTimes;
        this.ticTacToe = ticTacToe;
    }

    public TicTacToe getTicTacToe() {
        return ticTacToe;
    }

    public int[] getRandomMove() {
        List<int[]> availableMoves = ticTacToe.getAvailableMoves();
        return availableMoves.get(random.nextInt(availableMoves.size()));
    }

    public int[] getBestMove() {
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
        TicTacToeElement[][] board = ticTacToe.getBoard();

        for (int row = 0; row < TicTacToe.BOARD_SIZE; row++) {
            for (int col = 0; col < TicTacToe.BOARD_SIZE; col++) {
                if (board[row][col] == null) {
                    int score = 0;
                    for (int i = 0; i < simulationTimes; i++) {
                        score += simulateGame(row, col);
                    }
                    scores[row][col] = score;
                }
            }
        }
        return scores;
    }

    private int simulateGame(int row, int col) {
        TicTacToeElement player = ticTacToe.getTurn();
        TicTacToe simulatedGame = TicTacToe.clone(ticTacToe);
        simulatedGame.input(row, col);

        while (simulatedGame.getGameStatus() == GameStatus.IN_PROGRESS) {
            List<int[]> availableMoves = simulatedGame.getAvailableMoves();
            int[] randomMove = availableMoves.get(random.nextInt(availableMoves.size()));
            simulatedGame.input(randomMove[0], randomMove[1]);
        }

        GameStatus gameStatus = simulatedGame.getGameStatus();
        TicTacToeElement winner = gameStatus == GameStatus.X_WINS ? TicTacToeElement.X :
                gameStatus == GameStatus.O_WINS ? TicTacToeElement.O : null;
        if (winner == player) {
            return winScore;
        } else if (winner == null) {
            return drawScore;
        } else {
            return loseScore;
        }
    }
}
