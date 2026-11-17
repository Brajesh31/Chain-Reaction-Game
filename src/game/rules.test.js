import {
  getCriticalMass,
  getOrthogonalNeighbors,
  isLegalMove,
  getWinner,
} from './rules';

describe('getOrthogonalNeighbors', () => {
  test('returns only in-bounds orthogonal neighbors for a corner', () => {
    expect(getOrthogonalNeighbors(0, 0, 3, 3)).toEqual([
      [1, 0],
      [0, 1],
    ]);
  });

  test('returns three neighbors for a non-corner edge', () => {
    expect(getOrthogonalNeighbors(0, 1, 3, 3)).toEqual([
      [1, 1],
      [0, 0],
      [0, 2],
    ]);
  });

  test('returns four neighbors for an interior cell', () => {
    expect(getOrthogonalNeighbors(1, 1, 3, 3)).toEqual([
      [0, 1],
      [2, 1],
      [1, 0],
      [1, 2],
    ]);
  });

  test('returns an empty list for invalid coordinates or dimensions', () => {
    expect(getOrthogonalNeighbors(-1, 0, 3, 3)).toEqual([]);
    expect(getOrthogonalNeighbors(0, 3, 3, 3)).toEqual([]);
    expect(getOrthogonalNeighbors(0, 0, 0, 3)).toEqual([]);
    expect(getOrthogonalNeighbors(0, 0, 3, 0)).toEqual([]);
  });
});

describe('getCriticalMass', () => {
  test('uses two, three and four neighbor thresholds', () => {
    expect(getCriticalMass(0, 0, 3, 3)).toBe(2);
    expect(getCriticalMass(0, 1, 3, 3)).toBe(3);
    expect(getCriticalMass(1, 1, 3, 3)).toBe(4);
  });

  test('handles rectangular boards without assuming square dimensions', () => {
    expect(getCriticalMass(0, 2, 4, 5)).toBe(3);
    expect(getCriticalMass(2, 2, 4, 5)).toBe(4);
    expect(getCriticalMass(3, 4, 4, 5)).toBe(2);
  });

  test('returns zero for invalid coordinates', () => {
    expect(getCriticalMass(-1, 0, 3, 3)).toBe(0);
  });
});

describe('isLegalMove', () => {
  test('allows empty and active-player cells', () => {
    expect(isLegalMove({ owner: 0 }, 2)).toBe(true);
    expect(isLegalMove({ owner: 2 }, 2)).toBe(true);
  });

  test('rejects an opponent-owned cell and invalid player data', () => {
    expect(isLegalMove({ owner: 1 }, 2)).toBe(false);
    expect(isLegalMove(null, 2)).toBe(false);
    expect(isLegalMove({ owner: 0 }, 0)).toBe(false);
  });
});

describe('getWinner', () => {
  const boardWithPlayerTwoOnly = [
    [{ owner: 2, count: 1 }, { owner: 0, count: 0 }],
    [{ owner: 0, count: 0 }, { owner: 0, count: 0 }],
  ];

  test('does not end the match before every configured player has moved', () => {
    expect(getWinner(boardWithPlayerTwoOnly, 2, [2])).toBeNull();
    expect(getWinner(boardWithPlayerTwoOnly, 4, [1, 2, 3])).toBeNull();
  });

  test('returns the only remaining owner after all players have participated', () => {
    expect(getWinner(boardWithPlayerTwoOnly, 2, [1, 2])).toBe(2);
    expect(getWinner(boardWithPlayerTwoOnly, 4, [1, 2, 3, 4])).toBe(2);
  });

  test('returns null while multiple players still own cells', () => {
    const mixedBoard = [
      [{ owner: 1, count: 1 }, { owner: 2, count: 1 }],
    ];
    expect(getWinner(mixedBoard, 2, [1, 2])).toBeNull();
  });

  test('returns null for an empty board', () => {
    expect(getWinner([[{ owner: 0, count: 0 }]], 2, [1, 2])).toBeNull();
  });
});
