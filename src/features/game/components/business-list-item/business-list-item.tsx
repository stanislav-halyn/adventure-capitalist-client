// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import BusinessListItemDisabled from '../business-list-item-disabled';
import BusinessListItemInfo from '../business-list-item-info';
import BusinessListItemStatusData from '../business-list-item-status-data';
import BusinessListItemButtonControls from '../business-list-item-button-controls';

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
        <BusinessListItemInfo title={title} level={level} profit={profit} />

        <BusinessListItemStatusData
          id={id}
          title={title}
          price={price}
          userCapital={userCapital}
          gainCapitalDurationMs={gainCapitalDurationMs}
          startGainCapitalTimestamp={startGainCapitalTimestamp} />
      </div>

      <BusinessListItemButtonControls
        businessId={id}
        isBusinessBought={isBought}
        isBusinessManaged={isManaged}
        userCapital={userCapital}
        managerPrice={managerPrice}
        isGainingCapital={isGainingCapital} />
    </div>
  );
};

export default CSSModules(BusinessListItem, styles);
