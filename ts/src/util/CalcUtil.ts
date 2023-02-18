export default class CalcUtil {
  public static meanAndSD(arr: number[]): { mean: number; sd: number } {
    const n = arr.length;
    if (n < 2) throw new Error("Array must contain at least 2 elements");
    const mean = arr.reduce((sum, x) => sum + x, 0) / n;
    const sd = Math.sqrt(arr.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / (n - 1));
    return { mean, sd };
  }

  public static roundUpToHundred(num: number): number {
    return Math.ceil(num / 100) * 100;
  }
}
