import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about me page', () => {
  render(<App />);
  const myName = screen.getByText(/Cristina Gorrino/i);
  expect(myName).toBeInTheDocument();
});
