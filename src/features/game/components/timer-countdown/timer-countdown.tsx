// Modules
import React, { useEffect, useState } from 'react';
import CSSModules from 'react-css-modules';

// Styles
import styles from './timer-countdown.scss';


type TimerCountdownProps = {
  startGainCapitalTimestamp: number
  gainCapitalDurationMs: number
}


const TimerCountdown = ({
  gainCapitalDurationMs,
  startGainCapitalTimestamp
}: TimerCountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = (startGainCapitalTimestamp + gainCapitalDurationMs) - new Date().getTime();
    const time = new Date(difference);

    return `${time.getMinutes()}:${time.getSeconds()}`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(id);
    }
  }, []);
  
  return (
    <span>
      {timeLeft}
    </span>
  );
};

export default CSSModules(TimerCountdown, styles);
