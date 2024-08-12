import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArtworkList = () => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await axios.get('/api/artworks');
                setArtworks(response.data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        fetchArtworks();
    }, []);

    return (
        <div>
            <h1>Artwork Gallery</h1>
            <ul>
                {artworks.map(artwork => (
                    <li key={artwork._id}>
                        <h2>{artwork.title}</h2>
                        <p>Artist: {artwork.artist}</p>
                        <p>Description: {artwork.description}</p>
                        <p>Price: ${artwork.price}</p>
                        <img src={artwork.images[0]} alt={artwork.title} />
                        <Link to={`/artworks/${artwork._id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArtworkList;