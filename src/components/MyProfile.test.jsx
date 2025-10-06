import React from 'react';
import { render } from '@testing-library/react';
import MyProfile from './MyProfile.jsx';

describe('My profile component', () => {
  test('MyProfile renders', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    render(<MyProfile />);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Profiler Log (MyProfile) - Phase: mount')
    );

    // You can even assert on the duration if needed
    // For example, finding the log and parsing it
  });
});