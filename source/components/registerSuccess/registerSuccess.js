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
              You have succesfully registered for Reflections | Projections! You should receive an email from us shortly with your <b>unique conference QR code</b>. Be sure to check your <b>spam folder</b>. Check our website for information on the schedule of events! If you have any questions, please email us at <a href='mailto:conference-chair@acm.illinois.edu'>conference-chair@acm.illinois.edu</a>
            </Grid.Row>
            <Grid.Row className='successPrompt verticalPadding'>
               Don't forget to register for the <a href="https://acmrp.org/symposium/register" target="_blank">ACM Symposium</a>, <a href="https://acmrp.typeform.com/to/MR6XmN" target="_blank">MechMania</a> or <a href="https://puzzlebang.com" target="_blank">PuzzleBang</a>
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
