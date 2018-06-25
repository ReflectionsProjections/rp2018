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
            var yPosition = element.offsetTop;
            window.scrollTo({
                top: yPosition,
                behavior: "smooth"
            });
        };

        return(
            <div className="Navigation">
                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#" style={{opacity: 1}}>
                                <img className="Navigation__logo" src="../assets/svg/logo.svg" />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem onClick={() => this.scrollTo('About')} eventKey={1} className="Navigation__item--active">About</NavItem>
                        <NavItem onClick={() => this.scrollTo('Speakers')} eventKey={2} >Past Speakers</NavItem>
                        <NavItem onClick={() => this.scrollTo('Sponsors')} eventKey={3} >Past Sponsors</NavItem>
                        <NavItem onClick={() => this.scrollTo('Footer')} eventKey={4} >Contact Us</NavItem>
                        <NavItem onClick={() => location.href = "/#/rp2017"} eventKey={5} >Past R|Ps</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
