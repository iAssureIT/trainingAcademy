import React from 'react';

import './Course1.css';
import Syllabus from '../Syllabus/Syllabus.js';

export default class Course1 extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="headerWall">
			  <div className="col-lg-12 col-md-12 coursehead hidden-xs hidden-sm">
			    <div className="navbar-header col-lg-2">
			     <a className="navbar-brand" href="/">{/*logowhite.png*/}
                    <img src="/img/Logo.png" alt="img1" className="logoImg"/>
                    {/*<img src="/img/iAssureIT/Advanced-Technologies-Training-Academy.png" alt="img1" className="logoImg"/>*/}
			      </a>
			    </div>
			    
			    <div className="col-lg-10">
				    <div className="">
				    	<a href="/">
				      		<div className="col-lg-4 col-lg-offset-4 hombtn">Home
                              
				      		</div>
	                    </a>
	                   <a href="/"> 
	                   <div className="col-lg-4 ">
	                   <nav className="navbar marginZero customNavBar navbar-default">
                                <div className="container-fluid">
                                  <div className="navbar-header">
                                    <a className="navbar-brand webSiteNameOther colorWhite hidden-lg hidden-md col-lg-1 col-md-1 col-sm-1 col-xs-1" href="/"></a>

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
                                            <b>Courses</b> 
                                          </a>                      
                                          <ul className="dropdown-menu customDropdown">
                                            <a href="/Course1" className="col-lg-12">Web Technologies</a>
                                            <a href="#"className="col-lg-12">Frontend Framework</a>
                                            <a href="#"className="col-lg-12">Backend Programming</a>
                                            <a href="#"className="col-lg-12">Mobile App Development</a>
                                              {/* <a href="https://www.arthavruddhi.com/blog" target="_blank">Arthavrudhhi Blogs</a>
                                               <a href="">Communique</a>*/}
                                          
                                        </ul>
                                      </li>                                      
                                    </ul>    
                                  </div>
                                </div>
                              </nav>
                              </div>
                              </a>
					          <div className="col-lg-2 pull-right">
						      	<a href="/contactuspage">
						      		<div className="h1cmpbtn">Join Us</div>
						      	</a>
					         </div>
				    </div>  
			    </div>
			  </div>
			  <div className="col-lg-12 col-md-12 banner NOpadding">
                <img src="/img/coursebackimg.jpg" alt="img1" className="courseimg"/>
                <div>
                	<h1 className="bannerimgtxt">FOR THOSE <br/> WHO LOVE DESIGNING</h1>
                	<div className="col-lg-offset-1 col-lg-8 divideline">
                	</div>
                	<div className="col-lg-4 bannertext"><h5 className="bannertext1">Become Expert</h5>
                	</div>
                	<div>
                	 <button className="applybtn">Apply Now</button>	
                	</div>
                	<div className="col-lg-offset-1 col-lg-10 floatingDiv">
                	 <div className="col-lg-4 innefloatrDiv">
                	  <span className="innerDivTxt">2000+</span><br/>
                	  <span className="subtext">Students Empowered</span>
                	 </div>
                	 <div className="col-lg-5 innefloatrDiv">
                	  <span className="innerDivTxt">Advanced syllabus</span><br/>
                	  <span className="subtext">Matching industry requirements</span>
                	 </div>
                	 <div className="col-lg-3 innefloatrDiv">
                	  <span className="innerDivTxt">Start Date</span><br/>
                	  <span className="subtext">19 November 2019</span>
                	 </div>
                	</div>
                </div>
			  </div>
			  <div className="col-lg-12">
			   <h2 className="courseh2text">Program Overview</h2>
			   <h3 className="courseh2text1">Key Highlights</h3>
			   <div className="col-lg-12 col-md-12">
			    <div className=" col-lg-6 keyDiv">
			     <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
			     <span className="keytext">Duration - 6 Weeks</span>
			    </div>
			    <div className=" col-lg-6 keyDiv1">
			     <i class="fa fa-font-awesome" aria-hidden="true"></i>
			     <span className="keytext">Develop world's greatest quality websites</span>
			    </div>
			   </div>
			   <div className="col-lg-12 col-md-12 takedownDiv">
			    <div className=" col-lg-6 keyDiv2">
			     <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
			     <span className="keytext">Advanced Syllabus as per industry requirement</span>
			    </div>
			    <div className=" col-lg-6 keyDiv3">
			     <i class="fa fa-check" aria-hidden="true"></i>
			     <span className="keytext">Industry Specific Assignments</span>
			    </div>
			   </div>
			  </div>
			  <div className="col-lg-12 lastDiv">
			   <h2 className="courseh2text2">Tools Covered</h2>
               <div className="col-lg-offset-1 col-lg-1 Toolimagediv">
                <img src="/img/htmllogo.jpg" className="toolImg"/>
                <span className="toolname">HTML</span>
               </div>
               <div className=" col-lg-1 Toolimagediv">
                <img src="/img/csslogo.jpg" className="toolImg"/>
                <span className="toolname">CSS</span>
               </div>			   
			  </div>
			 <Syllabus/>
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