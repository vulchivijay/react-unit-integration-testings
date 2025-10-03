import React, { useState, useEffect } from 'react';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/photos')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch photos');
        return res.json();
      })
      .then(setPhotos)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading photos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>{photo.title}</li>
      ))}
    </ul>
  );
};