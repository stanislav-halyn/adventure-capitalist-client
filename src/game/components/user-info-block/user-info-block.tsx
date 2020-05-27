// Modules
import React from 'react';
import CSSModules from 'react-css-modules';

// Styles
import styles from './user-info-block.scss';


type UserInfoBlockProps = {
  userCapital: number
}


const UserInfoBlock = ({
  userCapital
}: UserInfoBlockProps) => {
  return (
    <div>
      Your capital is: ${userCapital}
    </div>
  );
};

export default CSSModules(UserInfoBlock, styles);
