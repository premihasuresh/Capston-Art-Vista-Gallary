// src/components/ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Artist: {product.artist}</p>
        <p className="card-text">Price: ${product.price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;