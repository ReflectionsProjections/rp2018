import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'

class Registration extends Component {
    constructor() {
        super();
    }

    

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        /*FieldGroup({ id, label, help, ...props }) {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            );
        }*/

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
        )
    }
}

export default Registration
