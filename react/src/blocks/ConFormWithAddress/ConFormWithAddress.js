import React from 'react';
import './ConFormWithAddress.css';

import ContactUsForm from '../ContactUsForm/ContactUsForm.js';

export default class ConFormWithAddress extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cfwa-Wrapper">
				<div className="ContactWrap">
	                <div className="padd50">
	                    <div className="col-md-12 col-lg-12">
	                        <div className="section-title">
	                            <h2 className="title">Contact Us</h2>
	                            <p>Expenses as material breeding insisted building to in. Continual so distrusts pronounce by
	                                unwilling listening. Thing do taste on we manor.
	                            </p>
	                        </div>
	                    </div>
	               		<div className="col-lg-12 col-md-12 formwrap">
	               			<div className="col-lg-4 lg4">
	               				<div className="col-lg-12 h133">
	               					<div className="row">
	               						<div className="col-lg-3">
	               							<div className="squre1">
	               							</div>
	               							<img src="/img/location.png" className="ml45" height="45px"/>
	               						</div>
	               						<div className="col-lg-9 m5">
	               							<div className="text-center"><b>Our Location</b> </div>
											<div className="text-center">#323, Amanora Chambers,Amanora Town Center East Block,
												,Pune,<br/> India 411 028.
											</div>
	               						</div>

	               					</div>

	               				</div>
	               				<div className="col-lg-12 h133">
	               					<div className="col-lg-3">
											<img src="/img/whatsapp1.png" className="ml45" height="45px"/>
	               							
	               						</div>
	               						<div className="col-lg-9 m13">
	               							<div className="text-center"><b>Whatsapp Message Only</b> </div>
											<p className="text-center">
											+91 - 9923 393 733
											</p>
	               						</div>
	               				</div>
	               				<div className="col-lg-12 h133">
	               					<div className="col-lg-3 ">
	               							<img src="/img/mail.png" className="ml45" height="45px"/>
	               						</div>
	               						<div className="col-lg-9 m13">
	               							<div className="text-center"><b>Write us Mail</b> </div>
											<p className="text-center"> info@iassureit.com
											</p>
	               						</div>
	               				</div>
	               			</div>
	               			<div className="col-lg-8 lg8">
	               				<div className="col-lg-12 h460 nopadding">
	               					<ContactUsForm/>

	               				</div>
	               			</div>
	                	
	                	</div>
	                </div>

            	</div>
				
			</div>
		);
	}
}
