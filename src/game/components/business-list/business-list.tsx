// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import BusinessListItem from '../business-list-item';

// Typings
import { BusinessType } from '../../typings/business.typings';

// Styles
import styles from './business-list.scss';


type BusinessListProps = {
  businessList: Array<BusinessType>
  userCapital: number
};


const BusinessList = ({
  businessList,
  userCapital
}: BusinessListProps) => {
  return (
    <div>
      {businessList.map(business => (
        <BusinessListItem
          id={business.id}
          title={business.title}
          profit={business.profit}
          price={business.price}
          isBought={business.isBought}
          gainCapitalDurationMs={business.gainCapitalDurationMs}
          startGainCapitalTimestamp={business.startGainCapitalTimestamp}
          userCapital={userCapital} />
      ))}
    </div>
  );
};

export default CSSModules(BusinessList, styles);
