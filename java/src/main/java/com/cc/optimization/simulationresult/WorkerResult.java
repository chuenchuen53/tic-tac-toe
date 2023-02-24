package com.cc.optimization.simulationresult;

import com.cc.optimization.SimulationCase;
import com.cc.tictactoe.GameResultCount;
import org.bson.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public record WorkerResult(SimulationCase simulationCase, int simulationTimes, int setNumber,
                           GameResultCount[][] result) {

    public Document toDocument() {
        List<List<Document>> resultList = new ArrayList<>();
        for (GameResultCount[] innerArray : result) {
            List<Document> innerList = new ArrayList<>();
            for (GameResultCount item : innerArray) {
                if (item != null) {
                    innerList.add(item.toDocument());
                } else {
                    innerList.add(null);
                }
            }
            resultList.add(innerList);
        }

        return new Document("simulationCase", simulationCase.value)
                .append("simulationTimes", simulationTimes)
                .append("setNumber", setNumber)
                .append("result", resultList)
                .append("createdAt", new Date());
    }
}
