/*
  START PAGE GIVEN BEFORE REGISTRATION FORM. MUST USE OAUTH SERVICES
  AT THIS POINT

  NOT CURRENTLY IN USE, BUT WILL USE IN FINAL STAGE.
  DISABLED FOR NOW TO VIEW REGISTRATION FORM W/O BEING
  SENT BACK TO THIS PAGE


*/
import React, { Component } from 'react'
import { Grid, Form, Button, Image} from 'semantic-ui-react'
import styles from './registerStart.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import 'semantic-ui-css/semantic.min.css';

import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'

export default class RegisterStart extends Component {

  componentWillMount() {
    sessionStorage.setItem('callback', '/register');
  }

  render() {
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row className='startContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='../assets/2018logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='startPrompt verticalPadding'>
              Reflections | Projections is UIUC's flagship tech conference and we're glad you can be a part of it.
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <Button size='medium' className="githubButton" href="http://api.reflectionsprojections.org:8000/auth/google/">
                Login with Google    &#9658;
              </Button>
            </Grid.Row>
            <Grid.Row className="ghPrompt ghPadding">
              A Google account is required to sign up for Reflections | Projections so please make one if you do not have one already!
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
