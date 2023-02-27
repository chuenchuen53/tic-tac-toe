import TicTacToe from "../TicTacToe/TicTacToe";
import { TicTacToeElement, GameStatus } from "../TicTacToe/typing";
import { scanner } from "./Scanner";

export class TicTacToeCli extends TicTacToe {
  constructor(turn: TicTacToeElement) {
    super(turn);
  }

  public printBoard(): void {
    const board = this.getBoard();
    const rowSeparator = "--+---+--";
    for (let i = 0; i < board.length; i++) {
      let row = "";
      for (let j = 0; j < board[i].length; j++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        row += board[i][j] === null ? " " : board[i][j]!.toString();
        if (j < board[i].length - 1) {
          row += " | ";
        }
      }
      console.log(row);
      if (i < board.length - 1) {
        console.log(rowSeparator);
      }
    }
  }

  public printTurn(): void {
    const turn: TicTacToeElement = this.getTurn();
    console.log("Turn: " + turn);
  }

  public async inputFromCli(): Promise<void> {
    try {
      const rowIndex: number = await scanner.nextInt("row (0-2): ");
      const columnIndex: number = await scanner.nextInt("column (0-2): ");
      const success: boolean = this.input(rowIndex, columnIndex);
      if (!success) {
        console.log("Invalid input");
        await this.inputFromCli();
      }
    } catch (e) {
      console.log("Invalid input");
      await this.inputFromCli();
    }
  }

  public isInProgress(): boolean {
    const status: GameStatus = this.getGameStatus();
    switch (status) {
      case GameStatus.DRAW:
        console.log("Draw!");
        return false;
      case GameStatus.X_WINS:
        console.log("X wins!");
        this.printBoard();
        return false;
      case GameStatus.O_WINS:
        console.log("O wins!");
        this.printBoard();
        return false;
      case GameStatus.IN_PROGRESS:
        return true;
    }
  }

  public async resetBoardFromCli(): Promise<boolean> {
    try {
      const response: string = await scanner.next("Play again? (y/n) ");
      switch (response) {
        case "y": {
          const newTurn: TicTacToeElement =
            this.getStartTurn() == TicTacToeElement.X ? TicTacToeElement.O : TicTacToeElement.X;
          this.resetBoard(newTurn);
          console.log(`New game started with ${newTurn} first`);
          return true;
        }
        case "n":
          return false;
        default:
          console.log("Invalid input");
          return await this.resetBoardFromCli();
      }
    } catch (e) {
      console.log("Invalid input");
      return await this.resetBoardFromCli();
    }
  }
}
