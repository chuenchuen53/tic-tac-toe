package com.cc.optimization.scores;

import com.cc.EnvVariables;
import com.cc.optimization.DateTimeUtil;
import com.cc.optimization.EffectiveCombination;
import com.cc.tictactoedb.TicTacToeDb;

import java.util.Date;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class Main {
    private static final int THREADS = EnvVariables.THREADS;

    public static void main(String[] args) {
        Date start = new Date();
        System.out.println(DateTimeUtil.formatDate(start) + " start main()");

        TicTacToeDb ticTacToeDb = TicTacToeDb.getInstance();

        List<int[]> allCombination = EffectiveCombination.getAll();
        List<int[]> generateCombination = allCombination.subList(0, 389);

        ExecutorService executor = Executors.newFixedThreadPool(THREADS);

        for (int i = 0; i < 1; i++) {
            for (int[] scores : generateCombination) {
                int loseScore = scores[0];
                int drawScore = scores[1];
                int winScore = scores[2];
                WorkerData workerData = new WorkerData(loseScore, drawScore, winScore, Setting.simulationTimes,
                        Setting.sampleSize, true);
                CompletableFuture.supplyAsync(new Worker(workerData), executor).thenApply(x -> {
                    ticTacToeDb.scores.insertOne(x.toDocument());
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
