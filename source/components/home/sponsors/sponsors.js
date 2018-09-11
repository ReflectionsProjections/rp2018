import React, {Component} from "react";
import {Grid, Row, Col, Panel, PageHeader} from "react-bootstrap";
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
                    img: "../assets/img/sponsors/sponsors2018/jobfair/petabyte/microsoft_full.png",
                    webPage: "https://microsoft.com/"
                }
            ],

            tier2: [
                {
                    name: "IMO Intelligent Medical Objects",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/terabyte/imo_full.png",
                    webPage: "https://www.e-imo.com/"
                }, {
                    name: "Zillow Group",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/terabyte/zillow_group_full.png",
                    webPage: "https://www.zillowgroup.com/"
                }
            ],

            tier3: [
                {
                    name: "Cloudflare",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/cf_placeholder.png",
                    webPage: "https://www.cloudflare.com/"
                }, {
                    name: "Northern Trust",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/northern_trust.jpg",
                    webPage: "https://www.northerntrust.com/"
                }, {
                    name: "Salesforce",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/sf_placeholder.png",
                    webPage: "https://www.salesforce.com/"
                }, {
                    name: "Braintree",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/braintree.png",
                    webPage: "http://braintree.com/"
                }, {
                    name: "Qualtrics",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/qualtrics_full.png",
                    webPage: "https://www.qualtrics.com/"
                }, {
                    name: "Quora",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/quora_full.png",
                    webPage: "https://www.quora.com/"
                }, {
                    name: "Lyft",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/lyft_full.png",
                    webPage: "https://www.lyft.com/"
                }, {
                    name: "Amazon",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/gigabyte/amazon_full.png",
                    webPage: "https://www.amazon.com/"
                }
            ],

            tier4: [
                {
                    name: "Google",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/google.png",
                    webPage: "https://google.com"
                }, {
                    name: "Amobee",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/amobee_full.jpeg",
                    webPage: "https://www.amobee.com/"
                }, {
                    name: "Sandia National Laboratories",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/sandia.png",
                    webPage: "http://www.sandia.gov/"
                }, {
                    name: "PricewaterhouseCoopers",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/pwc.jpg",
                    webPage: "https://www.pwc.com/"
                }, {
                    name: "Granular",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/granular.svg",
                    webPage: "https://granular.ag/"
                }, {
                    name: "MongoDB",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/mongodb_full.png",
                    webPage: "https://www.mongodb.com/"
                }, {
                    name: "Uber",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/uber_full.png",
                    webPage: "https://www.uber.com/"
                }, {
                    name: "Rubrik",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/rubrik.png",
                    webPage: "https://rubrik.com/"
                }, {
                    name: "Riverbed",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/riverbed_full.png",
                    webPage: "https://www.riverbed.com/"
                }, {
                    name: "Facebook",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/facebook_full.jpg",
                    webPage: "https://www.facebook.com/"
                }, {
                    name: "Pinterest",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/pinterest_full.jpg",
                    webPage: "https://www.pinterest.com/"
                }, {
                    name: "Nav Talent",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/nav_talent_full.png",
                    webPage: "https://navtalent.com/"
                }, {
                    name: "Bank of America",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/boa_full.jpg",
                    webPage: "https://bankofamerica.com/"
                }, {
                    name: "Bungie",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/bungie.png",
                    webPage: "https://bungie.net/"
                }, {
                    name: "West Monroe Partners",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/wmp.png",
                    webPage: "https://westmonroepartners.com/"
                }, {
                    name: "Esri",
                    img: "../assets/img/sponsors/sponsors2018/jobfair/megabyte/esri_full.PNG",
                    webPage: "https://esri.com/"
                },

                // Startups

                {
                    name: "DeepScale",
                    img: "../assets/img/sponsors/sponsors2018/startup/ds_placeholder.png",
                    webPage: "http://deepscale.ai/"
                }, {
                    name: "Flexport",
                    img: "../assets/img/sponsors/sponsors2018/startup/fp_placeholder.png",
                    webPage: "https://www.flexport.com/"
                }, {
                    name: "Ocient",
                    img: "../assets/img/sponsors/sponsors2018/startup/ocient_full.png",
                    webPage: "http://www.ocient.com/"
                }, {
                    name: "Polsky Center",
                    img: "../assets/img/sponsors/sponsors2018/startup/pc_placeholder.png",
                    webPage: "https://polsky.uchicago.edu/"
                }, {
                    name: "Reconstruct",
                    img: "../assets/img/sponsors/sponsors2018/startup/reconstruct_full.jpg",
                    webPage: "https://www.reconstructinc.com/"
                }, {
                    name: "Sentry",
                    img: "../assets/img/sponsors/sponsors2018/startup/sentry.png",
                    webPage: "http://www.sentry.io"
                }, {
                    name: "Sift Science",
                    img: "../assets/img/sponsors/sponsors2018/startup/sift_science_full.png",
                    webPage: "https://siftscience.com/"
                }, {
                    name: "Samsara",
                    img: "../assets/img/sponsors/sponsors2018/startup/samsara_full.png",
                    webPage: "http://www.samsara.com"
                }, {
                    name: "Cruise Automation",
                    img: "../assets/img/sponsors/sponsors2018/startup/cruise.png",
                    webPage: "http://www.getcruise.com"
                }, {
                    name: "Confluent",
                    img: "../assets/img/sponsors/sponsors2018/startup/confluent.png",
                    webPage: "http://www.confluent.io"
                }
            ]
        };
        // According to the Boostrap grid template, there are five tiers / types of
        // columns xs - extra small, sm - small, md - medium, lg - large, xl - extra
        // large For a given row, the sum of each entry's column weight should sum to 12
        // units Note that this is not the sum of values in each tier for a single item
        // Moreover, the weight can be adjusted based on device viewport using the
        // above five tiers Since we have only one tier 1 sponsor, it should be given
        // full weight, that is 12 on every viewport Similarly, since we have two tier 2
        // sponsor, they should each have half the total weight, that is 6 each Use this
        // method to determine the weight for each tier, and adjust based on viewport
        const tier1Sponsors = sponsorsList
            .tier1
            .map((sponsor, idx) => {
                return (
                    <Col
                        key={idx}
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="Sponsors__centeredCard">
                        <Panel className="Sponsors__card Sponsors__card--tier1">
                            <a href={sponsor.webPage} target="_blank"><img
                                className="Sponsors__cardLogo"
                                src={sponsor.img}
                                alt={sponsor.name}
                                title={sponsor.name}/></a>
                        </Panel>{" "}
                    </Col>
                );
            });

        const tier2Sponsors = sponsorsList
            .tier2
            .map((sponsor, idx) => {
                return (
                    <Col key={idx} xs={6} sm={6} md={6} lg={6} className="Sponsors__centeredCard">
                        <Panel className="Sponsors__card Sponsors__card--tier2">
                            <a href={sponsor.webPage} target="_blank"><img
                                className="Sponsors__cardLogo"
                                src={sponsor.img}
                                alt={sponsor.name}
                                title={sponsor.name}/></a>
                        </Panel>{" "}
                    </Col>
                );
            });

        const tier3Sponsors = sponsorsList
            .tier3
            .map((sponsor, idx) => {
                return (
                    <Col key={idx} xs={6} sm={4} md={3} lg={4} className="Sponsors__centeredCard">
                        <Panel className="Sponsors__card Sponsors__card--tier3">
                            <a href={sponsor.webPage} target="_blank"><img
                                className="Sponsors__cardLogo"
                                src={sponsor.img}
                                alt={sponsor.name}
                                title={sponsor.name}/></a>
                        </Panel>{" "}
                    </Col>
                );
            });

        const tier4Sponsors = sponsorsList
            .tier4
            .map((sponsor, idx) => {
                return (
                    <Col key={idx} xs={4} sm={3} md={3} className="Sponsors__centeredCard">
                        <Panel className="Sponsors__card Sponsors__card--tier4">
                            <a href={sponsor.webPage} target="_blank"><img
                                className="Sponsors__cardLogo"
                                src={sponsor.img}
                                alt={sponsor.name}
                                title={sponsor.name}/></a>
                        </Panel>
                    </Col>
                );
            });

        return (
            <div className="Sponsors" id="Sponsors">
                <PageHeader className="Sponsors__header">
                    <h1>Sponsors</h1>
                </PageHeader>{" "}
                <div className="Sponsors__back">
                    <Grid>
                        <Row className="Sponsors__centerContent tier1">
                            {tier1Sponsors}
                        </Row>
                        <Row className="Sponsors__centerContent tier2">
                            {tier2Sponsors}
                        </Row>
                        <Row className="Sponsors__centerContent tier3">
                            {tier3Sponsors}
                        </Row>
                        <Row className="Sponsors__centerContent tier4">
                            {tier4Sponsors}
                        </Row>

                    </Grid>{" "}
                </div>
            </div>
        );
    }
}

export default Sponsors;
