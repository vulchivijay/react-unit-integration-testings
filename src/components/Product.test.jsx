import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductPage from './ProductPage';

describe('Product component', () => {
  const mockProduct = {
    name: 'Test Product',
    description: 'A wonderful product for testing.',
  };

  test('button and message update correctly after adding to cart', () => {
    render(<ProductPage product={mockProduct} />);

    // Check initial state
    const addToCartButton = screen.getByRole('button', { name: 'Add to Cart' });
    expect(addToCartButton).toBeInTheDocument();
    expect(screen.queryByText('Item has been added to your cart!')).not.toBeInTheDocument();

    // Simulate click
    fireEvent.click(addToCartButton);

    // Check updated state
    expect(screen.getByRole('button', { name: 'Added to Cart' })).toBeInTheDocument();
    expect(screen.getByText('Item has been added to your cart!')).toBeInTheDocument();
    expect(addToCartButton).toBeDisabled();
  });
});