public class Main {
    static TicTacToeCli game = new TicTacToeCli(TicTacToeElement.X);

    public static void main(String[] args) {
        while (true) {
            playGame();
            if (!game.resetBoardFromCli()) break;
        }
    }

    public static void playGame() {
        while (game.isInProgress()) {
            game.printBoard();
            game.printTurn();
            game.inputFromCli();
        }
    }
}
