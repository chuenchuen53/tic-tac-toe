const LOSE_SCORES = [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
const DRAW_SCORES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const WIN_SCORES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

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
  console.log("rawProduct.length: ", rawProduct.length);
  const first = rawProduct.filter(([_lose, draw, win]) => win > draw);
  console.log("first.length: ", first.length);
  const second = first.filter(([a, b, c]) => {
    const min = Math.min(Math.abs(a), Math.abs(b), Math.abs(c));
    for (let factor = 2; factor <= min; factor++) {
      if (a % factor === 0 && b % factor === 0 && c % factor === 0) return true;
    }

    return false;
  });
  console.log("second.length: ", second.length);
  return second;
};
