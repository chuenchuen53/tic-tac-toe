package com.cc.mcts.treesearch;

import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class State {
    private final Random random = new Random();
    //    private TicTacToeElement player;
//    private TicTacToeElement opponent;
    private TicTacToe ticTacToe;
    private int visitCount;
    private double winScore;

    public State() {
//        player = TicTacToeElement.X;
        ticTacToe = new TicTacToe(TicTacToeElement.X);
    }

    public State(State state) {
        this.ticTacToe = TicTacToe.clone(state.ticTacToe);
//        this.player = state.player;
//        this.opponent = TicTacToe.getOpponent(state.player);
        this.visitCount = state.visitCount;
        this.winScore = state.winScore;
    }

    public State(TicTacToe ticTacToe) {
        this.ticTacToe = ticTacToe;
//        this.player = this.ticTacToe.getTurn();
//        this.opponent = TicTacToe.getOpponent(this.player);
    }

    public void randomMove() {
        List<int[]> availableMoves = this.ticTacToe.getAvailableMoves();
        int[] randomMove = availableMoves.get(random.nextInt(availableMoves.size()));
        this.ticTacToe.input(randomMove[0], randomMove[1]);
    }

    public TicTacToe getTicTacToe() {
        return ticTacToe;
    }

    public void setTicTacToe(TicTacToe ticTacToe) {
        this.ticTacToe = ticTacToe;
    }

//    public TicTacToeElement getPlayer() {
//        return player;
//    }
//
//    public void setPlayer(TicTacToeElement player) {
//        this.player = player;
//        this.opponent = TicTacToe.getOpponent(player);
//    }
//
//    public TicTacToeElement getOpponent() {
//        return opponent;
//    }

    public int getVisitCount() {
        return visitCount;
    }

    public double getWinScore() {
        return winScore;
    }

    public List<State> getAllPossibleStates() {
        List<State> possibleStates = new ArrayList<>();
        List<int[]> availableMoves = this.ticTacToe.getAvailableMoves();
        for (int[] move : availableMoves) {
            TicTacToe clone = TicTacToe.clone(ticTacToe);
            clone.input(move[0], move[1]);
            possibleStates.add(new State(clone));
        }
        return null;
    }

    public void increaseVisit() {
        this.visitCount++;
    }

    public void addScore(double score) {
        if (this.winScore != Integer.MIN_VALUE) this.winScore += score;
    }
}
