// Modules
import React, { ReactNode } from 'react';
import CSSModules from 'react-css-modules';

// Styles
import styles from './game-text.scss';


type GameTextProps = {
  children: ReactNode,
  styleName?: string
  className?: string
};


const GameText = ({
  children,
  className
}: GameTextProps) => (
  <div styleName="common" className={className}>
    {children}
  </div>
);

export default CSSModules(GameText, styles);
