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
                        <NavItem onClick={() => {location.href="/"}} eventKey={1} >Home</NavItem>
                        <NavItem onClick={() => location.href="https://blog.reflectionsprojections.org"}>Blog</NavItem>
                        <NavDropdown  title="Events" id="basic-nav-dropdown"  onMouseEnter={(e) => this.setState({ show: true })}
                        onMouseLeave={(e) => this.setState({ show: false })} open={this.state.show}>
                            <MenuItem onClick={() => location.href="/#/puzzlebang"}>PuzzleBang</MenuItem>
                            <MenuItem onClick={() => location.href="/#/mechmania"}>MechMania</MenuItem>
                            <MenuItem onClick={() => location.href="/#/symposium"}>ACM Symposium</MenuItem>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
