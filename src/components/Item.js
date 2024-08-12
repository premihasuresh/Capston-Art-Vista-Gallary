import React from 'react';
import AddToCart from './AddToCart';

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <AddToCart item={item} />
    </div>
  );
};

export default Item;