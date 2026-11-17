import {
  getCriticalMass, getNextPlayer, getOrthogonalNeighbors,
  getWinner, isLegalMove, resolveMove,
} from './rules';

const empty = () => ({ owner: 0, count: 0 });
const boardOf = (rows, cols) => Array.from({ length: rows }, () => Array.from({ length: cols }, empty));

describe('neighbor and critical-mass rules', () => {
  test('returns only up/down/left/right in-bounds neighbors', () => {
    expect(getOrthogonalNeighbors(0, 0, 3, 3)).toEqual([[1, 0], [0, 1]]);
    expect(getOrthogonalNeighbors(0, 1, 3, 3)).toEqual([[1, 1], [0, 0], [0, 2]]);
    expect(getOrthogonalNeighbors(1, 1, 3, 3)).toEqual([[0, 1], [2, 1], [1, 0], [1, 2]]);
  });

  test('handles invalid coordinates and rectangular dimensions', () => {
    expect(getOrthogonalNeighbors(-1, 0, 3, 3)).toEqual([]);
    expect(getOrthogonalNeighbors(0, 3, 3, 3)).toEqual([]);
    expect(getCriticalMass(0, 2, 4, 5)).toBe(3);
    expect(getCriticalMass(2, 2, 4, 5)).toBe(4);
    expect(getCriticalMass(3, 4, 4, 5)).toBe(2);
  });
});

describe('legal moves', () => {
  test('allows empty and own cells, rejects opponent and malformed cells', () => {
    expect(isLegalMove({ owner: 0, count: 0 }, 2)).toBe(true);
    expect(isLegalMove({ owner: 2, count: 1 }, 2)).toBe(true);
    expect(isLegalMove({ owner: 1, count: 1 }, 2)).toBe(false);
    expect(isLegalMove({ owner: 0, count: -1 }, 2)).toBe(false);
    expect(isLegalMove(null, 2)).toBe(false);
  });
});

describe('resolveMove', () => {
  test('adds an orb to a non-critical cell without mutating input', () => {
    const board = boardOf(3, 3);
    const result = resolveMove(board, 1, 1, 1);
    expect(result.ok).toBe(true);
    expect(result.bursts).toBe(0);
    expect(result.grid[1][1]).toEqual({ owner: 1, count: 1 });
    expect(board[1][1]).toEqual(empty());
  });

  test('rejects an opponent-owned cell without mutation', () => {
    const board = boardOf(3, 3);
    board[1][1] = { owner: 2, count: 1 };
    const before = JSON.parse(JSON.stringify(board));
    const result = resolveMove(board, 1, 1, 1);
    expect(result).toMatchObject({ ok: false, reason: 'illegal-move' });
    expect(board).toEqual(before);
  });

  test('resolves corner, edge and interior bursts correctly', () => {
    const corner = boardOf(3, 3);
    corner[0][0] = { owner: 1, count: 1 };
    const c = resolveMove(corner, 0, 0, 1);
    expect(c.bursts).toBe(1);
    expect(c.grid[0][0]).toEqual(empty());
    expect(c.grid[1][0]).toEqual({ owner: 1, count: 1 });
    expect(c.grid[0][1]).toEqual({ owner: 1, count: 1 });

    const edge = boardOf(3, 3);
    edge[0][1] = { owner: 2, count: 2 };
    const e = resolveMove(edge, 0, 1, 1);
    expect(e.bursts).toBe(1);
    expect(e.grid[0][1]).toEqual(empty());
    expect(e.grid[1][1]).toEqual({ owner: 1, count: 1 });

    const middle = boardOf(3, 3);
    middle[1][1] = { owner: 1, count: 3 };
    const m = resolveMove(middle, 1, 1, 1);
    expect(m.bursts).toBe(1);
    expect(m.grid[1][1]).toEqual(empty());
    expect(m.grid[0][1]).toEqual({ owner: 1, count: 1 });
    expect(m.grid[2][1]).toEqual({ owner: 1, count: 1 });
    expect(m.grid[1][0]).toEqual({ owner: 1, count: 1 });
    expect(m.grid[1][2]).toEqual({ owner: 1, count: 1 });
  });

  test('resolves a multi-wave cascade and transfers ownership', () => {
    const board = boardOf(3, 3);
    board[0][0] = { owner: 1, count: 1 };
    board[1][0] = { owner: 2, count: 2 };
    const result = resolveMove(board, 0, 0, 1);

    expect(result.ok).toBe(true);
    expect(result.bursts).toBe(2);
    expect(result.grid[1][0]).toEqual(empty());
    expect(result.grid[0][0]).toEqual({ owner: 1, count: 1 });
    expect(result.grid[2][0]).toEqual({ owner: 1, count: 1 });
    expect(result.grid[1][1]).toEqual({ owner: 1, count: 1 });
  });

  test('rejects an endless closed-board cycle without exposing partial state', () => {
    const board = boardOf(2, 2);
    board[0][0] = { owner: 1, count: 1 };
    board[1][0] = { owner: 2, count: 1 };
    board[0][1] = { owner: 2, count: 1 };
    const before = JSON.parse(JSON.stringify(board));
    const result = resolveMove(board, 0, 0, 1, { maxBursts: 12 });
    expect(result).toMatchObject({ ok: false, reason: 'cascade-limit' });
    expect(result.grid).toBe(board);
    expect(board).toEqual(before);
  });

  test('rejects malformed boards and invalid coordinates', () => {
    expect(resolveMove([], 0, 0, 1).reason).toBe('invalid-board');
    expect(resolveMove(boardOf(3, 3), 3, 0, 1).reason).toBe('invalid-coordinate');
  });
});

describe('match progression', () => {
  const playerTwoOnly = [
    [{ owner: 2, count: 1 }, { owner: 0, count: 0 }],
    [{ owner: 0, count: 0 }, { owner: 0, count: 0 }],
  ];

  test('does not decide a winner until every player has entered', () => {
    expect(getWinner(playerTwoOnly, 2, [2])).toBeNull();
    expect(getWinner(playerTwoOnly, 4, [1, 2, 3])).toBeNull();
  });

  test('detects the only surviving player after all have entered', () => {
    expect(getWinner(playerTwoOnly, 2, [1, 2])).toBe(2);
  });

  test('skips eliminated players but gives unplayed players an opening move', () => {
    expect(getNextPlayer(playerTwoOnly, 3, 1, [1, 2])).toBe(3);
    expect(getNextPlayer(playerTwoOnly, 3, 1, [1])).toBe(2);
  });
});
