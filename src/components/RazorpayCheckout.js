const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Use environment variable
    amount: "50000",
    currency: "INR",
    name: "Your Company",
    description: "Test Transaction",
    handler: function (response) {
      alert("Payment Successful");
      console.log(response);
    },
    prefill: {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "9999999999"
    }
  };