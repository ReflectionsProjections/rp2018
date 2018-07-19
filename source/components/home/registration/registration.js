import React, { Component } from 'react'
import { FormControl, FormGroup, FieldGroup } from 'react-bootstrap'

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
                    <FormGroup>
                    
                    </FormGroup>
                </form>
            </div>
        )
    }
}
