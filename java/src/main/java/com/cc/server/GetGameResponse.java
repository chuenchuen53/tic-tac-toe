package com.cc.server;

import com.cc.tictactoe.GameStatus;
import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;

public class GetGameResponse {
    public TicTacToeElement[][] board;
    public TicTacToeElement turn;
    public GameStatus gameStatus;


    GetGameResponse(TicTacToe ticTacToe) {
        this.board = ticTacToe.getBoard();
        this.turn = ticTacToe.getTurn();
        this.gameStatus = ticTacToe.getGameStatus();
    }
}
