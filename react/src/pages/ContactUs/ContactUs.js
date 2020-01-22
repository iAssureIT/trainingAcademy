import React from 'react';

import ContactUsBanner      	from "../../blocks/ContactUsBanner/ContactUsBanner.js";
import ConFormWithAddress      	from "../../blocks/ConFormWithAddress/ConFormWithAddress.js";
import AddressOnGoogleMap      	from "../../blocks/AddressOnGoogleMap/AddressOnGoogleMap.js";
// import AddressCUspage      		from "../../blocks/AddressCUspage/AddressCUspage.js";
import ContactUsForm      		from "../../blocks/ContactUsForm/ContactUsForm.js";
import Footer      			    from "../../blocks/Footer/Footer.js";
import Header      			    from "../../blocks/Header/Header.js";


				



export default class ContactUs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid" style={{padding:"0px"}}>
				<Header/>
				<ContactUsBanner/>
				{/*<AddressCUspage/>*/}
				<ConFormWithAddress/>
				{/*<ContactUsForm/>*/}
				<AddressOnGoogleMap/>
			
				<Footer/>

			</div>
		);
	}
}
