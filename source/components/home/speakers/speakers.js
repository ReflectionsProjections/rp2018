import React, {Component} from 'react'
import {
    Grid,
    Row,
    Col,
    Thumbnail,
    PageHeader,
    Modal,
    Button
} from 'react-bootstrap'
import styles from './styles.scss'
import lodash from 'lodash'

class Speakers extends Component {

    constructor() {
        super()

        // Update when number of speakers changes.
        this.numSpeakers = 11;

        this.showModal = this
            .showModal
            .bind(this);
        this.hideModal = this
            .hideModal
            .bind(this);
        this.hideAllModals = this
            .hideAllModals
            .bind(this);

        this.visibilities = [];
        _.times(this.numSpeakers, () => {
            this
                .visibilities
                .push("hidden");
        });

        this.state = {
            visibility: this.visibilities
        };
    }

    showModal(idx) {
        this.visibilities[idx] = "visible";
        this.setState({visibility: this.visibilities});
    }

    hideModal(idx) {
        this.visibilities[idx] = "hidden";
        this.setState({visibility: this.visibilities});
    }

    hideAllModals() {
        for (let i = 0; i < this.numSpeakers; i++) {
            this.visibilities[i] = "hidden";
        }
        this.setState({visibility: this.visibilities});
    }

    componentDidMount() {
        let classContext = this;
        document.addEventListener('keydown', function (event) {
            const ESCAPE_KEY = 27;
            if (event.keyCode == ESCAPE_KEY) {
                classContext.hideAllModals();
            }
        });
    }

    render() {

        const speakerList = [
            // Keynotes
            {
                'name': 'Marianna Tessel',
                'img': '../assets/img/keynotes/marianna_tessel.jpg',
                'title': 'Chief Product Development Officer at Intuit',
                'externalLink': 'https://twitter.com/mtessel12',
                'track': 'keynote',
                'bio': 'Marianna Tessel is a Chief Product Development Officer at Intuit (and soon to be' +
                        ' Chief Technology Officer), where she oversees the development of QuickBooks, an' +
                        ' accounting software developed for small to medium-sized businesses. Previously,' +
                        ' she was the Senior Vice President of Engineering at Docker and Vice President o' +
                        'f Engineering at VMware, where she helped develop subsystems for the vSphere vir' +
                        'tualization platform.'
            }, {
                'name': 'Saad Ali',
                'img': '../assets/img/keynotes/saad.jpg',
                'title': 'Senior Software Engineer at Google',
                'externalLink': 'https://twitter.com/the_saad_ali',
                'bio': 'Saad Ali is a senior software engineer at Google and is currently working on the' +
                        ' Kubernetes project. He has led the development of the Kubernetes storage and vo' +
                        'lumes subsystem and maintains the Container Storage Interface. Before coming to ' +
                        'Google, Saad worked at Microsoft where he led the development of the Internet Me' +
                        'ssage Access protocol for Outlook.com.'
            }, {
                'name': 'Brian Hoffman',
                'img': '../assets/img/keynotes/brain_h.jpg',
                'title': 'CEO and Co-founder at OpenBazaar',
                'externalLink': 'https://twitter.com/brianchoffman',
                'bio': 'Brian Hoffman is the CEO and co-founder of OB1, a company focused on building so' +
                        'ftware for OpenBazaar, a decentralized peer to peer marketplace for global free ' +
                        'trade using Bitcoin. He spent over 10 years providing cybersecurity consulting s' +
                        'ervices with clients like US Department of Defense, classified agencies as well ' +
                        'as many Fortune 500 companies like Neiman Marcus, FedEx, Boeing and Hilton Hotel' +
                        's. He now runs one of the most well known decentralized application projects in ' +
                        'the space with OpenBazaar.'
            }, {
                'name': 'Forrest Iandola',
                'img': '../assets/img/keynotes/forrest.jpg',
                'title': 'CEO and Co-founder at Deepscale.ai',
                'externalLink': 'https://en.wikipedia.org/wiki/Forrest_Iandola',
                'bio': 'Forrest Iandola is the co-founder and CEO of DeepScale, which develops energy-ef' +
                        'ficient deep-learning technology for the automotive industry. Before founding De' +
                        'epscale, Forrest completed his doctorate studies at the University of California' +
                        ', Berkeley, where he researched the speed, memory usage, and energy-efficiency o' +
                        'f deep neural networks. In addition to publishing over twenty papers, Forrest al' +
                        'so helped develop SqueezeNet, a lightweight neural network architecture that is ' +
                        'now standard part of many machine learning frameworks. Prior to his time at Berk' +
                        'eley, Forrest was a Computer Science at the University of Illinois at Urbana Cha' +
                        'mpaign, where he received his Bachelor’s degree in 2012.'
            }, {
                'name': 'Li Li',
                'img': '../assets/img/keynotes/lili.jpg',
                'title': 'Principal Software Engineer Manager at Microsoft',
                'externalLink': 'https://www.linkedin.com/in/lilyfang',
                'bio': 'Li Li is a Principal Software Engineer Manager at the Microsoft Enterprise Open Source Group. She has been working at Microsoft for more than 17 years, and has released multiple products in both Windows and Linux successfully. Recently, she has led efforts to enable open source Mesos and DCOS as a unified orchestration platform for both Windows and Linux workloads on Azure. John Kordich, a Senior Software Engineer at Microsoft, will be assisting Li with the workshop. In this workshop, they will talk about Microsoft’s transformation of its technology and culture according to their own experiences. They will also present some cutting edge technology and have an interactive workshop that explores the Open Source development experience.'
            }, {
                'name': 'Siraj Raval',
                'img': '../assets/img/keynotes/siraj.jpg',
                'title': 'YouTuber - Accessible CS education',
                'externalLink': 'https://twitter.com/sirajraval',
                'bio': 'Siraj Raval is a data scientist, a bestselling author, and a CS Education Youtub' +
                        'er with over 440K subscribers. Raval is currently the director of The School of ' +
                        'AI, the largest active AI community on the web, where his mission is to encourag' +
                        'e and educate developers to build artificial intelligence. Siraj has also author' +
                        'ed a best selling book, “Decentralized Applications: Harnessing Bitcoin\'s Block' +
                        'chain Technology”. He has also published many articles on various topics like bl' +
                        'ockchain and artificial intelligence.'
            }, {
                'name': 'Jay Gambetta',
                'img': '../assets/img/keynotes/jay_g.jpg',
                'title': 'Quantum Computing Researcher at IBM',
                'externalLink': 'https://en.wikipedia.org/wiki/Jay_Gambetta',
                'bio': 'Jay Gambetta is co-leading a team at IBM working to construct a large-scale quan' +
                        'tum computer. He has done vast research on quantum systems and is a leader in th' +
                        'e field of quantum computing. In addition, he was a leader to create the “IBM Q ' +
                        'Experience” an online platform for quantum cloud computing. He was also appointe' +
                        'd as an IBM Fellow, which is the highest honor a scientist at IBM can achieve. I' +
                        'n addition, he is the associate editor of the Quantum Information journal.'
            }, {
                'name': 'Bo Li',
                'img': '../assets/img/keynotes/boli.jpeg',
                'title': 'Associate Professor at UIUC',
                'externalLink': 'http://www.crystal-boli.com/',
                'bio': 'Bo Li, previously at UC Berkeley, is an Associate Professor at UIUC doing research in optimizing real-world machine learning models. She has been working on improving their vulnerabilities, regarding issues such as efficient resource allocation and building robust, scalable models that can handle large amounts of data. Her talk will be covering her recent work in specifically, training generative adversarial networks against adversarial examples.'
            }, {
                'name': 'Romain Paulus',
                'img': '../assets/img/keynotes/romain.jpg',
                'title': 'Lead Research Scientist at Salesforce',
                'externalLink': 'https://www.linkedin.com/in/romainpaulus/?locale=en_US',
                'bio': 'Romain Paulus is the Chief ML Scientist at Salesforce and is well established in' +
                        ' the software and machine learning industry. Over the years, he has conducted re' +
                        'search focusing on natural language processing and has published numerous papers' +
                        ' in natural language processing and machine learning. Romain was also a founding' +
                        ' engineer of MetaMind, an application that helps users train their own text and ' +
                        'image machine learning models in a web application for business and data analyti' +
                        'cs. MetaMind was acquired by Salesforce in 2016.'
            }, {
                'name': 'Zachary Lipton',
                'img': '../assets/img/keynotes/zac.jpg',
                'title': 'ML Scientist at Amazon AI Labs, Assistant Professor CMU',
                'externalLink': 'http://zacklipton.com',
                'bio': 'Zack Lipton is an assistant professor in the Machine Learning Department at Carn' +
                        'egie Mellon University. He predominantly researches deep learning, especially re' +
                        'current neural networks, deep reinforcement learning, and generative models. His' +
                        ' work covers the application of these techniques to clinical health care. He is ' +
                        'also intrigued by the study of the societal impacts of machine learning.'
            }, {
                'name': 'Jonah Horowitz',
                'img': '../assets/img/keynotes/jonah.jpg',
                'title': 'Senior Site Reliability Engineer at Apple',
                'externalLink': 'https://jonahhorowitz.com/',
                'bio': 'Jonah Horowitz is a Site Reliability Manager at Apple, and has previously worked' +
                        ' in similar roles for Stripe, Netflix, and Quantcast. During his time with these' +
                        ' companies, he has implemented large scalable production infrastructures and ens' +
                        'ured their reliability. Through this, he maintained the performance of his compa' +
                        'nies products even under strenuous circumstances. Horowitz’s talk focuses on Sit' +
                        'e Reliability Engineering and role in ultra-scalable systems.'
            }, {
                'name': 'Josh Benaloh',
                'img': '../assets/img/keynotes/josh.jpg',
                'title': 'Senior Cryptographer at Microsoft Research',
                'externalLink': 'https://www.microsoft.com/en-us/research/people/benaloh/',
                'bio': 'Josh Benaloh is a Senior Cryptographer at Microsoft Research and is responsible ' +
                        'for introducing homomorphic encryption to the field of cryptography, which allow' +
                        's operations to be performed on encrypted data. He is also on the Board of Direc' +
                        'tors for the International Association for Cryptologic Research, and is part of ' +
                        'the Committee on the Future of Voting run by the National Academies of Science, ' +
                        'Engineering, and Medicine, where he has investigated the possibilities of verifi' +
                        'able internet voting.'
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
                <Col key={idx} xs={12} lg={4} sm={6} md={6}>
                    <Thumbnail
                        className={thumbnailClassName}
                        src={speaker.img}
                        onClick={() => this.showModal(idx)}>
                        <h3
                            style={{
                            color: "white"
                        }}>
                            {speaker.name}
                        </h3>
                        <h4
                            style={{
                            color: "white"
                        }}>
                            {speaker.title}
                        </h4>
                        <div className="icon-group">
                            <a href={externalLink} target="_blank" rel="noopener noreferrer">
                                <span
                                    className="glyphicon glyphicon-info-sign wiki-icon"
                                    style={{
                                    color: externalLinkButtonColor
                                }}/>
                            </a>
                        </div>
                    </Thumbnail>
                    {/* Each speaker has a className of static-modal speaker#, where # is the index. */}
                    <div
                        className={"static-modal"}
                        onKeyPress={() => this.hideModal(idx)}
                        style={{
                        visibility: this.state.visibility[idx]
                    }}>
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
                <PageHeader className="Speakers__header">
                    <h1>Speakers</h1>
                    <h3 className='coming__soon'>More Coming Soon!</h3>
                </PageHeader>
                <Grid
                    className="Speakers__back"
                    style={{
                    width: "100%"
                }}>
                    <Row>
                        {speakerView}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Speakers
