package com.cc.optimization.simulationresult;

import com.cc.optimization.BoardConfiguration;
import com.cc.optimization.DateTimeUtil;
import com.cc.optimization.SimulationCase;
import com.cc.tictactoe.GameResultCount;
import com.cc.tictactoe.TicTacToe;
import com.cc.tictactoe.TicTacToeSolver;

import java.util.Arrays;
import java.util.Date;
import java.util.function.Supplier;

public class Worker implements Supplier<WorkerResult> {
    private final int dummyLoseScore = -10;
    private final int dummyDrawScore = 8;
    private final int dummyWinScore = 10;
    private final SimulationCase simulationCase;
    private final int simulationTimes;
    private final int setNumber;
    private final boolean logResult;

    public Worker(SimulationCase simulationCase, int simulationTimes, int setNumber, boolean logResult) {
        this.simulationCase = simulationCase;
        this.simulationTimes = simulationTimes;
        this.setNumber = setNumber;
        this.logResult = logResult;
    }

    @Override
    public WorkerResult get() {
        Date start = new Date();
        System.out.printf("start %s simulationCase %s simulationTimes %d setNumber %d%n",
                DateTimeUtil.formatDate(start), simulationCase.value, simulationTimes, setNumber);

        TicTacToe ticTacToe = BoardConfiguration.getTicTacToe(simulationCase);
        TicTacToeSolver solver = new TicTacToeSolver(dummyLoseScore, dummyDrawScore, dummyWinScore, simulationTimes,
                ticTacToe);
        GameResultCount[][] result = solver.getSimulationResult();

        if (logResult) {
            System.out.println(Arrays.deepToString(result));
        }

        Date end = new Date();
        String timeSpent = DateTimeUtil.formatDurationToSec(start, end);
        System.out.printf("finish %s simulationCase %s simulationTimes %d setNumber %d timeSpent %s%n",
                DateTimeUtil.formatDate(end), simulationCase.value, simulationTimes, setNumber, timeSpent);

        return new WorkerResult(simulationCase, simulationTimes, setNumber, result);
    }
}
