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
                    	<img src="/img/Logo.png" alt="img1" className="logoImg"/>
                    {/*<img src="/img/iAssureIT/Advanced-Technologies-Training-Academy.png" alt="img1" className="logoImg"/>*/}
			      	</a>
			    </div>
			    
			    <div className="col-lg-10  col-md-10">
				    <div className="col-lg-3 col-md-5 pull-right ">
			      		<div className="col-lg-6 col-md-6">
                          	<a href="/">
                           		<div className="Hcmpbtn">Home</div>
                          	</a>
			      		</div>
			      		<div className="col-lg-6 col-md-6">
					      	<a href="/contactuspage">
					      		<div className="h2cmpbtn">Join Us</div>
					      	</a>
				        </div>
	                   
				    </div> 
	                 {/*  <a href="/"> 
	                   <div className="col-lg-4 ">
	                   <nav className="navbar marginZero customNavBar navbar-default">
                                <div className="container-fluid">
                                  <div className="navbar-header">
                                    <a className="navbar-brand webSiteNameOther colorWhite hidden-lg hidden-md col-lg-1 col-md-1 col-sm-1 col-xs-1" href="/">Wealthyvia</a>

                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navBar" aria-expanded="false" >
                                      <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                    </button>

                                  </div>

                                  <div className="collapse navbar-collapse" id="navBar">
                                    <ul className="nav navbar-nav navbar-right customUl width50">

                                     
                                      <li className="nav-item dropdown">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Courses 
                                          </a>                      
                                          <ul className="dropdown-menu customDropdown">
                                            <a href="/Course1" className="col-lg-12">Web Technologies</a>
                                            <a href="#"className="col-lg-12">Frontend Framework</a>
                                            <a href="#"className="col-lg-12">Backend Programming</a>
                                            <a href="#"className="col-lg-12">Mobile App Development</a>
                                        </ul>
                                      </li>                                      
                                    </ul>
                                  </div>
                                </div>
                              </nav>
                              </div>
                              </a>*/}
			    </div>
			</div>
			<div className="col-sm-12 col-xs-12 hidden-lg hidden-md">
				<div className="row">
				    <div className="navbar-header col-sm-8 col-xs-5">
				     	<a className="navbar-brand" href="/">{/*logowhite.png*/}
	                    	<img src="/img/logowhite.png" alt="img1" className="logoImg"/>
	                    {/*<img src="/img/iAssureIT/Advanced-Technologies-Training-Academy.png" alt="img1" className="logoImg"/>*/}
				      	</a>
				    </div>
				    <div className="col-sm-4 col-xs-7 pull-right">
					    <div className="row col-sm-5 col-xs-6 ">
					    	<a href="/">
					      		<div className="Hcmpbtnmobile">Home</div>
		                    </a>
		                </div> 
				        <div className="col-sm-5 col-xs-6">
					      	<a href="/contactuspage">
					      		<div className="h2cmpbtnmobile">Join Us</div>
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