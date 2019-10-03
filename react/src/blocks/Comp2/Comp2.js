import React from 'react';

import './Comp2.css';

export default class Comp2 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="col-lg-12">
					<div className="col-lg-12">
						<div className="col-lg-6 c2part2box1">
							<div className="c2text1para1">
								<div>
									<div className="c2txt1c">ALL IVY SCHOOL, ALL THE TIME</div>
									<div className="c2txt2c">Limitless learning, more<br/> possibilities</div>
									<div className="c2linectxt pull-right">
									</div>
									<p className="parac2linectxt">High is a nationally recognized K-12 
											independent school situatedin the hills of Oakland, 
											California. Our mission is to inspire a maplifelonglove of 
											learning with a 
											focus on scholarship. For 23 years of existence,
											Ed hasmore.</p>
									<div className="c2cmpbtn pull-right">LEARN MORE</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<img src="/img/bg-18.jpg" className="" alt="side1img"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
