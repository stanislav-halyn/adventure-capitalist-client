// Modules
import React, { useCallback } from 'react';
import CSSModules from 'react-css-modules';

// Components
import GameButton from '../game-button';

// Emitters
import {
  emitGainCapital,
  emitHireManager
} from '../../utils/game-socket-emitter.utils';

// Styles
import styles from './business-list-item-button-controls.scss';


type BusinessListItemButtonControlsProps = {
  businessId: number
  isBusinessBought: boolean
  isBusinessManaged: boolean
  userCapital: number
  managerPrice: number
  isGainingCapital: boolean
};


const BusinessListItemButtonControls = ({
  businessId,
  isBusinessBought,
  isBusinessManaged,
  userCapital,
  managerPrice,
  isGainingCapital
}: BusinessListItemButtonControlsProps) => {
  const handleGainCapital = useCallback(() => {
    emitGainCapital({ businessId });
  }, [businessId]);


  const handleHireManager = useCallback(() => {
    emitHireManager({ businessId });
  }, [businessId]);


  const gainCapitalButtonText = isBusinessManaged || isGainingCapital
    ? 'making money...'
    : 'gain capital';

  const hireManagerButtonText = !isBusinessManaged
    ? `hire a manager for ${managerPrice}$`
    : 'you bought a manager';


  if (!isBusinessBought) {
    return null;
  }


  return (
    <div styleName="common">
      <GameButton
        disabled={isBusinessManaged || isGainingCapital}
        styleName="button"
        onClick={handleGainCapital}>
        {gainCapitalButtonText}
      </GameButton>

      <GameButton
        styleName="button"
        disabled={managerPrice > userCapital || isBusinessManaged || isGainingCapital}
        onClick={handleHireManager}>
        {hireManagerButtonText}
      </GameButton>
    </div>
  );
};

export default CSSModules(BusinessListItemButtonControls, styles);
