// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import TimerCountdown from '../timer-countdown';
import GameText from '../game-text';
import BuyButton from '../buy-button';
import UpgradeButton from '../upgrade-button';
import BusinessButtonControls from '../business-button-controls';

// Utils
import { formatLargeNumber } from '../../../../utils/number-format.utils';

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


const Content = CSSModules(({
  children,
  className
}: { children: React.ReactNode, className?: string, styleName?: string }) => (
  <div styleName="common" className={className}>
    {children}
  </div>
), styles);


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
      <Content>
        <BuyButton
          businessId={id}
          businessTitle={title}
          businessPrice={price}
          userCapital={userCapital} />
      </Content>
    );
  }

  return (
    <Content styleName="active">
      <div styleName="content">
        <div styleName="info">
          <GameText styleName="title">{title}</GameText>
          <GameText styleName="level">Level: {level}</GameText>
        </div>

        <div styleName="controls">
          <div styleName="profit">
            <GameText styleName="profit-text">Profit: {formatLargeNumber(profit)}</GameText>
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

      <div styleName="button-controls">
        <BusinessButtonControls
          businessId={id}
          isBusinessBought={isBought}
          isBusinessManaged={isManaged}
          userCapital={userCapital}
          managerPrice={managerPrice}
          isGainingCapital={isGainingCapital} />
      </div>
    </Content>
  );
};

export default CSSModules(BusinessListItem, styles);
