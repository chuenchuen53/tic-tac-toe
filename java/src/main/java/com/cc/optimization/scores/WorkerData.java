package com.cc.optimization.scores;

public class WorkerData {
    public final int loseScore;
    public final int drawScore;
    public final int winScore;
    public final int simulationTimes;
    public final int sampleSize;
    public final boolean logResult;

    public WorkerData(int loseScore, int drawScore, int winScore, int simulationTimes, int sampleSize,
                      boolean logResult) {
        this.loseScore = loseScore;
        this.drawScore = drawScore;
        this.winScore = winScore;
        this.simulationTimes = simulationTimes;
        this.sampleSize = sampleSize;
        this.logResult = logResult;
    }
}
