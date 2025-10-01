// src/__tests__/App.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Assuming your main component is App.jsx

describe('App', () => {
  test('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText("Click on the Vite and React logos to learn more");
    expect(headingElement).toBeInTheDocument();
  });
});