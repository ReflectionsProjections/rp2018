import React, { Component } from 'react'
import { PageHeader, Grid, Row, Media, Glyphicon } from 'react-bootstrap'

import styles from './styles.scss'
const FA = require('react-fontawesome')

var Modal = require('react-modal');

// var appElement = document.getElementById('snapchatModal');

// Modal.setAppElement(appElement);

class Footer extends Component {

	constructor() {
		super()
		this.state = {
			showModal: false
		};
		
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}
	handleOpenModal () {
		this.setState({ showModal: true });
	}
	
	handleCloseModal () {
		this.setState({ showModal: false });
	}

	render() {
		var logoStyle = {
			width: "120px", 
			height: "120px",
			margin: "-10px 0 0 0"
		};
		return(
			<div className="Footer container" id="Footer">
				<Media>
					<Media.Left>
						<img style={logoStyle} src="../assets/svg/acm_logo_50.svg" alt="Image"/>
					</Media.Left>
					<Media.Body>
						<p className="Footer__contact">
							<FA name='phone' /> +1 (217) 333-5828 <br />
							<a href="mailto:conference-chair@acm.illinois.edu"><FA name='envelope'/> conference-chair@acm.illinois.edu</a> <br/>
							<a href="https://twitter.com/acmrp2017"><FA name='twitter'/> @acmrp2018</a> <br/>
							<FA name='snapchat-ghost' /> officialrp2018<br/>
						</p>
					</Media.Body>
				</Media>

			</div>
		)
	}
}

export default Footer;
