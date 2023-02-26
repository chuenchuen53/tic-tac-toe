import React from "react";
import Box from "@mui/material/Box";

interface Props {
  scores: (number | null)[][] | null;
  bestMove: number[] | null;
}

const emptyScores = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const Scores = ({ scores, bestMove }: Props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
      }}
    >
      {(scores ?? emptyScores).map((row, rowIndex) =>
        row.map((score, columnIndex) => (
          <Box
            key={rowIndex * 3 + columnIndex}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "24px",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "secondary.main",
              backgroundColor: bestMove && bestMove[0] === rowIndex && bestMove[1] === columnIndex ? "success.main" : undefined,
            }}
          >
            {score}
          </Box>
        ))
      )}
    </Box>
  );
};
