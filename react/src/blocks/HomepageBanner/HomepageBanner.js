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
					<div className="col-lg-6 col-md-6 pd35  pd1">

						<div className="whtcolr btitle1"><span className="super30txt">Super-30</span> <br/><span className="super30txt1">Fullstack Developer</span><br/>
						<span className="super30txt2">Training Program</span> </div>
						<div className="btitle2 whtcolr">
						<span className="super30txt3">This course is created as per the IT Industry's current</span> <br/> <span className="super30txt3">requirement & hottest Technologies.</span>
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
				<div className="col-xs-12 col-sm-12 nopadding">
					<div className="col-xs-12 col-sm-12">

						<div className="whtcolr btitle1mobile">
							<span className="super30txtmobile">Super-30</span> <br/>Fullstack Developer<br/><span className="super30txt2">Training Program</span>
						</div>
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
