import React, { Component, PropTypes } from 'react';
import './Footer.css';


var contactuspage;

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          urlParam : ""
        };
    }
    componentDidMount(){
          var pageUrl = window.location.pathname;
          // console.log("pageUrl = ",pageUrl);
          let a = pageUrl ? pageUrl.split('/') : "";
              // console.log("a==>",a[1]); 
              const urlParam =a[2];
              // console.log("urlparam..",a[1]);
              this.setState({
                          urlParam:a[1],
                        
                        });
    }

    render() {
      console.log("Url ==",this.state.urlParam);
        return (
        	<div className="container-fluid  " style={{padding:"0px"}}>
        		<div className="col-lg-12 col-md-12 hidden-xs hidden-sm NOpadding">
              <div className="f1CourseRegBox col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="f1CourseRegBoxa">
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                      <div className="cboxtxt">
                      Start mastering your Skills.
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      {/*<div className="getSBtn col-lg-5">Get Started</div>*/}
                       {
                        
                        this.state.urlParam ==="contactuspage" 
                        ? ""
                        :
                          <a href="/contactuspage">
                            <div className="getSBtn1 col-lg-5 col-lg-offset-5">Contact Us</div>
                          </a>
                        }
                    </div>
                  </div>
              </div>
              <div className="footer-bottom">
                  <div className="footer-warp">
                     {/* <ul className="footer-menu">
                          <li><a href="#">Terms & Conditions</a></li>
                          <li><a href="#">Register</a></li>
                          <li><a href="#">Privacy</a></li>
                      </ul>*/}
                  <div className="copyright">
                          Copyright &copy;<script>document.write(new Date().getFullYear());</script> 2019 iAssure International Technologies Pvt. Ltd <div className="pull-right pright">All rights reserved.</div>
                      </div>
                  </div>
              </div>
            </div>
          {/*qwe================*/}
            <div className="col-sm-12 col-xs-12 hidden-lg hidden-md nopadd">
              <div className="col-sm-12 col-xs-12 nopadd">
                  <div className="f1CourseRegBoxaMobile">
                    <div className="col-sm-12 col-xs-12">
                      <div className="cboxtxtmobile">
                      Start mastering your courses! Try now for free
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      {/*<div className="getSBtn col-lg-5">Get Started</div>*/}
                     
                        <a href="/contactuspage">
                          <div className="getSBtn1mob col-lg-5 col-lg-offset-5">Contact Us</div>
                        </a>

                      
                    </div>
                  </div>
              </div>
              <div className="footer-bottom">
                  <div className="footer-warp">
                     {/* <ul className="footer-menu">
                          <li><a href="#">Terms & Conditions</a></li>
                          <li><a href="#">Register</a></li>
                          <li><a href="#">Privacy</a></li>
                      </ul>*/}
                  <div className="copyright">
                          Copyright &copy;<script>document.write(new Date().getFullYear());</script> 2019 iAssure International Technologies Pvt. Ltd  All rights reserved.
                      </div>
                  </div>
              </div>
            </div>
        	</div>
            
        );
    }
}

export default Footer;


{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footerWrap">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 f1logo">
                            <img src="/img/iAssureIT/Advanced-Technologies-Training-Academy.png" alt="img1" className="f1logoImg"/>
                        </div>

                        <div className="col-lg-6 col-md-3 col-sm-12 col-xs-12 FooterMenu">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <ul className="list-group">
                                  <li className="menuF1">Home</li>
                                  <li className="menuF1">About</li>
                                  <li className="menuF1">Account</li>
                                  <li className="menuF1">Teacher</li>
                                </ul>
                    
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <ul className="list-group">
                                  <li className="menuF1">Blog</li>
                                  <li className="menuF1">Contact us</li>
                                  <li className="menuF1">Courses</li>
                                  <li className="menuF1">Events</li>
                                </ul>
                    
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <ul className="list-group">
                                  <li className="menuF1">Membership</li>
                                  <li className="menuF1">Page 404</li>
                                  <li className="menuF1">Profile</li>
                                  <li className="menuF1">Programs</li>
                                </ul>
                    
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 FooterMenu">
                            <ul className="list-group">
                                  <li className="menuF2 fs26">Subscribe</li>
                                  <li className="menuF2">
                                    <input id="yikes-easy-mc-form-1-EMAIL" name="EMAIL" placeholder="Your Email Here" type="email"/>
                                    </li>
                                  <li className="menuF1">
                                    <div className="f1cmpbtn">Subscribe</div>
                                  </li>
                               
                                </ul>

                        </div>
                    </div>
            </div>*/}