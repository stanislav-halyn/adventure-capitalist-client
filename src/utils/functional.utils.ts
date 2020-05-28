
/**
 * Performs right-to-left function composition.
 */
export const compose = <R, T> (...fns: Array<(arg: any) => any>) => (x: T): R => (
  fns.reduceRight((val, func) => func(val), x) as unknown as R
);


/**
 * Curried version of arr.map method
 */
export const map = <T, U>(callback: (val: T, idx: number, arr: T[]) => U) => (arr: T[]): U[] => (
  arr.map(callback)
);

/**
 * Curried version of arr.join method
 */
export const join = <T>(separator: string) => (arr: T[]): string => (
  arr.join(separator)
);
