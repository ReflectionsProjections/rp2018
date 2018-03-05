import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, PageHeader, Clearfix } from 'react-bootstrap'

import styles from './styles.scss'

class Speakers extends Component {

    constructor() {
        super()
    }

    render() {
        const speakerList = [
            // Keynotes
            {
                'name': 'Brian J. Fox',
                'desc': 'Computer programmer, entrepreneur, author, and free software advocate',
                'img': '../assets/img/keynotes/brian.jpg',
                'bio': 'Brian J. Fox is an American computer programmer, entrepreneur, author, and free software advocate. He was the original author of the GNU Bash shell, which he announced as a beta in June 1989. Fox also built the first interactive online banking software in the U.S. for Wells Fargo in 1995, and he created an open source election system in 2008.\n' +
                '\n' +
                'Brian got involved in computing in the early 1980s. He authored Terrapin Logo for the Apple //e and Apple //GS computers, and then began working with Richard Stallman (RMS) to help build the Free Software Foundation (FSF) and project GNU at MIT. While working with RMS, Brian authored Info and Makeinfo and contributed heavily to the TeXinfo documentation system. He also was the maintainer of Emacs, and contributed to both gcc and gdb. His "readline" and "history" libraries are widely used in a wide variety of applications.\n',
                'year': 2017
            },
            {
                'name': 'Chris Gladwin',
                'desc': 'Founder and Vice Chairman of CleverSafe',
                'img': '../assets/img/keynotes/chris.jpg',
                'bio': 'In 2004, Chris founded Cleversafe which became the largest and most strategic object storage vendor in the world (according to IDC.)  He raised $100M and then led the company to a $1.4B exit in 2015 when IBM acquired the company.  ' +
                'The technology team he created generated over 1,000 patents granted or filed, creating one of the ten most powerful patent portfolios in the world.  Prior to Cleversafe, Chris was the Foundering CEO of startups MusicNow and Cruise Technologies, and led ' + 
                'product strategy for Zenith Data Systems.  He started his career at Lockheed Martin as a database programmer, and holds an engineering degree from MIT.  Chris is now the CEO and Co-Founder of Ocient whose mission is to successfully provide the leading platform the world uses to analyze its largest datasets.',
                'year': 2017
            },
            {
                'name': 'Basil Alwan',
                'img': '../assets/img/keynotes/basil.jpg',
                'year': 2016
            },
            {
                'name': 'Jay “Saurik” freeman',
                'img': '../assets/img/keynotes/jay.jpg',
                'year': 2014
            },
            {
                'name': 'Peter Norvig',
                'img': '../assets/img/keynotes/peter.jpg',
                'year': 2013
            },
            {
                'name': 'Robin Walker',
                'img': '../assets/img/keynotes/robin.jpg',
                'year': 2013
            },
            {
                'name': 'Stefano Zacchiroli',
                'img': '../assets/img/keynotes/stefano.jpg',
                'year': 2012
            },
            {
                'name': 'Alex Ohanian',
                'img': '../assets/img/keynotes/alex.jpg',
                'year': 2009
            },
            {
                'name': 'Steve Wozniak',
                'img': '../assets/img/keynotes/steve.jpg',
                'year': 1995
            }

        ];

        const speakerView = speakerList.map( (speaker, idx) => {
            let hex="";
            switch(speaker.track ){
                case 'data': hex="#02B2CA";
                break;
                case 'hci': hex="#85C494"
                break;
                case 'security': hex="#EC7F48"
                break;
                case 'systems': hex="#E4222B"
                break;
                case 'keynote': hex="#9a6fb0"
                break;

            }
            var hexStr = "6px solid " + hex;
            return(
                <Col key={idx} xs={12} lg={4} sm={9} md={9}>
                    <Thumbnail onClick={(e) => this.handleClick(e, 'js-overlay-' + idx)} className="Speakers__card js-speakercard" src={speaker.img}>
                        <h3>{speaker.name}</h3>
                        <h3>{speaker.year}</h3>
                    </Thumbnail>
                </Col>
            )
        });

        return(
            <div className="Speakers" id="Speakers">
                <PageHeader className="Speakers__header">Past Keynote Speakers</PageHeader>
                <Grid>
                    <Row>
                        {speakerView}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Speakers
