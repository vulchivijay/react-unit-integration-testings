import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';
import { AuthContext } from './../contexts/AuthContext'; // Assume you have this context

// Mock the custom hook
const mockUseFetchData = jest.fn();

jest.mock('./../hooks/useFetchData.jsx', () => ({
  useFetchData: (url) => mockUseFetchData(url),
}));

describe('UserProfile', () => {
  // Test case 1: Loading state
  test('renders loading state correctly', () => {
    mockUseFetchData.mockReturnValue({ loading: true });

    render(
      <AuthContext.Provider value={{ user: { id: 1 } }}>
        <UserProfile />
      </AuthContext.Provider>
    );

    expect(screen.getByText('Loading profile...')).toBeInTheDocument();
  });

  // Test case 2: Success state with data
  test('renders user profile data correctly', async () => {
    const mockProfile = { id: 1, name: 'Alice', email: 'alice@example.com' };
    mockUseFetchData.mockReturnValue({ data: mockProfile, loading: false });

    render(
      <AuthContext.Provider value={{ user: { id: 1 } }}>
        <UserProfile />
      </AuthContext.Provider>
    );

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText(/alice@example.com/)).toBeInTheDocument();
    expect(mockUseFetchData).toHaveBeenCalledWith('/api/users/1/profile');
  });

  // Test case 3: Error state
  test('renders error message when data fetching fails', async () => {
    const mockError = new Error('Network error');
    mockUseFetchData.mockReturnValue({ error: mockError, loading: false });

    render(
      <AuthContext.Provider value={{ user: { id: 1 } }}>
        <UserProfile />
      </AuthContext.Provider>
    );

    expect(screen.getByText('Error: Network error')).toBeInTheDocument();
  });
});