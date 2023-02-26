package com.cc.server;

import com.cc.tictactoe.GameStatus;
import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;
import com.cc.tictactoe.TicTacToeSolver;

public class GetGameResponse {
    public TicTacToeElement[][] board;
    public TicTacToeElement turn;
    public GameStatus gameStatus;
    public Integer[][] scores;
    public int[] bestMove;


    GetGameResponse(TicTacToe ticTacToe, TicTacToeSolver ticTacToeSolver) {
        this.board = ticTacToe.getBoard();
        this.turn = ticTacToe.getTurn();
        this.gameStatus = ticTacToe.getGameStatus();
        this.scores = gameStatus == GameStatus.IN_PROGRESS ? ticTacToeSolver.calculateScore() : null;
        this.bestMove = gameStatus == GameStatus.IN_PROGRESS ? ticTacToeSolver.getBestMove() : null;
    }
}
