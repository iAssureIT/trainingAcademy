import React, { Component } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import "./HomeCarousal.css";

class HomeCarousal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
        	<div className="container-fluid" style={{padding:"0px"}}>
        		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 caroualWrap">
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
										{/*<div class="owl-carousel owl-theme">
										  <div> A High is a nationally recognized K-12 independent school situatedin
												the hills of Oakland, California. Our mission is to inspire a
												 maplifelonglove of learning with a focus on scholarship. For 
												 23 years of existence,Ed hasmore. </div>
										  <div>B High is a nationally recognized K-12 independent school situatedin
												the hills of Oakland, California. Our mission is to inspire a
												 maplifelonglove of learning with a focus on scholarship. For 
												 23 years of existence,Ed hasmore. </div>
										  <div>C High is a nationally recognized K-12 independent school situatedin
												the hills of Oakland, California. Our mission is to inspire a
												 maplifelonglove of learning with a focus on scholarship. For 
												 23 years of existence,Ed hasmore. </div>
										  <div> Your Content </div>
										  <div> Your Content </div>
										  <div> Your Content </div>
										  <div> Your Content </div>
										</div>*/}
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
