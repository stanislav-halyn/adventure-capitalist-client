// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Hooks
import useCountdownTimer from '../../hooks/use-countdown-timer';

// Styles
import styles from './timer-countdown.scss';


type TimerCountdownProps = {
  durationMs: number
  timestamp: number | null,
  className?: string
  styleName?: string
};


const TimerCountdown = ({
  durationMs,
  timestamp,
  className
}: TimerCountdownProps) => {
  const timeLeft = useCountdownTimer(durationMs, timestamp);

  return (
    <div styleName="common" className={className}>
      {timeLeft}
    </div>
  );
};

export default CSSModules(TimerCountdown, styles);
