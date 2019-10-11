import React from 'react';
import './Header.css';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="headerWall">
			  <div className="col-lg-12 col-md-12 hidden-xs hidden-sm">
			    <div className="navbar-header col-lg-2">
			     <a className="navbar-brand" href="/">{/*logowhite.png*/}
                    <img src="/img/logowhite.png" alt="img1" className="logoImg"/>
                    {/*<img src="/img/iAssureIT/Advanced-Technologies-Training-Academy.png" alt="img1" className="logoImg"/>*/}
			      </a>
			    </div>
			    <div className="col-lg-10">
				    <div className="pull-right">
				    	<a href="/">
				      		<div className="col-lg-4 hombtn">Home</div>
	                    </a>
				        <div className="col-lg-2">
					      	<a href="/contactuspage">
					      		<div className="h1cmpbtn">Join Us</div>
					      	</a>
				        </div>
				    </div>  
			    </div>
			  </div>

			  <div className="col-sm-12 col-xs-12 hidden-lg hidden-md">
			    <div className="navbar-header col-sm-6 col-xs-6">
			     	<a className="navbar-brand" href="/">{/*logowhite.png*/}
                    	<img src="/img/logowhite.png" alt="img1" className="logoImg"/>
                    {/*<img src="/img/iAssureIT/Advanced-Technologies-Training-Academy.png" alt="img1" className="logoImg"/>*/}
			      	</a>
			    </div>
			    <div className="col-sm-6 col-xs-6">
				    <div className="">
				    	<a href="/">
				      		<div className="col-sm-4 col-xs-4 hombtnmob">Home</div>
	                    </a>
				        <div className="col-sm-8 col-xs-8">
					      	<a href="/contactuspage">
					      		<div className="hombtnmob">Join Us</div>
					      	</a>
				        </div>
				    </div>  
			    </div>
			  </div>
			</div>
			
		);
	}
}

/*

			  <div class="container-fluid">
			    <div class="headerWall col-lg-12 col-md-12 col-sm-12 col-xs-12">
			      <a class="navbar-brand" href="/">
                    <img src="/img/iAssureIT/Advanced-Technologies-Training-Academy.png" alt="img1" className="logoImg"/>
			      </a>
			      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			      </div>
			    </div>
			   
			  </div>


*/