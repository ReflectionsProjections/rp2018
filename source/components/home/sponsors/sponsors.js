import React, { Component } from "react";
import { Grid, Row, Col, Panel, PageHeader } from "react-bootstrap";
import styles from "./styles.scss";


class Sponsors extends Component {
  constructor() {
    super();
  }

  render() {
    const sponsorsList = {
      tier1: [
      	{
          name: "Microsoft",
          img: "../assets/img/sponsors/sponsors2018/jobfair/petabyte/microsoft.jpeg",
          webPage: "https://microsoft.com/"
        },
        {
          name: "Zillow Group",
          img: "",
          webPage: "https://www.zillowgroup.com/"
        },
        {
          name: "IMO",
          img: "../assets/img/sponsors/sponsors2017/jobfair/gigabyte/imo.svg",
          webPage: "https://www.e-imo.com/"
        }
      ],

      tier2: [
        {
          name: "Cloudflare",
          img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/cf_placeholder.png",
          webPage: "https://www.cloudflare.com/"
        },
        {
          name: "Northern Trust",
          img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/northern_trust.jpg",
          webPage: "https://www.northerntrust.com/"
        },
        {
        	name: "Salesforce",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/sf_placeholder.png",
          webPage: "https://www.salesforce.com/"
        },
        {
        	name: "Braintree",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/braintree.png",
          webPage: "http://braintree.com/"
        },
        {
          name: "Qualtrics",
          img: "../assets/img/sponsors/sponsors2017/jobfair/gigabyte/qualtrics.jpg",
          webPage: "https://www.qualtrics.com/"
        }
      ],

      tier3: [
        {
          name: "Google",
          img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/google.png",
          webPage: "https://google.com"
        },
        {
          name: "Amobee",
          img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/amobee_full.jpeg",
          webPage: "https://www.amobee.com/"
        },
        {
          name: "Sandia National Laboratories",
          img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/sandia.png",
          webPage: "http://www.sandia.gov/"
        },
        {
        	name: "PricewaterhouseCoopers",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/pwc.jpg",
          webPage: "https://www.pwc.com/"
        },
        {
        	name: "Granular",
        	img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/granular.svg",
          webPage: "https://granular.ag/"
        },
        {
          name: "West Monroe Partners",
          img: "../assets/img/sponsors/sponsors2017/jobfair/megabyte/westmonroe.jpg",
          webPage: "https://www.westmonroepartners.com/"
        },
        {
          name: "Uber",
          img: "../assets/img/sponsors/sponsors2017/jobfair/megabyte/uber.jpg",
          webPage: "https://www.uber.com/"
        },
        {
          name: "Riverbed",
          img: "../assets/img/sponsors/sponsors2017/jobfair/megabyte/riverbad.jpg",
          webPage: "https://www.riverbed.com/"
        },
        {
          name: "Facebook",
          img: "../assets/img/sponsors/sponsors2017/jobfair/megabyte/facebook.jpg",
          webPage: "https://www.facebook.com/"
        },

        // startups

        {
          name: "DeepScale",
          img: "../assets/img/sponsors/sponsors2018/startup/ds_placeholder.png",
          webPage: "http://deepscale.ai/"
        },
        {
          name: "Flexport",
          img: "../assets/img/sponsors/sponsors2018/startup/fp_placeholder.png",
          webPage: "https://www.flexport.com/"
        },
        {
          name: "Ocient",
          img: "../assets/img/sponsors/sponsors2018/startup/ocient_full.png",
          webPage: "http://www.ocient.com/"
        },
        {
          name: "Polsky Center",
          img: "../assets/img/sponsors/sponsors2018/startup/pc_placeholder.png",
          webPage: "https://polsky.uchicago.edu/"
        },
        {
          name: "Reconstruct",
          img: "../assets/img/sponsors/sponsors2018/startup/reconstruct_full.jpg",
          webPage: "https://www.reconstructinc.com/"
        },
        {
          name: "Sentry",
          img: "../assets/img/sponsors/sponsors2018/startup/sentry.png",
          webPage: "http://www.sentry.io"
        }
      ]
    };

    const tier1Sponsors = sponsorsList.tier1.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={12} lg={12} sm={6} md={6} className="Sponsors__centeredCard">
          <Panel className="Sponsors__card Sponsors__card--tier1">
            <a href={sponsor.webPage} target="_blank"> <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name} title={sponsor.name}/> </a>
          </Panel>{" "}
        </Col>
      );
    });

    const tier2Sponsors = sponsorsList.tier2.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={6} sm={6} md={6} className="Sponsors__centeredCard">
          <Panel className="Sponsors__card Sponsors__card--tier2">
            <a href={sponsor.webPage} target="_blank"> <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name} title={sponsor.name}/> </a>
          </Panel>{" "}
        </Col>
      );
    });

    const tier3Sponsors = sponsorsList.tier3.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={6} sm={3} md={3} className="Sponsors__centeredCard">
          <Panel className="Sponsors__card Sponsors__card--tier3">
            <a href={sponsor.webPage} target="_blank"> <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name} title={sponsor.name}/> </a>
          </Panel>
        </Col>
      );
    });

    return (
      <div className="Sponsors" id="Sponsors">
        <PageHeader className="Sponsors__header"> <h1>Sponsors</h1> </PageHeader>{" "}
        <div className="Sponsors__back">
          <Grid>
            <Row className="Sponsors__centerContent"> {tier1Sponsors} </Row>
            <Row className="Sponsors__centerContent"> {tier2Sponsors} </Row>
            <Row> {tier3Sponsors} </Row>
          </Grid>{" "}
        </div>
      </div>
    );
  }
}

export default Sponsors;
