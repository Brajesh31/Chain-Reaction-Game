import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Chain Reaction entry flow', () => {
  test('renders the title screen with an accessible start action', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /start game/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  test('opens match setup and exposes supported player and board options', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /start game/i }));

    expect(screen.getByRole('heading', { name: /chain reaction/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2 Players' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3 Players' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '4 Players' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '6x6' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '15x10' })).toBeInTheDocument();
  });

  test('reveals the game rules from match setup', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /start game/i }));
    fireEvent.click(screen.getByRole('button', { name: /show rules/i }));

    expect(screen.getByText('Rules of the Game')).toBeInTheDocument();
    expect(screen.getByText(/corner cells \(2 adjacent\)/i)).toBeInTheDocument();
  });
});
