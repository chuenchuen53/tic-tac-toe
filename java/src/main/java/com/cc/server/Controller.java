package com.cc.server;

import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeElement;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {
    final TicTacToe ticTacToe = new TicTacToe(TicTacToeElement.X);

    @GetMapping("/api/board")
    public GetGameResponse getBoard() {
        return new GetGameResponse(ticTacToe);
    }

    @PostMapping("/api/input")
    public GetGameResponse input(@RequestBody InputRequest request) {
        int rowIndex = request.rowIndex();
        int columnIndex = request.columnIndex();
        ticTacToe.input(rowIndex, columnIndex);
        return new GetGameResponse(ticTacToe);
    }

    @DeleteMapping("/api/reset")
    public GetGameResponse reset() {
        var nextStartTurn = ticTacToe.getStartTurn() == TicTacToeElement.X ? TicTacToeElement.O : TicTacToeElement.X;
        ticTacToe.resetBoard(nextStartTurn);
        return new GetGameResponse(ticTacToe);
    }
}
