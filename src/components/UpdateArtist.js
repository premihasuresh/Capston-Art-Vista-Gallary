import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateArtist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(`/api/artists/${id}`);
        setArtist(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtist();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist({ ...artist, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/artists/${id}`, artist);
      alert('Artist profile updated successfully!');
      navigate(`/artist/${id}`); // Redirect to the artist's profile page after successful update
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
        value={artist.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <textarea
        name="bio"
        value={artist.bio}
        onChange={handleChange}
        placeholder="Bio"
        required
      />
      <input
        type="text"
        name="portfolio"
        value={artist.portfolio.join(',')}
        onChange={handleChange}
        placeholder="Portfolio URLs (comma separated)"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UpdateArtist;