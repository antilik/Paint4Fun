import React, { useEffect, useRef, useState } from 'react';
import FloodFill from 'q-floodfill';

import { ICanvasSize } from '../pages/MainPage';

import './canvasContent.scss';

interface IProps {
  activeTool: string;
  activeColor: string;
  canvasSize: ICanvasSize;
}

interface ICanvasState {
  isDrawing: boolean;
  offsetX: number;
  offsetY: number;
  startX: number;
  startY: number;
}

const CanvasContent = ({
  activeTool,
  activeColor,
  canvasSize,
}: IProps): JSX.Element => {
  const [canvasState, setCanvasState] = useState<ICanvasState>({
    isDrawing: false,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let ctxGlobal: CanvasRenderingContext2D | null = null;

  useEffect(() => {
    if (canvasRef.current) {
      const canvasRefCurrent = canvasRef.current;
      const canvasRect = canvasRefCurrent.getBoundingClientRect();

      ctxGlobal = canvasRefCurrent.getContext('2d');
      setCanvasState({
        ...canvasState,
        offsetX: canvasRect.left,
        offsetY: canvasRect.top,
      });
    }
  }, []);

  const handleMouseDown = (e) => {
    if (canvasRef.current) {
      const canvasRefCurrent = canvasRef.current;
      ctxGlobal = canvasRefCurrent.getContext('2d');
      const ctx = ctxGlobal;

      if (ctx) {
        setCanvasState({
          ...canvasState,
          isDrawing: true,
        });
        ctx.beginPath();
        ctx.strokeStyle = activeColor;
        ctx.lineWidth = 5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'square';

        if (activeTool === 'Pencil') {
          ctx.moveTo(
            e.clientX - canvasState.offsetX,
            e.clientY - canvasState.offsetY,
          );
        } else if (activeTool === 'Fill') {
          const currentTargetRect = e.currentTarget.getBoundingClientRect();
          let eX = Math.floor(e.pageX - currentTargetRect.left);
          eX -= e.pageX - e.clientX;
          let eY = Math.floor(e.pageY - currentTargetRect.top);
          eY -= e.pageY - e.clientY;

          const context = canvasRef.current.getContext('2d');
          if (context) {
            const imgData = context.getImageData(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height,
            );
            const ff = new FloodFill(imgData);
            ff.fill(activeColor, eX, eY, 0);
            context?.putImageData(ff.imageData, 0, 0);
          }
        }
      }
    }
  };

  const handleMouseMove = (e) => {
    if (canvasRef.current) {
      const canvasRefCurrent = canvasRef.current;
      ctxGlobal = canvasRefCurrent.getContext('2d');
      const ctx = ctxGlobal;
      if (ctx && canvasState.isDrawing) {
        if (activeTool === 'Pencil') {
          ctx.lineTo(
            e.clientX - canvasState.offsetX,
            e.clientY - canvasState.offsetY,
          );
          ctx.stroke();
        }
      }
    }
  };

  const handleMouseUp = () => {
    if (canvasRef.current) {
      const canvasRefCurrent = canvasRef.current;
      ctxGlobal = canvasRefCurrent.getContext('2d');
      const ctx = ctxGlobal;
      if (ctx) {
        ctx.closePath();
      }
      setCanvasState({
        ...canvasState,
        isDrawing: false,
      });
    }
  };

  return (
    <div className='canvas-container'>
      <div className='canvas__wrapper'>
        <canvas
          className='canvas'
          width={`${canvasSize.width}px`}
          height={`${canvasSize.height}px`}
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      </div>
    </div>
  );
};

export default CanvasContent;
