import React, { useState } from 'react';
import './CreateArtistProfile.css';

const CreateArtistProfile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [portfolioUrls, setPortfolioUrls] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="create-artist-profile">
      <h1>Create Artist Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolioUrls">Portfolio URLs (comma separated)</label>
          <input
            type="text"
            id="portfolioUrls"
            value={portfolioUrls}
            onChange={(e) => setPortfolioUrls(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateArtistProfile;