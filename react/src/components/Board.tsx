import React from "react";
import Box from "@mui/material/Box";
import { Board as BoardTyping, GameStatus } from "../typing/TicTacToe";
import { Cell } from "./Cell";

interface Props {
  board: BoardTyping;
  gameStatus: GameStatus;
  clickCell?: (rowIndex: number, columnIndex: number) => void;
}

export const Board = (props: Props) => {
  const { board, gameStatus, clickCell } = props;
  const isInProgress = gameStatus === GameStatus.IN_PROGRESS;

  const canClick = (rowIndex: number, columnIndex: number) => {
    return clickCell && isInProgress && !board[rowIndex][columnIndex];
  };

  const handleOnClick = (rowIndex: number, columnIndex: number) => {
    if (canClick(rowIndex, columnIndex)) {
      clickCell?.(rowIndex, columnIndex);
    }
  };

  const winningPattern = getWinningPattern(board, gameStatus);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        bgcolor: "primary.dark",
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((element, columnIndex) => (
          <Box
            key={rowIndex * 3 + columnIndex}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "100px",
              fontSize: "2.5rem",
              bgcolor: inWiningPattern(rowIndex, columnIndex, winningPattern) ? "secondary.main" : "primary.main",
              cursor: canClick(rowIndex, columnIndex) ? "pointer" : "default",
            }}
            onClick={() => handleOnClick(rowIndex, columnIndex)}
          >
            {<Cell element={element} />}
          </Box>
        ))
      )}
    </Box>
  );
};

const LINE_INDEXES: number[][][] = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

function getWinningPattern(board: BoardTyping, gameStatus: GameStatus): number[][] {
  if (gameStatus === GameStatus.X_WINS || gameStatus === GameStatus.O_WINS) {
    const winningPattern = LINE_INDEXES.find((line) => {
      const [a, b, c] = line;
      return board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]];
    });
    return winningPattern ?? [];
  } else {
    return [];
  }
}

function inWiningPattern(rowIndex: number, columnIndex: number, winningPattern: number[][]) {
  return winningPattern.some(([row, column]) => row === rowIndex && column === columnIndex);
}
