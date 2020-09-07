import React from 'react';
import StipeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = `pk_test_51HOnhTC2tQlZ4T3bU7HAnaQ9RfHGnqVptezvsZMu6NdiURZY1DPum7ymG25O6rMVopG34H0x349juAquHqc25IPp00y84KWA9V`;
    const onToken = (token) => {
        console.debug(token);
        alert('Payment Successful');
    };
    return (
        <StipeCheckout
            label="Pay Now"
            name="React Commerce Tut"
            billingAddress
            shippingAddress
            image="https://placeimg.com/60/60/any"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        >
            <CustomButton>Pay Now</CustomButton>
        </StipeCheckout>
    );
};

export default StripeCheckoutButton;
