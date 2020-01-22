import React from 'react';
import './SpacialFeatures.css';

export default class SpacialFeatures extends React.Component {


	constructor(props) {
		super(props);
		this.state = {

			"Ourfeatures"		: [



                            {
								featureTitle:"Certificate of Completion",
								featureText:"You need solution providers,thinkers,and ida generators,That's what iAssureIT does.Creativity is our DNA. ",
								
							},	

							
							{
								featureTitle:"Heavy Discount if you enroll for all courses",
								featureText:"Each Course fees is Rs 20,000 courses, you pay only Rs. 80,000.",
								
							},
							{
								featureTitle:"10% Referral Cashback",
								featureText:"When your referred candidate enrolls,you get 10% cashback. If you refer 10 students, your  fees would be free.",
								
							},
						  ],

			"Ourfeaturesright" : [
							{
								featureTitle:"Job Assistance",
								featureText:"We also provide a Job Assistance & prepare you for interview",
								
							},	
							{
								featureTitle:"SOLUTION APP ARCHITECTURE",
								featureText:"You need solution providers,thinkers,and idea generators,That's what iAssureIT does.Creativity is our DNA. ",
								
							},

							{

								featureTitle:"Live Projects",
								featureText:"Working on Live Projects is a rare ,Here in iAssure Advanced Technologies Academy,You will get to work on LIVE Projects.",
                                featureicon:"/img/laptop.png"
							},	
							

							]		  
	      };
	}


	render() {
		var data = this.state.Ourfeatures;
		var data1 = this.state.Ourfeaturesright;
		return (
			<div>
				<div className="col-lg-12 col-md-12 specilfDiv hidden-xs hidden-sm">
					<div className="mtop25">
					  	<div className="col-lg-5 col-lg-offset-5 NOpadding">
					    	<div className=" col-lg-2 ocLine blockline3"></div>
					   	</div>
						<div className="col-lg-12">
							<div className="text-center">
								{/*<div>ALL IVY SCHOOL, ALL THE TIME</div>*/}
								<div className="ocTitle newocTitle">Special Features of This Program</div>
							</div>
						</div>
						<div className="col-lg-12 col-md-12 mainfeaturediv1 ">
						 	<div className="col-lg-4 col-md-12">
							 {
			                	data && data.length > 0 ?
					      		data.map((data, index)=>{
		                	   return(
								    <div className="col-lg-12 ht180">
										<div className=" col-lg-10 col-md-12 eachdiv">
											<div className="col-lg-12">
												<h3 className="featuretitle featuretitleleft text-right col-lg-9 pull-right">{data.featureTitle}</h3>
											</div> 
											<div className="">
												<p className="text-right featuretext">{data.featureText}</p>
											</div>
										</div>
										<div className="col-lg-2 iconcircle">
											<img src="/img/laptop.png" className="featureicon"/>
										</div>
									</div>	
								
								);
		                   	  })
					      		:
					      		null
		                     }
	                     	</div>
	                    <div className="col-lg-4">
	                        <img src="/img/block4.png" className="block4img"/>
	                    </div>
	                    <div className="col-lg-4 col-md-12">
						 {
		                	data1 && data1.length > 0 ?
				      		data1.map((data1, index)=>{
	                	   return(
							    <div className="col-lg-12 ht180">
								    <div className="col-lg-2 iconcircle">
								    	<img src="/img/laptop.png" className="featureicon"/>
								    </div>
									<div className=" col-lg-10 col-md-12 eachdiv ">
										<div className="col-lg-12 NOpadding">
											<h3 className="featuretitle text-left col-lg-9 NOpadding">{data1.featureTitle}</h3>
										</div> 
										<div className="">
											<p className="text-left featuretext">{data1.featureText}</p>
										</div>
									</div>
	                            </div>
							
							);
	                   	  })
				      		:
				      		null
	                     }
	                     </div>
						</div>
			
					</div>
				</div>
			</div>	

		);
	}
}
