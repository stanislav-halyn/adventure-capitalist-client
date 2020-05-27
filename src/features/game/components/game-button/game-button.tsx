// Modules
import React, { ReactNode, MouseEvent } from 'react';
import CSSModules from 'react-css-modules';

// Styles
import styles from './game-button.scss';


type GameButtonProps = {
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}


const GameButton = ({
  disabled,
  onClick,
  children
}: GameButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default CSSModules(GameButton, styles);
