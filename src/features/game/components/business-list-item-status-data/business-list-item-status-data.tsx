// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import UpgradeButton from '../upgrade-button';
import TimerCountdown from '../timer-countdown';


// Styles
import styles from './business-list-item-status-data.scss';


type BusinessListItemStatusDataProps = {
  id: number
  title: string
  price: number
  userCapital: number
  gainCapitalDurationMs: number
  startGainCapitalTimestamp: number | null
};


const BusinessListItemStatusData = ({
  id,
  price,
  userCapital,
  gainCapitalDurationMs,
  startGainCapitalTimestamp
}: BusinessListItemStatusDataProps) => (
  <div styleName="common">
    <UpgradeButton
      styleName="button"
      businessId={id}
      businessPrice={price}
      userCapital={userCapital} />

    <TimerCountdown
      styleName="timer"
      durationMs={gainCapitalDurationMs}
      timestamp={startGainCapitalTimestamp} />
  </div>
);

export default CSSModules(BusinessListItemStatusData, styles);
