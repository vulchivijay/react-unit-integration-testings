import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent.jsx';

describe('Simple Component', () => {
  test('renders "Hello, World!" text', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  test('measures initial render time of MyComponent', () => {
    const start = performance.now();
    render(<MyComponent />);
    const end = performance.now();
    const renderTime = end - start;

    console.log(`MyComponent initial render took ${renderTime} milliseconds.`);

    // Set an expectation for the render time.
    // The threshold will depend on your component's complexity and your test environment.
    expect(renderTime).toBeLessThan(50); // Expect render to be under 50ms
  });

});

