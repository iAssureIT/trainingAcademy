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
								featureTitle:"Best Training Coach from IITs",
								featureText:"Learn from highly experienced coach having multi-skills expertise.",
								
							},
							{
								featureTitle:"10% Referral Cashback",
								featureText:"When your referred candidate enrolls,you get 10% cashback. If you refer 10 students, your  fees would be free.",
								
							},
						  ],

			"Ourfeaturesright" : [
							{
								featureTitle:"100% Job Guarantee",
								featureText:"We provide job to every single student, with a decent salary as MNCs are providing you.",
								
							},	
							{
								featureTitle:"Fully Practical Oriented Training",
								featureText:"We make you expert developer with lots of assignments & practical exposure.",
								
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
											{/*<i className="fa fa-certificate featureicon" aria-hidden="true"></i>*/}
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
			{/*=========================================================================================*/}
				<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
					<div className="mtop25">
					  	
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
								    <div className="col-lg-12 ht285">
										<div className=" col-lg-10 col-md-12 eachdiv">
											<div className="col-lg-12">
												<h3 className="featuretitle featuretitleleft ">{data.featureTitle}</h3>
											</div> 
											<div className="">
												<p className="featuretext">{data.featureText}</p>
											</div>
										</div>
										<div className="col-lg-2 iconcircle">
											<img src="/img/laptop.png" className="featureicon"/>
											{/*<i className="fa fa-certificate featureicon" aria-hidden="true"></i>*/}
										</div>
									</div>	
								
								);
		                   	  })
					      		:
					      		null
		                     }
	                     	</div>
	                    <div className="col-lg-4">
	                        <img src="/img/block4.png" className=""/>
	                    </div>
	                    <div className="col-lg-4 col-md-12">
						 {
		                	data1 && data1.length > 0 ?
				      		data1.map((data1, index)=>{
	                	   return(
							    <div className="col-lg-12 ht210">
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
