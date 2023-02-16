import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GameStatus, TicTacToeElement } from "../typing/TicTacToe";
import { Cell } from "../components/Cell";

interface Props {
  gameStatus: GameStatus;
  turn: TicTacToeElement;
}

export const GameStatusDescription = ({ gameStatus, turn }: Props) => {
  const renderContent = (gameStatus: GameStatus) => {
    switch (gameStatus) {
      case GameStatus.IN_PROGRESS:
        return (
          <>
            <Cell element={turn} />
            <Typography variant="h6">turn</Typography>
          </>
        );
      case GameStatus.DRAW:
        return <Typography variant="h6">draw</Typography>;
      case GameStatus.O_WINS:
      case GameStatus.X_WINS:
        return (
          <>
            <Cell element={gameStatus === GameStatus.O_WINS ? TicTacToeElement.O : TicTacToeElement.X} />
            <Typography variant="h6">wins!</Typography>
          </>
        );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      {renderContent(gameStatus)}
    </Box>
  );
};
