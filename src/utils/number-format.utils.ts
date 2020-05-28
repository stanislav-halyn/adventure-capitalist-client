// Utils
import { getUserLanguage } from './locale.utils';


const intl = new Intl.NumberFormat(getUserLanguage(), {
  // @ts-ignore
  notation: 'compact',
  compactDisplay: 'long',
  maximumFractionDigits: 3,
  style: 'currency',
  currency: 'USD'
});


/**
 * Shortens a number to millions, billions etc.
 */
export const formatLargeNumber = (number: number): string => intl.format(number);
