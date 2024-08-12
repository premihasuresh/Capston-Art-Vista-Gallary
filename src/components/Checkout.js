import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/payments/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const { url } = await response.json();
      window.location.href = url; // Redirect to payment page
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name} - ${item.price}</span>
          </li>
        ))}
      </ul>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Checkout;