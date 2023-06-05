import { render, screen } from '@testing-library/react';
import App from './pages/Book';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Book Now');
  expect(linkElement).toBeInTheDocument();
});
