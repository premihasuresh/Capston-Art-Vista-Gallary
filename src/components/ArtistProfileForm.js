import React, { useState } from 'react';
import axios from 'axios';

const ArtistProfileForm = () => {
    const [profile, setProfile] = useState({
        name: '',
        bio: '',
        portfolio: '',
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/artist/profile', profile);
            // Handle successful profile creation
        } catch (error) {
            console.error('Error saving profile:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Bio"
                required
            />
            <input
                type="text"
                name="portfolio"
                value={profile.portfolio}
                onChange={handleChange}
                placeholder="Portfolio URL"
                required
            />
            <button type="submit">Save Profile</button>
        </form>
    );
};

export default ArtistProfileForm;