import React from 'react';
import { useState } from 'react';

function Button() {
  const [clicked, setClicked] = useState(false);

  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? 'Clicked!' : 'Click Me'}
    </button>
  );
}
export default Button;