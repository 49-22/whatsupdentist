import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the international patients navigation link', () => {
  render(<App />);
  const linkElement = screen.getByText(/for international patients/i);
  expect(linkElement).toBeInTheDocument();
});
