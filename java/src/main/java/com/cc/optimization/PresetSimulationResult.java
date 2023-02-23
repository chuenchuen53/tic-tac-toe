package com.cc.optimization;

import com.cc.optimization.simulationresult.SimulationCase;
import com.cc.tictactoe.GameResultCount;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jetbrains.annotations.NotNull;
import org.springframework.util.ResourceUtils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.EnumMap;
import java.util.Map;
import java.util.stream.Collectors;

public class PresetSimulationResult {
    public static Map<SimulationCase, GameResultCount[][]> data;

    static {
        try {
            File myFile = ResourceUtils.getFile("classpath:result.json");
            FileReader fileReader = new FileReader(myFile);
            BufferedReader reader = new BufferedReader(fileReader);
            ObjectMapper objectMapper = new ObjectMapper();
            String resultJson = reader.lines().collect(Collectors.joining());
            reader.close();
            data = objectMapper.readValue(
                    resultJson, new TypeReference<EnumMap<SimulationCase, GameResultCount[][]>>() {
                    });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @NotNull
    public static GameResultCount[][] getPresetResult(SimulationCase simulationCase) {
        return data.get(simulationCase);
    }
}
