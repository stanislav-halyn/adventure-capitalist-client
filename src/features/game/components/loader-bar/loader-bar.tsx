// Modules
import React, { ReactNode, useMemo } from 'react';
import CSSModules from 'react-css-modules';

// Styles
import styles from './loader-bar.scss';


type LoaderBarProps = {
  children: ReactNode
  styleName?: string
  className?: string
  animated: boolean
  animationDuration: string
  initialProgressPercentage?: number
};


const LoaderBar = ({
  children,
  className,
  animated,
  animationDuration,
  initialProgressPercentage = 0
}: LoaderBarProps) => {
  const initialTranslateXValue = useMemo(() => 100 - initialProgressPercentage, [initialProgressPercentage]);


  return (
    <div styleName="common" className={className}>
      {animated
        ? (
          <div
            styleName="loader-bar"
            style={{
              transform: `translateX(-${initialTranslateXValue}%)`,
              animationDuration
            }} />
        ) : null}

      <div styleName="content">
        {children}
      </div>
    </div>
  );
};

export default CSSModules(LoaderBar, styles, { allowMultiple: true });
