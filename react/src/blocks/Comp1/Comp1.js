import React from 'react';
import './Comp1.css';

export default class Comp1 extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-lg-12">
				<div className="col-lg-12 c1box1 hidden-xs hidden-sm">
					<div className="col-lg-6 part1box1 nopadding">
						<div className="row"> 
							<div className="col-lg-6">
								<div className="bboxc1wrap">
									<div className="bboxc1">
										<div className="contentbboxc1">
								            <div className="titlebboxc1"><b>BEST TEACHERS</b></div>
								            <div className="descriptionbboxc1">From IITs &amp; other top tier collegeswith 10+ years            </div>
								        </div>
									</div>
								</div>
								<div className="bboxc1wrap">
									<div className="bboxc2">
										<div className="contentbboxc1">
								            <div className="titlebboxc1"><b>BEST TEACHERS</b></div>
								            <div className="descriptionbboxc1">From IITs &amp; other top tier collegeswith 10+ years            </div>
								        </div>
									</div>
								</div>

								
							</div>
							<div className="col-lg-6">
								<div className="mtop50">
									<div className="bboxc2wrap">
										<div className="bboxc2">
											<div className="contentbboxc1">
									            <div className="titlebboxc1"><b>BEST TEACHERS</b></div>
									            <div className="descriptionbboxc1">From IITs &amp; other top tier collegeswith 10+ years            </div>
									        </div>
										</div>
									</div>
									<div className="bboxc2wrap">
										<div className="bboxc1">
											<div className="contentbboxc1">
									            <div className="titlebboxc1"><b>BEST TEACHERS</b></div>
									            <div className="descriptionbboxc1">From IITs &amp; other top tier collegeswith 10+ years            </div>
									        </div>
										</div>
									</div>

								</div>
								
							</div>
						</div>
					
					</div>
					<div className="col-lg-6 part2box1">
						<div className="text1para1">
							<div>
								<div className="txt1c"></div>
								<div className="txt2c">Are you looking for a Job in IT Industry?</div>
								<div className="linectxt">
								</div>
								<p>IT Industry is changing rapidly with the introduction of new cutting edge
								 technologies every year. Students are not equipped with these changes as expected
								  in IT Industry. That is one of the major reason why students remain jobless for
								   longtime. Moreover, the supply of IT engineers is 10 times more than the demand
								    in IT Industry. Hence IT Companies are becoming very selective in their approach
								     during recruitment. Only highly skilled students are entering the IT Industry.</p>
								     <br/>
								<p>Most of the students are wasting their hard-earned money and valuable time after
								 graduation, in learning some old technologies which are no more in demand in market. 
								 Now the time has come to be very selective in what kind of training program you are 
								 joining. Invest your valuable time, money & energy in something more appropriate IT 
								 Training Course, that makes you not only expert but also to get you a fantastic job!</p>
								{/*<div className="cmpbtn">LEARN MORE</div>*/}
							</div>
						</div>
					
					</div>
				</div>
				
			</div>
		);
	}
}
