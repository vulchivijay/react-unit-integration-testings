// src/__tests__/App.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Assuming your main component is App.jsx

describe('App', () => {
  test('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });
});