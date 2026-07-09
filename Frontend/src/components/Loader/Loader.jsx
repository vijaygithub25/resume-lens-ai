import React from 'react';
import './loader.scss';

const Loader = ({ message = "Loading...", subMessage }) => {
    return (
        <main className="global-loading-screen">
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
            <h1>{message}</h1>
            {subMessage && <p className="sub-message">{subMessage}</p>}
        </main>
    )
}

export default Loader;
