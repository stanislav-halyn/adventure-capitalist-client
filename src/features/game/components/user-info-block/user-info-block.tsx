// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Utils
import { formatLargeNumber } from '../../../../utils/number-format.utils';

// Styles
import styles from './user-info-block.scss';


type UserInfoBlockProps = {
  userCapital: number
};


const UserInfoBlock = ({
  userCapital
}: UserInfoBlockProps) => (
  <div styleName="common">
    <h2>Your capital is: {formatLargeNumber(userCapital)}</h2>
  </div>
);

export default CSSModules(UserInfoBlock, styles);
