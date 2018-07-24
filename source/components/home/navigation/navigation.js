import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap'
import styles from './styles.scss'
import Registration from '../registration/registration'


class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            showComponent: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({ showComponent: true });
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

        function handleSelect(selectedKey) {
            alert(`selected ${selectedKey}`);
        }

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
                    <Nav>
                        <NavItem onClick={() => this.scrollTo('About')} eventKey={1} className="Navigation__item--active">About</NavItem>
                        <NavItem onClick={() => this.scrollTo('Speakers')} eventKey={2} >Past Speakers</NavItem>
                        <NavItem onClick={() => this.scrollTo('Sponsors')} eventKey={3} >Past Sponsors</NavItem>
                        <NavItem onClick={() => this.scrollTo('Footer')} eventKey={4} >Contact Us</NavItem>
                    </Nav>
                    <Nav bsStyle="pills" pullRight>
                        <Button onClick={this._onButtonClick} bsStyle="success" bsSize="large">Register</Button>
                        {
                            this.state.showComponent ? <Registration /> : null
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
