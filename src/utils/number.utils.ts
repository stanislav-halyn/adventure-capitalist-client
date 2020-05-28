
/**
 * Calculates how many percentages of `total` is `num`
 */
export const calculatePercentageOf = (num: number, total: number): number => (
  num / (total / 100)
);
