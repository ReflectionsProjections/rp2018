/*

  DECLARES REGISTRATION CONTROL FLOW

*/
import React, { Component } from 'react';
// Components
import RegisterForm from '../registerForm/registerForm';
import RegisterWarning from '../registerWarning/registerWarning';
import RegisterEssay from '../registerEssay/registerEssay';
import RegisterSuccess from '../registerSuccess/registerSuccess';

import RegisterButtons from '../registerButtons/registerButtons';

import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import { personal_fields, professional_fields } from './registerFieldsConfig';
import {uploadAttendeeData, uploadResumeFile, getGithubData, getAttendeeData} from './registerHelper';
import styles from './register.scss'
import axios from 'axios';

// Components
import RegisterNav from '../registerNav/registerNav';
import InputField from '../inputField/inputField';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-46010489-2', {
      'cookieDomain': 'hackillinois.org'
  });


// ES6 React Component:
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.apiUrl = "http://localhost:8000";
    this.state = {
      step: 0,
      personal: {},
      professional: {},
      collaborators: [{collaborator: ''}],
      warning: false,
      longForm: [{info:''}],
      newRegistration: true,
      resumeInfo: null,
      loading: true,
      attendeeEmail: ''
    };
    this.submitForm = this.submitForm.bind(this);
  };

  componentWillMount() {
    sessionStorage.setItem('callback', '/register');
    let personal = {};
    personal_fields.map((config, index)=> {
      personal[config.id] = null;
    });

    let professional = {};
    professional_fields.map((config, index)=> {
      professional[config.id] = null;
    });
    this.setState({ personal: personal, professional: professional});
  };

  componentDidMount() {
    this.setState({ loading: true });

    let emailToBePrefilled = "";
    const jwt = sessionStorage.getItem("Authorization");
    const HTTP_STATUS_OK = 200;
    const url = this.apiUrl + "/user/";
    const options = {
      method: 'GET',
      headers: { 'Authorization': jwt, 'Content-Type': 'application/json'},
      // data: body,
      url
    };
    axios(options)
    .then(function (response) {
      if(HTTP_STATUS_OK === response.status) {
        emailToBePrefilled = response.data.email;
        alert("API call succeeded.", emailToBePrefilled);
      }
      console.log(emailToBePrefilled);
    })
    .catch(function (error) {
      console.log("API call had errors.")
      console.log(error.response);
    });
    let emailField = document.querySelector("[name^=email");
    emailField.value = emailToBePrefilled;

    let {personal, professional} = this.state;
    /*
    getGithubData().then(githubData => {
      personal['github'] = githubData.user.githubHandle;
      personal['email'] = githubData.user.email;
      this.setState({ personal: personal});
/*
      if (githubData.roles != null && githubData.roles.length > 0) {
        getAttendeeData().then(attendeeData => {
          const {collaborators, longForm, resume, id} = attendeeData;

          for (let key of Object.keys(attendeeData)) {
            // exception
            if (key == 'osContributors') {
              professional['osContributors'] = attendeeData.osContributors[0].osContributor;
            }
            else if (key == 'resume') {
              this.setState({ resumeInfo: attendeeData.resume || null});
              professional['resume'] = attendeeData.resume.key || '';
            }
            else if (key == 'hasLightningInterest') {
              professional['hasLightningInterest'] = attendeeData.hasLightningInterest ? true: false;
            }
            else if (key in personal) {
              personal[key] = attendeeData[key];
            }
            else if (key in professional) {
              professional[key] = attendeeData[key];
            }
          }
          this.setState({loading: false, newRegistration: false, personal: personal, professional: professional, collaborators: collaborators, longForm: longForm});
        })
        .catch(error => {
          this.props.history.push("/error");
        });
      }
      else {
        this.setState({loading: false});
      }*/
      /*
    })
    .catch(error => {
      this.props.history.push("/start");
    });
    */
  };

  convertDataForAPI=()=>{
    const { personal, professional, collaborators, longForm } = this.state;
    const osContributors = [{
      osContributor: professional['osContributors'] || 'N/A'
    }];

    const resume = professional['resume'];

    let attendee = {};
    Object.assign(attendee, personal, professional);
    delete attendee['osContributors'];
    delete attendee['resume'];
    this.state.attendeeEmail = attendee['email']
    delete attendee['email'];

    let data = {
      attendee: attendee,
      osContributors: osContributors
    };

    if (longForm != null && longForm[0] && longForm[0].info != '') {
      data.longForm = longForm
    }
    if (collaborators !=null) {
      data.collaborators = collaborators
    }

    return {
      attendeeData: data,
      resumeFile : resume
    }
  }

  submitForm () {

    console.log("submitted");
    const firstName = document.querySelector("[name^=firstName");
    const lastName = document.querySelector("[name^=lastName");
    const email = document.querySelector("[name^=email");
    const phoneNumber = document.querySelector("[name^=phoneNumber");
    const gender = document.querySelector("[name^=gender");
    const studentStatus = document.querySelector("[name^=student");
    const school = document.querySelector("[name^=school");
    const major = document.querySelector("[name^=major");
    const transportation = document.querySelector("[name^=transportation");
    const shirtSize = document.querySelector("[name^=shirtSize");
    const dietaryRestrictions = document.querySelector("[name^=diet");
    const gradYear = document.querySelector("[name^=graduationYear");
    const professionalInterest = document.querySelector("[name^=professionalInterest");
    const jobInterest = document.querySelector("[name^=jobInterest");
    const heardFrom = document.querySelector("[name^=heardFrom");
    const rpInterest = document.querySelector("[name^=rpInterest");
    const file = document.querySelector("[name^=resume").files[0];

    // Missing rpInterest, heardFrom, and jobInterest
    const requestBody = {
        "phone": "Phone number",//phoneNumber,
      	"gender": "MALE",//gender,
        "studentType": "HIGHSCHOOL",//studentStatus,
        "major": "A major",//major
        "school": "A school",//school,
        "transportation": "ONCAMPUS",//transportation,
      	"shirtSize": "S",//shirtSize,
        "diet": "NONE",//dietaryRestrictions,
        "graduationClass": "FA18",//gradYear,
        "jobInterest": ["INTERNSHIP"],//jobInterest,
        "professionalInterest": ["AI"],//professionalInterests,
        "heardFrom": "FB",//heardFrom,
      	"rpInterest": ["SPEAKERS"]/*rpInterest*/,
    };
    const jwt = sessionStorage.getItem("Authorization");
    const HTTP_STATUS_OK = 200;
    const url = this.apiUrl + "/registration/";
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': jwt},
      data: requestBody,
      url
    };
    axios(options)
    .then(function (response) {
      if(HTTP_STATUS_OK === response.status) {
        emailToBePrefilled = response.data.email;
        alert("Registering a user succeeded.", body);
      }
      window.location = "/register/success";
      console.log(body);
    })
    .catch(function (error) {
      console.log("API call had errors.")
      console.log(error.response);
    });
  };

  nextStep = prop => data => {
    this.setState({ step: this.state.step + 1 , [prop]: data});
  };

  previousStep = prop => data => {
    this.setState({ step: this.state.step - 1, [prop]: data });
  };

  render() {
    // Variables setup
    const nextStep      = this.nextStep;
    const previousStep  = this.previousStep;
    const submitForm    = this.submitForm;
    const state         = this.state;
    console.log(submitForm);
    // submitForm();
    return(
      <div className="registerContainer">

        {
          [
            <RegisterForm
              key={state.step}
              step={state.step}
              data={state.personal}
              previousStep={null}
              forms={personal_fields}
              submitForm={submitForm}
            />,
            <RegisterSuccess />,
          ][state.step]
        }
      </div>
    )
  }
}
