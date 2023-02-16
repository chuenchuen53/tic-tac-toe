import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Board } from "../components/Board";
import { GameStatusDescription } from "../components/EndGameDescription";
import ReplayIcon from "@mui/icons-material/Replay";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { Api, GetGameResponse } from "../api";
import Loading from "../components/Loading";

export const TicTacToe = () => {
  const [game, setGame] = useState<null | GetGameResponse>(null);

  const getGame = async () => {
    const data = await Api.getGame();
    if (data) setGame(data);
  };

  const clickCell = async (rowIndex: number, columnIndex: number) => {
    const data = await Api.input(rowIndex, columnIndex);
    if (data) setGame(data);
  };

  const resetGame = async () => {
    const data = await Api.resetGame();
    if (data) setGame(data);
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <div>
      {game ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <GameStatusDescription gameStatus={game.gameStatus} turn={game.turn} />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ px: 8 }}>
              <Board board={game.board} gameStatus={game.gameStatus} clickCell={clickCell} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }} onClick={getGame}>
            <Button variant="outlined" startIcon={<ReplayIcon />}>
              Reload
            </Button>
            <Button variant="outlined" startIcon={<ClearAllIcon />} onClick={resetGame}>
              Reset
            </Button>
          </Box>
        </Box>
      ) : (
        <Loading retry={getGame} />
      )}
    </div>
  );
};
