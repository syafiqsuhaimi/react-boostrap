import React from 'react';
import first_step from "./images/1_step.jpeg"
import second_step from "./images/comptia_background.jpg"
import third_step from "./images/3_step.jpeg"
import fourth_step from "./images/4_step.jpeg"

import './Steps.css';

function Steps(props) {
  return (
    <section className="steps">
      <div className="steps-container">
        <h1 className="section-title">STEPS TO CERTIFICATION</h1>
        <p className="section-subtitle">Here are the 4 steps from registration to certification.</p>
        <div className="steps-content">
          <img src={first_step} alt={""}></img>
          <div className="step-content">
            <h4 className="step-header">1. Choose your course</h4>
            <p className="step-subheader">Sign up and use our career roadmap to learn about the right career path for you.</p>
          </div>
          <div className="step-content">
            <h4 className="step-header">2. Start learning and training</h4>
            <p className="step-subheader">Combine online materials and in-person training to execute your certification training.</p>
          </div>
          <img src={second_step} alt={""}></img>
          <img src={third_step} alt={""}></img>
          <div className="step-content">
            <h4 className="step-header">3. Sit for your exam</h4>
            <p className="step-subheader">We will help you to prepare for your examination to ensure success.</p>
          </div>
          <div className="step-content">
            <h4 className="step-header">4. Congratulation! You are certified</h4>
            <p className="step-subheader">You are now a proud recipient of a globally recognized credential to help grow your career.</p>
          </div>
          <img src={fourth_step} alt={""}></img>
        </div>
      </div>
    </section>
  )
}

export default Steps