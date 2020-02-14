import React, { Component } from 'react';

import "./HomeCarousal.css";

class HomeCarousal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
        	<div className="container-fluid" style={{padding:"0px"}}>
        		<div className="col-lg-12 col-md-12 hidden-xs hidden-sm caroualWrap">
        			<div className="col-lg-5">
								<div className="">
									<div className="pull-right">
										<img src="/img/bg-22-1.jpg" alt="img1" className=""/>
										
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="">
									<div className="col-lg-10">
									 <div className="col-lg-10 NOpadding">
									  <div className=" col-lg-2 ocLine"></div>
								      </div>
										<div className="txt2c">Learn from Highly Experienced IITian</div>
										<p className="firstpara1">If you learn from an average trainer, you become average developer. <br/>
										If you want to become an expert developer, learn the things from highly 
										experienced and expert trainer or coach.You will learn all these 
										&nbsp;20 technologies from the IT industry’s one of the most experienced 
										Technology Guru Mr. <b>Ashish Naik</b>, who is an expert of more than 60 
										different technologies.<br/>
										</p>
									</div>
								</div>
							</div>

        		</div>
        		<div className="col-sm-12 col-xs-12 hidden-lg hidden-md caroualWrapmobile">
        			<div className="col-sm-12 col-xs-12">
								<div className="">
									<div className="pull-right">
										<img src="/img/bg-22-1.jpg" alt="img1" className="mar25all"/>
										
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-xs-12">
								<div className="">
									<div className="">
										
										<div className="txt2c">Learn from Highly Experienced IITian</div>
										<p>If you learn from an average trainer, you become average developer. 
										If you want to become an expert developer, learn the things from highly 
										experienced and expert trainer or coach.<br/>You will learn all these 
										20 technologies from the IT industry’s one of the most experienced 
										Technology Guru Mr Ashish Naik, who is an expert of more than 60 
										different technologies.<br/>
										</p>
									</div>
								</div>
							</div>

        		</div>
        	</div>
            
        );
    }
}

export default HomeCarousal;
