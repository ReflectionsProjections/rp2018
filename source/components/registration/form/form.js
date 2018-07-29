import React, { Component } from 'react'
import { } from 'react-bootstrap'
import styles from './styles.scss'
import Button from '@material-ui/core/Button';

class Form extends Component {

    constructor() {
        super();
    }

    render() {

        return(
          <div className="Form">
            <h1>Hello World</h1>
            <Button variant="contained" color="primary">
      Hello World
    </Button>
          </div>
        )
    }
}

export default Form
