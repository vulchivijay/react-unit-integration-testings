import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.jsx';

describe('Button Component', () => {
  test('button text changes after click', () => {
    render(<Button />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
