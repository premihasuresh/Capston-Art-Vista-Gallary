import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; 

const ArtworkItem = ({ artwork }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(artwork));
  };

  return (
    <div className="artwork-item">
      <img src={artwork.imageUrl} alt={artwork.title} />
      <h3>{artwork.title}</h3>
      <p>{artwork.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ArtworkItem;