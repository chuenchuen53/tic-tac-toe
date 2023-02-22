package com.cc.optimization;

import java.util.Date;

public class DateTimeUtil {
    public static String formatDate(Date date) {
        int year = date.getYear() + 1900;
        String month = String.format("%02d", date.getMonth() + 1);
        String day = String.format("%02d", date.getDate());
        String hours = String.format("%02d", date.getHours());
        String minutes = String.format("%02d", date.getMinutes());
        String seconds = String.format("%02d", date.getSeconds());

        return String.format("%d-%s-%s_%s:%s:%s", year, month, day, hours, minutes, seconds);
    }

    public static String formatDurationToSec(Date start, Date end) {
        long durationMs = end.getTime() - start.getTime();
        double durationSec = durationMs / 1000.0;
        return String.format("%.3fs", durationSec);
    }
}
