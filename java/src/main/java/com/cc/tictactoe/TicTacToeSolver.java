package com.cc.tictactoe;

import com.cc.optimization.BoardConfiguration;
import com.cc.optimization.PresetSimulationResult;
import com.cc.optimization.SimulationCase;
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

        return result;
    }

    public void updateMatchCase() {
        // todo sld be 4
        if (ticTacToe.getFilled() < 3) {
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
        TicTacToeElement winner = gameStatus == GameStatus.X_WINS ? TicTacToeElement.X :
                gameStatus == GameStatus.O_WINS ? TicTacToeElement.O : null;

        if (winner == null) {
            return GameResult.DRAW;
        } else if (winner == player) {
            return GameResult.WIN;
        } else {
            return GameResult.LOSE;
        }
    }
}
