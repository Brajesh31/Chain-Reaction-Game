import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Chain Reaction welcome experience', () => {
  render(<App />);
  expect(screen.getByText(/chain reaction/i)).toBeInTheDocument();
});
