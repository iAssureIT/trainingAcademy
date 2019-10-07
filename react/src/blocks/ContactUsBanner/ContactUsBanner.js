import React from 'react';
import './ContactUsBanner.css';

export default class ContactUsBanner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid ContactUsBannerWrap" style={{padding:"0px"}}>
				<div className="container-fluid ContactUsBannerBox" style={{padding:"0px"}}>
					<div className="cusbannertxt">Contact us
					</div>
				
				</div>
			</div>
		);
	}
}
