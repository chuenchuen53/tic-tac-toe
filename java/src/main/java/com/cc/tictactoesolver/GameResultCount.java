package com.cc.tictactoesolver;

import org.bson.Document;
import org.jetbrains.annotations.NotNull;

public class GameResultCount {
    private int lose;
    private int draw;
    private int win;

    public GameResultCount() {
    }

    public int getLose() {
        return lose;
    }

    public int getDraw() {
        return draw;
    }

    public int getWin() {
        return win;
    }

    public void add(@NotNull GameResult gameResult) {
        switch (gameResult) {
            case LOSE -> lose++;
            case DRAW -> draw++;
            case WIN -> win++;
        }
    }

    public void add(@NotNull GameResult gameResult, int increment) {
        switch (gameResult) {
            case LOSE -> lose += increment;
            case DRAW -> draw += increment;
            case WIN -> win += increment;
        }
    }

    @Override
    public String toString() {
        return toDocument().toJson();
    }

    public Document toDocument() {
        Document doc = new Document();
        doc.append("lose", lose);
        doc.append("draw", draw);
        doc.append("win", win);
        return doc;
    }
}
