// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import BusinessListItem from '../business-list-item';

// Typings
import { BusinessIdType, BusinessByIdType } from '../../typings/business.typings';

// Styles
import styles from './business-list.scss';


type BusinessListProps = {
  businessIds: Array<BusinessIdType>
  businessById: BusinessByIdType
  userCapital: number
};


const BusinessList = ({
  businessIds,
  businessById,
  userCapital
}: BusinessListProps) => {
  return (
    <div>
      {businessIds.map(businessId => {
        const business = businessById[businessId];

        return (
          <BusinessListItem
            key={`business-item-${businessId}`}
            id={business.id}
            title={business.title}
            profit={business.profit}
            price={business.price}
            isBought={business.isBought}
            gainCapitalDurationMs={business.gainCapitalDurationMs}
            startGainCapitalTimestamp={business.startGainCapitalTimestamp}
            userCapital={userCapital} />
        )})}
    </div>
  );
};

export default CSSModules(BusinessList, styles);
