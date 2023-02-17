package com.cc.cli;

import com.cc.tictactoe.TicTacToeElement;

public class Main {
    static TicTacToeCli game = new TicTacToeCli(TicTacToeElement.X);

    public static void main(String[] args) {
        do {
            playGame();
        } while (game.resetBoardFromCli());
    }

    public static void playGame() {
        while (game.isInProgress()) {
            game.printBoard();
            game.printTurn();
            game.inputFromCli();
        }
    }
}
