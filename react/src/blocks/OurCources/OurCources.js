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
				<div className="col-lg-12">
					<div className="mtop25">
						<div className="col-lg-12">
							<div className="text-center">
								<div>ALL IVY SCHOOL, ALL THE TIME</div>
								<div className="ocTitle">What do you want to learn <br/>today?</div>

								<div className="col-lg-2 col-lg-offset-5 ">
									<div className="col-lg-offset-3  col-lg-6 ocLine"></div>
								</div>

							</div>
						</div>
						<div className="col-lg-12">
							<div className="col-lg-12 pad50">
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
						<div className="col-lg-12">
							<div className="col-lg-offset-5">
								<div className="occmpbtn"> VIEW ALL COURCES</div>
							</div>
						</div>

					</div>					
				</div>
			</div>
		);
	}
}
