import React from 'react';
import { render, screen } from '@testing-library/react';
import DataFetch from './DataFetch';

describe('API feaching component', () => {
  test('displays fetched data after loading', async () => {
    render(<DataFetch />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    // findBy queries wait for the element to appear
    expect(await screen.findByText('Fetched Data')).toBeInTheDocument();
  });
});
