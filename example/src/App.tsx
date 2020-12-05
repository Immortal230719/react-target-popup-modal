import React from 'react';

import cat from './cat.png';

import {
  TargetPopup,
  TargetPopupRenderWrapper,
} from 'react-target-popup-modal';

import 'react-target-popup-modal/dist/index.css';

export const Example = () => {
  const [position, setPosition] = React.useState('TOP');
  const [distancePX, setDistancePX] = React.useState(0);
  const [distancePercent, setDistancePercent] = React.useState(0);
  const [rotate, setRotate] = React.useState(false);

  const changeRangePixelHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault();
    setDistancePX(e.currentTarget.valueAsNumber);
  };

  const changeRangePercentHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault();
    setDistancePercent(e.currentTarget.valueAsNumber);
  };

  const rotateHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setRotate(!rotate);
  };

  const renderExample = (place: null | string) => {
    switch (place) {
      case 'TOP':
        return (
          <TargetPopup
            querySelector='#first'
            color='#32e23d73'
            padding={20}
            renderElem={(node) => (
              <TargetPopupRenderWrapper
                node={node}
                position='TOP'
                distance={distancePX}
                distanceY={distancePercent}
              >
                <p className='paragraph'>Hello! I've rendered on TOP!</p>
              </TargetPopupRenderWrapper>
            )}
          />
        );
      case 'BOTTOM':
        return (
          <TargetPopup
            querySelector='#second'
            padding={20}
            color='#4eb4fd8f'
            renderElem={(node) => (
              <TargetPopupRenderWrapper
                node={node}
                position='BOTTOM'
                distance={distancePX}
                distanceY={distancePercent}
              >
                <img className='cat' src={cat} alt='cat' />
                {/* MEOUU!!! I'm from BOTTOM. */}
              </TargetPopupRenderWrapper>
            )}
          />
        );
      case 'LEFT':
        return (
          <TargetPopup
            querySelector='#third'
            padding={20}
            color='#dc1bfeb3'
            renderElem={(node: any) => (
              <TargetPopupRenderWrapper
                node={node}
                position='LEFT'
                distance={distancePX}
                distanceY={distancePercent}
              >
                <img className='cat' src={cat} alt='cat' />
                MEOUU!!! I'm from LEFT.
              </TargetPopupRenderWrapper>
            )}
          />
        );
      case 'RIGHT':
        return (
          <TargetPopup
            querySelector='#first'
            padding={20}
            color='#0000006e'
            renderElem={(node: any) => (
              <TargetPopupRenderWrapper
                node={node}
                position='RIGHT'
                distance={distancePX}
                distanceY={distancePercent}
              >
                <img className='cat' src={cat} alt='cat' />
                MEOUU!!!I'm from RIGHT.
              </TargetPopupRenderWrapper>
            )}
          />
        );
      case 'UNTOUCHEBLE':
        return (
          <TargetPopup
            querySelector='.absolute-box'
            isCanInteractive={false}
            padding={20}
            renderElem={(node: any) => (
              <TargetPopupRenderWrapper
                node={node}
                position='LEFT'
                distance={distancePX}
                distanceY={distancePercent}
              >
                Now, you can't click me.
              </TargetPopupRenderWrapper>
            )}
          />
        );
      case 'COMMON':
        return <TargetPopup />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className='main'>
        <div
          className={`absolute-box${rotate ? ' rotate' : ''}`}
          onClick={rotateHandler}
        >
          <span>Click Me!!!</span>
        </div>
        <div className='box' id='first'>
          FIRST
        </div>
        <div className='box' id='second'>
          SECOND
        </div>
        <div className='box' id='third'>
          THIRD
        </div>
      </div>
      {renderExample(position)}
      <div className='button-group'>
        <button
          className='button'
          type='button'
          onClick={() => setPosition('TOP')}
        >
          TOP
        </button>
        <button
          className='button'
          type='button'
          onClick={() => setPosition('LEFT')}
        >
          LEFT
        </button>
        <button
          className='button'
          type='button'
          onClick={() => setPosition('BOTTOM')}
        >
          BOTTOM
        </button>
        <button
          className='button'
          type='button'
          onClick={() => setPosition('RIGHT')}
        >
          RIGHT
        </button>
        <button
          className='button'
          type='button'
          onClick={() => setPosition('UNTOUCHEBLE')}
        >
          UNTOUCHEBLE
        </button>
        <button
          className='button'
          type='button'
          onClick={() => setPosition('COMMON')}
        >
          COMMON
        </button>
        <button
          className='button'
          type='button'
          onClick={() => setPosition('')}
        >
          RESET
        </button>
      </div>
      <div className='range-group'>
        <div className='input-range'>
          <label className='label' htmlFor='distance-px'>
            distance on main axis in pixels from -300 to 300
          </label>
          <input
            onChange={changeRangePixelHandler}
            type='range'
            min='-300'
            max='300'
            name='distance-px'
            id='distance-px'
            defaultValue={0}
          />
          <span className='range-value'>{distancePX}</span>
        </div>
        <div className='input-range'>
          <label className='label' htmlFor='distance-percent'>
            distance on Y axis relatively main axis in percentages from -50 to
            50
          </label>
          <input
            onChange={changeRangePercentHandler}
            type='range'
            min='-50'
            max='50'
            name='distance-percent'
            id='distance-percent'
            defaultValue={0}
          />
          <span className='range-value'>{distancePercent}</span>
        </div>
      </div>
    </>
  );
};
