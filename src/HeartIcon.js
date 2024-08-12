import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeartIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <button onClick={handleClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <img 
        src="https://example.com/path-to-your-heart-image.png" 
        alt="Heart" 
        style={{ width: '24px', height: '24px' }} 
      />
    </button>
  );
};

export default HeartIcon;