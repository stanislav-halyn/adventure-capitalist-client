// Utils
import { compose, map, join } from './functional.utils';


type TimeDifferenceArgs = {
  timestamp: number | null
  durationMs: number
};


/**
 * Prettifies number
 *
 * Adds 0 prefix if the value if < 10
 */
const prettifyNumber = (number: number) => `${number < 10 ? '0' : ''}${number}`;


/**
 * Gets total seconds in `ms`
 */
const msToSeconds = (ms: number): number => Math.floor(ms / 1000);


/**
 * Gets total minutes in `ms`
 */
const msToMinutes = (ms: number): number => Math.floor(ms / (1000 * 60));


/**
 * Gets total hours in `ms`
 */
const msToHours = (ms: number): number => Math.floor(ms / (1000 * 60 * 60));


/**
 * Get time units in format [h:m:s]
 *
 * If h is 0 - returns [m:s]
 */
const getTimeUnits = (ms: number): Array<number> => {
  const totalSeconds = msToSeconds(ms);
  const totalMinutes = msToMinutes(ms);
  const totalHours = msToHours(ms);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;

  return [hours, minutes, seconds];
};


/**
 * Calculates the difference of time in ms
 */
const calculateMsDifference = ({ timestamp, durationMs }: TimeDifferenceArgs): number => (
  timestamp
    ? (timestamp + durationMs) - new Date().getTime()
    : durationMs
);


/**
 * Returns 0 if ms is negative
 */
const filterNegativeDifference = (ms: number): number => (ms > 0 ? ms : 0);


/**
 * Formats `ms` to format [hh:mm:ss] or [mm:ss]
 */
const formatTime = compose<string, number>(
  join(':'),
  map(prettifyNumber),
  getTimeUnits,
  filterNegativeDifference
);


/**
 * Calculates time left since `timestamp` with `duration` started
 */
export const calculateTimeLeft = compose<string, TimeDifferenceArgs>(formatTime, calculateMsDifference);
