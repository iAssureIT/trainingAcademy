import React from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { Route } from 'react-router';

import Mainpage from "../componant/Mainpage.js";
import contactus from "../componant/contactUs/contactus.js";
import Homepage                                  from "../pages/Homepage/Homepage.js";



export default class TCroute extends React.Component {

	/*constructor(props) {
		super(props);
	}
*/
	render() {
		return (
			   <Router>
			    	<Switch>
			    		<Route path = "/" exact component = {Mainpage} />
			    		<Route path = "/contactus" exact component = {contactus} />
			    		<Route path="/homepage"    exact strict component={Homepage}  />
			    		
			    	</Switch>
			    </Router>
		);
	}
}
