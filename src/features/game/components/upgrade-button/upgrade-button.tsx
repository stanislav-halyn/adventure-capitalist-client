// Modules
import React, { useCallback } from 'react';
import CSSModules from 'react-css-modules';

// Components
import GameButton from '../game-button';

// Emitters
import { emitUpgradeBusiness } from '../../utils/game-socket-emitter.utils';

// Utils
import { formatLargeNumberToCurrency } from 'utils/number-format.utils';

// Styles
import styles from './upgrade-button.scss';


type UpgradeButtonProps = {
  businessId: number
  businessPrice: number
  userCapital: number
  className?: string
  styleName?: string
};


const UpgradeButton = ({
  businessId,
  businessPrice,
  userCapital,
  className
}: UpgradeButtonProps) => {
  const handleUpgradeBusiness = useCallback(() => {
    emitUpgradeBusiness({ businessId });
  }, [businessId]);


  return (
    <GameButton
      styleName="common"
      className={className}
      disabled={businessPrice > userCapital}
      onClick={handleUpgradeBusiness}>
      upgrade for {formatLargeNumberToCurrency(businessPrice)}
    </GameButton>
  );
};

export default CSSModules(UpgradeButton, styles);
