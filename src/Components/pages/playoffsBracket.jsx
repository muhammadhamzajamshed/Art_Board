import React, { Component } from 'react';
import { FiSettings } from 'react-icons/fi';
import '../../CSS/PlayOffBrackets.css';
import circle from '../../Assets/Images/Ellipse.png';
import line from '../../Assets/Images/Line.png';
import vline from '../../Assets/Images/VLine.png';
import playoffs from '../../Assets/Images/Playoffs.png';
import { Bracket, RoundProps } from 'react-brackets';

const rounds = [
	{
	  title: '',
	  seeds: [
		{
		  id: 1,
		  
		  teams: [{ name: <img src={circle} className="circle circleImageSize" alt=""/> }, { name: <img src={circle} className="circle circleImageSize" alt=""/> }],
		},
		{
		  id: 2,
		  
		  teams: [{ name: <img src={circle} className="circle circleImageSize" alt=""/> }, { name: <img src={circle} className="circle circleImageSize" alt=""/> }],
		},
	  ],
	},
	{
	  title: '',
	  seeds: [
		{
		  id: 3,
		
		  teams: [{ name: <img src={circle} className="circle circleImageSize" alt=""/> }, { name: <img src={circle} className="circle circleImageSize" alt=""/> }],
		},
	  ],
	},
  ];

class PlayOffBrackets extends Component {
	state = {};
	render() {


	

		return (
			<div className="card PlayOffBrackets ">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<h5 className="playOffsH5">
							PLAYOFFS BRACKET <span className="playOffsGreyHeading">GORDON SUPER LEAGUE</span>
						</h5>
						<hr className="new5" />

						<h6 className="h6PlayOffs">Champions Bracket</h6>
						<div className="row">
							<div className="col-6 paraContent">
								<p>round 1 | NFL WEEK 14-15</p>
							</div>
							<div className="col-6 paraContent">
								<p>CHAMPIONSHIP | NFL WEEK 16</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<Bracket rounds={rounds} mobileBreakpoint={2} style={{backgrundColor:"white" }} />
					
				</div>
				<hr className="new5" />
				<h6 className="h6PlayOffs">Winners Consolation ladder</h6>
				<div className="box boxSizeMobile">
					<div>
						<img src={circle} className="circle circleImageSize" alt="" />
					</div>
					<div>
						<img src={circle} className="circle circleImageSize" alt=""/>
					</div>
				</div>
				<br />
			</div>
		);
	}
}

export default PlayOffBrackets;
