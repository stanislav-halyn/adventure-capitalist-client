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
    <div styleName="common">
      {timeLeft}
    </div>
  );
};

export default CSSModules(TimerCountdown, styles);
