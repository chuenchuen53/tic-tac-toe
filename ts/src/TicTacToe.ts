import { GameStatus, TicTacToeElement } from "./typing";

export default class TicTacToe {
  public static readonly BOARD_SIZE = 3;

  private readonly LINES_INDEXES: number[][][] = [
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
  private board: (TicTacToeElement | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  private startTurn: TicTacToeElement;
  private turn: TicTacToeElement;

  constructor(turn: TicTacToeElement) {
    this.startTurn = turn;
    this.turn = turn;
  }

  static clone(ticTacToe: TicTacToe): TicTacToe {
    const clone = new TicTacToe(ticTacToe.getStartTurn());
    clone.board = ticTacToe.getBoard();
    clone.turn = ticTacToe.getTurn();
    return clone;
  }

  public getBoard(): (TicTacToeElement | null)[][] {
    return this.board.map((row) => [...row]);
  }

  public getStartTurn(): TicTacToeElement {
    return this.startTurn;
  }

  public getTurn(): TicTacToeElement {
    return this.turn;
  }

  public input(rowIndex: number, columnIndex: number): boolean {
    if (this.board[rowIndex][columnIndex] === null) {
      this.board[rowIndex][columnIndex] = this.turn;
      this.toggleTurn();
      return true;
    }
    return false;
  }

  public resetBoard(turn: TicTacToeElement): void {
    this.turn = turn;
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j] = null;
      }
    }
  }

  public getGameStatus(): GameStatus {
    const winner = this.checkWinner();
    if (winner !== null) {
      return winner === TicTacToeElement.X ? GameStatus.X_WINS : GameStatus.O_WINS;
    }
    if (this.allFilled()) {
      return GameStatus.DRAW;
    }
    return GameStatus.IN_PROGRESS;
  }

  private allFilled(): boolean {
    return this.board.flat().every((cell) => cell !== null);
  }

  private checkWinner(): TicTacToeElement | null {
    for (const x of this.LINES_INDEXES) {
      const cells: (TicTacToeElement | null)[] = [
        this.board[x[0][0]][x[0][1]],
        this.board[x[1][0]][x[1][1]],
        this.board[x[2][0]][x[2][1]],
      ];
      if (cells.every((cell) => cell !== null) && new Set(cells).size === 1) {
        return cells[0];
      }
    }
    return null;
  }

  private toggleTurn(): void {
    this.turn = this.turn === TicTacToeElement.X ? TicTacToeElement.O : TicTacToeElement.X;
  }
}
