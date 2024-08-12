import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateArtist = ({ match }) => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(`/api/artists/${match.params.id}`);
        setArtist(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtist();
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist({ ...artist, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/artists/${match.params.id}`, artist);
      alert('Artist profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to update artist profile.');
    }
  };

  if (!artist) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Artist Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={artist.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="bio"
        placeholder="Bio"
        value={artist.bio}
        onChange={handleChange}
        required
      />
      {/* Add fields for portfolio */}
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UpdateArtist;