import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Board } from "../components/Board";
import { GameStatusDescription } from "../components/EndGameDescription";
import { Api, GetGameResponse } from "../api";

export const TicTacToe = () => {
  const [game, setGame] = useState<null | GetGameResponse>(null);

  const getGame = async () => {
    const data = await Api.getGame();
    if (data) {
      setGame(data);
    }
  };

  const clickCell = async (rowIndex: number, columnIndex: number) => {
    const data = await Api.input(rowIndex, columnIndex);
    if (data) {
      setGame(data);
    }
  };

  const resetGame = async () => {
    const data = await Api.resetGame();
    if (data) {
      setGame(data);
    }
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <div>
      {game && (
        <div>
          <GameStatusDescription gameStatus={game.gameStatus} turn={game.turn} />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ px: 8 }}>
              <Board board={game.board} gameStatus={game.gameStatus} clickCell={clickCell} />
              <Box sx={{ py: 2 }}>
                <Button variant="contained" onClick={getGame}>
                  Reload
                </Button>
                <Button variant="contained" onClick={resetGame}>
                  Reset
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
};
