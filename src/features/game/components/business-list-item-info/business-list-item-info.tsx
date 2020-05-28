// Modules
import React, { useMemo } from 'react';
import CSSModules from 'react-css-modules';

// Components
import GameText from '../game-text';
import Loader from '../loader-bar';

// Utils
import { calculateMsLeft, msToSeconds } from 'utils/time-format.utils';
import { formatLargeNumberToCurrency } from 'utils/number-format.utils';
import { calculatePercentageOf } from 'utils/number.utils';

// Styles
import styles from './business-list-item-info.scss';


type BusinessListItemInfoProps = {
  title: string
  level: number
  profit: number
  gainCapitalDurationMs: number
  startGainCapitalTimestamp: number | null
};


const calculateAnimationDuration = (durationMs: number, timestamp: number | null) => (
  msToSeconds(calculateMsLeft({ durationMs, timestamp }))
);


const calculateInitialProgressPercentage = (durationMs: number, timestamp: number | null) => {
  const msPassed = durationMs - calculateMsLeft({ durationMs, timestamp });

  // handle server delay
  if (msPassed < 500) {
    return 0;
  }

  return calculatePercentageOf(msPassed, durationMs);
};


const BusinessListItemInfo = ({
  title,
  level,
  profit,
  gainCapitalDurationMs,
  startGainCapitalTimestamp
}: BusinessListItemInfoProps) => {
  const animationDuration = useMemo(() => (
    calculateAnimationDuration(gainCapitalDurationMs, startGainCapitalTimestamp)
  ), [gainCapitalDurationMs, startGainCapitalTimestamp]);


  const initialProgressPercentage = useMemo(() => (
    calculateInitialProgressPercentage(gainCapitalDurationMs, startGainCapitalTimestamp)
  ), [gainCapitalDurationMs, startGainCapitalTimestamp]);


  return (
    <div styleName="common">
      <GameText styleName="title">{title}</GameText>
      <GameText styleName="level">Level: {level}</GameText>

      <Loader
        animated={!!startGainCapitalTimestamp}
        animationDuration={`${animationDuration}s`}
        initialProgressPercentage={initialProgressPercentage}>
        <GameText>Profit: {formatLargeNumberToCurrency(profit)}</GameText>
      </Loader>
    </div>
  );
};

export default CSSModules(BusinessListItemInfo, styles);
