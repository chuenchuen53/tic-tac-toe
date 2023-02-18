import { scanner } from "./Scanner";
import { TicTacToeCli } from "./TicTacToeCli";
import { TicTacToeElement } from "../typing";

class Main {
  static game: TicTacToeCli = new TicTacToeCli(TicTacToeElement.X);

  static async run(): Promise<void> {
    while (true) {
      await this.playGame();
      if (!(await this.game.resetBoardFromCli())) {
        scanner.close();
        break;
      }
    }
  }

  static async playGame(): Promise<void> {
    while (this.game.isInProgress()) {
      this.game.printBoard();
      this.game.printTurn();
      await this.game.inputFromCli();
    }
  }
}

Main.run();
