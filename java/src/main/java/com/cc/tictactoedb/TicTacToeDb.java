package com.cc.tictactoedb;

import com.cc.EnvVariables;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.Objects;

public class TicTacToeDb {
    private static final String uri = EnvVariables.DB_CONN_STRING;
    private static final String dbName = Objects.equals(EnvVariables.ENV, "prod") ? EnvVariables.DB_NAME :
            EnvVariables.DB_NAME_FOR_DEV;
    private static TicTacToeDb instance = null;
    public MongoCollection<Document> testCollection;
    public MongoCollection<Document> simulationResult;
    public MongoCollection<Document> scores;
    private MongoClient client;
    private MongoDatabase db;

    private TicTacToeDb() {
        connect();
    }

    public static TicTacToeDb getInstance() {
        if (instance == null) {
            instance = new TicTacToeDb();
        }
        return instance;
    }

    public void connect() {
        try {
            client = MongoClients.create(TicTacToeDb.uri);
            db = client.getDatabase(TicTacToeDb.dbName);
            testCollection = db.getCollection("testCollection");
            simulationResult = db.getCollection("simulationResult");
            scores = db.getCollection("scores");
            System.out.println("Successfully connected to database: " + TicTacToeDb.dbName);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}