import React, { useState } from 'react'; // Import useState from React
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'; // Import axios
import PaymentButton from '../components/PaymentButton'; // Razorpay button

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (stripeError) {
      setError(stripeError.message);
      return;
    }

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/checkout`, {
        payment_method_id: paymentMethod.id,
      });

      if (data.error) {
        setError(data.error);
      } else {
        setSuccess('Payment successful!');
      }
    } catch (error) {
      setError('An error occurred while processing payment.');
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      
      {/* Stripe Payment Button */}
      <form onSubmit={handleSubmit}>
        <h2>Pay with Stripe</h2>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay with Stripe
        </button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}

      {/* Razorpay Payment Button */}
      <h2>Or Pay with Razorpay</h2>
      <PaymentButton />
    </div>
  );
};

export default CheckoutPage;