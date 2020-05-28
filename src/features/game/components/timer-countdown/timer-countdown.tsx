// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Hooks
import useCountdownTimer from '../../hooks/use-countdown-timer';

// Styles
import styles from './timer-countdown.scss';


type TimerCountdownProps = {
  durationMs: number
  timestamp: number | null
};


const TimerCountdown = ({
  durationMs,
  timestamp
}: TimerCountdownProps) => {
  const timeLeft = useCountdownTimer(durationMs, timestamp);

  return (
    <span styleName="common">
      {timeLeft}
    </span>
  );
};

export default CSSModules(TimerCountdown, styles);
