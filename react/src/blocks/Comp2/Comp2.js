import React from 'react';

import './Comp2.css';

export default class Comp2 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="col-lg-12 hidden-xs hidden-sm">
					<div className="col-lg-12">
						<div className="col-lg-6 c2part2box1">
							<div className="c2text1para1">
								<div>
									{/*<div className="c2txt1c">ALL IVY SCHOOL, ALL THE TIME</div>*/}
									<div className="c2txt2c">Who is a Fullstack Developer?</div>
									<div className="c2linectxt pull-right">
									</div>
									<p className="parac2linectxt">A <b>FullStack Developer</b> is the one who has expertise in Web UI/UX Technologies, Frontend Frameworks, Backend Programming Languages & Database Technologies. One Fullstack developer is capable of executing the tasks of fronend developer & backend developer. Fullstack developer has tremendous demand in IT Industry.</p>
									{/*<div className="c2cmpbtn pull-right">LEARN MORE</div>*/}
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
