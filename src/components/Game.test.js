import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Game from './Game';

jest.mock('./Board', () => {
  const ReactModule = require('react');
  return function MockBoard({ grid, onCellClick, isAnimating }) {
    return (
      <div data-testid="mock-board">
        {grid.map((row, rowIndex) => row.map((cell, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            type="button"
            aria-label={`cell ${rowIndex},${colIndex}`}
            disabled={isAnimating}
            onClick={() => onCellClick(rowIndex, colIndex)}
          >
            {cell.count}
          </button>
        )))}
      </div>
    );
  };
});

jest.mock('./PerformanceMonitor', () => {
  const ReactModule = require('react');
  return ReactModule.forwardRef(() => null);
});

jest.mock('./GameControls', () => () => null);

describe('Game cascade interaction lock', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  test('keeps all board input locked until the cascade presentation completes', () => {
    jest.useFakeTimers();
    const setTheme = jest.fn();

    render(
      <Game
        initialGridSize={{ rows: 2, cols: 2 }}
        initialPlayerCount={2}
        theme="light"
        setTheme={setTheme}
      />
    );

    const cell = (row, col) =>
      screen.getByRole('button', { name: `cell ${row},${col}` });

    // Player 1 places an orb, then Player 2 places one away from the target.
    fireEvent.click(cell(0, 0));
    expect(screen.getByText("Player 2's turn")).toBeInTheDocument();

    fireEvent.click(cell(1, 1));
    expect(screen.getByText("Player 1's turn")).toBeInTheDocument();

    // Player 1's second orb reaches the 2-orb corner critical mass.
    fireEvent.click(cell(0, 0));
    expect(cell(0, 0)).toBeDisabled();

    // The old 300 ms timeout released input before the 500 ms cell animation.
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(cell(0, 0)).toBeDisabled();

    // Input is available only after the settled board has been committed.
    act(() => {
      jest.advanceTimersByTime(250);
    });
    expect(cell(0, 0)).toBeEnabled();
    expect(cell(0, 0)).toHaveTextContent('0');
    expect(cell(0, 1)).toHaveTextContent('1');
    expect(cell(1, 0)).toHaveTextContent('1');
    expect(cell(1, 1)).toHaveTextContent('1');
    expect(screen.getByText("Player 2's turn")).toBeInTheDocument();
  });
});
