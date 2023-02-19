package com.cc.server;

import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;
import com.cc.tictactoe.TicTacToeSolver;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
public class Controller {
    final TicTacToe ticTacToe = new TicTacToe(TicTacToeElement.X);
    final TicTacToeSolver ticTacToeSolver = new TicTacToeSolver(-10, 7, 10, 1000, ticTacToe);

    @GetMapping("/api/board")
    public GetGameResponse getBoard() {
        return new GetGameResponse(ticTacToe);
    }

    @PostMapping("/api/input")
    public GetGameResponse input(@RequestBody InputRequest request) {
        int rowIndex = request.rowIndex();
        int columnIndex = request.columnIndex();
        ticTacToe.input(rowIndex, columnIndex);
        System.out.println(Arrays.deepToString(ticTacToeSolver.calculateScore()));
        return new GetGameResponse(ticTacToe);
    }

    @DeleteMapping("/api/reset")
    public GetGameResponse reset() {
        var nextStartTurn = ticTacToe.getStartTurn() == TicTacToeElement.X ? TicTacToeElement.O : TicTacToeElement.X;
        ticTacToe.resetBoard(nextStartTurn);
        return new GetGameResponse(ticTacToe);
    }
}
