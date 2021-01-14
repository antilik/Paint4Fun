import React from 'react';

import colorsArr from '../constants/colors';

import './colors.scss';

interface IProps {
  activeColor: string;
  setActiveColor: (color: string) => void;
}

const Colors = ({ activeColor, setActiveColor }: IProps): JSX.Element => (
  <div className='paint-colors-container'>
    <div className='colors-selected' style={{ backgroundColor: activeColor }} />
    <div className='colors-panel'>
      {colorsArr.map((color) => (
        <div
          key={color}
          className='color'
          style={{ backgroundColor: color }}
          onClick={() => {
            setActiveColor(color);
          }}
        />
      ))}
    </div>
  </div>
);

export default Colors;
