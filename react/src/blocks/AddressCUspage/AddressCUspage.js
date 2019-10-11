import React from 'react';
import './AddressCUspage.css';

export default class AddressCUspage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-lg-10 col-lg-offset-1 ContactAddressWrap" style={{padding:"0px"}}>
				<div className="col-lg-12">
					<div className="col-lg-4 cuAddbox1">

						<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 rightborder">
									<img src="/img/location.png" className="ml45" height="45px"/>
								
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
									<div className="Addheadingtxt"><b>Our Location</b> </div>
									<p className="text-center">#323, Amanora Chambers,Amanora Town Center East Block,
										Opposite Magarpatta City,Pune, India 411 028
									</p>

								</div>
						</div>
					</div>
					<div className="col-lg-4 cuAddbox1">
						<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 rightborder">
									<img src="/img/phn.png" className="ml45" height="45px"/>
								
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
									<div className="Addheadingtxt"><b>CONTACT US</b> </div>
									<p className="text-center">Mobile:
									+91 - 9923 393 733
									</p>
								</div>
						</div>
					
					</div>
					<div className="col-lg-4 cuAddbox1">
						<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
									<img src="/img/mail.png" className="ml45" height="45px"/>
								
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
									<div className="Addheadingtxt"><b>WRITE SOME WORDS</b> </div>
									<p className="text-center">Email: info@iassureit.com
									</p>

								</div>
						</div>
					
					</div>
		
				</div>
			</div>
		);
	}
}
