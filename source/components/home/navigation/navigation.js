import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {HashLink as Link} from 'react-router-hash-link'
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
            window.scrollTo({top: yPosition, behavior: "smooth"});
        };

        // Close menu when a menu button is clicked.
        this.hideMenu = () => {
            const navbarToggle = document.querySelector(".navbar-toggle");
            if (navbarToggle.style.display != "none") {
                navbarToggle.click();
            }
        }

        return (
            <div className="Navigation">
                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a
                                href="/"
                                style={{
                                opacity: 1
                            }}>
                                <img className="Navigation__logo" src="{process.env.PUBLIC_URL + "/assets/svg/logo.svg"}/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <Link className="navBarLink" to="/#About">
                                <NavDropdown
                                    title="About"
                                    id="basic-nav-dropdown"
                                    onMouseEnter={(e) => this.setState({show: true})}
                                    onMouseLeave={(e) => this.setState({show: false})}
                                    open={this.state.show}
                                    onClick={() => location.href = "/#About"}>
                                    <MenuItem className="events" className="navBarLink" onClick={() => location.href = "/puzzlebang"}>PuzzleBang</MenuItem>
                                    <MenuItem className="events" className="navBarLink" onClick={() => location.href = "/mechmania"}>MechMania</MenuItem>
                                    <MenuItem className="events" className="navBarLink" onClick={() => location.href = "/symposium"}>ACM Symposium</MenuItem>
                                </NavDropdown>
                            </Link>
                            <Link to="/#Schedule" className="navBarLink" onClick={() => location.href = "/#Schedule"}>
                                <NavItem eventKey={2}>Schedule</NavItem>
                            </Link>
                            <Link to="/#Speakers" className="navBarLink" onClick={() => location.href = "/#Speakers"}>
                                <NavItem eventKey={3}>Speakers</NavItem>
                            </Link>
                            <Link to="/#FAQ" className="navBarLink" onClick={() => location.href = "/#FAQ"}>
                                <NavItem eventKey={4}>FAQ</NavItem>
                            </Link>
                            <Link to="/#Sponsors" className="navBarLink" onClick={() => location.href = "/#Sponsors"}>
                                <NavItem eventKey={5}>Sponsors</NavItem>
                            </Link>
                            <Link
                                to=""
                                className="navBarLink"
                                onClick={() => window.open("https://blog.reflectionsprojections.org")}>
                                <NavItem href="https://blog.reflectionsprojections.org" eventKey={6}>Blog</NavItem>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
