package com.cc.optimization.scores;

import com.cc.tictactoe.GameResultCount;
import org.bson.Document;

import java.util.Date;

public class WorkerResult {
    public final int loseScore;
    public final int drawScore;
    public final int winScore;
    public final int simulationTimes;
    public final int sampleSize;
    public final int startFirst_lose;
    public final int startFirst_draw;
    public final int startFirst_win;
    public final int startSecond_lose;
    public final int startSecond_draw;
    public final int startSecond_win;
    public final Date createdAt;

    public WorkerResult(WorkerData workerData, GameResultCount startFirstResult, GameResultCount startSecondResult) {
        this.loseScore = workerData.loseScore;
        this.drawScore = workerData.drawScore;
        this.winScore = workerData.winScore;
        this.simulationTimes = workerData.simulationTimes;
        this.sampleSize = workerData.sampleSize;
        this.startFirst_lose = startFirstResult.getLose();
        this.startFirst_draw = startFirstResult.getDraw();
        this.startFirst_win = startFirstResult.getWin();
        this.startSecond_lose = startSecondResult.getLose();
        this.startSecond_draw = startSecondResult.getDraw();
        this.startSecond_win = startSecondResult.getWin();
        this.createdAt = new Date();
    }

    public Document toDocument() {
        return new Document()
                .append("loseScore", loseScore)
                .append("drawScore", drawScore)
                .append("winScore", winScore)
                .append("simulationTimes", simulationTimes)
                .append("sampleSize", sampleSize)
                .append("startFirst_lose", startFirst_lose)
                .append("startFirst_draw", startFirst_draw)
                .append("startFirst_win", startFirst_win)
                .append("startSecond_lose", startSecond_lose)
                .append("startSecond_draw", startSecond_draw)
                .append("startSecond_win", startSecond_win)
                .append("createdAt", createdAt);
    }

    @Override
    public String toString() {
        return toDocument().toJson();
    }
}
