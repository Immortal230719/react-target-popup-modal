import React, { CSSProperties, useEffect, useState } from 'react';
import { nodeObj } from '../TargetPopup';

import styles from './styles.module.css';

// calculate styles for position
const getStyles = (
  position: string,
  node: typeof nodeObj,
  distance: number,
  distanceY: number,
): CSSProperties | undefined => {
  switch (position) {
    case 'TOP':
      return {
        top: `${Math.round(node.y) - distance}px`,
        left: `calc(${
          Math.round(node.x) + Math.round(node.width) / 2
        }px + ${distanceY}vw)`,
        transform: 'translate(-50%, -100%)',
      };
    case 'BOTTOM':
      return {
        top: `${
          Math.round(node.y) + Math.round(node.height) + Number(distance)
        }px`,
        left: `calc(${
          Math.round(node.x) + Math.round(node.width) / 2
        }px + ${distanceY}vw)`,
        transform: 'translate(-50%, 0)',
      };
    case 'RIGHT':
      return {
        top: `calc(${
          Math.round(node.y) + Math.round(node.height) / 2
        }px + ${distanceY}vh)`,
        left: `${
          Math.round(node.x) + Math.round(node.width) + Number(distance)
        }px`,
        transform: 'translate(0%, -50%)',
      };
    case 'LEFT':
      return {
        top: `calc(${
          Math.round(node.y) + Math.round(node.height) / 2
        }px + ${distanceY}vh)`,
        left: `${Math.round(node.x) - distance}px`,
        transform: 'translate(-100%, -50%)',
      };

    default:
      return undefined;
  }
};

/*
  node: object which we getting from getBoundingClientRect native function in TargetPlug component,
  error: boolean,
  sucess: boolean,
  position: can be 'TOP','BOTTOM','RIGHT','LEFT',
  distance: how much pixels from element,
  childrens
*/

export interface TargetPopupRenderWrapperProps {
  node: typeof nodeObj;
  position: string;
  distance?: number;
  distanceY?: number;
  children?: React.ReactNode;
}

export const TargetPopupRenderWrapper: React.FC<TargetPopupRenderWrapperProps> = React.memo(
  ({ node, position = 'TOP', distance = 0, distanceY = 0, children }) => {
    const [className, setClassName] = useState(styles.TargetPlugRenderWrapper);

    useEffect(() => {
      const timer = setTimeout(() => {
        setClassName(
          `${styles.TargetPlugRenderWrapper} ${styles.TargetPlugRenderWrapper_visible}`,
        );
      }, 200);
      return () => clearTimeout(timer);
    }, []);

    return (
      <React.Fragment>
        {node && (
          <div
            className={className}
            style={getStyles(position, node, distance, distanceY)}
          >
            {children}
          </div>
        )}
      </React.Fragment>
    );
  },
);

TargetPopupRenderWrapper.displayName = 'TargetPopupRenderWrapper';
