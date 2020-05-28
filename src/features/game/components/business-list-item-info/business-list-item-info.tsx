// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Components
import GameText from '../game-text';

// Styles
import styles from './business-list-item-info.scss';


type BusinessListItemInfoProps = {
  title: string
  level: number
};


const BusinessListItemInfo = ({
  title,
  level
}: BusinessListItemInfoProps) => (
  <div styleName="common">
    <GameText styleName="title">{title}</GameText>
    <GameText styleName="level">Level: {level}</GameText>
  </div>
);

export default CSSModules(BusinessListItemInfo, styles);
