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
