import React, { useState } from 'react';

import ToolbarPanel from '../containers/ToolbarPanel';
import { CanvasContent } from '../components';
import toolsArr from '../constants/tools';

import './mainPage.scss';

export interface ICanvasSize {
  width: number;
  height: number;
}

const MainPage = (): JSX.Element => {
  const [activeColor, setActiveColor] = useState<string>('black');
  const [activeTool, setActiveTool] = useState<string>('Pencil');
  const [canvasSize, setCanvasSize] = useState<ICanvasSize>({
    width: 1200,
    height: 600,
  });
  return (
    <div className='main-page__container'>
      <ToolbarPanel
        activeColor={activeColor}
        toolsArr={toolsArr}
        activeTool={activeTool}
        changeActiveTool={setActiveTool}
        setActiveColor={setActiveColor}
        setCanvasSize={setCanvasSize}
        canvasSize={canvasSize}
      />
      <CanvasContent
        activeTool={activeTool}
        activeColor={activeColor}
        canvasSize={canvasSize}
      />
    </div>
  );
};

export default MainPage;
