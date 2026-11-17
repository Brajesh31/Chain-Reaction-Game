/** Pure rules shared by the game engine and setup preview. */
export const MAX_CASCADE_BURSTS = 10000;

export function getOrthogonalNeighbors(row, col, rows, cols) {
  const validDimensions = Number.isInteger(rows) && Number.isInteger(cols) && rows > 0 && cols > 0;
  const validCoordinate = Number.isInteger(row) && Number.isInteger(col) && row >= 0 && row < rows && col >= 0 && col < cols;
  if (!validDimensions || !validCoordinate) return [];

  const neighbors = [];
  if (row > 0) neighbors.push([row - 1, col]);
  if (row < rows - 1) neighbors.push([row + 1, col]);
  if (col > 0) neighbors.push([row, col - 1]);
  if (col < cols - 1) neighbors.push([row, col + 1]);
  return neighbors;
}

export function getCriticalMass(row, col, rows, cols) {
  return getOrthogonalNeighbors(row, col, rows, cols).length;
}

export function isLegalMove(cell, activePlayer) {
  if (!cell || !Number.isInteger(activePlayer) || activePlayer < 1 ||
      !Number.isInteger(cell.owner) || !Number.isInteger(cell.count) || cell.count < 0) {
    return false;
  }
  return cell.owner === 0 || cell.owner === activePlayer;
}

function isValidBoard(board) {
  if (!Array.isArray(board) || board.length < 2 || !Array.isArray(board[0]) || board[0].length < 2) {
    return false;
  }
  const cols = board[0].length;
  return board.every((row) =>
    Array.isArray(row) && row.length === cols &&
    row.every((cell) => cell && Number.isInteger(cell.owner) && cell.owner >= 0 &&
      Number.isInteger(cell.count) && cell.count >= 0)
  );
}

const cloneBoard = (board) => board.map((row) => row.map((cell) => ({ ...cell })));

/**
 * Resolve one move and its full cascade without mutating the input board.
 * Queue entries are de-duplicated only while pending. Once dequeued, a
 * coordinate can be enqueued again if a later burst makes it unstable.
 * Pathological non-terminating cycles are rejected at maxBursts, returning
 * the original board unchanged instead of locking the browser.
 */
export function resolveMove(board, row, col, activePlayer, { maxBursts = MAX_CASCADE_BURSTS } = {}) {
  const fail = (reason) => ({
    ok: false, reason, grid: board, previewGrid: board, bursts: 0, changedCells: 0,
  });

  if (!isValidBoard(board)) return fail('invalid-board');
  const rows = board.length;
  const cols = board[0].length;
  if (!Number.isInteger(row) || !Number.isInteger(col) || row < 0 || row >= rows || col < 0 || col >= cols) {
    return fail('invalid-coordinate');
  }
  if (!Number.isInteger(activePlayer) || activePlayer < 1) return fail('invalid-player');
  if (!Number.isInteger(maxBursts) || maxBursts < 1) return fail('invalid-burst-limit');

  const selected = board[row][col];
  if (!isLegalMove(selected, activePlayer)) return fail('illegal-move');
  if (selected.count >= getCriticalMass(row, col, rows, cols)) return fail('unstable-board');

  const previewGrid = cloneBoard(board);
  previewGrid[row][col] = { owner: activePlayer, count: selected.count + 1 };
  const nextGrid = cloneBoard(previewGrid);
  const changed = new Set([`${row},${col}`]);
  const queue = [];
  const pending = new Set();
  let head = 0;
  let bursts = 0;

  const enqueue = (r, c) => {
    const key = `${r},${c}`;
    if (!pending.has(key)) {
      pending.add(key);
      queue.push([r, c]);
    }
  };

  if (nextGrid[row][col].count >= getCriticalMass(row, col, rows, cols)) enqueue(row, col);

  while (head < queue.length) {
    const [r, c] = queue[head++];
    const key = `${r},${c}`;
    pending.delete(key);
    if (nextGrid[r][c].count < getCriticalMass(r, c, rows, cols)) continue;

    if (bursts >= maxBursts) return fail('cascade-limit');

    bursts += 1;
    nextGrid[r][c] = { owner: 0, count: 0 };
    changed.add(key);

    for (const [nr, nc] of getOrthogonalNeighbors(r, c, rows, cols)) {
      const count = nextGrid[nr][nc].count + 1;
      nextGrid[nr][nc] = { owner: activePlayer, count };
      changed.add(`${nr},${nc}`);
      if (count >= getCriticalMass(nr, nc, rows, cols)) enqueue(nr, nc);
    }
  }

  return { ok: true, reason: null, grid: nextGrid, previewGrid, bursts, changedCells: changed.size };
}

/** Winner can only be declared after all configured players have had a turn. */
export function getWinner(grid, playerCount, playersWhoHaveMoved) {
  if (!Array.isArray(grid) || !Number.isInteger(playerCount) || playerCount < 2) return null;
  const participated = new Set((playersWhoHaveMoved || []).filter(
    (player) => Number.isInteger(player) && player >= 1 && player <= playerCount
  ));
  if (participated.size < playerCount) return null;

  const active = new Set();
  grid.forEach((row) => {
    if (!Array.isArray(row)) return;
    row.forEach((cell) => {
      if (cell && cell.count > 0 && cell.owner >= 1 && cell.owner <= playerCount) active.add(cell.owner);
    });
  });
  return active.size === 1 ? Array.from(active)[0] : null;
}

/** Give each player one opening move, then skip players who have been eliminated. */
export function getNextPlayer(grid, playerCount, currentPlayer, playersWhoHaveMoved) {
  if (!Array.isArray(grid) || !Number.isInteger(playerCount) || playerCount < 2 ||
      !Number.isInteger(currentPlayer) || currentPlayer < 1 || currentPlayer > playerCount) {
    return currentPlayer;
  }

  const participated = new Set(playersWhoHaveMoved || []);
  const active = new Set();
  grid.forEach((row) => {
    if (!Array.isArray(row)) return;
    row.forEach((cell) => {
      if (cell && cell.count > 0 && cell.owner >= 1 && cell.owner <= playerCount) active.add(cell.owner);
    });
  });

  for (let offset = 1; offset <= playerCount; offset += 1) {
    const candidate = ((currentPlayer - 1 + offset) % playerCount) + 1;
    if (!participated.has(candidate) || active.has(candidate)) return candidate;
  }
  return currentPlayer;
}
