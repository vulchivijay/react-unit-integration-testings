import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton';

export default function Product({ product }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    // In a real app, this would make an API call to add the item
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddToCartButton
        onAdd={handleAddToCart}
        isAdded={isAdded}
      />
      {isAdded && <div>Item has been added to your cart!</div>}
    </div>
  );
}