import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import styled from 'styled-components';
import Board from './Board';
import GameControls from './GameControls';
import PerformanceMonitor from './PerformanceMonitor';
import { getNextPlayer, getWinner, resolveMove } from '../game/rules';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  gap: 20px;
  background: ${props => props.theme === 'light' ? 
    'linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)' : 
    'linear-gradient(135deg, #1a1d21 0%, #2c3138 100%)'};
  color: ${props => props.theme === 'light' ? '#2c3138' : '#ffffff'};
  transition: all 0.3s ease;
  position: relative;
  overflow-x: hidden;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 15px;
  margin: 0 auto;
  padding: 15px;
  background: ${props => props.theme === 'light' ? 
    'linear-gradient(145deg, #ffffff, #e0e0e0)' : 
    'linear-gradient(145deg, #2c3138, #23272b)'};
  border-radius: 15px;
  box-shadow: ${props => props.theme === 'light' ?
    '10px 10px 20px #bebebe, -10px -10px 20px #ffffff' :
    '10px 10px 20px #1c1f22, -10px -10px 20px #34393f'};

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 800px;
  }
`;

const StatusMessage = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 12px 20px;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => getPlayerColor(props.currentPlayer)};
  background: ${props => props.theme === 'light' ? 
    'linear-gradient(145deg, #ffffff, #f0f0f0)' : 
    'linear-gradient(145deg, #2c3138, #23272b)'};
  border-radius: 10px;
  box-shadow: ${props => props.theme === 'light' ?
    '5px 5px 10px #bebebe, -5px -5px 10px #ffffff' :
    '5px 5px 10px #1c1f22, -5px -5px 10px #34393f'};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme === 'light' ?
      '8px 8px 15px #bebebe, -8px -8px 15px #ffffff' :
      '8px 8px 15px #1c1f22, -8px -8px 15px #34393f'};
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.1rem;
    padding: 10px 15px;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  z-index: 10;
`;

const MaximizeButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  background: ${props => props.theme === 'light' ? 
    'linear-gradient(145deg, #ffffff, #e0e0e0)' : 
    'linear-gradient(145deg, #2c3138, #23272b)'};
  color: ${props => props.theme === 'light' ? '#2c3138' : 'white'};
  box-shadow: ${props => props.theme === 'light' ?
    '5px 5px 10px #bebebe, -5px -5px 10px #ffffff' :
    '5px 5px 10px #1c1f22, -5px -5px 10px #34393f'};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.theme === 'light' ?
      '8px 8px 15px #bebebe, -8px -8px 15px #ffffff' :
      '8px 8px 15px #1c1f22, -8px -8px 15px #34393f'};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: ${props => props.theme === 'light' ?
      '3px 3px 8px #bebebe, -3px -3px 8px #ffffff' :
      '3px 3px 8px #1c1f22, -3px -3px 8px #34393f'};
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    border-radius: 22.5px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const BoardWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  z-index: 2;
`;

const GameBoard = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  padding: 20px;
  background: ${props => props.theme === 'light' ? 
    'rgba(255, 255, 255, 0.9)' : 
    'rgba(44, 49, 56, 0.8)'};
  border-radius: 15px;
  box-shadow: ${props => props.theme === 'light' ?
    '15px 15px 30px #bebebe, -15px -15px 30px #ffffff' :
    '15px 15px 30px #1c1f22, -15px -15px 30px #34393f'};
`;

// Player colors
const PLAYER_COLORS = {
  1: '#ff5252', // Red
  2: '#4285f4', // Blue
  3: '#8bc34a', // Green
  4: '#ffeb3b', // Yellow
};

// Get player color by player number
const getPlayerColor = (playerNumber) => {
  return PLAYER_COLORS[playerNumber] || '#ffffff';
};

const Game = ({ initialGridSize, initialPlayerCount, theme, setTheme }) => {
  // Default grid size
  const [gridSize] = useState(initialGridSize || { rows: 6, cols: 6 });
  const [grid, setGrid] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1); // 1 for Player 1 (Red), 2 for Player 2 (Blue), etc.
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [moveMessage, setMoveMessage] = useState('');
  const moveTimeoutRef = useRef(null);
  const [playerCount] = useState(initialPlayerCount || 2); // Fixed for the duration of a match
  const [playersWhoHaveMoved, setPlayersWhoHaveMoved] = useState([]);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const renderTimeRef = useRef(0);
  const cellUpdateCountRef = useRef(0);
  const performanceMetricsRef = useRef(null);
  const [isMaximized, setIsMaximized] = useState(false);

  // Progressive loading for large grids
  const initializeGridProgressively = useCallback(async (rows, cols) => {
    setIsLoading(true);
    
    return new Promise(resolve => {
      const newGrid = [];
      let currentRow = 0;
      
      const processNextBatch = () => {
        const batchSize = 4; // Process 4 rows at a time
        const startTime = performance.now();
        
        for (let i = 0; i < batchSize && currentRow < rows; i++) {
          newGrid[currentRow] = Array(cols).fill(null).map(() => ({
            owner: 0,
            count: 0,
          }));
          currentRow++;
        }
        
        renderTimeRef.current = performance.now() - startTime;
        
        if (currentRow < rows) {
          requestAnimationFrame(processNextBatch);
        } else {
          setIsLoading(false);
          resolve(newGrid);
        }
      };
      
      requestAnimationFrame(processNextBatch);
    });
  }, []);

  // Update reset game to use progressive loading
  const resetGame = useCallback(async () => {
    if (moveTimeoutRef.current) {
      clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = null;
    }

    if (gridSize.rows * gridSize.cols > 64) { // Progressive loading for larger grids
      const newGrid = await initializeGridProgressively(gridSize.rows, gridSize.cols);
      setGrid(newGrid);
    } else {
      const newGrid = Array(gridSize.rows)
        .fill(null)
        .map(() =>
          Array(gridSize.cols).fill(null).map(() => ({
            owner: 0,
            count: 0,
          }))
        );
      setGrid(newGrid);
    }
    
    setCurrentPlayer(1);
    setMoveMessage('');
    setGameOver(false);
    setWinner(null);
    setPlayersWhoHaveMoved([]);
    setIsAnimating(false);
  }, [gridSize, initializeGridProgressively]);

  useEffect(() => {
    resetGame();
  }, [gridSize, resetGame]);

  // Performance monitoring
  useEffect(() => {
    const updateMetrics = () => {
      if (performanceMetricsRef.current) {
        performanceMetricsRef.current.updateMetrics({
          renderTime: renderTimeRef.current,
          cellUpdates: cellUpdateCountRef.current
        });
        cellUpdateCountRef.current = 0;
      }
    };

    const intervalId = setInterval(updateMetrics, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleCellClick = useCallback((row, col) => {
    if (gameOver || isAnimating || isLoading) return;

    const startedAt = performance.now();
    const result = resolveMove(grid, row, col, currentPlayer);

    if (!result.ok) {
      setMoveMessage(
        result.reason === 'cascade-limit'
          ? 'This move creates a chain that cannot settle safely. The move was cancelled.'
          : 'Invalid move. Select an empty cell or one of your own cells.'
      );
      return;
    }

    setMoveMessage('');
    const participatingPlayers = playersWhoHaveMoved.includes(currentPlayer)
      ? playersWhoHaveMoved
      : [...playersWhoHaveMoved, currentPlayer];
    setPlayersWhoHaveMoved(participatingPlayers);

    renderTimeRef.current = performance.now() - startedAt;
    cellUpdateCountRef.current += result.changedCells;

    const commitMove = () => {
      setGrid(result.grid);
      setIsAnimating(false);
      moveTimeoutRef.current = null;

      const resolvedWinner = getWinner(result.grid, playerCount, participatingPlayers);
      if (resolvedWinner !== null) {
        setGameOver(true);
        setWinner(resolvedWinner);
        return;
      }

      setCurrentPlayer(getNextPlayer(result.grid, playerCount, currentPlayer, participatingPlayers));
    };

    if (result.bursts > 0) {
      setIsAnimating(true);
      setGrid(result.previewGrid);
      moveTimeoutRef.current = setTimeout(commitMove, 300);
    } else {
      commitMove();
    }
  }, [
    gameOver,
    isAnimating,
    isLoading,
    grid,
    currentPlayer,
    playerCount,
    playersWhoHaveMoved,
  ]);

  useEffect(() => () => {
    if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
  }, []);

  // Get player name by number
  const getPlayerName = (playerNumber) => {
    return `Player ${playerNumber}`;
  };

  // Toggle performance monitor
  const togglePerformanceMonitor = useCallback(() => {
    setShowPerformanceMonitor(prev => !prev);
  }, []);

  const toggleMaximize = useCallback(() => {
    setIsMaximized(prev => !prev);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <GameContainer theme={theme}>
      <ControlsContainer theme={theme}>
        <GameControls
          onReset={resetGame}
          onTogglePerformanceMonitor={togglePerformanceMonitor}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        {gameOver ? (
          <StatusMessage role="status" aria-live="polite" aria-atomic="true" currentPlayer={winner} theme={theme}>
            {getPlayerName(winner)} wins!
          </StatusMessage>
        ) : (
          <StatusMessage role="status" aria-live="polite" aria-atomic="true" currentPlayer={currentPlayer} theme={theme}>
            {getPlayerName(currentPlayer)}'s turn
          </StatusMessage>
        )}
      </ControlsContainer>
      
      {moveMessage && <div role="alert" aria-live="assertive">{moveMessage}</div>}
      <BoardWrapper>
        <GameBoard theme={theme}>
          <MaximizeButton onClick={toggleMaximize} theme={theme} title={isMaximized ? "Minimize" : "Maximize"}>
            {isMaximized ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            )}
          </MaximizeButton>
          <Suspense fallback={<LoadingOverlay>Loading game board...</LoadingOverlay>}>
            <Board
              grid={grid}
              onCellClick={handleCellClick}
              currentPlayer={currentPlayer}
              isAnimating={isAnimating}
              playerColors={PLAYER_COLORS}
              isMaximized={isMaximized}
              theme={theme}
            />
          </Suspense>
          {isLoading && <LoadingOverlay>Initializing game board...</LoadingOverlay>}
        </GameBoard>
      </BoardWrapper>
      
      <PerformanceMonitor
        ref={performanceMetricsRef}
        isVisible={showPerformanceMonitor}
        theme={theme}
      />
    </GameContainer>
  );
};

export default Game; 