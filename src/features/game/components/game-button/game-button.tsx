// Modules
import React, { ReactNode, MouseEvent } from 'react';
import CSSModules from 'react-css-modules';

// Styles
import styles from './game-button.scss';


type GameButtonProps = {
  className?: string
  styleName?: string
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
};


const GameButton = ({
  className,
  disabled,
  onClick,
  children
}: GameButtonProps) => (
  <button
    className={className}
    disabled={disabled}
    onClick={onClick}>
    {children}
  </button>
);

export default CSSModules(GameButton, styles);
