import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateArtist = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [portfolio, setPortfolio] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/artists', { name, bio, portfolio });
      alert('Artist profile created successfully!');
      navigate('/'); // Redirect to home or any other page after successful creation
    } catch (error) {
      console.error(error);
      alert('Failed to create artist profile.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Artist Profile</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
        required
      />
      <input
        type="text"
        value={portfolio}
        onChange={(e) => setPortfolio(e.target.value.split(','))}
        placeholder="Portfolio URLs (comma separated)"
      />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateArtist;