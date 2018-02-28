import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import styles from './styles.scss'

class Navigation extends Component {

    constructor() {
        super();
    }

    render() {

        this.scrollTo = (name) => {
            const element = document.getElementById(name);
            element.scrollIntoView();
            const scrolledY = window.scrollY;
            if(scrolledY){
                window.scroll({
                  top: scrolledY - 50,
                  left: 0,
                  behavior: 'smooth'
                });
            }
        };

        this.linkTo = (url) => {
            window.location = url;
        };

        return(
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">
                  <img id="logo" src="../assets/svg/logo.svg"/>
                </a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav id="nav_items">
              <NavItem onClick={() => this.scrollTo('About')} eventKey={1} href="#" className="Navigation__item--active">About</NavItem>
              <NavItem onClick={() => this.scrollTo('Tracks')} eventKey={2} href="#">Tracks</NavItem>
              <NavItem onClick={() => this.scrollTo('Sponsors')} eventKey={4} href="#">Sponsors</NavItem>
              <NavItem onClick={() => this.scrollTo('Speakers')} eventKey={3} href="#">Speakers</NavItem>
              <NavItem href="https://reflectionsprojections.org/schedule/" target="_blank" rel="noopener noreferrer" eventKey={5} color="white">Schedule</NavItem>
              <NavItem href="https://acmrp.typeform.com/to/Tv3j4W" target="_blank" rel="noopener noreferrer" eventKey={6} color="white">Register</NavItem>
            </Nav>
            </Navbar>
        )
    }
}

export default Navigation
