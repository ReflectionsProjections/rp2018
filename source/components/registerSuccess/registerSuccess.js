import React, { Component } from 'react'
import { Grid, Form, Button, Image} from 'semantic-ui-react';
import styles from './registerSuccess.scss'

export default class RegisterSuccess extends Component {
  render() {
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row className='successContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='../assets/2018logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='successPrompt verticalPadding'>
              You have succesfully registered for Reflection | Projections! We’ll be in touch. For now, some more information on our event is on the home page. If you have any questions, please email us at <a href='mailto:conference-chair@acm.illinois.edu'>conference-chair@acm.illinois.edu</a>
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <a href="/"><Button>Home</Button></a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
