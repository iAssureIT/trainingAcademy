import React from 'react';
import './SpacialFeatures.css';

export default class SpacialFeatures extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
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
						<div className="col-lg-12 ">
							<div className="col-lg-6">
								<div className="spimg1">
									<div className="spimg12 pull-right">
										<img src="/img/spfun1.jpg" alt="img1" className="roundimg"/>
										<div class="sfimg1overlay">
										    <div class="text">Hello World</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="sftext1para1">
									<div>
										<div className="txt2c">Start Investing in You</div>
										<p>High is a nationally recognized K-12 independent school situatedin
												the hills of Oakland, California. Our mission is to inspire a
												 maplifelonglove of learning with a focus on scholarship. For 
												 23 years of existence,Ed hasmore.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}