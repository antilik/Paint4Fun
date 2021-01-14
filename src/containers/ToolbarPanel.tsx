import React from 'react';

import { CanvasResize, Tools, Colors } from '../components';
import { ICanvasSize } from '../pages/MainPage';
import { ToolItems } from '../constants/tools';

import './toolbarPanel.scss';

interface IProps {
  activeColor: string;
  toolsArr: ToolItems;
  activeTool: string;
  changeActiveTool: (tool: string) => void;
  setActiveColor: (color: string) => void;
  canvasSize: ICanvasSize;
  setCanvasSize: (arg0: ICanvasSize) => void;
}

const ToolbarPanel = ({
  activeColor,
  activeTool,
  toolsArr,
  changeActiveTool,
  setActiveColor,
  canvasSize,
  setCanvasSize,
}: IProps): JSX.Element => (
  <aside className='aside-container'>
    <Tools
      activeTool={activeTool}
      toolsArr={toolsArr}
      changeActiveTool={changeActiveTool}
    />
    <Colors activeColor={activeColor} setActiveColor={setActiveColor} />
    <CanvasResize canvasSize={canvasSize} setCanvasSize={setCanvasSize} />
  </aside>
);

export default ToolbarPanel;
