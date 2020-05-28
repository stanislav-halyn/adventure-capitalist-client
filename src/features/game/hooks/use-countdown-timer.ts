// Modules
import { useEffect, useState, useMemo } from 'react';

// Utils
import { calculateTimeLeft } from '../../../utils/time-format.utils';


export default (durationMs: number, timestamp: number | null) => {
  const timerData = useMemo(() => ({ durationMs, timestamp }), [durationMs, timestamp]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timerData));

  useEffect(() => {
    let id: any;

    if (timestamp) {
      id = setInterval(() => {
        setTimeLeft(calculateTimeLeft(timerData));
      }, 1000 / 60);
    } else {
      setTimeLeft(calculateTimeLeft(timerData));

      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [setTimeLeft, timestamp, timerData]);

  return timeLeft;
};
