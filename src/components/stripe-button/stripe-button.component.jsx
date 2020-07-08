import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H2OHTIjBMU2RU4Q7dryx3yQBojrZhTh1IxfBqiqdaRcXrjlCGIcEokHJLBJxtJm9vau8QoepOyxXepfQjnIgyjI00CA8nlPN4';

    const onToken = () => {
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            image='images/logo.png'
            billingAddress
            shippingAddress
            description={`Your total is $${price}.`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;