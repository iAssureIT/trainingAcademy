import React from 'react';
import './OurCources.css';

export default class OurCources extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

			"OurCources"		: [
							{
								blogDate:"Duration - 6 Weeks",
								blogTitle:"Web Technologies",
								blogPara:"Develop world's greatest quality websites",
								bloggerImg:"/img/signup-bg.jpg"
								
							},
							{
								blogDate:"Duration - 4 Weeks",
								blogTitle:"Frontend Frameworks",
								blogPara:"REACTJS, REDUX, Javascript ES6, Amazon S3, etc",
								
								bloggerImg:"/img/signup-bg.jpg"
								
							},
							{
								blogDate:"Duration - 4 Weeks",
								blogTitle:"Backend Programming",
								blogPara:"NodeJS, REST API, MongoDB.",
								
								bloggerImg:"/img/signup-bg.jpg"
								
							},{
								blogDate:"Duration - 4 Weeks",
								blogTitle:"Mobile App Development",
								blogPara:"React Native & MeteorJS-Cordova Technologies",
								
								bloggerImg:"/img/signup-bg.jpg"
								

							},

						  ]
	};
	}

	render() {
		var data = this.state.OurCources;
		return (
			<div>
				<div className="col-lg-12 col-md-12 hidden-xs hidden-sm ocWrap">
					<div className="mtop65">
						<div className="col-lg-12">
							<div className="text-center">
								<div>SUPER-30</div>
								<div className="ocTitle">FULLSTACK DEVELOPER PROGRAM</div>

								<div className="col-lg-2 col-lg-offset-5 ">
									<div className="col-lg-offset-3  col-lg-6 ocLine"></div>
								</div>
								<div className="col-lg-12 ">
									<div className="col-lg-6">
										<div className="spimg1">
											<div className="spimg12 pull-right">
												<img src="/img/ocb1.png" alt="img1" className="ocb1Img"/>
												
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="octext1para1">
											<div className="col-lg-12">
												{/*<div className="txt2c">Start Investing in You</div>*/}
												<p>Full-Stack Developer means the one who is expert in Frontend Technologies,
													Backend Technologies and Database. Today, in IT Industry, there is a huge
													demand for Full-Stack developer.
													This training program is definitely India’s the most in-depth and the only
													program which covers the hottest technologies of IT industry. This program is
													designed to make you 100% job ready as per IT Industry’s demand. So you get
													handsome job instantly.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-lg-offset-5 ">
									<div className="col-lg-offset-3  col-lg-6 ocLine"></div>
								</div>

							</div>
						</div>
						<div className="col-lg-12">
							<div className="col-lg-12">
							{
		                		data && data.length > 0 ?
				      				data.map((data, index)=>{
	                					return(
						          			<div className="col-lg-3 Allblog">
					          					<div className="All1blog1">
					          						<div className="ohide">
														<img className="img-responsive AllblogImgB" src={data.bloggerImg} alt="Bannerpng"/>
													</div>
												<div className="OCBlockline">
												 </div>
													<p className="ocDate p10 mtop20 graycolor">{data.blogDate}</p>
													<h4 className="ocpTitle p10"><b>{data.blogTitle}</b></h4>
													<p className="oc2Para p10 graycolor">{data.blogPara}</p>
												</div>
						          			</div>
						          			);
	                					})
	                				:
	                				null
		                		}
		                	</div>

						</div>
						<div className="col-lg-12 paddiv text-center">
						 <div className="col-lg-12 ">
							<p className="Lheight ">In all these 4 courses, you will learn 18 to
								20 skills, which will make a truly a
								Full-Stack developer.This course can
								make you super expert developer, even if
								you have not done any programming
								before.
						   </p>
						
							<p className=""><b>Note : You will learn from
												ULTRA-BASICS to ULTRA-ADVANCED
												Web & Mobile app development.</b>
						   </p>
						 </div>  
						</div>
						<div className="col-lg-12">
							<div className="col-lg-offset-5">
								<div className="occmpbtn"> VIEW ALL COURCES</div>
							</div>
						</div>

					</div>					
				</div>
			{/*=====*/}
			<div className="col-xs-12 col-sm-12 hidden-lg hidden-md ocWrapmobile">
					<div className="mtop65">
						<div className="col-xs-12 col-sm-12">
							<div className="text-center">
								<div>SUPER-30</div>
								<div className="ocTitle">FULLSTACK DEVELOPER PROGRAM</div>

								<div className="col-lg-2 col-lg-offset-5 ">
									<div className="col-lg-offset-3  col-lg-6 ocLine"></div>
								</div>
								<div className="col-xs-12 col-sm-12">
									<div className="col-xs-12 col-sm-12">
										<div className="">
											<div className="">
												<img src="/img/ocb1.png" alt="img1" className="ocb1Imgmobile"/>
												
											</div>
										</div>
									</div>
									<div className="col-xs-12 col-sm-12">
										<div className="octext1para1mobile">
											<div className="col-xs-12 col-sm-12">
												{/*<div className="txt2c">Start Investing in You</div>*/}
												<p>Full-Stack Developer means the one who is expert in Frontend Technologies,
													Backend Technologies and Database. Today, in IT Industry, there is a huge
													demand for Full-Stack developer.
													This training program is definitely India’s the most in-depth and the only
													program which covers the hottest technologies of IT industry. This program is
													designed to make you 100% job ready as per IT Industry’s demand. So you get
													handsome job instantly.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xs-2 col-xs-offset-5 ">
									<div className="col-lg-offset-3  col-lg-6 ocLine"></div>
								</div>

							</div>
						</div>
						<div className="col-xs-12 col-sm-12">
							<div className="col-xs-12 col-sm-12">
							{
		                		data && data.length > 0 ?
				      				data.map((data, index)=>{
	                					return(
						          			<div className="col-xs-12 col-sm-12 Allblog">
					          					<div className="All1blog1">
					          						<div className="ohide">
														<img className="img-responsive AllblogImgB" src={data.bloggerImg} alt="Bannerpng"/>
													</div>
												<div className="OCBlockline">
												 </div>
													<p className="ocDate p10 mtop20 graycolor">{data.blogDate}</p>
													<h4 className="ocpTitle p10"><b>{data.blogTitle}</b></h4>
													<p className="oc2Para p10 graycolor">{data.blogPara}</p>
												</div>
						          			</div>
						          			);
	                					})
	                				:
	                				null
		                		}
		                	</div>

						</div>
						<div className="col-xs-12 col-sm-12">
							<div className="col-xs-offset-2">
								<div className="occmpbtn"> VIEW ALL COURCES</div>
							</div>
						</div>

					</div>					
				</div>
			</div>
		);
	}
}
