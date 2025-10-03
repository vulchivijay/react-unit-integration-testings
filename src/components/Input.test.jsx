import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input.jsx';

describe('Input Component', () => {
  test('input value updates on change', () => {
    render(<Input />);
    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'Test input' } });
    expect(input.value).toBe('Test input');
  });
});