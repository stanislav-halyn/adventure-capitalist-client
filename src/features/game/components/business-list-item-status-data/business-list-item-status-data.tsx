// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import GameText from '../game-text';
import UpgradeButton from '../upgrade-button';
import TimerCountdown from '../timer-countdown';

// Utils
import { formatLargeNumberToCurrency } from '../../../../utils/number-format.utils';

// Styles
import styles from './business-list-item-status-data.scss';


type BusinessListItemStatusDataProps = {
  id: number
  profit: number
  title: string
  price: number
  userCapital: number
  gainCapitalDurationMs: number
  startGainCapitalTimestamp: number | null
};


const BusinessListItemStatusData = ({
  id,
  profit,
  price,
  userCapital,
  gainCapitalDurationMs,
  startGainCapitalTimestamp
}: BusinessListItemStatusDataProps) => (
  <div styleName="common">
    <div styleName="profit">
      <GameText styleName="profit-text">Profit: {formatLargeNumberToCurrency(profit)}</GameText>
    </div>

    <div styleName="controls-footer">
      <UpgradeButton
        businessId={id}
        businessPrice={price}
        userCapital={userCapital} />

      <TimerCountdown
        durationMs={gainCapitalDurationMs}
        timestamp={startGainCapitalTimestamp} />
    </div>
  </div>
);

export default CSSModules(BusinessListItemStatusData, styles);
