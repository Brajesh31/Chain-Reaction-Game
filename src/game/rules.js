/**
 * Pure board-rule helpers shared by the live game and setup preview.
 * Coordinates use zero-based row/column indexes.
 */

export function getOrthogonalNeighbors(row, col, rows, cols) {
  const validDimensions =
    Number.isInteger(rows) &&
    Number.isInteger(cols) &&
    rows > 0 &&
    cols > 0;

  const validCoordinate =
    Number.isInteger(row) &&
    Number.isInteger(col) &&
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols;

  if (!validDimensions || !validCoordinate) {
    return [];
  }

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
  if (!cell || !Number.isInteger(activePlayer) || activePlayer < 1) {
    return false;
  }

  return cell.owner === 0 || cell.owner === activePlayer;
}

/**
 * Determine the winner only after every configured player has entered the
 * match. This avoids declaring a winner during the opening turns.
 */
export function getWinner(grid, playerCount, playersWhoHaveMoved) {
  if (!Array.isArray(grid) || !Number.isInteger(playerCount) || playerCount < 2) {
    return null;
  }

  const participatingPlayers = new Set(
    (playersWhoHaveMoved || []).filter(
      (player) => Number.isInteger(player) && player >= 1 && player <= playerCount
    )
  );

  if (participatingPlayers.size < playerCount) {
    return null;
  }

  const activePlayers = new Set();
  grid.forEach((row) => {
    if (!Array.isArray(row)) return;
    row.forEach((cell) => {
      if (cell && cell.count > 0 && cell.owner >= 1 && cell.owner <= playerCount) {
        activePlayers.add(cell.owner);
      }
    });
  });

  return activePlayers.size === 1 ? Array.from(activePlayers)[0] : null;
}
