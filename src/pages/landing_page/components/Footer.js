import React from 'react';
import google from "./images/google-plus.png"
import facebook from "./images/facebook.png"
import linkedin from "./images/linkedin.png"
import twitter from "./images/twitter.png"
import youtube from "./images/youtube.png"
import instagram from "./images/instagram.png"
import android from "./images/android-logo.png"
import ios from "./images/apple.png"

import './Footer.css';

function Footer(props) {
  const company = [
      {
        content: "About us"
      },
      {
        content: "Customer stories"
      },
      {
        content: "Press"
      },
      {
        content: "Careers"
      },
      {
        content: "Term of Service"
      },
      {
        content: "Privacy Policy"
      },
      {
        content: "Trust & safety"
      }
    ]

    const business = [
        {
          content: "ODL for Business"
        },
        {
          content: "Corporate Training"
        },
        {
          content: "Hire Graduate"
        }
      ]

      // const partners = [
      //   {
      //     content: "CompTIA"
      //   },
      //   {
      //     content: "Thales"
      //   },
      //   {
      //     content: "Microsoft"
      //   },
      //   {
      //     content: "Autodesk"
      //   },
      //   {
      //     content: "Oracle"
      //   }
      // ]
    
      const courses = [
        {
          content: "CompTIA Cloud+"
        },
        {
          content: "AWS Architect Solution"
        },
        {
          content: "Microsoft Power BI"
        },
        {
          content: "IBM Business Process Analysis"
        },
        {
          content: "CCNA Routing & Switching"
        },
        {
          content: "Certified Ethical Hacker"
        },
        {
          content: "IBM Cloud Application Developer"
        }
      ]

      const socials_logo = [
        {
            url: google
        },
        {
            url: facebook
        },
        {
            url: linkedin
        },
        {
            url: twitter
        },
        {
            url: youtube
        },
        {
            url: instagram
        }
      ]

      const app_logo = [
        {
            url: android
        },
        {
            url: ios
        }
      ]


  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footers-content">
          <div>
            <h5 className="footer-header">COMPANY INFO</h5>
            {company.map((company) => (
                <p key={company.content}>{company.content}</p>
            ))}
          </div>
          <div>
            <h5 className="footer-header">BUSINESS</h5>
            {business.map((business) => (
                <p key={business.content}>{business.content}</p>
            ))}
          </div>
          <div>
            <h5 className="footer-header">FEATURED COURSES</h5>
            {courses.map((course) => (
                <p key={course.content}>{course.content}</p>
            ))}
          </div>
        </div>
        <hr/>
        <div className="social-content">
          <div className="social_row">
            <h5 className="social-header">Follow Us</h5>
            {socials_logo.map((socials_logo) => (
                <img key={socials_logo.url} src={socials_logo.url} alt={""}/>
            ))}
          </div>
          <div className="app_row">
            <h5 className="social-header">Download mobile app</h5>
            {app_logo.map((app_logo) => (
                <img key={app_logo.url} src={app_logo.url} alt={""}/>
            ))}
          </div>
        </div>
        <hr/>
        <h3 className="copyright">2018 by EduCloud (Prestariang Digital Sdn Bhd).</h3>
      </div>
    </section>
  )
}

export default Footer