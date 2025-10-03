import React from 'react';

export default function AddToCartButton({ onAdd, isAdded }) {
  return (
    <button onClick={onAdd} disabled={isAdded}>
      {isAdded ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
}