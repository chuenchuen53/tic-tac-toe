package com.cc.tictactoedb;

import com.cc.optimization.simulationresult.WorkerResult;
import org.bson.Document;

public class SimulationResultDbObject {
    public static Document convert(WorkerResult result) {
        return new Document()
                .append("simulationCase", result.simulationCase().value)
                .append("simulationTimes", result.simulationTimes())
                .append("setNumber", result.setNumber())
                .append("result", result.result());
    }
}
