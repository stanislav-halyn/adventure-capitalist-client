// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import GameText from '../game-text';

// Utils
import { formatLargeNumberToCurrency } from '../../../../utils/number-format.utils';

// Styles
import styles from './business-list-item-info.scss';


type BusinessListItemInfoProps = {
  title: string
  level: number
  profit: number
};


const BusinessListItemInfo = ({
  title,
  level,
  profit
}: BusinessListItemInfoProps) => (
  <div styleName="common">
    <GameText styleName="title">{title}</GameText>
    <GameText styleName="profit">Profit: {formatLargeNumberToCurrency(profit)}</GameText>
    <GameText styleName="level">Level: {level}</GameText>
  </div>
);

export default CSSModules(BusinessListItemInfo, styles);
