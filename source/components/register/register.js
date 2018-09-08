/*

  DECLARES REGISTRATION CONTROL FLOW

*/
import React, {Component} from "react";
// Components
import RegisterForm from "../registerForm/registerForm";
import RegisterWarning from "../registerWarning/registerWarning";
import RegisterEssay from "../registerEssay/registerEssay";
import RegisterSuccess from "../registerSuccess/registerSuccess";

import RegisterButtons from "../registerButtons/registerButtons";

import {Grid, Dimmer, Loader} from "semantic-ui-react";
import {personal_fields, professional_fields} from "./registerFieldsConfig";
import {uploadAttendeeData, uploadResumeFile, getGithubData, getAttendeeData} from "./registerHelper";
import styles from "./register.scss";
import axios from "axios";

// Components
import RegisterNav from "../registerNav/registerNav";
import InputField from "../inputField/inputField";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCaretLeft from "@fortawesome/fontawesome-free-solid/faCaretLeft";
import faCaretRight from "@fortawesome/fontawesome-free-solid/faCaretRight";

(function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
    (a = s.createElement(o)),
    (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m
        .parentNode
        .insertBefore(a, m);
})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-46010489-2", {cookieDomain: "hackillinois.org"});

export const HTTP_STATUS_OK = 200;
export const HTTP_BAD_REQUEST = 400;

// ES6 React Component:
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            personal: {},
            professional: {},
            collaborators: [
                {
                    collaborator: ""
                }
            ],
            warning: false,
            longForm: [
                {
                    info: ""
                }
            ],
            newRegistration: true,
            resumeInfo: null,
            loading: true,
            attendeeEmail: ""
        };
        this.hasRegistered = false;
        this.apiUrl = "https://api.reflectionsprojections.org";
        this.registrationUrl = this.apiUrl + "/registration/attendee/";
        this.submitForm = this
            .submitForm
            .bind(this);
        this.uploadResume = this
            .uploadResume
            .bind(this);
        this.createRegistration = this
            .createRegistration
            .bind(this);
        this.prefillEmail = this
            .prefillEmail
            .bind(this);
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
        this.setState({personal: personal, professional: professional});
    }

    // Gets the authenticated user's email and sets the field with it
    prefillEmail() {
        let emailToBePrefilled = "";
        let firstNameToBePrefilled = "";
        let lastNameToBePrefilled = "";
        const jwt = sessionStorage.getItem("Authorization");
        const HTTP_STATUS_OK = 200;
        const url = this.apiUrl + "/user/";
        const options = {
            method: "GET",
            headers: {
                Authorization: jwt,
                "Content-Type": "application/json"
            },
            // data: body,
            url
        };
        axios(options).then(function (response) {
            if (HTTP_STATUS_OK === response.status) {
                    emailToBePrefilled = response.data.email;
                    firstNameToBePrefilled = response.data.firstName;
                    lastNameToBePrefilled = response.data.lastName;

                    document
                        .querySelector("#email")
                        .placeholder = emailToBePrefilled;
                    document
                        .querySelector("#firstName")
                        .placeholder = firstNameToBePrefilled;
                    document
                        .querySelector("#lastName")
                        .placeholder = lastNameToBePrefilled;
                }
            })
            .catch(function (error) {
                this
                    .props
                    .history
                    .push("/start");
                // console.log("API call had errors."); console.log(error.response);
            });
    };

    componentDidMount() {
        this.setState({loading: true});
        const token = sessionStorage.getItem("Authorization");
        if (token == null) {
            this
                .props
                .history
                .push("/start");

        } else {
            this.prefillEmail();
            let {personal, professional} = this.state;
        }
    }

    convertDataForAPI = () => {
        const {personal, professional, collaborators, longForm} = this.state;
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

        return {attendeeData: data, resumeFile: resume};
    };

    // Uploads resume on form submit. Resume is not required.
    uploadResume(jwt) {
        let that = this;
        return new Promise(function (resolve, reject) {
            const resumeFile = document
                .querySelector("#resume")
                .files[0];

            if (resumeFile === undefined) {
                resolve();
            }

            // Check file size
            const MB = 1000000;
            const maxFileSize = 2 * MB;

            if (resumeFile.size > maxFileSize) {
                alert("Please select a file smaller than 2 MB.");
                reject();
            }

            let reader = new FileReader();
            reader.onload = (event) => {
                that.makeUploadApiCall(jwt, event.target.result, resumeFile.type, resolve, reject);
            };
            reader.readAsArrayBuffer(resumeFile);
        });
    }

    // Makes the upload call to the API
    makeUploadApiCall(jwt, rawResumeFile, mimeType, resolve, reject) {
        //console.log("Raw binary data: ", rawResumeFile);
        const resumeUploadUrl = this.apiUrl + "/upload/resume/";
        const resumeUploadOptions = {
            method: "PUT",
            headers: {
                "Content-Type": mimeType,
                Authorization: jwt
            },
            data: rawResumeFile,
            url: resumeUploadUrl
        };

        //console.log(resumeUploadOptions);

        axios(resumeUploadOptions).then(function (response) {
            if (HTTP_STATUS_OK === response.status) {
                resolve(true);
                }
            })
            .catch(function (error) {

                if (error.response.status == HTTP_BAD_REQUEST) {
                    alert("You have uploaded an invalid file type as a résumé. Please submit a PDF.");
                    reject(error);
                }

                reject(false);
                console.log(error);
            });
    };

    createRegistration = jwt => {
        // To make sure we don't lose reference to the current "this" inside the context of the Promise
        let that = this;

        return new Promise((resolve, reject) => {
            const registrationRequestBody = that.getRegistrationBody();

            // POST request to /registration/attendee/
            const registrationUrl = this.apiUrl + "/registration/attendee/";
            const registrationOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: jwt
                },
                data: registrationRequestBody,
                url: registrationUrl
            };

            axios(registrationOptions).then(function (response) {
                console.log("Success");
                if (HTTP_STATUS_OK === response.status) {
                    window.location = "/registersuccess";
                    resolve(true)
                    }
                })
                .catch(function (error) {
                    console.log(error.response);
                    if (error.response.data.message.indexOf("exists") != -1) {
                        alert("A registration for this account already exists. The form fields are being update" +
                                "d to reflect information you have previously provided. In case you want to updat" +
                                "e your information, change ONLY the fields you want updated, and hit Submit. If " +
                                "you do not want to update, feel free to navigate away from this form.");
                        that.hasRegistered = true;
                        that.getExistingRegistrationAndFillForm(jwt);
                        resolve(true);
                    } else if (error.response.data.message.indexOf("validation") != -1) {
                        alert("Please fill in valid data, and ensure all required fields are filled.");
                        reject(error);
                    } else {
                        alert("Sorry, we are unable to process your request due to an internal error. Please tr" +
                                "y again later.");
                        reject(error);
                    }
                });
        });
    }

    getExistingRegistrationAndFillForm = jwt => {
        // Get existing registration
        const fetchRegistrationOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: jwt
            },
            url: this.registrationUrl
        };
        let registrationData = null;
        axios(fetchRegistrationOptions).then(response => {
            registrationData = response.data;
            console.log(registrationData);
        }).catch(error => {
            alert("Could not fetch prior registration details. You will need to fill out all the fields manually, including fields you don't want to update.");
            return;
        });

        // Set each field
        that.prefillFieldsFromPriorRegistration(registrationData);        
    }

    prefillFieldsFromPriorRegistration = registrationData => {
        document
            .querySelector("#firstName")
            .innerText = registrationData.firstName;
        document
            .querySelector("#lastName")
            .innerText = registrationData.lastName;
        document
            .querySelector("#email")
            .innerText = registrationData.email;
        document
            .querySelector("#phoneNumber")
            .value = registrationData.phoneNumber;
        document
            .querySelector("#gender")
            .innerText = registrationData.gender;
        document
            .querySelector("#student")
            .innerText = registrationData.studentStatus;
        document
            .querySelector("#school")
            .value = registrationData.school;
        document
            .querySelector("#major")
            .value = registrationData.major;
        document
            .querySelector("#transportation")
            .innerText = registrationData.transportation;
        document
            .querySelector("#shirtSize")
            .innerText = registrationData.shirtSize;
        document
            .querySelector("#diet")
            .innerText = registrationData.dietaryRestrictions;
        document
            .querySelector("#graduationYear")
            .innerText = registrationData.gradYear;
            
        // Create a generic (but hidden) element that is part of a multi-select element..
        // In each forEach, set the name appropriately.
        const multiSelectReusableItem = document.querySelector("#multiSelectItem");

        professionalInterest.forEach(element => {
            let injectMultiSelectItem = multiSelectReusableItem.cloneNode(true);
            injectMultiSelectItem.innerHTML = element;
            injectMultiSelectItem.value = element.toUpperCase();
            injectMultiSelectItem.style.display = "inline-block";
            document.querySelector("#professionalInterest").appendChild(injectMultiSelectItem);
        });
        jobInterest.forEach(element => {
            let injectMultiSelectItem = multiSelectReusableItem.cloneNode(true);
            injectMultiSelectItem.innerHTML = element;
            injectMultiSelectItem.value = element.toUpperCase();
            injectMultiSelectItem.style.display = "inline-block";
            document.querySelector("#jobInterest").appendChild(injectMultiSelectItem);
        });
        heardFrom.forEach(element => {
            let injectMultiSelectItem = multiSelectReusableItem.cloneNode(true);
            injectMultiSelectItem.innerHTML = element;
            injectMultiSelectItem.value = element.toUpperCase();
            injectMultiSelectItem.style.display = "inline-block";
            document.querySelector("#heardFrom").appendChild(injectMultiSelectItem);
        });
        rpInterest.forEach(element => {
            let injectMultiSelectItem = multiSelectReusableItem.cloneNode(true);
            injectMultiSelectItem.innerHTML = element;
            injectMultiSelectItem.value = element.toUpperCase();
            injectMultiSelectItem.style.display = "inline-block";
            document.querySelector("#rpInterest").appendChild(injectMultiSelectItem);
        });
    }

    updateRegistration = jwt => {
        let that = this;
        return new Promise((resolve, reject) => {
            updateRegistrationRequestBody = that.getRegistrationBody();
            const updateRegistrationOptions = {
                method: "PUT", // For update
                headers: {
                    "Content-Type": "application/json",
                    Authorization: jwt
                },
                data: updateRegistrationRequestBody,
                url: registrationUrl
            };
            // Finally make the request
            axios(updateRegistrationOptions)
            .then(function (response) {
                console.log("Success");
                if (HTTP_STATUS_OK === response.status) {
                    window.location = "/registersuccess";
                    resolve(true);
                }
            })
            .catch(function (error) {
                console.log(error.response);
                if (error.response.data.message.indexOf("validation") != -1) {
                    alert("Please fill in valid data, and ensure all required fields are filled.");
                    reject(error);
                } else {
                    alert("Sorry, we are unable to process your request due to an internal error. Please tr" +
                        "y again later.");
                    reject(error);
                }
            });
        });
    }

    getRegistrationBody = () => {
        const firstName = document
            .querySelector("#firstName")
            .innerText;
        const lastName = document
            .querySelector("#lastName")
            .innerText;
        const email = document
            .querySelector("#email")
            .innerText;
        const phoneNumber = document
            .querySelector("#phoneNumber")
            .value;
        const gender = document
            .querySelector("#gender")
            .innerText;
        const genderTemp = personal_fields[4]
            .options
            .filter(element => {
                return element.text === gender
            })[0];
        const genderKey = (genderTemp)
            ? genderTemp.key
            : gender;
        const studentStatus = document
            .querySelector("#student")
            .innerText;
        const studentTemp = personal_fields[5]
            .options
            .filter(element => {
                return element.text === studentStatus
            })[0];
        const studentKey = (studentTemp)
            ? studentTemp.key
            : studentStatus;
        const school = document
            .querySelector("#school")
            .value;
        const major = document
            .querySelector("#major")
            .value;
        const transportation = document
            .querySelector("#transportation")
            .innerText;
        const transportTemp = personal_fields[8]
            .options
            .filter(element => {
                return element.text === transportation
            })[0];
        const transportKey = (transportTemp)
            ? transportTemp.key
            : transportation;
        const shirtSize = document
            .querySelector("#shirtSize")
            .innerText;
        const shirtTemp = personal_fields[9]
            .options
            .filter(element => {
                return element.text === shirtSize
            })[0];
        const shirtKey = (shirtTemp)
            ? shirtTemp.key
            : shirtSize;
        const dietaryRestrictions = document
            .querySelector("#diet")
            .innerText;
        const dietaryTemp = personal_fields[10]
            .options
            .filter(element => {
                return element.text === dietaryRestrictions
            })[0];
        const dietaryKey = (dietaryTemp)
            ? dietaryTemp.key
            : dietaryRestrictions;
        const gradYear = document
            .querySelector("#graduationYear")
            .innerText;
        const gradTemp = personal_fields[11]
            .options
            .filter(element => {
                return element.text === gradYear
            })[0];
        const gradKey = (gradTemp)
            ? gradTemp.key
            : gradYear;
        const professionalInterest = Array.from(document.querySelector("#professionalInterest").getElementsByClassName("ui label"));
        const jobInterest = Array.from(document.querySelector("#jobInterest").getElementsByClassName("ui label"));
        const heardFrom = Array.from(document.querySelector("#heardFrom").getElementsByClassName("ui label"));
        const rpInterest = Array.from(document.querySelector("#rpInterest").getElementsByClassName("ui label"));
        const file = document
            .querySelector("#resume")
            .files[0];
        let professionalInterestArray = [];
        professionalInterest.forEach(element => {
            professionalInterestArray.push(element.attributes.value.nodeValue)
        });
        let jobInterestArray = [];
        jobInterest.forEach(element => {
            jobInterestArray.push(element.attributes.value.nodeValue)
        });
        let heardFromArray = [];
        heardFrom.forEach(element => {
            heardFromArray.push(element.attributes.value.nodeValue)
        });
        let rpInterestArray = [];
        rpInterest.forEach(element => {
            rpInterestArray.push(element.attributes.value.nodeValue)
        });

        return requestBody = {
            "phone": phoneNumber,
            "gender": genderKey,
            "studentType": studentKey,
            "major": major,
            "school": school,
            "transportation": transportKey,
            "shirtSize": shirtKey,
            "diet": dietaryKey,
            "graduationClass": gradKey,
            "jobInterest": jobInterestArray,
            "professionalInterest": professionalInterestArray,
            "heardFrom": heardFromArray,
            "rpInterest": rpInterestArray
        };
    }

    submitForm() {
        //console.log("Submitted");
        let that = this;
        const jwt = sessionStorage.getItem("Authorization");
        let twoPartRegistrationPromise = that
            .uploadResume(jwt)
            .then((result) => {
                if (this.isRegistered) {
                    that.updateRegistration(jwt)
                } else {
                    that.createRegistration(jwt);
                }
            })
            .catch((error) => {});
    }

    nextStep = prop => data => {
        this.setState({
            step: this.state.step + 1,
            [prop]: data
        });
    };

    previousStep = prop => data => {
        this.setState({
            step: this.state.step - 1,
            [prop]: data
        });
    };

    render() {
        // Variables setup
        const nextStep = this.nextStep;
        const previousStep = this.previousStep;
        const submitForm = this.submitForm;
        const state = this.state;
        return ( < div className = "registerContainer" > { < RegisterForm key = {
                state.step
            }
            step = {
                state.step
            }
            data = {
                state.personal
            }
            previousStep = {
                null
            }
            forms = {
                personal_fields
            }
            submitForm = {
                submitForm
            } />, < RegisterSuccess / >,
            <a id="multiSelectItem" class="ui label" value="INTERNSHIP" style="display: none;">
                Internship
                <i aria-hidden="true" class="delete icon"></i>
            </a> 
        } < /div> 
        );
    }
}