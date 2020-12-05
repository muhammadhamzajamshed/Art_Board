import React, { Component } from 'react';
import { FiSettings } from 'react-icons/fi';
import '../../CSS/PlayOffBrackets.css';
import circle from '../../Assets/Images/Ellipse.png';
import line from '../../Assets/Images/Line.png';
import vline from '../../Assets/Images/VLine.png';
import playoffs from '../../Assets/Images/Playoffs.png';

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
							<div className="col-lg-6 col-md-6 col-sm-6 paraContent">
								<p>round 1 | NFL WEEK 14-15</p>
							</div>
							<div className="col-lg-5 col-md-5 col-sm-5 paraContent">
								<p>CHAMPIONSHIP | NFL WEEK 16</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-5 ">
						<div className="box boxSizeMobile boxesMargin">
							<div>
								<img src={circle} className="circle circleImageSize" />
							</div>
							<div>
								<img src={circle} className="circle circleImageSize" />
							</div>
						</div>
						<div className="box boxSizeMobile">
							<div>
								<img src={circle} className="circle circleImageSize" />
							</div>
							<div>
								<img src={circle} className="circle circleImageSize" />
							</div>
						</div>
					</div>
					<div className="col-7">
						<div className="box1 boxesMargin" />
						<div
							className="box boxSizeMobile boxesMargin"
							style={{ marginLeft: '35px', marginTop: '50px', marginBottom: '50px' }}
						>
							<div>
								<img src={circle} className="circle circleImageSize" />
							</div>
							<div>
								<img src={circle} className="circle circleImageSize" />
							</div>
						</div>
					</div>
					
				</div>
				<hr className="new5" />
				<h6 className="h6PlayOffs">Winners Consolation ladder</h6>
				<div className="box boxSizeMobile">
					<div>
						<img src={circle} className="circle circleImageSize" />
					</div>
					<div>
						<img src={circle} className="circle circleImageSize" />
					</div>
				</div>
				<br />
			</div>
		);
	}
}

export default PlayOffBrackets;
