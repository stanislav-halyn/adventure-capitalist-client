// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import BuyButton from '../buy-button';

// Styles
import styles from './business-list-item-disabled.scss';


type BusinessListItemDisabledProps = {
  id: number
  title: string
  price: number
  userCapital: number,
};


const BusinessListItemDisabled = ({
  id,
  title,
  price,
  userCapital
}: BusinessListItemDisabledProps) => (
  <div styleName="common">
    <BuyButton
      businessId={id}
      businessTitle={title}
      businessPrice={price}
      userCapital={userCapital} />
  </div>
);

export default CSSModules(BusinessListItemDisabled, styles);
