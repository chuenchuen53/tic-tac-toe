package com.cc.tictactoe;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TicTacToe {
    public static final int BOARD_SIZE = 3;
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
    private TicTacToeElement startTurn;
    private TicTacToeElement turn;
    private int filled;

    public TicTacToe(TicTacToeElement turn) {
        this.startTurn = turn;
        this.turn = turn;
        this.filled = 0;
    }

    public static TicTacToe clone(TicTacToe ticTacToe) {
        TicTacToe clone = new TicTacToe(ticTacToe.getStartTurn());
        for (int i = 0; i < ticTacToe.board.length; i++) {
            System.arraycopy(ticTacToe.board[i], 0, clone.board[i], 0, ticTacToe.board[i].length);
        }
        clone.turn = ticTacToe.getTurn();
        clone.filled = ticTacToe.filled;
        return clone;
    }

    @Nullable
    public static TicTacToeElement winnerFromGameStatus(GameStatus gameStatus) {
        return switch (gameStatus) {
            case X_WINS -> TicTacToeElement.X;
            case O_WINS -> TicTacToeElement.O;
            default -> null;
        };
    }

    public static TicTacToeElement getOpponent(TicTacToeElement player) {
        return player == TicTacToeElement.X ? TicTacToeElement.O : TicTacToeElement.X;
    }

    public TicTacToeElement[][] getBoard() {
        return board;
    }

    public TicTacToeElement[][] getClonedBoard() {
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

    public int getFilled() {
        return filled;
    }

    public boolean input(int rowIndex, int columnIndex) {
        if (board[rowIndex][columnIndex] == null) {
            board[rowIndex][columnIndex] = turn;
            toggleTurn();
            this.filled++;
            return true;
        }
        return false;
    }

    public void resetBoard(TicTacToeElement turn) {
        startTurn = turn;
        this.turn = turn;
        this.filled = 0;
        for (TicTacToeElement[] row : board) {
            Arrays.fill(row, null);
        }
    }


    @NotNull
    public GameStatus getGameStatus() {
        if (filled < 5) return GameStatus.IN_PROGRESS;
        TicTacToeElement winner = checkWinner();
        if (winner != null) {
            return winner == TicTacToeElement.X ? GameStatus.X_WINS : GameStatus.O_WINS;
        }
        if (filled == 9) return GameStatus.DRAW;
        return GameStatus.IN_PROGRESS;
    }

    public List<int[]> getAvailableMoves() {
        List<int[]> availableMove = new ArrayList<>();
        for (int i = 0; i < TicTacToe.BOARD_SIZE; i++) {
            for (int j = 0; j < TicTacToe.BOARD_SIZE; j++) {
                if (board[i][j] == null) {
                    availableMove.add(new int[]{i, j});
                }
            }
        }
        return availableMove;
    }


    @Nullable
    private TicTacToeElement checkWinner() {
        for (int[][] x : LINES_INDEXES) {
            TicTacToeElement[] cells = {board[x[0][0]][x[0][1]], board[x[1][0]][x[1][1]], board[x[2][0]][x[2][1]]};
            if (cells[0] != null && cells[0] == cells[1] && cells[1] == cells[2]) {
                return cells[0];
            }
        }
        return null;
    }

    private void toggleTurn() {
        turn = turn == TicTacToeElement.X ? TicTacToeElement.O : TicTacToeElement.X;
    }
}
