import React from 'react';
import "./AddressOnGoogleMap.css";
import $ from "jquery";

export default class AddressOnGoogleMap extends React.Component {


	constructor(props) {
		super(props);
	}
	componentDidMount(){

		  $("#mapouter").show();
		  $("#mapouterxs").show();
		  

	}


	render() {
		return (
			<div className="gmapwrapper">
				<div class="demogmap_canvas  hidden-xs hidden-sm">
					
					{/*<div class="mapcontainer" id="mapcontainer">
					  <img src="/images/demomap.png" alt="Avatar" class="image" style={{width:"100%"}}/>
					  <div class="middle">
					    <div class="text">Click here to view Map</div>
					    
					  </div>
					</div>*/}
					<div class="mapouter" id="mapouter">
						<div class="gmap_canvas">
							<iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=iAssureIT%20hadapsar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
							</iframe>
							
						</div>
					</div>
					
				</div>
			{/*mobile view*/}
				<div className="demogmap_canvasxs  hidden-lg hidden-md">
					
					
					<div className="mapouterxs" id="mapouterxs">
						<div className="gmap_canvas">
							<iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=iAssureIT%20hadapsar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
							</iframe>
							
						</div>
					</div>
					
				</div>
				
				
			</div>
		);
	}
}

