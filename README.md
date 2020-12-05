# react-target-popup-modal

> react component for highlighting any element of DOM with optional description which rendering in renderProps.

- See [example](https://Immortal230719.github.io/react-target-popup-modal/) for more details

### NOTE

- the component need to render on top level of app.

[![NPM](https://img.shields.io/npm/v/react-target-popup-modal.svg)](https://www.npmjs.com/package/react-target-popup-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-target-popup-modal
```

## Usage

```jsx
import React from 'react';

import {
  TargetPopup,
  TargetPopupRenderWrapper,
} from 'react-target-popup-modal';
import 'react-target-popup-modal/dist/index.css';

const App = () => {
  return (
    <div className='layout'>
      <div className='.some-element' />
      <TargetPopup
        querySelector='.some-element'
        color='#32e23d73'
        padding={20}
        renderElem={(elem) => (
          <TargetPopupRenderWrapper
            node={elem}
            position='TOP'
            distance={distancePX}
            distanceY={distancePercent}
          >
            <p className='paragraph'>Hello! I've rendered on TOP!</p>
          </TargetPopupRenderWrapper>
        )}
      />
    </div>
  );
};
```

## TargetPopup props

| name               | type                |                                                                    example values                                                                     | default            | description                                                                                                                 |
| ------------------ | ------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| isCanInteractive   | boolean             |                                                                         true                                                                          | true               | if **false**, component just highlighted, but without any **interactive** events                                            |
| querySelector      | string              |                                                                 '.className' or '#id'                                                                 | empty string       | pure Javascript selector, that need to find **DOMNode** in useEffect and call **getBoundingClientRect()**                   |
| padding            | number              |                                                                       10 or -10                                                                       | 0                  | Number of pixels, that wil increase or decrease **highlighting** **window**                                                 |
| queryTop           | number              |                                                                       -15 or 25                                                                       | 0                  | Number of pixels, that wil increase or decrease **top** **line** of highlighting window                                     |
| queryBottom        | number              |                                                                       -10 or 20                                                                       | 0                  | Number of pixels, that wil increase or decrease **bottom** **line** of highlighting window                                  |
| queryLeft          | number              |                                                                       -10 or 20                                                                       | 0                  | Number of pixels, that wil increase or decrease **left** **line** of highlighting window                                    |
| queryRight         | number              |                                                                       -10 or 20                                                                       | 0                  | Number of pixels, that wil increase or decrease **right** **line** of highlighting window                                   |
| queryTopPercent    | number              |                                                                        -2 or 1                                                                        | 0                  | Number of css **vh**, that wil increase or decrease **top** **line** of highlighting window                                 |
| queryBottomPercent | number              |                                                                       -5 or 15                                                                        | 0                  | Number of css **vh**, that wil increase or decrease **bottom** **line** of highlighting window                              |
| queryLeftPercent   | number              |                                                                       -12 or 23                                                                       | 0                  | Number of css **vw**, that wil increase or decrease **left** **line** of highlighting window                                |
| queryRightPercent  | number              |                                                                       -10 or 20                                                                       | 0                  | Number of css **vh**, that wil increase or decrease **right** **line** of highlighting window                               |
| color              | string              |                                                          '#dc1bfeb3' or 'rgba(0, 0, 0, 0.4)'                                                          | rgba(0, 0, 0, 0.4) | Background color of popup                                                                                                   |
| renderElem         | JSX.Element or null | (elem) => (<TargetPopupRenderWrapper node={elem} position='TOP'><p className='paragraph'>Hello! I've rendered on TOP!</p></TargetPopupRenderWrapper>) | null               | It's the renderProp and required function that returns any components, but there parent must be <TargetPlugRenderWrapper /> |

## TargetPopupRenderWrapper props

| name      | type            |          example values           | default                                | description                                                                                                                                                                          |
| --------- | --------------- | :-------------------------------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| node      | typeof nodeObj  |               node                | node                                   | **Required** prop, that given from <TargetPopup /> in **first** argument **in** renderProp function                                                                                  |
| position  | string          |   'TOP','LEFT','BOTTOM','RIGHT'   | Position relatively highlighted window |
| distance  | number          |             10 or -10             | 0                                      | distance on main axis in pixels (see [example](https://Immortal230719.github.io/react-target-popup-modal/) for more details)                                                         |
| distanceY | number          |             -15 or 25             | 0                                      | distance on Y axis relatively main axis in css **vw** or **vh** if main axis horizontal (see [example](https://Immortal230719.github.io/react-target-popup-modal/) for more details) |
| children  | React.ReactNode | <div>I'm rendered component</div> | undefined                              | Common React children                                                                                                                                                                |

## License

MIT © [Immortal230719](https://github.com/Immortal230719)
