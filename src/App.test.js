import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main service messaging', () => {
  render(<App />);
  expect(screen.getByText(/24\/7 Plumbing Service/i)).toBeInTheDocument();
  expect(screen.getByText(/What We Do/i)).toBeInTheDocument();
});
