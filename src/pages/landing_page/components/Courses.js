import React from 'react';
import a_plus_background from "./images/comptia_background.jpg"
import hacking_background from "./images/hacker_background.jpeg"
import oracle_background from "./images/oracle_background.jpg"
import network_plus_background from "./images/comptia_network_background.jpg"

import './Courses.css';

function Courses(props) {
  const courses = [
      {
        id: 1,
        title: "CompTIA A+",
        logo: "Earn a certificate to demonstrate your proficiency and commitment from the biggest certification providers.",
        background_img: a_plus_background
      },
      {
        id: 2,
        title: "Certified Ethical Hacker",
        logo: "RM50000 worth of Microsoft softwares FREE for UniMy ODL students and Adobe softwares at discounted price.",
        background_img: hacking_background
      },
      {
        id: 3,
        title: "Oracle: Java Fundamentals",
        logo: "Accredited by Malaysian Qualification Agency & endorsed by University Malaysia of Computer Science & Engineering.",
        background_img: oracle_background
      },
      {
        id: 4,
        title: "Certified Ethical Hacker",
        logo: "Have access to financial assistance via the Career Training Student Loan Program.",
        background_img: hacking_background
      },
      {
        id: 5,
        title: "CompTIA Network+",
        logo: "Have access to financial assistance via the Career Training Student Loan Program.",
        background_img: network_plus_background
      },
      {
        id: 6,
        title: "CompTIA A+",
        logo: "Earn a certificate to demonstrate your proficiency and commitment from the biggest certification providers.",
        background_img: a_plus_background
      },
      {
        id: 7,
        title: "Certified Ethical Hacker",
        logo: "RM50000 worth of Microsoft softwares FREE for UniMy ODL students and Adobe softwares at discounted price.",
        background_img: hacking_background
      },
      {
        id: 8,
        title: "Oracle: Java Fundamentals",
        logo: "Accredited by Malaysian Qualification Agency & endorsed by University Malaysia of Computer Science & Engineering.",
        background_img: oracle_background
      },
      {
        id: 9,
        title: "Certified Ethical Hacker",
        logo: "Have access to financial assistance via the Career Training Student Loan Program.",
        background_img: hacking_background
      },
      {
        id: 10,
        title: "CompTIA Network+",
        logo: "Have access to financial assistance via the Career Training Student Loan Program.",
        background_img: network_plus_background
      }
    ]

  return (
    <section className="courses">
      <div className="course-container">
        <h1 className="section-title">COURSES</h1>
        <p className="section-subtitle">Choose from our comprehensive range of courses to suit your distinct needs.</p>
        <div className="courses-content">
          {courses.map((course) => (
            <div className="courses-list" key={course.id}>
              <img src={course.background_img}  alt={""}></img>
              <h4 className="courses-header">{course.title}</h4>
            </div>
          ))}
        </div>
        <button
            className="button-primary button"
            type="button"
            >SEE MORE</button>
      </div>
    </section>
  )
}

export default Courses