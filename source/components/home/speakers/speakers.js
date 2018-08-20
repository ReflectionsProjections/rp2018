import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, PageHeader, Modal, Button } from 'react-bootstrap'
import styles from './styles.scss'
import lodash from 'lodash'


class Speakers extends Component {

    constructor() {
        super()
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        // Update when number of speakers changes.
        const numSpeakers = 11;
        this.visibilities = [];
        _.times(numSpeakers, () => {
            this.visibilities.push("hidden");
        });

        this.state = {
            visibility: this.visibilities
        };
    }

    showModal(idx) {
        this.visibilities[idx] = "visible";
        this.setState({
            visibility: this.visibilities
        });
    }

    hideModal(idx) {
        this.visibilities[idx] = "hidden";
        this.setState({
            visibility: this.visibilities
        });
    }

    render() {

        const speakerList = [
            // Keynotes
            {
                'name': 'Marianna Tessel',
                'img': '../assets/img/keynotes/marianna.jpeg',
                'title': 'Chief Product Development Officer at Intuit',
                'externalLink': 'https://twitter.com/mtessel12',
                'track': 'keynote',
                'bio': ''
            },
            {
                'name': 'Saad Ali',
                'img': '../assets/img/keynotes/saad.jpg',
                'title': 'Senior Software Engineer at Google',
                'externalLink': 'https://twitter.com/the_saad_ali',
                'bio': 'Saad Ali is a senior software engineer at Google and is currently working on the Kubernetes project. He has led the development of the Kubernetes storage and volumes subsystem and maintains the Container Storage Interface. Before coming to Google, Saad worked at Microsoft where he led the development of the Internet Message Access protocol for Outlook.com.'
            },
            {
                'name': 'Brian Hoffman',
                'img': '../assets/img/keynotes/brain_h.jpg',
                'title': 'CEO and Co-founder at OpenBazaar',
                'externalLink': 'https://twitter.com/brianchoffman',
                'bio': 'Brian Hoffman is the CEO and co-founder of OB1, a company focused on building software for OpenBazaar, a decentralized peer to peer marketplace for global free trade using Bitcoin. He spent over 10 years providing cybersecurity consulting services with clients like US Department of Defense, classified agencies as well as many Fortune 500 companies like Neiman Marcus, FedEx, Boeing and Hilton Hotels. He now runs one of the most well known decentralized application projects in the space with OpenBazaar.'
            },
            {
                'name': 'Forrest Iandola',
                'img': '../assets/img/keynotes/forrest.jpg',
                'title': 'CEO and Co-founder at Deepscale.ai',
                'externalLink': 'https://en.wikipedia.org/wiki/Forrest_Iandola',
                'bio': 'Forrest Iandola is the co-founder and CEO of DeepScale, which develops energy-efficient deep-learning technology for the automotive industry. Before founding Deepscale, Forrest completed his doctorate studies at the University of California, Berkeley, where he researched the speed, memory usage, and energy-efficiency of deep neural networks. In addition to publishing over twenty papers, Forrest also helped develop SqueezeNet, a lightweight neural network architecture that is now standard part of many machine learning frameworks. Prior to his time at Berkeley, Forrest was a Computer Science at the University of Illinois at Urbana Champaign, where he received his Bachelor’s degree in 2012.'
            },
            {
                'name': 'Siraj Raval',
                'img': '../assets/img/keynotes/siraj.jpg',
                'title': 'YouTuber - Accessible CS education',
                'externalLink': 'https://twitter.com/sirajraval',
                'bio': 'Siraj Raval is a data scientist, Youtube star with close to 390K subscribers, and a bestselling author. Raval is currently the director of The School of AI, the largest active AI community on the web, where his mission is to encourage and educate developers to build artificial intelligence. Siraj has also authored a best selling book, “Decentralized Applications: Harnessing Bitcoin\'s Blockchain Technology”. He has also published many articles on various topics like blockchain and artificial intelligence.'
            },
            {
                'name': 'Jay Gambetta',
                'img': '../assets/img/keynotes/jay_g.jpg',
                'title': 'Quantum Computing Researcher at IBM',
                'externalLink': 'https://en.wikipedia.org/wiki/Jay_Gambetta',
                'bio': 'Jay Gambetta is co-leading a team at IBM working to construct a large-scale quantum computer. He has done vast research on quantum systems and is a leader in the field of quantum computing. In addition, he was a leader to create the “IBM Q Experience” an online platform for quantum cloud computing. He was also appointed as an IBM Fellow, which is the highest honor a scientist at IBM can achieve. In addition, he is the associate editor of the Quantum Information journal.'
            },
            {
                'name': 'Simon Adler',
                'img': '../assets/img/keynotes/simon.jpg',
                'title': 'Producer at Radiolab',
                'externalLink': 'https://www.wnycstudios.org/people/simon-adler/',
                'bio': 'Simon Adler is a producer at Radiolab. Before that, he was a Fellow at This American Life among other production-related roles. He graduated from the from University of Oregon with a triple major in Spanish, Psychology, and International Studies. He has recently worked on producing a myriad of interesting pieces on Radiolab, one of which reports on technology that could be used to rewrite the future of fake news.'
            },
            {
                'name': 'Romain Paulus',
                'img': '../assets/img/keynotes/romain.jpg',
                'title': 'Lead Research Scientist at Salesforce',
                'externalLink': 'https://www.linkedin.com/in/romainpaulus/?locale=en_US',
                'bio': 'Romain Paulus is the Chief ML Scientist at Salesforce and is well established in the software and machine learning industry. Over the years, he has conducted research focusing on natural language processing and has published numerous papers in natural language processing and machine learning. Romain was also a founding engineer of MetaMind, an application that helps users train their own text and image machine learning models in a web application for business and data analytics. MetaMind was acquired by Salesforce in 2016.'
            },
            {
                'name': 'Zachary Lipton',
                'img': '../assets/img/keynotes/zac.jpg',
                'title': 'ML Scientist at Amazon AI Labs, Assistant Professor CMU',
                'externalLink': 'http://zacklipton.com',
                'bio': 'Zack Lipton is an assistant professor in the Machine Learning Department at Carnegie Mellon University. He predominantly researches deep learning, especially recurrent neural networks, deep reinforcement learning, and generative models. His work covers the application of these techniques to clinical health care. He is also intrigued by the study of the societal impacts of machine learning.'
            },
            {
                'name': 'Jonah Horowitz',
                'img': '../assets/img/keynotes/jonah.jpg',
                'title': 'Senior Site Reliability Engineer at Apple',
                'externalLink': 'https://jonahhorowitz.com/',
                'bio': ''
            },
            {
                'name': 'Josh Benaloh',
                'img': '../assets/img/keynotes/josh.jpg',
                'title': 'Senior Cryptographer at Microsoft Research',
                'externalLink': 'https://www.microsoft.com/en-us/research/people/benaloh/',
                'bio': ''
            }
        ];


        this.handleClick = (evt, url, id) => {
            if (url != null && url != undefined) {
                window.open(url, '_blank');
            }
        };

        const speakerView = speakerList.map((speaker, idx) => {
            let externalLink = speaker.externalLink;
            let externalLinkButtonColor = "#c9e88f"
            let thumbnailClassName = "Speakers__card js-speakercard";
            return (
                <Col key={idx} xs={12} lg={4} sm={6} md={6} >
                    <Thumbnail className={thumbnailClassName} src={speaker.img} onClick={() => this.showModal(idx)}>
                        <h3 style={{ color: "white" }} > {speaker.name} </h3>
                        <h4 style={{ color: "white" }} > {speaker.title} </h4>
                        <div className="icon-group">
                            <a href={externalLink} target="_blank" rel="noopener noreferrer">
                                <span className="glyphicon glyphicon-info-sign" id="wiki-icon" style={{ color: externalLinkButtonColor }} />
                            </a>
                        </div>
                    </Thumbnail>
                    {/* Each speaker has a className of static-modal speaker#, where # is the index. */}
                    <div className={"static-modal"} onKeyPress={() => this.hideModal(idx)} style={{ visibility: this.state.visibility[idx] }}>
                        <Modal.Dialog>
                            <Modal.Header>
                                <section>
                                    <h1 className="speakerBioName">{speaker.name}</h1>
                                    <h2 className="speakerBioTitle">{speaker.title}</h2>
                                </section>
                            </Modal.Header>

                            <Modal.Body className="speakerBioBody">
                                {speaker.bio}
                            </Modal.Body>

                            <Modal.Footer>
                                <Button bsStyle="primary" onClick={() => this.hideModal(idx)}>Close</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </Col>
            )
        });

        return (
            <div className="Speakers" id="Speakers">
                <PageHeader className="Speakers__header" >
                    <h1>Speakers</h1>
                    <h3 className='coming__soon'>More Coming Soon!</h3>
                </PageHeader>
                <Grid className="Speakers__back" style={{ width: "100%" }}>
                    <Row>
                        {speakerView}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Speakers
