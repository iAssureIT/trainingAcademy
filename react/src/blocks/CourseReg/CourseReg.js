import React, { Component } from 'react';
import './CourseReg.css';

class CourseReg extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="container-fluid" style={{padding:"0px"}}>
        		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 courseWrap">
        			<div className="CourseRegBox col-lg-12 col-md-12 col-sm-12 col-xs-12">
        				<div className="CourseRegBoxa">
        					<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        						<div className="cboxtxt">
        						Start mastering your courses! Try now for free
        						</div>
        					</div>
        					<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        						{/*<div className="getSBtn col-lg-5">Get Started</div>*/}
                                <a href="/contactuspage">
        						<div className="getSBtn1 col-lg-5 col-lg-offset-5 col-sm-offset-3 col-xs-offset-3 col-sm-6 col-xs-6">Contact Us</div></a>
        					</div>
        				</div>
        			</div>


        		</div>
        	</div>
            
        );
    }
}

export default CourseReg;
