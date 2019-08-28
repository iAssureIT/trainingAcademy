import React from 'react';

import axios 				from 'axios';
import swal from 'sweetalert2';

import "./contactus.css";

const formValid = formerrors=>{
  console.log("formerrors",formerrors);
  let valid = true;
  Object.values(formerrors).forEach(val=>{
  val.length>0 && (valid = false);
  })
  return valid;
  }

const clientnameRegex = RegExp(/^[A-za-z']+( [A-Za-z']+)*$/);
const emailRegex = RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


export default class contactus extends React.Component {


	constructor(props) {
		super(props);

     this.state={
      "name"      	: "",
      "email"   	: "",
      "Subject"   	: "",
      "message"     : "",
      formerrors :{
          clientName  : " ",
          clientEmail : " ",
          
        
        },
      };
        this.handleChange = this.handleChange.bind(this);
    

     }
	
	 handleChange(event){
      event.preventDefault();
      const datatype = event.target.getAttribute('data-text');
        const {name,value} = event.target;
        const formerrors = this.state.formerrors;
      console.log("datatype",datatype);
      switch (datatype){


      case 'clientName' : 
           formerrors.clientName = clientnameRegex.test(value)? '' : "Please enter valid name";
           break;

        case 'clientEmail' : 
          formerrors.clientEmail = emailRegex.test(value)? '' : "Please enter valid mail address";
          break;

      
            
      default :
      break;

      }
      this.setState({ 
      	formerrors,
        [name]:value,
        "name"         : this.refs.name.value,
      "email"      : this.refs.email.value,
      "Subject"      : this.refs.Subject.value,
      "message"          : this.refs.message.value,
      } );
    }


/*   handleChange(event){
    event.preventDefault();
    this.setState({
      "name"         : this.refs.name.value,
      "email"      : this.refs.email.value,
      "Subject"      : this.refs.Subject.value,
      "message"          : this.refs.message.value,
  
      
     
    });*/

 Submit(event){
    event.preventDefault();
    // var adminEmail = this.getAdminEmail();  //Get email id from company settings. Write API for that.
    var adminEmail = "";

    const formValues1 = {
        "email"         : this.state.email ,
        "subject"       : "Your Query/Feedback is sent successfully to www..com!",
        "message"          : "", 
        "mail"          : 'Dear' + this.state.name + ', <br/><br/>'+
                          
                          "<b>Your Email: </b>"  + this.state.email + '<br/><br/>'+
                          "Your following message has been successfully delivered to the admin! We will get back to you shortly. <br/> <br/> " + 
                          "===============================  <br/> <br/> " + 
                          "<pre> " + this.state.message+ "</pre>" + 
                          " <br/> <br/> =============================== " + 
                          "<br/><br/> Thank You, <br/> Support Team, <br/> www..com " ,

      };
      console.log("notification",formValues1); 
      
        axios
        .post('/send-email',formValues1)
        .then((res)=>{
                   if(res.status === 200){
                    swal("Thank you for contacting us. We will get back to you shortly.")
                    }
                })
                .catch((error)=>{
                  console.log("error = ", error);
                  
                });
             
       const formValues2 = {
        "email"         : adminEmail ,
        "subject"       : "New query/feedback arrived from Website!",
        "message"          : "",
        "mail"          : 'Dear Admin, <br/>'+
                          "Following new query/feedback came from website! <br/> <br/> " + 
                          "============================  <br/> <br/> " + 
                          "<b>Client Name: </b>"   + this.state.name + '<br/>'+
                          
                          "<b>Client Email: </b>"  + this.state.email + '<br/><br/>'+

                          "<pre> " + this.state.message + "</pre>" + 
                          "<br/><br/> ============================ " + 
                          "<br/><br/> This is a system generated email! " ,

      };
      console.log("notification",formValues2); 
      
        axios
        .post('/send-email',formValues2)
        .then((res)=>{
                  if(res.status === 200){
                    console.log("Mail Sent TO ADMIN successfully!")
                  }
                })
                .catch((error)=>{
                  console.log("error = ", error);
                  
                });
           
               this.refs.name.value  = "";
                this.refs.email.value = "";
                this.refs.Subject.value = "";
                this.refs.message.value = "";
    }
/*     Submit(event){
    event.preventDefault();
   
     
      var dataArray={
      "name"         : this.refs.name.value,
      "email"      : this.refs.email.value,
      "Subject"      : this.refs.Subject.value,
      "message"          : this.refs.message.value,

     
    }
    console.log("dataArray =>",dataArray);
}*/


	render() {
		const {formerrors} = this.state;
		return (
			<div className="container-fluid nopadding">
			<div className="conWrap ">
				<div className="col-lg-6 col-md-6 pull-right">
					{/*<!-- <a href="" className="site-btn header-btn">Login</a> -->*/}					
					<nav className="main-menu">
						<ul style={{marginTop:"25px"}}>
							<li><a href="/" >Home</a></li>
							<li><a href="/contactus">Contact</a></li>
						</ul>
					</nav>
				</div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<form className="conatctform col-lg-5 col-md-6 col-xs-12 col-sm-12">
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<h3 className="text-center" style={{marginTop:"15px"}}> Drop Us a Line</h3>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									{/*<label class="col-md-4 col-lg-4 col-xs-4 col-sm-4 nopadding">Your Name</label>*/}
									<input className="form-control" name="name" type="text" placeholder="Your name" ref="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Your Email address</label>*/}
									<input className="form-control" name="email" type="email"  data-text="clientEmail" placeholder="Your@email.com"  ref="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
									 {this.state.formerrors.clientEmail &&(
			                              <span className="text-danger">{formerrors.clientEmail}</span> 
			                          )}
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Subject</label>*/}
									<input className="form-control" name="Subject" type="text" placeholder="Subject" ref="Subject" value={this.state.Subject} onChange={this.handleChange.bind(this)} />
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Message</label>*/}
							          <textarea className="form-control" name="message" placeholder="How can we help?" rows="4" ref="message" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
							        
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									<button type="button" className="btn col-lg-7 col-md-7 col-xs-12 col-sm-12 sbtn"  onClick={this.Submit.bind(this)}>Send A Message</button>
								</div>
							</div>
						</form>
						
					</div>
				</div>	
					<div className="container-fluid">
						<div className="col-lg-10 mtop75" style={{position: "relative",left: "9%"}}>
							<iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=iAssureIT%20hadapsar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
							</iframe>
							<a href="https://www.emojilib.com">emojilib.com</a>
						</div>
					</div>
						{/*<!-- footer section -->*/}
	<footer className="footer-section spad pb-0">
		<div className="footer-top">
			<div className="footer-warp">
				<div className="row">
					<div className="widget-item">
						<h4>Our Address</h4>
						<ul className="contact-list">
							<li><b>Office of:</b>
								iAssure International Technologies Pvt Ltd <br/>
								#323, Amanora Chambers, Hadapsar, <br/>
								Pune, Maharashtra, India – 411013	<br/>
							</li>
						</ul>
					</div>
					<div className="widget-item">
						<h4>Contact Details</h4>
						<ul>
							<li>Phone : +91 90220 38960</li>
							<li>Email : iassure-academy@gmail.com</li>
						</ul>
					</div>
					<div className="widget-item">
						<h4>Social Media</h4>
						<ul>
							<li><a href="https://www.facebook.com/IAssure-Advance-Technology-Training-Academy-169770017082358/">Facebook Page</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-bottom">
			<div className="footer-warp">
{/*<!-- 				<ul className="footer-menu">
					<li><a href="#">Terms & Conditions</a></li>
					<li><a href="#">Register</a></li>
					<li><a href="#">Privacy</a></li>
				</ul>
 -->*/}				<div className="copyright">
					Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.
				</div>
			</div>
		</div>
	</footer> 
				
			</div>
		);
	}
}
