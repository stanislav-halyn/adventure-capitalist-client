// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import BusinessListItemDisabled from '../business-list-item-disabled';

import TimerCountdown from '../timer-countdown';
import GameText from '../game-text';
import UpgradeButton from '../upgrade-button';
import BusinessButtonControls from '../business-button-controls';

// Utils
import { formatLargeNumberToCurrency } from '../../../../utils/number-format.utils';

// Styles
import styles from './business-list-item.scss';


type BusinessListItemProps = {
  id: number
  title: string
  level: number
  profit: number
  price: number
  isBought: boolean
  gainCapitalDurationMs: number
  startGainCapitalTimestamp: number | null
  userCapital: number,
  isManaged: boolean,
  isGainingCapital: boolean,
  managerPrice: number
};


const BusinessListItem = ({
  id,
  title,
  level,
  profit,
  price,
  isBought,
  gainCapitalDurationMs,
  startGainCapitalTimestamp,
  userCapital,
  isManaged,
  isGainingCapital,
  managerPrice
}: BusinessListItemProps) => {
  if (!isBought) {
    return (
      <BusinessListItemDisabled
        id={id}
        title={title}
        price={price}
        userCapital={userCapital} />
    );
  }

  return (
    <div styleName="common">
      <div styleName="content">
        <div styleName="info">
          <GameText styleName="title">{title}</GameText>
          <GameText styleName="level">Level: {level}</GameText>
        </div>

        <div styleName="controls">
          <div styleName="profit">
            <GameText styleName="profit-text">Profit: {formatLargeNumberToCurrency(profit)}</GameText>
          </div>

          <div styleName="controls-footer">
            <div styleName="upgrade-button">
              <UpgradeButton
                businessId={id}
                businessPrice={price}
                userCapital={userCapital} />
            </div>

            <div styleName="timer">
              <TimerCountdown
                durationMs={gainCapitalDurationMs}
                timestamp={startGainCapitalTimestamp} />
            </div>
          </div>
        </div>
      </div>

      <div styleName="footer">
        <BusinessButtonControls
          businessId={id}
          isBusinessBought={isBought}
          isBusinessManaged={isManaged}
          userCapital={userCapital}
          managerPrice={managerPrice}
          isGainingCapital={isGainingCapital} />
      </div>
    </div>
  );
};

export default CSSModules(BusinessListItem, styles);
