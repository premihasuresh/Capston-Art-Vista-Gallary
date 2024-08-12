import React from 'react';

const PaymentButton = () => {
    const handlePayment = async () => {
        const amount = 50000; // Example amount in paise (500.00 INR)

        try {
            const response = await fetch('http://localhost:5000/api/payment/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: amount }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const order = await response.json();

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Add this to your .env file
                amount: order.amount,
                currency: order.currency,
                name: "ArtVista Gallery",
                description: "Test Transaction",
                order_id: order.id,
                handler: async function (response) {
                    const paymentData = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    // Verify payment on the server
                    const verifyResponse = await fetch('http://localhost:5000/api/payment/verify', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(paymentData),
                    });

                    const verifyResult = await verifyResponse.text();
                    alert(verifyResult);
                },
                prefill: {
                    name: "John Doe",
                    email: "johndoe@example.com",
                    contact: "9999999999"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Error during payment:', error);
        }
    };

    return (
        <button onClick={handlePayment}>
            Pay Now
        </button>
    );
};

export default PaymentButton;