/*

  DECLARES REGISTRATION CONTROL FLOW

*/
import React, { Component } from 'react';
import qs from 'qs';
// Components
import styles from './auth.scss';
import axios from 'axios';
import queryString from 'query-string';

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
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
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
);
ga('create', 'UA-46010489-2', {
    cookieDomain: 'hackillinois.org'
});

// This route should be accessed with a query string containing either the
// OAuth authorization code, or an isMobile flag.
// We will then make a call to the API, exchanging it for the JWT,
// with which we can get user info for the email.
export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.apiUrl = 'https://api.reflectionsprojections.org';
    }

    componentDidMount() {
        const HTTP_STATUS_OK = 200;
        const values = queryString.parse(this.props.location.search);
        const isAuthorized = values.code !== undefined;
        const isMobile = values.isMobile || isMobile === "true"; 

        if (isAuthorized) {
            
            // Means it is a redirect from Google
            // Make POST request, and redirect appropriately
            let authorizationCode = values.code;
            sessionStorage.setItem('Authorization-Code', authorizationCode);

            const body = { code: authorizationCode };
            let url = this.apiUrl + '/auth/code/google/?redirect_uri=https://reflectionsprojections.org/auth';

            if (isMobile) {
                url.concat('?isMobile=true');
            }

            const tokenRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Origin: '*' },
                data: body,
                url: url
            };

            // If auth is hit as a redirect from the Register flow, then get the JWT.
            // If auth is hit from effective-googles i.e. the QR code scanning app,
            //     then, it must hit the /auth/google/ endpoint and finally take the user to
            axios(tokenRequestOptions)
                .then(function(response) {
                    if (HTTP_STATUS_OK === response.status) {
                        let apiJwt = response.data.token;
                        sessionStorage.setItem('Authorization', apiJwt);
                        
                        if (isMobile) {
                            window.location = "acmrp://auth?token=" + apiJwt;
                        } else {
                            window.location = 'https://reflectionsprojections.org/register';
                        }
                    }
                })
                .catch(function(error) {
                    console.log(error.response);
                });

        } else {
            // Means authorization is required
            if (isMobile) {
                window.location = this.apiUrl + '/auth/google/?redirect_uri=https://reflectionsprojections.org/auth?isMobile=true';
            }
        }
    }

    render() {
        return <div className="background" />;
    }
}
