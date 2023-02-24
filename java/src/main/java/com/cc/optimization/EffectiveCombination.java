package com.cc.optimization;

import java.util.ArrayList;
import java.util.List;

public class EffectiveCombination {
    static final int[] LOSE_SCORES = {-10, -9, -8, -7, -6, -5, -4, -3, -2, -1};
    static final int[] DRAW_SCORES = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    static final int[] WIN_SCORES = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    private static List<int[]> cartesianProduct() {
        List<int[]> result = new ArrayList<>();
        for (int lose : LOSE_SCORES) {
            for (int draw : DRAW_SCORES) {
                for (int win : WIN_SCORES) {
                    result.add(new int[]{lose, draw, win});
                }
            }
        }
        return result;
    }

    public static List<int[]> getAll() {
        // Filter out the combinations that are not effective:
        // 1. winScore <= drawScore
        // 2. loseScore, drawScore, winScore have common factor
        List<int[]> rawProduct = cartesianProduct();
        List<int[]> first = new ArrayList<>();
        for (int[] arr : rawProduct) {
            int lose = arr[0], draw = arr[1], win = arr[2];
            if (win > draw) {
                first.add(arr);
            }
        }

        List<int[]> second = new ArrayList<>();
        for (int[] arr : first) {
            int a = Math.abs(arr[0]), b = Math.abs(arr[1]), c = Math.abs(arr[2]);
            int min = Math.min(Math.min(a, b), c);
            boolean hasCommonFactor = false;
            for (int factor = 2; factor <= min; factor++) {
                if (a % factor == 0 && b % factor == 0 && c % factor == 0) {
                    hasCommonFactor = true;
                    break;
                }
            }
            if (!hasCommonFactor) {
                second.add(arr);
            }
        }

        return second;
    }
}
