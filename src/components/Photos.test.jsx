import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Photos from './Photos';

// Configure the server to handle API calls
const server = setupServer(
  // A successful response
  rest.get('https://api.example.com/photos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Photo 1' },
        { id: 2, title: 'Photo 2' },
      ])
    );
  })
);

// Start the server for all tests in this file
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Photos', () => {
  test('renders photos from the API on success', async () => {
    render(<Photos />);

    // Wait for the loading state to disappear and data to appear
    await waitFor(() => expect(screen.getByText('Photo 1')).toBeInTheDocument());
    expect(screen.getByText('Photo 2')).toBeInTheDocument();
  });

  test('renders an error message on API failure', async () => {
    // Override the default mock to return an error
    server.use(
      rest.get('https://api.example.com/photos', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server error' }));
      })
    );

    render(<Photos />);

    // Wait for the error message to appear
    await waitFor(() => expect(screen.getByText('Error: Failed to fetch photos')).toBeInTheDocument());
  });
});