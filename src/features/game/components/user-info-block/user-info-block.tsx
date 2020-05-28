// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Utils
import { formatLargeNumberToCurrency } from 'utils/number-format.utils';

// Styles
import styles from './user-info-block.scss';


type UserInfoBlockProps = {
  userCapital: number
};


const UserInfoBlock = ({
  userCapital
}: UserInfoBlockProps) => (
  <div styleName="common">
    <h2 styleName="info">Your capital is: {formatLargeNumberToCurrency(userCapital)}</h2>
  </div>
);

export default CSSModules(UserInfoBlock, styles);
