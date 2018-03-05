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

        this.burgerToggle = () => {
            let linksEl = document.querySelector('.narrow-links');
            if (linksEl.style.display === 'block') {
                linksEl.style.display = 'none';
            } else {
                linksEl.style.display = 'block';
            }
        }

        return(
            <div className="Navigation">
                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">
                                <img className="Navigation__logo" src="../assets/svg/logo.svg" />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem onClick={() => this.scrollTo('About')} eventKey={1} href="#" className="Navigation__item--active">About</NavItem>
                        <NavItem onClick={() => this.scrollTo('Speakers')} eventKey={2} href="#Speakers">Speakers</NavItem>
                        <NavItem onClick={() => this.scrollTo('Sponsors')} eventKey={4} href="#">Sponsors</NavItem>
                        <NavItem href="https://acmrp.typeform.com/to/Tv3j4W" target="_blank" rel="noopener noreferrer">Register</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
