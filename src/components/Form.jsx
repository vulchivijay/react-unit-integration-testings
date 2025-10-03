import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Enter your name:</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      {submittedName && <h2>Hello, {submittedName}!</h2>}
    </form>
  );
}