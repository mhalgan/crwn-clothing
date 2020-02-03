import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  // Price in cents
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_KNsFQSFXLRKXGyI7bI7jxhNN004dtIkYNj";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      baseURL: "http://localhost:5000",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with your payment. Please use the provided credentials."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
