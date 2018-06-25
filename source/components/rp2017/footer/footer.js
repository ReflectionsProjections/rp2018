import React, { Component } from 'react'
import { PageHeader, Grid, Row, Media, Glyphicon } from 'react-bootstrap'
import styles from './styles.scss'
const FA = require('react-fontawesome')
var Modal = require('react-modal');

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
							<a><FA name='phone'/> +1 (217) 333-5828 </a><br />
							<a href="mailto:conference-chair@acm.illinois.edu"><FA name='envelope'/> conference-chair@acm.illinois.edu </a> <br/>
							<a href="https://www.facebook.com/acmrp/" target="_blank" rel="noopener noreferrer"><FA name='facebook' /> ACM Reflections|Projections Conference </a> <br/>
							<a href="https://medium.com/reflections-projections" target="_blank" rel="noopener noreferrer"><FA name='medium' /> Reflections|Projections </a> <br/>
							<a href="https://twitter.com/uiuc_rp" target="_blank" rel="noopener noreferrer"><FA name='twitter'/> @uiuc_rp </a>
							<a href="https://www.reddit.com/user/uiuc_rp" target="_blank" rel="noopener noreferrer"><FA name='reddit' /> uiuc_rp </a><br/>
							<a href="https://www.instagram.com/uiuc_rp/" target="_blank" rel="noopener noreferrer"><FA name='instagram' /> @uiuc_rp </a>
							<a id="snapshot"><FA name='snapchat-ghost' /> uiuc_rp <img className="tooltiptext" src="../assets/img/snapcode.png" /></a><br/>
						</p>
					</Media.Body>
				</Media>

			</div>
		)
	}
}

export default Footer;
