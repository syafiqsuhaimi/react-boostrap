import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {

  // componentDidMount() {
  //   document.addEventListener('click', this.closeSlideMenu, false)
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('click', this.closeSlideMenu, false)
  // }

  closeSlideMenu = (e) => {
    document.getElementById('sideMenu').style.width='0';
  }

  render() {

    return (
      <div id="sideMenu" className="side-nav">
        <button className="btn-close" onClick={this.closeSlideMenu}>&times;</button>
        <a href="#benefit">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}

export default Sidebar;