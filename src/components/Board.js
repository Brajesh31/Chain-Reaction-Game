import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, ${props => props.isMaximized ? '120px' : '90px'});
  grid-template-rows: repeat(${(props) => props.rows}, ${props => props.isMaximized ? '120px' : '90px'});
  gap: ${props => props.isMaximized ? '8px' : '6px'};
  background: ${props => props.theme === 'light' ? 
    'linear-gradient(145deg, #ffffff, #f5f5f5)' : 
    'linear-gradient(145deg, #2c3138, #23272b)'};
  padding: ${props => props.isMaximized ? '30px' : '20px'};
  border-radius: 16px;
  box-shadow: ${props => props.theme === 'light' ?
    '0 25px 50px rgba(0, 0, 0, 0.2), inset 0 -5px 15px rgba(0, 0, 0, 0.1)' :
    '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(0, 0, 0, 0.5)'};
  transform: perspective(1200px) rotateX(10deg);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  width: fit-content;
  margin: 0 auto;
  position: relative;

  &:hover {
    transform: perspective(1200px) rotateX(5deg);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(${(props) => props.cols}, ${props => props.isMaximized ? '100px' : '80px'});
    grid-template-rows: repeat(${(props) => props.rows}, ${props => props.isMaximized ? '100px' : '80px'});
    gap: ${props => props.isMaximized ? '7px' : '6px'};
    padding: ${props => props.isMaximized ? '25px' : '20px'};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(${(props) => props.cols}, 60px);
    grid-template-rows: repeat(${(props) => props.rows}, 60px);
    gap: 4px;
    padding: 15px;
    transform: perspective(1200px) rotateX(7deg);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(${(props) => props.cols}, 45px);
    grid-template-rows: repeat(${(props) => props.rows}, 45px);
    gap: 3px;
    padding: 10px;
    transform: perspective(1200px) rotateX(5deg);
  }
`;

const Board = ({
  grid,
  onCellClick,
  currentPlayer,
  isAnimating,
  playerColors,
  isMaximized,
  theme
}) => {
  const [activeCellIndex, setActiveCellIndex] = React.useState(0);
  const cellRefs = React.useRef([]);
  if (!grid.length) return null;

  return (
    <BoardContainer
      role="grid"
      aria-label={`Game board, ${grid.length} rows by ${grid[0].length} columns`}
      rows={grid.length}
      cols={grid[0].length}
      isMaximized={isMaximized}
      theme={theme}
    >
      {grid.map((row, rowIndex) => (
        <div role="row" key={`row-${rowIndex}`} style={{ display: 'contents' }}>
          {row.map((cell, colIndex) => {
            const index = rowIndex * grid[0].length + colIndex;
            const moveFocus = (event) => {
              let nextRow = rowIndex;
              let nextCol = colIndex;
              switch (event.key) {
                case 'ArrowUp':
                  nextRow = Math.max(0, rowIndex - 1);
                  break;
                case 'ArrowDown':
                  nextRow = Math.min(grid.length - 1, rowIndex + 1);
                  break;
                case 'ArrowLeft':
                  nextCol = Math.max(0, colIndex - 1);
                  break;
                case 'ArrowRight':
                  nextCol = Math.min(grid[0].length - 1, colIndex + 1);
                  break;
                case 'Home':
                  nextCol = 0;
                  if (event.ctrlKey) nextRow = 0;
                  break;
                case 'End':
                  nextCol = grid[0].length - 1;
                  if (event.ctrlKey) nextRow = grid.length - 1;
                  break;
                default:
                  return;
              }
              event.preventDefault();
              const nextIndex = nextRow * grid[0].length + nextCol;
              setActiveCellIndex(nextIndex);
              cellRefs.current[nextIndex]?.focus();
            };

            return (
              <div
                role="gridcell"
                aria-rowindex={rowIndex + 1}
                aria-colindex={colIndex + 1}
                key={`cell-wrapper-${rowIndex}-${colIndex}`}
                style={{ width: '100%', height: '100%' }}
              >
                <Cell
                  row={rowIndex}
                  col={colIndex}
                  cell={cell}
                  onClick={() => onCellClick(rowIndex, colIndex)}
                  onKeyDown={moveFocus}
                  onFocus={() => setActiveCellIndex(index)}
                  cellRef={(element) => { cellRefs.current[index] = element; }}
                  tabIndex={activeCellIndex === index ? 0 : -1}
                  currentPlayer={currentPlayer}
                  isAnimating={isAnimating}
                  playerColors={playerColors}
                  theme={theme}
                />
              </div>
            );
          })}
        </div>
      ))}
    </BoardContainer>
  );
};

export default Board;