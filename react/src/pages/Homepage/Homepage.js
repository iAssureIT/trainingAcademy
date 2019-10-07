import React 				from 'react';
import HomepageBanner       from "../../blocks/HomepageBanner/HomepageBanner.js";
import Comp1      			from "../../blocks/Comp1/Comp1.js";
import Comp2      			from "../../blocks/Comp2/Comp2.js";

import OurCources      		from "../../blocks/OurCources/OurCources.js";
import SpacialFeatures      from "../../blocks/SpacialFeatures/SpacialFeatures.js";





export default class Homepage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
          	<div className="container-fluid" style={{padding:"0px"}}>
				<HomepageBanner/>
				<Comp1/>
				<Comp2/>
				<OurCources/>
				<SpacialFeatures/>

			</div>
		);
	}
}