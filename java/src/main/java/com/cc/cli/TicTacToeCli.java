package com.cc.cli;

import com.cc.tictactoe.GameStatus;
import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;

import java.util.Scanner;


public class TicTacToeCli extends TicTacToe {
    private final Scanner scanner = new Scanner(System.in);

    public TicTacToeCli(TicTacToeElement turn) {
        super(turn);
    }

    public void printBoard() {
        TicTacToeElement[][] board = getBoard();
        String rowSeparator = "--+---+--";
        for (int i = 0; i < board.length; i++) {
            StringBuilder row = new StringBuilder();
            for (int j = 0; j < board[i].length; j++) {
                row.append(board[i][j] == null ? " " : board[i][j].toString());
                if (j < board[i].length - 1) {
                    row.append(" | ");
                }
            }
            System.out.println(row);
            if (i < board.length - 1) {
                System.out.println(rowSeparator);
            }
        }
        System.out.println();
    }

    public void printTurn() {
        TicTacToeElement turn = getTurn();
        System.out.println("Turn: " + turn);
    }

    public void inputFromCli() {
        try {
            System.out.println("which cell you want to input?");
            System.out.print("row (0-2): ");
            int rowIndex = scanner.nextInt();
            System.out.print("column (0-2): ");
            int columnIndex = scanner.nextInt();
            boolean success = input(rowIndex, columnIndex);
            if (!success) {
                System.out.println("Invalid input");
            }
        } catch (Exception e) {
            System.out.println("Invalid input");
            scanner.nextLine();
        }
    }

    public boolean isInProgress() {
        GameStatus status = getGameStatus();
        switch (status) {
            case DRAW -> {
                System.out.println("Draw!");
                return false;
            }
            case X_WINS -> {
                System.out.println("X wins!");
                printBoard();
                return false;
            }
            case O_WINS -> {
                System.out.println("O wins!");
                printBoard();
                return false;
            }
            case IN_PROGRESS -> {
                return true;
            }
            default -> throw new IllegalStateException("Unexpected value: " + status);
        }
    }

    public boolean resetBoardFromCli() {
        try {
            System.out.println("Play again? (y/n)");
            String response = scanner.next();
            switch (response) {
                case "y" -> {
                    TicTacToeElement newTurn = getStartTurn() == TicTacToeElement.X ? TicTacToeElement.O :
                            TicTacToeElement.X;
                    resetBoard(newTurn);
                    System.out.println("New game started with " + newTurn + "first");
                    return true;
                }
                case "n" -> {
                    return false;
                }
                default -> {
                    System.out.println("Invalid input");
                    return resetBoardFromCli();
                }
            }
        } catch (Exception e) {
            System.out.println("Invalid input");
            scanner.nextLine();
            return resetBoardFromCli();
        }
    }
}
