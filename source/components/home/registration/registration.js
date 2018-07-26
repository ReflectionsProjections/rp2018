import React, { Component } from 'react'
import { Modal, FormControl, FormGroup, ControlLabel, Button, Checkbox } from 'react-bootstrap'
import styles from './styles.scss'

class Registration extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }


    handleClose() {
        this.setState({ show: false });
    }

    handleOpen() {
        this.setState({ show: true });
    }


    render() {
        return (
            <div className = "Registration">
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className = "regForm">
                            <form>
                                <FormGroup controlId="formName">
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl type="text" placeholder="Enter Name" />
                                </FormGroup>
                                
                                <FormGroup controlId="formEmail">
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl type="email" placeholder="Enter Email" />
                                </FormGroup>

                                <FormGroup controlId="formFile">
                                    <ControlLabel>Resume</ControlLabel>
                                    <FormControl type="file" placeholder="Upload Resume" />
                                </FormGroup>

                                <FormGroup controlId="dietaryRestrictions">
                                    <ControlLabel>Dietary Restrictions</ControlLabel>
                                    <Checkbox>Vegetarian</Checkbox>
                                    <Checkbox inline>Halal</Checkbox>
                                    <Checkbox inline>Vegan</Checkbox>
                                    <Checkbox inline>Other</Checkbox>
                                </FormGroup>
                                <FormGroup controlId="shirtSize">
                                    <ControlLabel>T-shirt size</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                    </FormControl>
                                </FormGroup>
                                <Button type="submit">Submit</Button>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default Registration
