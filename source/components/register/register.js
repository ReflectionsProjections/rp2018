/*

  DECLARES REGISTRATION CONTROL FLOW

*/
import React, { Component } from "react";
// Components
import RegisterForm from "../registerForm/registerForm";
import RegisterWarning from "../registerWarning/registerWarning";
import RegisterEssay from "../registerEssay/registerEssay";
import RegisterSuccess from "../registerSuccess/registerSuccess";

import RegisterButtons from "../registerButtons/registerButtons";

import { Grid, Dimmer, Loader } from "semantic-ui-react";
import { personal_fields, professional_fields } from "./registerFieldsConfig";
import {
  uploadAttendeeData,
  uploadResumeFile,
  getGithubData,
  getAttendeeData
} from "./registerHelper";
import styles from "./register.scss";
import axios from "axios";

// Components
import RegisterNav from "../registerNav/registerNav";
import InputField from "../inputField/inputField";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCaretLeft from "@fortawesome/fontawesome-free-solid/faCaretLeft";
import faCaretRight from "@fortawesome/fontawesome-free-solid/faCaretRight";

(function(i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);
ga("create", "UA-46010489-2", {
  cookieDomain: "hackillinois.org"
});

export const HTTP_STATUS_OK = 200;
export const HTTP_BAD_REQUEST = 400;

// ES6 React Component:
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.apiUrl = "http://localhost:8000";
    this.state = {
      step: 0,
      personal: {},
      professional: {},
      collaborators: [{ collaborator: "" }],
      warning: false,
      longForm: [{ info: "" }],
      newRegistration: true,
      resumeInfo: null,
      loading: true,
      attendeeEmail: ""
    };
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    sessionStorage.setItem("callback", "/register");
    let personal = {};
    personal_fields.map((config, index) => {
      personal[config.id] = null;
    });

    let professional = {};
    professional_fields.map((config, index) => {
      professional[config.id] = null;
    });
    this.setState({ personal: personal, professional: professional });
  }

  // Gets the authenticated user's email and sets the field with it
  prefillEmail = () => {
    let emailToBePrefilled = "";
    const jwt = sessionStorage.getItem("Authorization");
    const HTTP_STATUS_OK = 200;
    const url = this.apiUrl + "/user/";
    const options = {
      method: "GET",
      headers: { Authorization: jwt, "Content-Type": "application/json" },
      // data: body,
      url
    };
    axios(options)
      .then(function(response) {
        if (HTTP_STATUS_OK === response.status) {
          emailToBePrefilled = response.data.email;
          document.querySelector("[name^=email").value = emailToBePrefilled;
        }
        console.log(emailToBePrefilled);
      })
      .catch(function(error) {
        console.log("API call had errors.");
        console.log(error.response);
      });
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.prefillEmail();
    let { personal, professional } = this.state;
  }

  convertDataForAPI = () => {
    const { personal, professional, collaborators, longForm } = this.state;
    const osContributors = [
      {
        osContributor: professional["osContributors"] || "N/A"
      }
    ];

    const resume = professional["resume"];

    let attendee = {};
    Object.assign(attendee, personal, professional);
    delete attendee["osContributors"];
    delete attendee["resume"];
    this.state.attendeeEmail = attendee["email"];
    delete attendee["email"];

    let data = {
      attendee: attendee,
      osContributors: osContributors
    };

    if (longForm != null && longForm[0] && longForm[0].info != "") {
      data.longForm = longForm;
    }
    if (collaborators != null) {
      data.collaborators = collaborators;
    }

    return {
      attendeeData: data,
      resumeFile: resume
    };
  };

  // Uploads resume on form submit. Resume is not required.
  uploadResume = jwt => {
    const resumeFile = document.querySelector("[name^=resume").files[0];

    if (resumeFile === undefined) {
      return;
    }

    // Check file size
    const MB = 1000000;
    const maxFileSize = 2 * MB;

    if (resumeFile.size > maxFileSize) {
      alert("Please select a file smaller than 2 MB.");
      return;
    }

    let reader = new FileReader();
    reader.onloadend = () => {
      this.makeUploadApiCall(jwt, reader.result);
    };
    reader.readAsBinaryString(resumeFile);
  };

  // Makes the upload call to the API
  makeUploadApiCall = (jwt, rawResumeFile) => {
    console.log("Raw binary data: ", rawResumeFile);
    const resumeUploadUrl = this.apiUrl + "/upload/resume/";
    const resumeUploadOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: jwt },
      data: rawResumeFile,
      resumeUploadUrl
    };

    axios(resumeUploadOptions)
      .then(function(response) {
        if (HTTP_STATUS_OK === response.status) {
          alert("Registering a user succeeded.");
        }
        window.location = "/registersuccess";
      })
      .catch(function(error) {
        if (error.status == HTTP_BAD_REQUEST) {
          alert(
            "The file you selected was not valid. Please choose a different file."
          );
        }
        console.log(error);
      });
  };

  createRegistration = jwt => {
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
    const professionalInterest = document.querySelector(
      "[name^=professionalInterest"
    );
    const jobInterest = document.querySelector("[name^=jobInterest");
    const heardFrom = document.querySelector("[name^=heardFrom");
    const rpInterest = document.querySelector("[name^=rpInterest");
    const file = document.querySelector("[name^=resume").files[0];

    // Missing rpInterest, heardFrom, and jobInterest
    const registrationRequestBody = {
      phone: "Phone number", //phoneNumber,
      gender: "MALE", //gender,
      studentType: "HIGHSCHOOL", //studentStatus,
      major: "A major", //major
      school: "A school", //school,
      transportation: "ONCAMPUS", //transportation,
      shirtSize: "S", //shirtSize,
      diet: "NONE", //dietaryRestrictions,
      graduationClass: "FA18", //gradYear,
      jobInterest: ["intern"],
      professionalInterest: professionalInterest,
      heardFrom: "FB", //heardFrom,
      rpInterest: ["SPEAKERS"] /*rpInterest*/
    };
    console.log(registrationRequestBody);

    // Post request to registration
    const registrationUrl = this.apiUrl + "/registration/attendee/";
    const registrationOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: jwt },
      data: registrationRequestBody,
      registrationUrl
    };
    axios(registrationOptions)
      .then(function(response) {
        if (HTTP_STATUS_OK === response.status) {
          // emailToBePrefilled = response.data.email; // why is this here?
          alert("Registering a user succeeded.");
        }
        window.location = "/registersuccess";
      })
      .catch(function(error) {
        console.log("API call had errors.");
        console.log(error);
      });
  };

  submitForm() {
    console.log("Submitted");
    const jwt = sessionStorage.getItem("Authorization");
    this.uploadResume(jwt);
    this.createRegistration(jwt);
  }

  nextStep = prop => data => {
    this.setState({ step: this.state.step + 1, [prop]: data });
  };

  previousStep = prop => data => {
    this.setState({ step: this.state.step - 1, [prop]: data });
  };

  render() {
    // Variables setup
    const nextStep = this.nextStep;
    const previousStep = this.previousStep;
    const submitForm = this.submitForm;
    const state = this.state;
    console.log(submitForm);
    // submitForm();
    return (
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
            <RegisterSuccess />
          ][state.step]
        }
      </div>
    );
  }
}
