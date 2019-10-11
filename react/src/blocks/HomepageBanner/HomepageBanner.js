import React from 'react';

import './HomepageBanner.css';

export default class HomepageBanner extends React.Component {

constructor(props) {
super(props);
}

render() {
return (
	<div>
		<div className="container-fluid HomepageBanner  hidden-xs hidden-sm" style={{padding:"0px"}}>
			<div className="bg">
				<div className="col-lg-12 col-md-12">
					<div className="col-lg-6 col-md-6">

						<div className="whtcolr btitle1"><b>Super-30</b> <br/>Fullstack Developer<br/>Training Program </div>
						<div className="btitle2 whtcolr">This is India's one of the most beautifully crafted Fullstack developer training program.
						This course is created as per the IT Industry's current requirement & hottest Technologies.
						</div>
						{/*<div className="bannerbtn">VIEW OUR COURSES</div>*/}
						</div>
					<div className="col-lg-6 col-md-6">
						<img src="/img/side03.png" className="side1img" alt="side1img"/>
					</div>
				</div>
			</div>	
		</div>
		<div className="container-fluid HomepageBannermobile hidden-lg hidden-md" style={{padding:"0px"}}>
			<div className="bg">
				<div className="col-xs-12 col-sm-12">
					<div className="col-xs-12 col-sm-12">

						<div className="whtcolr btitle1mobile"><b>Super-30</b> <br/>Fullstack Developer<br/>Training Program </div>
						<div className="btitle2mobile whtcolr">This is India's one of the most beautifully crafted Fullstack developer training program.
						This course is created as per the IT Industry's current requirement & hottest Technologies.
						</div>
						{/*<div className="bannerbtn">VIEW OUR COURSES</div>*/}
						</div>
					<div className="col-xs-12 col-sm-12">
						<img src="/img/side03.png" className="side1imgMobile" alt="side1img"/>
					</div>
				</div>
			</div>	
		</div>
	</div>
);
}
}
