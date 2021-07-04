import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('find world in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/world/i);
  expect(linkElement).toBeInTheDocument();
});