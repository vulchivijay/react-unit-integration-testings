import React from 'react';
import { useState, useEffect } from 'react';

export default function DataFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 100));
      setData('Fetched Data');
    };
    fetchData();
  }, []);

  return <div>{data ? data : 'Loading...'}</div>;
}