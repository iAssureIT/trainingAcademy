import React from 'react';
import $ from "jquery";
import {Route, withRouter, Link} from 'react-router-dom';
import './Syllabus.css';

export default class Syllabus extends React.Component {

	constructor(props) {
		super(props);
	}
    
    eventclk1(event){
    event.preventDefault();


    $(event.currentTarget).children('.treeview-menu').slideToggle();
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).children(".rotate").slideToggle("down"); 
    $(event.currentTarget).siblings('li').removeClass('active');
    // $(event.currentTarget).siblings('li').children('.treeview-menu').toggle();

  }  
	render() {
		return (
			<div>
				<div className="col-lg-12 col-md-12 hidden-xs hidden-sm">
					<div className="col-lg-12  col-md-12  hidden-xs hidden-sm">
					<h2 className="syllabustxt">Syllabus</h2>
					<p className="syllabustxt1">iAssureIT offer course in Graphics and UI Designing. The course is designed in 
					such a manner that the student will get industry based training, certification.</p>
					</div>
            {/*<div className="syllabustxt">
             <div className="col-lg-12 useaccordian">
              <div className="col-lg-6">1 HTML5</div>
              <div className="col-lg-6">2 CSS</div>
              <div className="col-lg-6">3 JAVASCRIPT</div>
              <div className="col-lg-6">4 BOOTSTRAP 3 & 4</div>
              <div className="col-lg-6">5 JQUERY</div>
              <div className="col-lg-6">6 PARALLAX EFFECTS</div>
              <div className="col-lg-6">7 CSS3 Animation</div>
              <div className="col-lg-6">8 SVG Graphics</div>
              <div className="col-lg-6">9 Canvas</div>
              <div className="col-lg-6">10 Geolocation using Google Maps</div>
              <div className="col-lg-6">11 Drag-and-Drop</div>
              <div className="col-lg-6">12 ParticleJS</div>
            </div> 
          </div>*/}
				</div>
			</div>
		);
	}
}
