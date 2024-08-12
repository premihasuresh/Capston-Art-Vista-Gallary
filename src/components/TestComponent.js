import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError('There was an error fetching the data');
        console.error('There was an error:', error);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestComponent;