import React from 'react';
import './Loader.css';

const Loader = ({ fullPage = false }) => {
  return (
    <div className={`loader-container ${fullPage ? 'full-page' : ''}`}>
      <div className="wave-loader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <p className="loader-text">Syncing waves...</p>
    </div>
  );
};

export default Loader;
