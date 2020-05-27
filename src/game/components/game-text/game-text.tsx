// Modules
import React, { ReactNode } from 'react';
import CSSModules from 'react-css-modules';

// Styles
import styles from './game-text.scss';


type GameTextProps = {
  children: ReactNode
}


const GameText = ({
  children
}: GameTextProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default CSSModules(GameText, styles);
