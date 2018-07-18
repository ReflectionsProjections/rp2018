import React, { Component } from "react";
import { Grid, Row, Col, Panel, PageHeader } from "react-bootstrap";
import styles from "./styles.scss";


class Sponsors extends Component {
  constructor() {
    super();
  }

  render() {
    const sponsorsList = {
      tier2: [
        {
          name: "Nvidia",
          img: "../assets/img/sponsors/jobfair/petabyte/nvidia.jpg"
        },
        {
          name: "RetailMeNot",
          img: "../assets/img/sponsors/jobfair/terabyte/retailmenot.svg"
        }
      ],

      tier3: [
        {
          name: "Microsoft",
          img: "../assets/img/sponsors/jobfair/gigabyte/microsoft.jpg"
        },
        {
          name: "Forcepoint",
          img: "../assets/img/sponsors/jobfair/gigabyte/forcepoint.jpg"
        },
        {
          name: "IMO",
          img: "../assets/img/sponsors/jobfair/gigabyte/imo.svg"
        },
        {
          name: "Northern Trust",
          img: "../assets/img/sponsors/jobfair/gigabyte/northerntrust.jpg"
        },
        {
          name: "Qualtrics",
          img: "../assets/img/sponsors/jobfair/gigabyte/qualtrics.jpg"
        },
        {
          name: "Bank of America",
          img: "../assets/img/sponsors/jobfair/gigabyte/bankofamerica.jpg"
        }
      ],

      tier4: [
        {
          name: "Facebook",
          img: "../assets/img/sponsors/jobfair/megabyte/facebook.jpg"
        },
        {
          name: "Google",
          img: "../assets/img/sponsors/jobfair/megabyte/google.jpg"
        },
        {
          name: "Indeed",
          img: "../assets/img/sponsors/jobfair/megabyte/indeed.jpg"
        },
        {
          name: "Pinterest",
          img: "../assets/img/sponsors/jobfair/megabyte/pinterest.jpg"
        },
        {
          name: "CME Group",
          img: "../assets/img/sponsors/jobfair/megabyte/cmegroup.png"
        },
        {
          name: "Uber",
          img: "../assets/img/sponsors/jobfair/megabyte/uber.jpg"
        },
        {
          name: "Yelp",
          img: "../assets/img/sponsors/jobfair/megabyte/yelp.jpg"
        },
        {
          name: "Amobee",
          img: "../assets/img/sponsors/jobfair/megabyte/amobee.jpg"
        },
        {
          name: "Riverbed",
          img: "../assets/img/sponsors/jobfair/megabyte/riverbed.jpg"
        },
        {
          name: "Gartner",
          img: "../assets/img/sponsors/jobfair/megabyte/gartner.jpg"
        },
        {
          name: "NccGroup",
          img: "../assets/img/sponsors/jobfair/megabyte/nccgroup.jpg"
        },
        {
          name: "Navtalent",
          img: "../assets/img/sponsors/jobfair/megabyte/navtalent.jpg"
        },
        {
          name: "Sandia",
          img: "../assets/img/sponsors/jobfair/megabyte/sandia.jpg"
        },
        {
          name: "Morningstar",
          img: "../assets/img/sponsors/jobfair/megabyte/morningstar.jpg"
        },

        // startups

        {
          name: "a16z",
          img: "../assets/img/sponsors/startups/andreessenhorowitz.jpg"
        },
        {
          name: "Buildout",
          img: "../assets/img/sponsors/startups/buildout.jpg"
        },
        {
          name: "Cloudflare",
          img: "../assets/img/sponsors/startups/cloudflare.svg"
        },
        {
          name: "Curalate",
          img: "../assets/img/sponsors/startups/curalate.svg"
        },
        {
          name: "Granular",
          img: "../assets/img/sponsors/startups/granular.jpg"
        },
        {
          name: "Liferay",
          img: "../assets/img/sponsors/startups/liferay.jpg"
        },
        {
          name: "Mixmax",
          img: "../assets/img/sponsors/startups/mixmax.jpg"
        },
        {
          name: "Ocient",
          img: "../assets/img/sponsors/startups/ocient.jpg"
        },
        {
          name: "Rubrik",
          img: "../assets/img/sponsors/startups/rubrik.jpg"
        },
        {
          name: "Samsara",
          img: "../assets/img/sponsors/startups/samsara.jpg"
        },
        {
          name: "Sprout Social",
          img: "../assets/img/sponsors/startups/sproutsocial.jpg"
        },
        {
          name: "Jane Street",
          img: "../assets/img/sponsors/jobfair/megabyte/janestreet.jpg"
        },
        {
          name: "Capital One",
          img: "../assets/img/sponsors/jobfair/megabyte/capitalone.png"
        },
        {
          name: "Huawei",
          img: "../assets/img/sponsors/jobfair/megabyte/huawei.jpg"
        },
        {
          name: "West Monroe",
          img: "../assets/img/sponsors/jobfair/megabyte/westmonroe.jpg"
        },
        {
          name: "Think BIG",
          img: "../assets/img/sponsors/startups/thinkbig.jpg"
        }
      ]
    };

    const tier2Sponsors = sponsorsList.tier2.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={12} lg={6} sm={6} md={6}>
          <Panel className="Sponsors__card Sponsors__card--tier3">
            <img
              className="Sponsors__cardLogo"
              src={sponsor.img}
              alt={sponsor.name}
            />{" "}
          </Panel>{" "}
        </Col>
      );
    });

    const tier3Sponsors = sponsorsList.tier3.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={6} sm={4} md={4}>
          <Panel className="Sponsors__card Sponsors__card--tier3">
            <img
              className="Sponsors__cardLogo"
              src={sponsor.img}
              alt={sponsor.name}
            />{" "}
          </Panel>{" "}
        </Col>
      );
    });

    const tier4Sponsors = sponsorsList.tier4.map((sponsor, idx) => {
      return (
        <Col key={idx} xs={6} sm={3} md={3}>
          <Panel className="Sponsors__card Sponsors__card--tier4">
            <img
              className="Sponsors__cardLogo"
              src={sponsor.img}
              alt={sponsor.name}
            />{" "}
          </Panel>{" "}
        </Col>
      );
    });

    return (
      <div className="Sponsors" id="Sponsors">
        <PageHeader className="Sponsors__header"> <h2>R|P 2017 Sponsors</h2> </PageHeader>{" "}
        <Grid>
          <Row> {tier2Sponsors} </Row>{" "}
          <Row className="Sponsors_centerContent"> {tier3Sponsors} </Row>{" "}
          <Row> {tier4Sponsors} </Row>{" "}
        </Grid>{" "}
      </div>
    );
  }
}

export default Sponsors;
