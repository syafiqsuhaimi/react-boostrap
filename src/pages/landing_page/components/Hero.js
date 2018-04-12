import React from 'react';

import './Hero.css';

function Hero(props) {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="secondary-color">BE IN DEMAND</h1>
          <h1>GET CERTIFIED</h1>
          <p className="hero-subheader">Prove your credibility through certifications by training with us</p>
          <button
            className="button-primary button"
            type="button"
            >GET STARTED</button>
        </div>
      </div>
    </header>
  )
}

export default Hero