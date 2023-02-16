import Box from "@mui/material/Box";
import { GameStatus, TicTacToeElement } from "../typing/TicTacToe";
import { Chess } from "../components/Cell";
import { Typography } from "@mui/material";

interface Props {
  gameStatus: GameStatus;
  turn: TicTacToeElement;
}

export const GameStatusDescription = ({ gameStatus, turn }: Props) => {
  switch (gameStatus) {
    case GameStatus.IN_PROGRESS:
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Chess element={turn} />
          <Typography variant="h6">Turn</Typography>
        </Box>
      );
    case GameStatus.DRAW:
      return <Typography variant="body1">Draw</Typography>;
    case GameStatus.O_WINS:
    case GameStatus.X_WINS:
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Chess element={gameStatus === GameStatus.O_WINS ? TicTacToeElement.O : TicTacToeElement.X} />
          <Typography variant="h6">win the game</Typography>
        </Box>
      );
  }
};
