const LOSE_SCORES = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
const DRAW_SCORES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const WIN_SCORES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cartesianProduct: () => number[][] = () => {
  const result = [];
  for (const lose of LOSE_SCORES) {
    for (const draw of DRAW_SCORES) {
      for (const win of WIN_SCORES) {
        result.push([lose, draw, win]);
      }
    }
  }
  return result;
};

export const effectiveCombination: () => number[][] = () => {
  // Filter out the combinations that are not effective:
  // 1. winScore <= drawScore
  // 2. loseScore, drawScore, winScore have common factor
  const rawProduct = cartesianProduct();
  const first = rawProduct.filter(([_lose, draw, win]) => win > draw);
  const second = first.filter((arr) => {
    const [a, b, c] = arr.map(Math.abs);
    const min = Math.min(a, b, c);
    for (let factor = 2; factor <= min; factor++) {
      if (a % factor === 0 && b % factor === 0 && c % factor === 0) return false;
    }
    return true;
  });
  return second;
};
