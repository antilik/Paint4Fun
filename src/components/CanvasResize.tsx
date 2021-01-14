import React, { useState } from 'react';

import { ICanvasSize } from '../pages/MainPage';
import { ERROR_MESSAGE, RESIZE_BTN } from '../constants/text';

import './canvasResize.scss';

interface IProps {
  canvasSize: ICanvasSize;
  setCanvasSize: (arg0: ICanvasSize) => void;
}

const CanvasResize = ({ canvasSize, setCanvasSize }: IProps): JSX.Element => {
  const [canvasInputValue, setCanvasInputValue] = useState<ICanvasSize>({
    width: canvasSize.width,
    height: canvasSize.height,
  });
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const changeSetStateValue = (e) => {
    if (Number(e.target.value) > 0) {
      isErrorMessage && setIsErrorMessage(false);
      setCanvasInputValue({
        ...canvasInputValue,
        [e.target.id]: parseInt(e.target.value),
      });
    } else {
      setIsErrorMessage(true);
    }
  };

  return (
    <div className='canvas-resize-container'>
      <input
        id='width'
        type='number'
        className='canvas-resize__width'
        placeholder='Width'
        defaultValue={canvasInputValue.width}
        onInput={changeSetStateValue}
      />
      <input
        id='height'
        type='number'
        className='canvas-resize__height'
        placeholder='Height'
        defaultValue={canvasInputValue.height}
        onInput={changeSetStateValue}
      />
      <>
        {isErrorMessage ? (
          <div className='canvas-resize__error-message'>{ERROR_MESSAGE}</div>
        ) : null}
      </>
      <button
        tabIndex={1}
        disabled={
          canvasSize.width === canvasInputValue.width &&
          canvasSize.height === canvasInputValue.height
        }
        className='canvas-resize__btn'
        onClick={() => {
          setCanvasSize(canvasInputValue);
        }}
      >
        {RESIZE_BTN}
      </button>
    </div>
  );
};

export default CanvasResize;
