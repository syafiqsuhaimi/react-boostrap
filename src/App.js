import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/landing_page/Home.js'
import Navbar from './navbar/CustomNavbar.js'
import Sidebar from './sidebar/Sidebar.js'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Sidebar/>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/about" component={About}/>
          <Route path="/news" component={News}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
