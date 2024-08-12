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
          <h2>{artwork.title}</h2>  {/* Sunflower */}
          <p>{artwork.description}</p>  {/* The sunflower is a tall, bright yellow annual plant known for its large flower heads and nutrient-rich seeds. */}
          <p><strong>Price:</strong> ${artwork.price}</p>  {/* 200 */}
          <p><strong>Artist:</strong> {artwork.artist}</p>  {/* Vincent van Gogh’s */}
          {artwork.imageUrl && <img src={artwork.imageUrl} alt={artwork.title} style={{ width: '200px' }} />}  {/* https://jooinn.com/images/sunflower-plant-3.jpg */}
        </div>
      ))}
    </div>
  );
};

export default Artworks;