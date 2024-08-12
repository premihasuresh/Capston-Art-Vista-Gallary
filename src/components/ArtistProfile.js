import React, { useState } from 'react';
import axios from 'axios';

const ArtistProfile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const createArtistProfile = async (artistData) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/artists', artistData);
      setSuccess('Artist profile created successfully!');
      setError('');
      console.log('Artist profile created successfully:', response.data);
    } catch (error) {
      setError(`Failed to create artist profile: ${error.response?.data?.message || error.message}`);
      setSuccess('');
      console.error('Failed to create artist profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const artistData = { name, bio, portfolioUrl: portfolioUrl || undefined };

    // Simple URL validation if URL is provided
    if (portfolioUrl) {
      try {
        new URL(portfolioUrl);
      } catch {
        setError('Invalid URL format.');
        return;
      }
    }

    createArtistProfile(artistData);
  };

  return (
    <div>
      <h2>Create Artist Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {loading && <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Bio:</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <div>
          <label>Portfolio URL (optional):</label>
          <input type="url" value={portfolioUrl} onChange={(e) => setPortfolioUrl(e.target.value)} />
        </div>
        <button type="submit" disabled={loading}>Create Profile</button>
      </form>
    </div>
  );
};

export default ArtistProfile;