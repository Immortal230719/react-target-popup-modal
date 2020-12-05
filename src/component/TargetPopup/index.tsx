import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export let nodeObj = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

export type NodeRect = typeof nodeObj;

export type TargetPopupProps = {
  isCanInteractive?: boolean;
  querySelector?: string;
  padding?: number;
  queryTop?: number;
  queryBottom?: number;
  queryLeft?: number;
  queryRight?: number;
  queryTopPercent?: number;
  queryBottomPercent?: number;
  queryLeftPercent?: number;
  queryRightPercent?: number;
  color?: string;
  renderElem?: (node: NodeRect) => JSX.Element;
};

export const TargetPopup: React.FC<TargetPopupProps> = React.memo(
  ({
    isCanInteractive = true,
    querySelector = '',
    padding = 0,
    queryTop = 0,
    queryBottom = 0,
    queryLeft = 0,
    queryRight = 0,
    queryTopPercent = 0,
    queryBottomPercent = 0,
    queryLeftPercent = 0,
    queryRightPercent = 0,
    renderElem = null,
    color = 'rgba(0, 0, 0, 0.4)',
  }) => {
    const [node, setNode] = useState(nodeObj);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
      if (querySelector) {
        const elem: Element | null = document.querySelector(querySelector);
        if (!elem || 'width' in elem || 'height' in elem) {
          const timer = setTimeout(() => {
            setTrigger((prev) => prev + 1);
          }, 100);

          return () => clearTimeout(timer);
        }
        if (elem) {
          setTrigger(0);
          nodeObj = elem.getBoundingClientRect();
          setNode(elem.getBoundingClientRect());
        }
      }
      return undefined;
    }, [querySelector, trigger]);

    return (
      <React.Fragment>
        {querySelector && (
          <React.Fragment>
            {renderElem && renderElem(node)}
            <div
              className={styles.targetPopup}
              style={{
                bottom: `calc(100vh + ${queryTopPercent}vh - ${
                  Math.round(node.y) - padding - queryTop
                }px)`,
                right: `calc(100vw${
                  queryRightPercent ? ' - ' + queryRightPercent + 'vw' : ''
                } - ${Math.round(node.x) + padding}px - ${
                  Math.round(node.width) + queryRight
                }px)`,
                transition: '0.5s all',
                backgroundColor: color,
              }}
            >
              <div className={styles.relative}>
                <div className={styles.targetPopup_top}>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
                    <g>
                      <path d='M 0 0 H 400 V 400 Q 350 50 0 0' fill={color} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={styles.targetPopup}
              style={{
                left: `calc(${
                  queryRightPercent ? queryRightPercent + 'vw + ' : ''
                }${Math.round(node.x) + padding}px + ${
                  Math.round(node.width) + queryRight
                }px)`,
                transition: '0.5s all',
                top: 0,
                backgroundColor: color,
              }}
            />
            <div
              className={styles.targetPopup}
              style={{
                top: `calc(${
                  queryBottomPercent ? queryBottomPercent + 'vh + ' : ''
                }${Math.round(node.y)}px + ${
                  Math.round(node.height) + padding + queryBottom
                }px)`,
                right: `calc(100vw${
                  queryRightPercent ? ' - ' + queryRightPercent + 'vw' : ''
                } - ${Math.round(node.x) + padding}px - ${
                  Math.round(node.width) + queryRight
                }px)`,
                transition: '0.5s all',
                backgroundColor: color,
              }}
            >
              <div className={styles.relative}>
                <div
                  className={
                    isCanInteractive
                      ? styles.targetPopup_bottom
                      : `${styles.targetPopup_bottom} ${styles.isUntoucheble}`
                  }
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
                    <g>
                      <path
                        d='M 0 400 H 400 V 0 Q 350 350 0 400'
                        fill={color}
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={styles.targetPopup}
              style={{
                height: `calc(${
                  queryTopPercent ? queryTopPercent + 'vh + ' : ''
                }${queryBottomPercent ? queryBottomPercent + 'vh + ' : ''}${
                  Math.round(node.height) + padding * 2 + queryTop + queryBottom
                }px)`,
                top: `calc(${Math.round(node.y) - padding - queryTop}px${
                  queryTopPercent ? ' - ' + queryTopPercent + 'vh' : ''
                })`,
                right: `calc(100vw${
                  queryLeftPercent ? ' + ' + queryLeftPercent + 'vw' : ''
                } - ${Math.round(node.x) - padding - queryLeft}px)`,
                transition: '0.5s all',
                backgroundColor: color,
              }}
            >
              <div className={styles.relative}>
                <div className={styles.targetPopup_left}>
                  <svg
                    className={styles.bottom_svg}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 400 400'
                  >
                    <g>
                      <path d='M 0 0 V 400 H 400 Q 50 350 0 0' fill={color} />
                    </g>
                  </svg>
                  <svg
                    className={styles.top_svg}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 400 400'
                  >
                    <g>
                      <path d='M 0 0 V 400 Q 50 50 400 0 H 0' fill={color} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
        {!querySelector && (
          <div
            className={styles.targetPopup}
            style={{
              bottom: '0',
              right: '0',
              transition: '0.5s all',
              backgroundColor: color,
            }}
          />
        )}
      </React.Fragment>
    );
  },
);

TargetPopup.displayName = 'TargetPopup';
