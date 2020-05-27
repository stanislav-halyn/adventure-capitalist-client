// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Styles
import styles from './user-info-block.scss';


type UserInfoBlockProps = {
  capital: number
}


const UserInfoBlock = ({
  capital
}: UserInfoBlockProps) => {
  return (
    <div>
      Your capital is: ${capital}
    </div>
  );
};

export default CSSModules(UserInfoBlock, styles);
