import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSign, inverted, ...otherProps }) => {
    const googleSignIn = `${isGoogleSign ? 'google-sign-in' : ''} `;
    const invertedColor = `${inverted ? 'inverted' : ''} `;
    return (
        <button className={`${googleSignIn} ${invertedColor} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
