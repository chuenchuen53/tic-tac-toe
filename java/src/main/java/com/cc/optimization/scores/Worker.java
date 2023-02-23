package com.cc.optimization.scores;

import com.cc.optimization.DateTimeUtil;
import com.cc.tictactoe.*;

import java.util.Date;
import java.util.function.Supplier;

public class Worker implements Supplier<WorkerResult> {
    private final TicTacToeElement BOT = TicTacToeElement.X;
    private final TicTacToeElement OPPONENT = TicTacToeElement.O;
    private final WorkerData workerData;
    private final int loseScore;
    private final int drawScore;
    private final int winScore;
    private final int simulationTimes;
    private final int sampleSize;
    private final boolean logResult;

    public Worker(WorkerData workerData) {
        this.workerData = workerData;
        this.loseScore = workerData.loseScore;
        this.drawScore = workerData.drawScore;
        this.winScore = workerData.winScore;
        this.simulationTimes = workerData.simulationTimes;
        this.sampleSize = workerData.sampleSize;
        this.logResult = workerData.logResult;
    }

    @Override
    public WorkerResult get() {
        Date start = new Date();
        System.out.printf("start %s scores %d,%d,%d simulationTimes %d sampleSize %d%n",
                DateTimeUtil.formatDate(start),
                loseScore, drawScore, winScore, simulationTimes, sampleSize);


        GameResultCount startFirstResult = new GameResultCount();
        TicTacToe ticTacToeBotStartFirst = new TicTacToe(BOT);
        TicTacToeSolver solverBotStartFirst = new TicTacToeSolver(loseScore, drawScore, winScore, simulationTimes,
                ticTacToeBotStartFirst);
        for (int i = 0; i < sampleSize; i++) {
            GameResult gameResult = resultWithBotStartFirst(solverBotStartFirst);
            startFirstResult.add(gameResult);
            ticTacToeBotStartFirst.resetBoard(BOT);
        }

        GameResultCount startSecondResult = new GameResultCount();
        TicTacToe ticTacToeBotStartSecond = new TicTacToe(OPPONENT);
        TicTacToeSolver solverBotStartSecond = new TicTacToeSolver(loseScore, drawScore, winScore, simulationTimes,
                ticTacToeBotStartSecond);
        for (int i = 0; i < sampleSize; i++) {
            GameResult gameResult = resultWithBotStartSecond(solverBotStartSecond);
            startSecondResult.add(gameResult);
            ticTacToeBotStartSecond.resetBoard(OPPONENT);
        }

        WorkerResult workerResult = new WorkerResult(workerData, startFirstResult, startSecondResult);

        if (logResult) {
            System.out.println(workerResult);
        }

        Date end = new Date();
        String timeSpent = DateTimeUtil.formatDurationToSec(start, end);
        System.out.printf("finish %s scores %d,%d,%d simulationTimes %d sampleSize %d timeSpent %s%n",
                DateTimeUtil.formatDate(end),
                loseScore, drawScore, winScore, simulationTimes, sampleSize, timeSpent);

        return workerResult;
    }

    private GameResult resultWithBotStartFirst(TicTacToeSolver solver) {
        TicTacToe ticTacToe = solver.getTicTacToe();
        GameStatus gameStatus = ticTacToe.getGameStatus();
        while (gameStatus == GameStatus.IN_PROGRESS) {
            int[] bestMove = solver.getBestMove();
            ticTacToe.input(bestMove[0], bestMove[1]);
            gameStatus = ticTacToe.getGameStatus();

            if (gameStatus == GameStatus.IN_PROGRESS) {
                int[] randomMove = solver.getRandomMove();
                ticTacToe.input(randomMove[0], randomMove[1]);
                gameStatus = ticTacToe.getGameStatus();
            }
        }

        return getBotResultFromGameStatus(gameStatus);
    }

    private GameResult resultWithBotStartSecond(TicTacToeSolver solver) {
        TicTacToe ticTacToe = solver.getTicTacToe();
        GameStatus gameStatus = ticTacToe.getGameStatus();
        while (gameStatus == GameStatus.IN_PROGRESS) {
            int[] randomMove = solver.getRandomMove();
            ticTacToe.input(randomMove[0], randomMove[1]);
            gameStatus = ticTacToe.getGameStatus();

            if (gameStatus == GameStatus.IN_PROGRESS) {
                int[] bestMove = solver.getBestMove();
                ticTacToe.input(bestMove[0], bestMove[1]);
                gameStatus = ticTacToe.getGameStatus();
            }
        }

        return getBotResultFromGameStatus(gameStatus);
    }

    private GameResult getBotResultFromGameStatus(GameStatus gameStatus) {
        TicTacToeElement winner = TicTacToe.winnerFromGameStatus(gameStatus);
        if (winner == BOT) {
            return GameResult.WIN;
        } else if (winner == OPPONENT) {
            return GameResult.LOSE;
        } else {
            return GameResult.DRAW;
        }
    }
}
