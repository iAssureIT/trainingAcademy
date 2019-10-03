import React from 'react';

import './HomepageBanner.css';

export default class HomepageBanner extends React.Component {

constructor(props) {
super(props);
}

render() {
return (
<div className="container-fluid HomepageBanner" style={{padding:"0px"}}>
		<div className="bg">
			<div className="col-lg-12">
				<div className="col-lg-6">
					<div className="whtcolr btitle1">Free Graphic <br/>Design Tutorials </div>
					<div className="btitle2 whtcolr">With over 1200 courses in 18 subjects, you're guaranteed<br/>to find something that's right for you.</div>
					<div className="bannerbtn">VIEW OUR COURSES</div>
					</div>
				<div className="col-lg-6 col-xs-10">
					<img src="/img/side03.png" className="side1img" alt="side1img"/>
				</div>
			</div>
		{/**/}
		</div>
	
	
</div>
);
}
}
