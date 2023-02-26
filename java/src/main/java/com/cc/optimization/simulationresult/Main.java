package com.cc.optimization.simulationresult;

import com.cc.EnvVariables;
import com.cc.optimization.DateTimeUtil;
import com.cc.optimization.SimulationCase;
import com.cc.tictactoedb.TicTacToeDb;

import java.util.Date;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class Main {
    private static final int THREADS = EnvVariables.THREADS;

    public static void main(String[] args) {
        Date start = new Date();
        System.out.println(DateTimeUtil.formatDate(start) + " start main()");

        SimulationCase[] generateCases = Setting.cases;

        TicTacToeDb ticTacToeDb = TicTacToeDb.getInstance();

        ExecutorService executor = Executors.newFixedThreadPool(THREADS);

        for (SimulationCase simulationCase : generateCases) {
            for (int setNumber = 0; setNumber < Setting.numberOfSet; setNumber++) {
                CompletableFuture.supplyAsync(
                        new Worker(simulationCase, Setting.simulationTimes, setNumber, true),
                        executor
                ).thenApply(x -> {
                    ticTacToeDb.simulationResult.insertOne(x.toDocument());
                    return null;
                });
            }
        }

        executor.shutdown();

        try {
            if (executor.awaitTermination(Long.MAX_VALUE, TimeUnit.DAYS)) {
                Date end = new Date();
                System.out.println(DateTimeUtil.formatDate(end) + " finish main(), (execution time: " +
                        DateTimeUtil.formatDurationToSec(start, end) + ")");
            } else {
                throw new RuntimeException("time out");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
