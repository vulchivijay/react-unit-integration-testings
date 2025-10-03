import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter.jsx';

test('increments counter on button click', () => {
  render(<Counter />);

  // Find the button and the initial count text
  const button = screen.getByRole('button', { name: /increment/i });
  const countDisplay = screen.getByText(/Count: 0/i);

  // Assert initial state
  expect(countDisplay).toBeInTheDocument();

  // Simulate a click event
  fireEvent.click(button);

  // Check that the count has updated
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});