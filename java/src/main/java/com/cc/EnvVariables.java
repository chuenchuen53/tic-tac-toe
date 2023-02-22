package com.cc;

import io.github.cdimascio.dotenv.Dotenv;

public final class EnvVariables {

    public static final String ENV;
    public static final String DB_CONN_STRING;
    public static final String DB_NAME;
    public static final String DB_NAME_FOR_DEV;

    static {
        Dotenv dotenv = Dotenv.load();
        ENV = dotenv.get("NODE_ENV");
        DB_CONN_STRING = dotenv.get("DB_CONN_STRING");
        DB_NAME = dotenv.get("DB_NAME");
        DB_NAME_FOR_DEV = dotenv.get("DB_NAME_FOR_DEV");

        if (ENV == null) throw new RuntimeException("NODE_ENV is not set in env");
        if (!(ENV.equals("dev") || ENV.equals("prod"))) {
            throw new RuntimeException("NODE_ENV must be either dev or prod");
        }
        if (DB_CONN_STRING == null) throw new RuntimeException("DB_CONN_STRING is not set in env");
        if (DB_NAME == null) throw new RuntimeException("DB_NAME is not set in env");
        if (DB_NAME_FOR_DEV == null) throw new RuntimeException("DB_NAME_FOR_DEV is not set in env");
    }

    private EnvVariables() {
        throw new AssertionError("This class should not be instantiated.");
    }
}
