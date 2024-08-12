import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Ensure this file is correctly named and exists
import HeartIcon from '../components/HeartIcon'; // Import HeartIcon

// Direct image URL from Unsplash
const wallpaperUrl = 'https://images.unsplash.com/photo-1541101232843-4bec8f5de0f4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/test');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className="homepage d-flex flex-column justify-content-center align-items-center text-light p-5"
      style={{
        backgroundImage: `url(${wallpaperUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1>Welcome to ArtVista Gallery</h1>
      <p>Explore and discover amazing artworks.</p>
      {data ? (
        <div>
          <h2>Data from API</h2>
          <HeartIcon /> {/* Using HeartIcon component */}
          <p>Message: {data.message}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;