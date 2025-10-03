import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Link from './Links.jsx';

describe('Link component', () => {
  test('renders with correct text', () => {
    render(<Link herf="https://example.com">Click Me</Link>);
    const linkElement = screen.getByText(/Click Me/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('has correct href attribute', () => {
    render(<Link href="https://example.com">example.com</Link>);
    const linkElement = screen.getByTestId('custom-link');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });
});