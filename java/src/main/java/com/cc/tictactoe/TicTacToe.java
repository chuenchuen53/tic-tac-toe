package com.cc.tictactoe;

import java.util.Arrays;
import java.util.Objects;

public class TicTacToe {
    private final int[][][] LINES_INDEXES = {
            {{0, 0}, {0, 1}, {0, 2}},
            {{1, 0}, {1, 1}, {1, 2}},
            {{2, 0}, {2, 1}, {2, 2}},
            {{0, 0}, {1, 0}, {2, 0}},
            {{0, 1}, {1, 1}, {2, 1}},
            {{0, 2}, {1, 2}, {2, 2}},
            {{0, 0}, {1, 1}, {2, 2}},
            {{0, 2}, {1, 1}, {2, 0}}
    };
    private final TicTacToeElement[][] board = new TicTacToeElement[3][3];
    private final TicTacToeElement startTurn;
    private TicTacToeElement turn;

    public TicTacToe(TicTacToeElement turn) {
        this.startTurn = turn;
        this.turn = turn;
    }

    public TicTacToeElement[][] getBoard() {
        TicTacToeElement[][] copy = new TicTacToeElement[3][3];
        for (int i = 0; i < board.length; i++) {
            System.arraycopy(board[i], 0, copy[i], 0, board[i].length);
        }
        return copy;
    }

    public TicTacToeElement getStartTurn() {
        return startTurn;
    }

    public TicTacToeElement getTurn() {
        return turn;
    }

    public boolean input(int rowIndex, int columnIndex) {
        if (board[rowIndex][columnIndex] == null) {
            board[rowIndex][columnIndex] = turn;
            toggleTurn();
            return true;
        }
        return false;
    }

    public void resetBoard(TicTacToeElement turn) {
        this.turn = turn;
        for (TicTacToeElement[] row : board) {
            Arrays.fill(row, null);
        }
    }

    public GameStatus getGameStatus() {
        TicTacToeElement winner = checkWinner();
        if (winner != null) {
            return winner == TicTacToeElement.X ? GameStatus.X_WINS : GameStatus.O_WINS;
        }
        if (allFilled()) {
            return GameStatus.DRAW;
        }
        return GameStatus.IN_PROGRESS;
    }

    private boolean allFilled() {
        return Arrays.stream(board).flatMap(Arrays::stream).allMatch(Objects::nonNull);
    }

    private TicTacToeElement checkWinner() {
        for (int[][] x : LINES_INDEXES) {
            TicTacToeElement[] cells = {board[x[0][0]][x[0][1]], board[x[1][0]][x[1][1]], board[x[2][0]][x[2][1]]};
            if (Arrays.stream(cells).takeWhile(Objects::nonNull).count() == 3 && Arrays.stream(cells).distinct().count() == 1) {
                return cells[0];
            }
        }
        return null;
    }

    private void toggleTurn() {
        turn = turn == TicTacToeElement.X ? TicTacToeElement.O : TicTacToeElement.X;
    }
}
