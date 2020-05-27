// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import TimerCountdown from '../timer-countdown';
import GameButton from '../game-button';
import GameText from '../game-text';

// Emitters
import {
  emitBuyBusiness,
  emitUpgradeBusiness,
  emitGainCapital,
  emitHireManager
} from '../../utils/game-socket-emitter.utils';

// Styles
import styles from './business-list-item.scss';


type BusinessListItemProps = {
  id: number
  title: string
  profit: number
  price: number
  isBought: boolean
  gainCapitalDurationMs: number
  startGainCapitalTimestamp: number | null
  userCapital: number
}


const BusinessListItem = ({
  id,
  title,
  profit,
  price,
  isBought,
  gainCapitalDurationMs,
  startGainCapitalTimestamp,
  userCapital
}: BusinessListItemProps) => {
  return (
    <div className={styles['business-item']}>
      <div>
        <GameText>{title}</GameText>
      </div>

      <div>
        <GameText>Profit: {profit}</GameText>

        <div className={styles['business-item-content']}>
          {isBought
            ? (
              <GameButton onClick={() => emitUpgradeBusiness({ businessId: id })}>
                upgrade for {price}$
              </GameButton>
            )
            : (
              <GameButton
                disabled={price > userCapital}
                onClick={() => emitBuyBusiness({ businessId: id })}
              >
                buy for {price}$
              </GameButton>
            )}

          {isBought
            ? (
              <GameButton onClick={() => emitGainCapital({ businessId: id })}>
                {startGainCapitalTimestamp
                  ? <TimerCountdown
                      gainCapitalDurationMs={gainCapitalDurationMs}
                      startGainCapitalTimestamp={startGainCapitalTimestamp} />
                  : 'gain capital'
                }
              </GameButton>
            ) : null}

          {isBought
            ? (
              <GameButton onClick={() => emitHireManager({ businessId: id })}>
                {startGainCapitalTimestamp
                  ? <TimerCountdown
                      gainCapitalDurationMs={gainCapitalDurationMs}
                      startGainCapitalTimestamp={startGainCapitalTimestamp} />
                  : 'hire a manager'
                }
              </GameButton>
            ) : null}
        </div>
      </div>
    </div>
  );
};

export default CSSModules(BusinessListItem, styles);
