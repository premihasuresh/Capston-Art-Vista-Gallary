import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ArtistList.css'; // Optional: Import a CSS file for styling

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artists');
        setArtists(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching artists. Please try again later.');
        setLoading(false);
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="artist-list">
      <h2>Artist List</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {artists.length > 0 ? (
          artists.map(artist => (
            <li key={artist._id} className="artist-item">
              <h3>{artist.name}</h3>
              <p>{artist.bio}</p>
              <a href={artist.portfolioUrl} target="_blank" rel="noopener noreferrer">
                View Portfolio
              </a>
            </li>
          ))
        ) : (
          <p>No artists found.</p>
        )}
      </ul>
    </div>
  );
};

export default ArtistList;