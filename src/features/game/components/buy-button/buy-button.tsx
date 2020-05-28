// Modules
import React, { useCallback } from 'react';
import CSSModules from 'react-css-modules';

// Components
import GameButton from '../game-button';

// Emitters
import { emitBuyBusiness } from '../../utils/game-socket-emitter.utils';

// Utils
import { formatLargeNumberToCurrency } from 'utils/number-format.utils';

// Styles
import styles from './buy-button.scss';


type BuyButtonProps = {
  businessId: number
  businessTitle: string
  businessPrice: number
  userCapital: number
};


const BuyButton = ({
  businessId,
  businessTitle,
  businessPrice,
  userCapital
}: BuyButtonProps) => {
  const handleBuyBusiness = useCallback(() => {
    emitBuyBusiness({ businessId });
  }, [businessId]);

  return (
    <GameButton disabled={businessPrice > userCapital} onClick={handleBuyBusiness}>
      Buy {businessTitle} for {formatLargeNumberToCurrency(businessPrice)}
    </GameButton>
  );
};

export default CSSModules(BuyButton, styles);
