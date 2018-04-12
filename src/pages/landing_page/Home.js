import React, { Component } from 'react';

import Hero from './components/Hero';
import Partner from './components/Partner';
import Benefits from './components/Benefits';
import Courses from './components/Courses';
import Steps from './components/Steps';
import Financial from './components/Financial';
import Begin from './components/Begin';
import Footer from './components/Footer';

class Home extends Component {

  render() {
    return (
      <div>
        <Hero/>
        <Partner/>
        <Benefits/>
        <Courses/>
        <Steps/>
        <Financial/>
        <Begin/>
        <Footer/>
      </div>
    );
  }
}

export default Home;