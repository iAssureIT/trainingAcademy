import React from 'react';
import './ContactUsForm.css';

import axios 				from 'axios';
import Swal from 'sweetalert';

axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/json';


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



export default class ContactUsForm extends React.Component {


	constructor(props) {
		super(props);
		     this.state={
          "name"      	: "",
          "email"   	: "",
          "Subject"   	: "",
          "message"     : "",
          "formerrors" :{
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
/*      console.log("datatype",datatype);
*/      switch (datatype){


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
Submit(event){
    event.preventDefault();
    // var adminEmail = this.getAdminEmail();  //Get email id from company settings. Write API for that.
    var adminEmail = "info@iassureit.com";

    const formValues1 = {
        "email"         : this.state.email ,
        "subject"       : "Your Query/Feedback is sent successfully to www.iassureit.com!",
        "text"          : "", 
        "mail"          : 'Dear' + this.state.name + ', <br/><br/>'+
                          
                          "<b>Your Email: </b>"  + this.state.email + '<br/><br/>'+
                          "Your following message has been successfully delivered to the admin! We will get back to you shortly. <br/> <br/> " + 
                          "===============================  <br/> <br/> " + 
                          "<pre> " + this.state.message+ "</pre>" + 
                          " <br/> <br/> =============================== " + 
                          "<br/><br/> Thank You, <br/> Support Team, <br/> www.iassureit.com " ,

      };
      console.log("notification",formValues1); 
      
        axios
        .post('http://qaiassureitapi.iassureit.com/send-email',formValues1)
        .then((res)=>{
          console.log("re==",res);
                   if(res.status === 200){
                    Swal("Thank you for contacting us. We will get back to you shortly.")
                    }
                })
                .catch((error)=>{
                  console.log("error = ", error);
                  
                });
             
       const formValues2 = {
        "email"         : adminEmail ,
        "subject"       : "New query/feedback arrived from Website!",
        "text"          : "",
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
        .post('http://qaiassureitapi.iassureit.com/send-email',formValues2)
        .then((res)=>{
          console.log("re==",res);
            
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
	render() {
		const {formerrors} = this.state;
		return (
			<div className="container-fluid nopadding" >
				<div className="col-lg-12 col-md-12 p49">
							<form className="">
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30 nopadding">
									{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">*/}
										{/*<label class="col-md-4 col-lg-4 col-xs-4 col-sm-4 nopadding">Your Name</label>*/}
										<input className="form-control" name="from" type="text" ref="name" placeholder="Your name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
									{/*</div>*/}
								</div>
								{/*<div className="col-lg-8 col-md-8 col-xs-12 col-sm-12  row">*/}
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bt30 nopadding">
										{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Your Email address</label>*/}
										<input className="form-control" name="from" type="email" data-text="clientEmail" placeholder="Your@email.com" ref="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
										{
                      this.state.formerrors.clientEmail &&(
				              <span className="text-danger">{formerrors.clientEmail}</span> 
				              )
                    }
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bt30 nopadding">
										{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Phone No</label>*/}
										<input className="form-control" name="from" type="text" placeholder="Subject" ref="Subject" value={this.state.Subject} onChange={this.handleChange.bind(this)} />
									</div>
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30 nopadding">
									{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">*/}
										{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Message</label>*/}
								          <textarea className="form-control" name="message" placeholder="How can we help?" rows="6"ref="message" value={this.state.message} onChange={this.handleChange.bind(this)} ></textarea>      
									{/*</div>*/}
								</div>
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 nopadding bt40">
								
										{/*<button  className="sbtn col-lg-3 col-lg-offset-5" >Send Request</button>*/}
                    <button type="button" className="col-lg-3 cusfcmpbtn col-lg-offset-9" onClick={this.Submit.bind(this)}>Send Message</button>
									
								</div>
							</form>
								
				</div>				
			</div>
		);
	}
}
