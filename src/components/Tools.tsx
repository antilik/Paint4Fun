import React from 'react';

import { ToolItems } from '../constants/tools';

import './tools.scss';

interface IProps {
  activeTool: string;
  toolsArr: ToolItems;
  changeActiveTool: (tool: string) => void;
}

const Tools = ({
  activeTool,
  toolsArr,
  changeActiveTool,
}: IProps): JSX.Element => {
  return (
    <div className='paint-tool-container'>
      {toolsArr.map((tool) => (
        <img
          key={tool.name}
          className={`paint-tool__item${
            activeTool === tool.name ? '--pressed' : ''
          }`}
          src={`${tool.imgSrc}`}
          alt={tool.name}
          onClick={() => {
            changeActiveTool(tool.name);
          }}
        />
      ))}
    </div>
  );
};
export default Tools;
