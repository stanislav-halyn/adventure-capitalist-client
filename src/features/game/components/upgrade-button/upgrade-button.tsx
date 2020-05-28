// Modules
import React, { useCallback } from 'react';
import CSSModules from 'react-css-modules';

// Components
import GameButton from '../game-button';

// Emitters
import { emitUpgradeBusiness } from '../../utils/game-socket-emitter.utils';

// Utils
import { formatLargeNumber } from '../../../../utils/number-format.utils';

// Styles
import styles from './upgrade-button.scss';


type UpgradeButtonProps = {
  businessId: number
  businessPrice: number
  userCapital: number
};


const UpgradeButton = ({
  businessId,
  businessPrice,
  userCapital
}: UpgradeButtonProps) => {
  const handleUpgradeBusiness = useCallback(() => {
    emitUpgradeBusiness({ businessId });
  }, [businessId]);


  return (
    <GameButton
      styleName="common"
      disabled={businessPrice > userCapital}
      onClick={handleUpgradeBusiness}>
      upgrade for {formatLargeNumber(businessPrice)}
    </GameButton>
  );
};

export default CSSModules(UpgradeButton, styles);
