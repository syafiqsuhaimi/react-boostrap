import React from 'react';
import financial from "./images/financial_image.png"

import './Financial.css';

function Financial(props) {
  return (
    <section className="financial">
      <div className="financial-container">
        <h1 className="section-title">FINANCIAL ASSISTANCE</h1>
        <p className="section-subtitle">Career Student Loan Programme.</p>
        <div className="financials-content">
          <div className="financial-content">
            <p className="financial-subheader">The Career Training Student Loan Programme is the perfect solution to help you be a certified professional in your field.
            Choose any course from our cohesive catalogue and enjoy great benefits as a UniMy ODL student. Take this opportunity to get financial aid to help launch your career.</p>
          </div>
          <img src={financial} alt={""}></img>
        </div>
        <button
            className="button-primary button"
            type="button"
            >FIND OUT MORE</button>
      </div>
    </section>
  )
}

export default Financial