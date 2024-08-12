import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items); // Adjust according to your state structure

  // Ensure cartItems is an array
  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array");
    return null; // or some fallback UI
  }

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default Checkout;