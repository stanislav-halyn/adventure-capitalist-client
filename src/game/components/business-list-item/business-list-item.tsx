// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import TimerCountdown from '../timer-countdown';
import GameButton from '../game-button';
import GameText from '../game-text';

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
              <GameButton onClick={() => console.log('upgrade business!', id)}>
                upgrade for {price}$
              </GameButton>
            )
            : (
              <GameButton
                disabled={price > userCapital}
                onClick={() => console.log('buy business!', id)}
              >
                buy for {price}$
              </GameButton>
            )}

          {isBought
            ? (
              <GameButton onClick={() => console.log('gain capital!', id)}>
                {startGainCapitalTimestamp
                  ? <TimerCountdown
                      gainCapitalDurationMs={gainCapitalDurationMs}
                      startGainCapitalTimestamp={startGainCapitalTimestamp} />
                  : 'gain capital'
                }
              </GameButton>
            ) : null}
        </div>
      </div>
    </div>
  );
};

export default CSSModules(BusinessListItem, styles);
