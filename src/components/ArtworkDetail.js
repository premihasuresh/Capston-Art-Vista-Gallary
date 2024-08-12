import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtworkDetail = ({ match }) => {
    const [artwork, setArtwork] = useState(null);

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const response = await axios.get(`/api/artworks/${match.params.id}`);
                setArtwork(response.data);
            } catch (error) {
                console.error('Error fetching artwork:', error);
            }
        };

        fetchArtwork();
    }, [match.params.id]);

    if (!artwork) return <p>Loading...</p>;

    return (
        <div>
            <h1>{artwork.title}</h1>
            <p>Artist: {artwork.artist}</p>
            <p>Description: {artwork.description}</p>
            <p>Price: ${artwork.price}</p>
            {artwork.images.map((img, index) => (
                <img key={index} src={img} alt={artwork.title} />
            ))}
            {/* Add functionality to add to cart */}
        </div>
    );
};

export default ArtworkDetail;