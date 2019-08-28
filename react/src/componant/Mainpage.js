import React from 'react';
/*import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';*/
import "./style.css";
import "./style2.css";

/*import "./css/owl.carousel.css";*/

export default class Mainpage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
					{/*<!-- Page Preloder -->*/}
{/*	<div id="preloder">
		<div className="loader"></div>
	</div>*/}

	{/*<!-- Header section -->*/}
	<header className="header-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-3">
					<div className="site-logo">
						<img src="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/Advanced-Technologies-Training-Academy.png" alt="iAssure Advanced Technologies Academy"/>
					</div>
					<div className="nav-switch">
						<i className="fa fa-bars"></i>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 pull-right">
					{/*<!-- <a href="" className="site-btn header-btn">Login</a> -->*/}					<nav className="main-menu">
						<ul>
							<li><a href="/">		Home			</a></li>
							
							<li><a href="/contactus">	Contact		</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
	{/*<!-- Header section end -->*/}


	{/*<!-- Hero section -->*/}
	<section className="hero-section set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/bg3.jpg')"}}>
		<div className="container">
			<div className="info pull-right"> 
				<p> Phone: +91 90220 38960 </p>
				<p> Email: iassure.academy@gmail.com </p>
			</div>
			<div className="hero-text text-white">
				<h1>Super-30</h1>
				<h2>Fullstack Developer Training Program</h2>
				<p>This is India's one of the most beautifully crafted Fullstack developer training program. This course is created as per the IT Industry's current requirement & hottest Technologies. This course surely makes you a super expert in Web & Mobile App Development Technologies. </p>
			</div>
{/*<!-- 			<div className="row">
				<div className="col-lg-10 offset-lg-1">
					<form className="intro-newslatter">
						<input type="text" placeholder="Name" className="col-lg-3">
						<input type="text" placeholder="mobile" className="col-lg-3">
						<input type="text" placeholder="E-mail" className="col-lg-3">
						<button className="btn btn-primary col-lg-2">Register Now</button>
					</form>
				</div>
			</div>
 -->*/}		</div>
	</section>
	{/*<!-- Hero section end -->*/}


	{/*<!-- categories section -->*/}
	<section className="categories-section spad">
		<div className="container">
			<div className="section-title">
				<h2>Are you looking for a Job in IT Industry?</h2>
				<p>IT Industry is changing rapidly with the introduction of new cutting edge technologies every year. Students are not equipped with these changes as expected in IT Industry. That is one of the major reason why students remain jobless for longtime. Moreover, the supply of IT engineers is 10 times more than the demand in IT Industry. Hence IT Companies are becoming very selective in their approach during recruitment. Only highly skilled students are entering the IT Industry.</p>
					<br/>
				<p>Most of the students are wasting their hard-earned money and valuable time after graduation, in learning some old technologies which are no more in demand in market. Now the time has come to be very selective in what kind of training program you are joining. Invest your valuable time, money & energy in something more appropriate IT Training Course, that makes you not only expert but also to get you a fantastic job!
				</p>
			</div>
		</div>
	</section>


	{/*<!-- search section -->*/}
	<section className="search-section">
		<div className="row">
			<div className="container-fluid">
				<div className="search-warp">
			
					<div className="section-title text-white">
						<h2>Who is a Fullstack Developer?</h2>
					</div>
					<div className="row">
						<div className="col-md-10 offset-md-1">					
							<p><b> A FullStack Developer </b> is the one who has expertise in Web UI/UX Technologies, Frontend Frameworks, Backend Programming Languages & Database Technologies. One Fullstack developer is capable of executing the tasks of fronend developer & backend developer. Fullstack developer has tremendous demand in IT Industry.</p>
						</div>
					</div>
			
				</div>
			</div>
		</div>
	</section>
	{/*<!-- search section end -->*/}



	<section className="categories-section spad">
		<div className="container">
			<div className="section-title">
				<h1>SUPER-30</h1>
				<h2>FULLSTACK DEVELOPER PROGRAM</h2>
				<p>
					This training program is definitely India’s the most in-depth and the only program which covers the hottest technologies of IT industry. This program is designed to make you 100% job ready as per IT Industry’s demand. So you get a handsome job instantly.
				</p>
				<p>
					This Full-Stack Developer Training Program, is divided into 4 courses:
					<ul>
						<ol><h5>1. Web Technologies</h5></ol>
						<ol><h5>2. Frontend Frameworks</h5></ol>
						<ol><h5>3. Backend Technologies</h5></ol>
						<ol><h5>4. Mobile App Development</h5></ol>
					</ul>
				</p>
					<p>
						In all these 4 courses, you will learn more than 20 skills, which will make a truly a great Full-Stack developer. This course will make you super expert developer, even if you have not done any programming before. It means you can be from any Engineering branch or don't have any experience in computer programming, you can still become a super great developer. 
					</p>
					<p>
						<b> Note : </b> You will learn from ULTRA-BASICS to ULTRA-ADVANCED Web & Mobile app development.
					</p>
			</div>
		</div>
	</section>


	{/*<!-- search section -->*/}
	<section className="search-section">
		<div className="row">
			<div className="container-fluid">
				<div className="search-warp">
			
					<div className="section-title text-white">
						<h2>Special Features of This Program</h2>
					</div>
					<div className="row">
						<div className="col-lg-5 offset-lg-1 col-md-5 offset-md-1">					
							<ul>
								<li> 
									<p className="text-white"> Live Projects : </p> <p style={{fontSize:"16px",color:"#333"}}> Working on Live Projects is a rare thing in many training institutes.
									 Here in <b>iAssure Advanced Technologies Academy</b>, 
									 You will get plenty of opportunities to work on LIVE Projects from real clients in a real professional world. 
									 You will work directly with all senior members in an IT company. Moreover,
									 you earn when you contribute on any paid project by client.  </p>
								</li>
								<br/>
								<li> 
									<p>Job Assistance</p> 
									<p style={{fontSize:"16px",color:"#333"}}> >
									We also provide a Job Assistance & prepare you for interview.
									</p>
								</li>
							</ul>
						</div>
						<div className="col-lg-5 offset-lg-1 col-md-5 offset-md-1">			
						<p>		
							<ul>
								<li> 
									<p> 10% Cashback on each Referral: </p> 
									<p style={{fontSize:"16px",color:"#333"}}> >When your referred candidate enrolls for our course,
									you get 10% cashback.So it means, if you refer 10 students,
									your course fees would be free.After 10 students referral,
									you will start earning 10% amount on each enrollment.</p> 
								</li>
								<br/>
								<li> 
									<p>Heavy Discount</p> 
									<p style={{fontSize:"16px",color:"#333"}}> of upto 40% if you enroll for all courses.</p>
								</li>
								<br />
								<li> 
									<p> Certificate of Completion : </p>  
								</li>
							</ul>
						</p>
						</div>
					</div>
			
				</div>
			</div>
		</div>
	</section>
	{/*<!-- search section end -->*/}



	<section className="categories-section spad">
		<div className="row">

				<div className="col-lg-12 col-md-12">
					<div className="section-title">
						<h2>Courses You Can Select</h2>
					</div>
				</div>

				{/*<!-- categorie -->*/}
				<div className="col-lg-6 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/web-technologies1.jpg')"}} ></div>
						<div className="ci-text">
							<h3>Web Technologies</h3>
							<p>Develop world's greatest quality websites</p>
							<span>Duration - 6 Weeks</span>
						</div>
					</div>
				</div>
				{/*<!-- categorie -->*/}
				<div className="col-lg-6 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/frontend-frameworks.png')"}}  data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/frontend-frameworks.png"></div>
						<div className="ci-text">
							<h3>Frontend Frameworks</h3>
							<p>REACTJS, REDUX, Javascript ES6, Amazon S3, etc</p>
							<span>Duration - 4 Weeks</span>
						</div>
					</div>
				</div>

				{/*<!-- categorie -->*/}
				<div className="col-lg-6 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/backend-programming.jpg')"}} ></div>
						<div className="ci-text">
							<h3>Backend Programming</h3>
							<p>NodeJS, REST API, MongoDB</p>
							<span>Duration - 4 Weeks</span>
						</div>
					</div>
				</div>
				{/*<!-- categorie -->*/}
				<div className="col-lg-6 col-md-6">
					<div className="categorie-item">
						<div className="ci-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/Mobile-App-Development.png')"}}  ></div>
						<div className="ci-text">
							<h3>Mobile App Development</h3>
							<p>React Native & MeteorJS-Cordova Technologies</p>
							<span>Duration - 4 Weeks</span>
						</div>
					</div>
				</div>
				{/*<!-- categorie -->*/}

			</div>
		{/*</div>*/}
	</section>
	{/*<!-- categories section end -->*/}


	{/*<!-- search section -->*/}
	<section className="search-section">
		<div className="row">
			<div className="container-fluid">
				<div className="search-warp">
					<div className="section-title text-white">
						<h2>Learn from Highly Experienced IITian</h2>
					</div>
					<div className="row">
						<div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1">
							<p> 
								If you learn from an average trainer, you become average developer. If you want to become an expert developer, learn the things from highly experienced and expert trainer or coach.
								<br/>
								You will learn all these 20 technologies from the IT industry’s one of the most experienced <b>Technology Guru Mr Ashish Naik</b>, who is an expert of more than 60 different technologies.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/*<!-- search section end -->*/}


	{/*<!-- course section -->*/}
	<section className="course-section spad">
		<div className="container">
			<div className="section-title mb-0">
				<h2>Technologies That You Will Learn</h2>
				<p>In FullStack Developer Training Program, you learn more than 20 hot technologies. That's why it is India's largest and the most comprehensive Training Program. Join this intensive course if you want a rich & handsome job. Join this course only if you are ready to do a hell lot of hardwork. This training program makes a beginner into a master developer.</p>
			</div>
		</div>
		<div className="course-warp">
			<ul className="course-filter controls">
				<li className="control" data-filter="all" onclick="filterSelection('frontend')">FullStack Course</li>
				<li className="control" data-filter="web">Web Technologies</li>
				<li className="control" data-filter="frontend">Frontend Frameworks</li>
				<li className="control" data-filter="backend">Backend Programming</li>
				<li className="control" data-filter="mobile">Mobile App Development</li>
			</ul>                                       
			<div className="row course-items-area">



				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 frontend">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/Mobile-App-Development.png')"}}>
							<div className="price">Frontend Frameworks</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>ReactJS</h5>
								<p>Today's Hottest Technology in IT</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 frontend">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/redux.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/redux.png">
							<div className="price">Frontend Frameworks</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Redux</h5>
								<p>A Predictable State Container</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 frontend">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/rest-api-integration.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/rest-api-integration.png">
							<div className="price">Frontend Frameworks</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>REST API Integration</h5>
								<p>Connection with Database</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 frontend">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/amazon-s3-integration.svg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/amazon-s3-integration.svg">
							<div className="price">Frontend Frameworks</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Amazon S3 Integration</h5>
								<p>Secured & Fast Asset Storage</p>
							</div>
						</div>
					</div>
				</div>




				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 backend">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/nodejs.jpg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/nodejs.jpg">
							<div className="price">Backend Programming</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>NodeJS</h5>
								<p>Serverside Asynchronous Javascript</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 backend">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/MongoDB.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/MongoDB.png">
							<div className="price">Backend Programming</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>MongoDB</h5>
								<p>High Volume NoSQL Database</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 backend">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/rest-api-in-nodejs.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/rest-api-in-nodejs.png">
							<div className="price">Backend Programming</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Develop REST API</h5>
								<p>Connection with Database</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 backend">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/expressjs.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/expressjs.png">
							<div className="price">Backend Programming</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>ExpressJS</h5>
								<p>Fastest Web Framework for NodeJS</p>
							</div>
						</div>
					</div>
				</div>



				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 mobile">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/React-Native.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/React-Native.png">
							<div className="price">Mobile Apps</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>React Native</h5>
								<p>Javascript for Native Mobile apps</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 mobile">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/meteor.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/meteor.png">
							<div className="price">Mobile Apps</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>MeteorJS</h5>
								<p>Fastest Way to Build JS Apps</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 mobile">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/rest-api-in-nodejs.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/rest-api-in-nodejs.png">
							<div className="price">Mobile Apps</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>iOS & Android Apps</h5>
								<p>Single Source Code for Both Apps</p>
							</div>
						</div>
					</div>
				</div>





				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/html5.jpg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/html5.jpg">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>HTML5</h5>
								<p>Latest Web Scripting Language</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/css3.webp')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/css3.webp">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>CSS3</h5>
								<p>For Advanced Web Designs</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/bootstrap.jpg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/bootstrap.jpg">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Bootstrap</h5>
								<p>Make Your sites Mobile Friendly</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/JavaScript.jpg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/JavaScript.jpg">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Javascript</h5>
								<p>Making Sites Super Interactive</p>
							</div>
						</div>
					</div>
				</div>

				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/jquery.jpg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/jquery.jpg">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>JQuery</h5>
								<p>Smart way of Javascripting</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/svg.svg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/svg.svg">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>SVG Graphics</h5>
								<p>Scalable Vector Graphics for Web</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/web-canvas.jpg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/web-canvas.jpg">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Canvas</h5>
								<p>Modern web graphics & animation</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/web_animation.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/web_animation.png">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>CSS3 Animation</h5>
								<p>Amazing slick web animations</p>
							</div>
						</div>
					</div>
				</div>

				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 finance">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/parallax-effect.jpg')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/parallax-effect.jpg">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Parallax Effects</h5>
								<p>Special & Wow Effects on Website</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/geolocation.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/geolocation.png">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>GeoMapping</h5>
								<p>Google Map Integration</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/drag-drop.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/drag-drop.png">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Drag & Drop</h5>
								<p>Latest Trend in Web Apps</p>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- course -->*/}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{backgroundImage:"url('https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/particle-effect.png')"}} data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/particle-effect.png">
							<div className="price">Web Technologies</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Particle Effect</h5>
								<p>Screamingly Wow Effects</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
	{/*<!-- course section end -->*/}


	{/*<!-- signup section -->*/}
{/*<!-- 	<section className="signup-section spad">
		<div className="signup-bg set-bg" data-setbg="https://iassureit-website.s3.ap-south-1.amazonaws.com/trainingAcademy/Super30-Fullstack-Training.jpeg"></div>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6">
					<div className="signup-warp">
						<div className="section-title text-white text-left">
							<h2>India's Best Fullstack Developer Training Program</h2>
							<p>IT Industry is calling you. You have a guaranteed job available in IT Companies, provided you are master of Fullstack Programming. Learn these technologies from Industry's  famous Technology Guru Mr. Ashish Naik </p>
						</div>
						{/*<!-- signup form -->
					<form className="signup-form">
							<input type="text" placeholder="Your Name">
							<input type="text" placeholder="Your E-mail">
							<input type="text" placeholder="Your Phone">
							<button className="site-btn">I want to Join this Course</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section> -->*/}
	{/*<!-- signup section end -->*/}


	<section className="search-section">
		<div className="row">
			<div className="container-fluid">
				<div className="search-warp">
					<div className="section-title text-white">
						<h2>Visit Us Today</h2>
					</div>
					<div className="row">
						<div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1">
						<p>We conduct special counselling sessions in our office. When you attend this session, you will come to know <br/>
						➡ How to get a fantastic Job in IT Industry?<br/>
						➡ How to prepare yourself for a great career in IT?<br/>
						➡ What you should learn which is in highest demand in IT?<br/>
						➡ How SUPER-30 FULLSTACK DEVELOPER TRAINING PROGRAM will give make you job ready?<br/>
						</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/*<!-- banner section -->*/}
	<section className="banner-section spad">
		<div className="container">
			<div className="section-title mb-0 pb-2">
				<h2>Office Address</h2>
			</div>
			<div className="text-center pt-5">
				<h3>iAssure Advance Technologies Academy</h3>
				<br/>
				<p><b>Office of:</b>
				iAssure International Technologies Pvt Ltd<br/>
				#323, Amanora Chambers, Hadapsar,<br/>
				Pune, Maharashtra, India – 411013			<br/>
				</p>
			</div>
		</div>

		<div className="container-fluid">
			<div className="col-lg-10" style={{position: "relative",left: "9%"}}>
				<iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=iAssureIT%20hadapsar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
				</iframe>
				<a href="https://www.emojilib.com">emojilib.com</a>
			</div>
		</div>
	</section>



	{/*<!-- footer section -->*/}
	<footer className="footer-section spad pb-0">
		<div className="footer-top">
			<div className="footer-warp">
				<div className="row">
					<div className="widget-item">
						<h4>Our Address</h4>
						<ul className="contact-list">
							<li><b>Office of:</b>
								iAssure International Technologies Pvt Ltd <br/>
								#323, Amanora Chambers, Hadapsar, <br/>
								Pune, Maharashtra, India – 411013	<br/>
							</li>
						</ul>
					</div>
					<div className="widget-item">
						<h4>Contact Details</h4>
						<ul>
							<li>Phone : +91 90220 38960</li>
							<li>Email : iassure-academy@gmail.com</li>
						</ul>
					</div>
					<div className="widget-item">
						<h4>Social Media</h4>
						<ul>
							<li><a href="https://www.facebook.com/IAssure-Advance-Technology-Training-Academy-169770017082358/">Facebook Page</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-bottom">
			<div className="footer-warp">
{/*<!-- 				<ul className="footer-menu">
					<li><a href="#">Terms & Conditions</a></li>
					<li><a href="#">Register</a></li>
					<li><a href="#">Privacy</a></li>
				</ul>
 -->*/}				<div className="copyright">
					Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.
				</div>
			</div>
		</div>
	</footer> 
				



			</div>
		);
	}
}
