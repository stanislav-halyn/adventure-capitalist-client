// Utils
import { getUserLanguage } from './locale.utils';


const intl = new Intl.NumberFormat(getUserLanguage(), {
  // @ts-ignore
  notation: 'compact',
  compactDisplay: 'long',
  maximumFractionDigits: 3
});


/**
 * Shortens a number to millions, billions etc.
 */
export const formatLargeNumber = (number: number): string => intl.format(number);

/**
 * Shortens a number to millions, billions etc.
 */
export const formatLargeNumberToCurrency = (number: number): string => (
  `$${formatLargeNumber(number)}`
);
