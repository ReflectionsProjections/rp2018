import React, { Component } from 'react'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

class Registration extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        };
    }

    function FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className = "Registration">
                <form>
                    <FieldGroup
                        id="formName"
                        type="text"
                        label="Name"
                        placeholder="Enter Name"
                        validationState={this.isValidInput}
                    />
                    <FieldGroup
                        id="formEmail"
                        type="email"
                        label="Email Address"
                        placeholder="Enter email"
                    />
                    <FieldGroup
                        id="formFile"
                        type="file"
                        label="Upload Resume"
                        help="Upload resume"
                    />
                    <FormGroup controlId="dietaryRestrictions">
                        <ControlLabel>Dietary Restrictions</ControlLabel>
                        <Checkbox inline>Vegetarian</Checkbox>
                        <Checkbox inline>Halal</Checkbox>
                        <Checkbox inline>Vegan</Checkbox>
                        <Checkbox inline>Other</Checkbox>
                    </FormGroup>
                    <FormGroup controlId="shirtSize">
                        <ControlLabel>T-shirt size</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <opetion value="select">select</option>
                            <opetion value="S">S</option>
                            <opetion value="M">M</option>
                            <opetion value="L">L</option>
                            <opetion value="XL">XL</option>
                            <opetion value="XXL">XXL</option>
                        </FormControl>
                    </FormGroup>
                    <Button type"submit">Submit</Button>
                </form>
            </div>
        )
    }
}

export default Registration
