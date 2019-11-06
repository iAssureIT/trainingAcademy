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
								bloggerImg:"/img/5.png",
								smallimg:"img/icon1.png"
								
							},
							{
								blogDate:"Duration - 4 Weeks",
								blogTitle:"Frontend Frameworks",
								blogPara:"REACTJS, REDUX, Javascript ES6, Amazon S3, etc",
								bloggerImg:"/img/5.png",
								smallimg:"img/icon2.png"
								
							},
							{
								blogDate:"Duration - 4 Weeks",
								blogTitle:"Backend Programming",
								blogPara:"NodeJS, REST API, MongoDB.",
								bloggerImg:"/img/5.png",
								smallimg:"img/icon3.png"
								
							},{
								blogDate:"Duration - 4 Weeks",
								blogTitle:"Mobile App Development",
								blogPara:"React Native & MeteorJS-Cordova Technologies",
								bloggerImg:"/img/5.png",
								smallimg:"img/icon4.png"
								

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
					 <div className="col-lg-5 col-lg-offset-5  lineInblock ">
					  <div className=" col-lg-2 ocLine divLine"></div>
					  </div>
						<div className="col-lg-12 paradown1">
						  <div className="text-center">
							 <div className="super30txt12">SUPER-30</div>
								<div className="ocTitle txt2c">FULLSTACK DEVELOPER PROGRAM</div>
								 <div className="col-lg-12 newdiv">
									<div className="col-lg-6">
										<div className="spimg1">
											<div className="spimg12 pull-right">
												<img src="/img/ocb1.png" alt="img1" className="ocb1Img"/>
												
											</div>
										</div>
									</div>
									<div className="col-lg-6 programtxt">
										<div className="octext1para1">
											<div className="col-lg-12 paradown">
												{/*<div className="txt2c">Start Investing in You</div>*/}
												<p>Full-Stack Developer means the one who is expert in <span className="highlight">Frontend Technologies</span>,
													<span className="highlight">Backend Technologies</span> and <span className="highlight"> Database.</span> Today, in IT Industry, there is a huge
													demand for Full-Stack developer.
													This training program is definitely <span className="highlight"> India’s the most in-depth and the only
													program which covers the hottest technologies</span> of IT industry. This program is&nbsp;
													 <span className="highlight">designed to make you 100% job ready</span> as per IT Industry’s demand. So you get
													handsome job instantly.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>


						 <div className="col-lg-2 col-lg-offset-5 ">
							<div className="col-lg-offset-3  col-lg-6 ocLine">
						    </div>
						   </div>
						<div className="col-lg-12 maincourceblockDiv">
						 <div className="ocTitle txt2c offeredTitle text-center">courses offered</div>
							<div className="col-lg-12 courceblockDiv1">
							{
		                		data && data.length > 0 ?
				      				data.map((data, index)=>{
	                					return(
						          			<div className="col-lg-3 Allblog ">
						          			 <div className="col-lg-12 courceblockDiv NOpadding">
						          			  <div className="col-lg-12 courceDiv NOpadding"> 
						          			  <div className="col-lg-6 ">
						          			   <img className="img-responsive blockimg1 " src={data.bloggerImg} alt="Bannerpng"/>
						          			   <div className="col-lg-6">
						          			    <img className="img-responsive smallimg1 " src={data.smallimg} alt="smallimg"/>
						          			   </div>
						          			  </div>
						          			  </div>
						          			  <div className="col-lg-12 All1blog1">
					          					 <div className="ohide">	
												 </div>
													<p className="ocDate p10 mtop20 text-center ">{data.blogDate}</p>
													<h4 className="ocpTitle courcetitle p10">{data.blogTitle}</h4>
													<p className="oc2Para p10 courcepara">{data.blogPara}</p>
												</div>
												<div className="col-lg-12 bottomline NOpadding">
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
						<div className="col-lg-12 paddiv text-center">
						 <div className="col-lg-12 ">
							<p className="Lheight ">{/*In all these 4 courses, you will learn 18 to
								20 skills, which will make a truly a
								Full-Stack developer.This course can
								make you super expert developer, even if
								you have not done any programming
								before.*/}
						   </p>
						
							<p className="notetext">Note : You will learn from
												ULTRA-BASICS to ULTRA-ADVANCED
												Web & Mobile app development.
						   </p>
						 </div>  
						</div>
						{/*<div className="col-lg-12">
							<div className="col-lg-offset-5">
								<div className="occmpbtn"> VIEW ALL COURCES</div>
							</div>
						</div>
*/}
					</div>					
				</div>
			{/*=====*/}
			<div className="col-xs-12 col-sm-12 hidden-lg hidden-md ocWrapmobile">
					<div className="mtop65">
						<div className="col-xs-12 col-sm-12 ">
							<div className="text-center">
								<div>SUPER-30</div>
								<div className="ocTitle">FULLSTACK DEVELOPER PROGRAM</div>

								<div className="col-lg-2 col-lg-offset-5 ">
									<div className="col-lg-offset-9  col-lg-6 ocLine"></div>
								</div>
								<div className="col-xs-12 col-sm-12 newdiv">
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
						{/*<div className="col-xs-12 col-sm-12">
							<div className="col-xs-offset-2">
								<div className="occmpbtn"> VIEW ALL COURCES</div>
							</div>
						</div>*/}
					</div>					
				</div>
			</div>
		);
	}
}
