import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { InputRequest } from "./api-typing";
import { TicTacToe } from "./TicTacToe";
import { TicTacToeElement } from "./typing";

const PORT = 8080;
const CORS_OPTIONS = Object.freeze({
  origin: "http://localhost:3000",
});

const ticTacToe = new TicTacToe(TicTacToeElement.X);

const app = express();
app.use(cors(CORS_OPTIONS));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/board", function (req: Request, res: Response) {
  const resp = getGameData();
  res.json(resp);
});

app.post("/api/input", function (req: Request, res: Response) {
  const body = req.body;
  if (!isIntFrom0To2(body.rowIndex) || !isIntFrom0To2(body.columnIndex)) {
    res.status(400);
    res.send("Bad Request");
    return;
  }
  const { rowIndex, columnIndex } = body as InputRequest;
  const success = ticTacToe.input(rowIndex, columnIndex);
  if (success) {
    const resp = getGameData();
    res.json(resp);
  } else {
    res.status(400);
    res.send("Bad Request");
  }
});

app.post("/api/reset", function (req: Request, res: Response) {
  const newTurn = ticTacToe.getTurn() === TicTacToeElement.X ? TicTacToeElement.O : TicTacToeElement.X;
  ticTacToe.resetBoard(newTurn);
  const resp = getGameData();
  res.json(resp);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});

function getGameData() {
  return {
    board: ticTacToe.getBoard(),
    turn: ticTacToe.getTurn(),
    gameStatus: ticTacToe.getGameStatus(),
  };
}

function isIntFrom0To2(n: number): boolean {
  return Number.isInteger(n) && n >= 0 && n <= 2;
}
