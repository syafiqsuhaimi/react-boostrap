import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Image,Button, Glyphicon} from 'react-bootstrap';

import logo from './logo.png';
import './CustomNavbar.css';

class CustomNavbar extends Component {

  openSlideMenu = (e) => {
    document.getElementById('sideMenu').style.width='250px';
  }

  render() {
    return (
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
            {/* <Button className="side-menu-button" onClick={this.openSlideMenu}><Glyphicon glyph="menu-hamburger"/></Button> */}
              <Image src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                EXPLORE
              </NavItem>
              <NavItem eventKey={2} href="#">
                CATALOG
              </NavItem>
              <NavItem eventKey={3} href="#">
                FINANCIAL AID
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                SIGN IN
              </NavItem>
              <NavItem className="enroll" eventKey={2} href="#">
                ENROLL NOW
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;