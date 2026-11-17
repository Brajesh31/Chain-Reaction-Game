import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Board from './Board';
import Cell from './Cell';

describe('Accessible board cells', () => {
  test('exposes a cell as a named, focusable control with ownership and orb count', () => {
    render(
      <Cell
        row={0}
        col={1}
        cell={{ owner: 2, count: 2 }}
        onClick={() => {}}
        currentPlayer={1}
        isAnimating={false}
        playerColors={{ 1: '#ff5252', 2: '#4285f4' }}
      />
    );

    const cell = screen.getByRole('button', {
      name: /row 1, column 2. player 2, 2 orbs. owned by player 2, not available to player 1/i,
    });
    expect(cell).toHaveAttribute('tabindex', '0');
    expect(cell).toHaveAttribute('aria-disabled', 'true');
  });

  test('activates an available cell', () => {
    const onClick = jest.fn();
    render(
      <Cell
        row={0}
        col={0}
        cell={{ owner: 0, count: 0 }}
        onClick={onClick}
        currentPlayer={1}
        isAnimating={false}
        playerColors={{ 1: '#ff5252' }}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /row 1, column 1. empty/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('uses one tab stop and supports arrow-key grid navigation', () => {
    render(
      <Board
        grid={[
          [{ owner: 0, count: 0 }, { owner: 0, count: 0 }],
          [{ owner: 0, count: 0 }, { owner: 0, count: 0 }],
        ]}
        onCellClick={() => {}}
        currentPlayer={1}
        isAnimating={false}
        playerColors={{ 1: '#ff5252' }}
        isMaximized={false}
        theme="light"
      />
    );

    const first = screen.getByRole('button', { name: /row 1, column 1/i });
    const second = screen.getByRole('button', { name: /row 1, column 2/i });
    const fourth = screen.getByRole('button', { name: /row 2, column 2/i });

    expect(first).toHaveAttribute('tabindex', '0');
    expect(second).toHaveAttribute('tabindex', '-1');
    first.focus();
    fireEvent.keyDown(first, { key: 'ArrowRight' });
    expect(second).toHaveFocus();
    fireEvent.keyDown(second, { key: 'ArrowDown' });
    expect(fourth).toHaveFocus();
  });
});
