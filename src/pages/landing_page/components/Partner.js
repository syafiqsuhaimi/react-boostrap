import React from 'react';
import microsoft from "./images/microsoft.png"
import comptia from "./images/comptia.png"
import ec_council from "./images/ec-council.png"
import oracle from "./images/oracle.png"
import aws from "./images/aws.png"

import './Partner.css';

function Hero(props) {

  return (
        <div className="company-container">
          <div className="company-content">
           <div className="logo">
            <img src={microsoft} alt={""}></img>
           </div>
           <div className="logo">
           <img src={comptia} alt={""}></img>
           </div>
           <div className="logo">
           <img src={ec_council} alt={""}></img>
           </div>
           <div className="logo">
           <img src={oracle} alt={""}></img>
           </div>
           <div className="logo">
           <img src={aws} alt={""}></img>
           </div>
          </div>
        </div>
  )
}

export default Hero