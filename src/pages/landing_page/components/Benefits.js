import React from 'react';
import benefitIconOne from "./icons/earth-globe.png"
import benefitIconTwo from "./icons/laptop.png"
import benefitIconThree from "./icons/university.png"
import benefitIconFour from "./icons/financial_aid.png"

import './Benefits.css';

function Benefits(props) {
  const benefits = [
      {
        header: "Global Recognition",
        text: "Earn a certificate to demonstrate your proficiency and commitment from the biggest certification providers.",
        img: benefitIconOne
      },
      {
        header: "Microsoft & Adobe Softwares",
        text: "RM50000 worth of Microsoft softwares FREE for UniMy ODL students and Adobe softwares at discounted price.",
        img: benefitIconTwo
      },
      {
        header: "Approved by MOHE",
        text: "Accredited by Malaysian Qualification Agency & endorsed by University Malaysia of Computer Science & Engineering.",
        img: benefitIconThree
      },
      {
        header: "Financial aid available",
        text: "Have access to financial assistance via the Career Training Student Loan Program.",
        img: benefitIconFour
      }
    ]

  return (
    <section className="benefits" id="benefit">
      <div className="container">
        <h1 className="section-title">BENEFITS</h1>
        <p className="section-subtitle">As a student of UniMy ODL, you will get the special benefits designed to set you up for success.</p>
        <div className="benefits-content">
          {benefits.map((benefit) => (
            <div className="benefits-list" key={benefit.header}>
              <img src={benefit.img} alt={"Photo of " + benefit.header}></img>
              <h4 className="benefit-header">{benefit.header}</h4>
              <p className="benefit-subheader">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits