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

test('fail test in the document', () => {
  const failtotest = render(<App />);
  const Owntext = failtotest.getByText(/check own test write/i);
  expect(Owntext).toBeInTheDocument();
});

test('find input with placeholder', () => {
  const ResponseText = render(<App />)
  const placeHolder = ResponseText.getByPlaceholderText(/Please/i);
  expect(placeHolder).toBeInTheDocument();
})