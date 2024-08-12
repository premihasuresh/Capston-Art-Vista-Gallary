import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artworks');
        setArtworks(response.data);
      } catch (error) {
        console.error('Error fetching artworks', error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <h1>Artworks</h1>
      {artworks.map(artwork => (
        <div key={artwork._id}>
          <h2>{artwork.title}</h2>
          <p>{artwork.description}</p>
          <p><strong>Price:</strong> ${artwork.price}</p>
          <p><strong>Artist:</strong> {artwork.artistName}</p>
        </div>
      ))}
    </div>
  );
};

export default Artworks;