import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DataFetch1 from './DataFetch1.jsx';

// Mock the fetch API
describe('API fetching data component', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ success: true }),
    })
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  test('measures time until data is loaded and displayed', async () => {
    // Start the timer before rendering the component
    const start = performance.now();

    render(<DataFetch1 />);

    // Wait for the asynchronous content to appear, and then stop the timer
    await waitFor(() => screen.getByText(/data loaded/i));

    const end = performance.now();
    const fullLoadTime = end - start;

    console.log(`FetchData full load time: ${fullLoadTime} milliseconds.`);

    // Assert against a performance budget
    expect(fullLoadTime).toBeLessThan(200);
  });
});