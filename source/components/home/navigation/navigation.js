import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import styles from './styles.scss'


class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
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
                        <NavDropdown eventKey={2} title="Events" id="basic-nav-dropdown"  onMouseEnter={(e) => this.setState({ show: true })}
                        onMouseLeave={(e) => this.setState({ show: false })} open={this.state.show}>
                            <MenuItem onClick={() => location.href="/#/puzzlebang"} eventKey={2.1}>PuzzleBang</MenuItem>
                            <MenuItem onClick={() => location.href="/#/mechmania"} eventKey={2.2}>MechMania</MenuItem>
                            <MenuItem onClick={() => location.href="/#/symposium"} eventKey={2.3}>ACM Symposium</MenuItem>
                        </NavDropdown>
                        <NavItem onClick={() => this.scrollTo('Speakers')} eventKey={3} >Speakers</NavItem>
                        <NavItem onClick={() => this.scrollTo('FAQ')} eventKey={4}>FAQ</NavItem>
                        <NavItem onClick={() => this.scrollTo('Sponsors')} eventKey={5} >Sponsors</NavItem>
                        <NavItem onClick={() => location.href="https://blog.reflectionsprojections.org"} eventKey={6}>Blog</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
