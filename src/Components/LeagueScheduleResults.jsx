import React, { Component } from 'react';
import '../CSS/LeagueScheduleResults.css';
import object1 from '../Assets/Images/object1.png';
import object2 from '../Assets/Images/object2.png';
class LeagueScheduleResults extends Component {
	state = {};
	render() {
		return (
			<div className="card LeagueSchedule ">
				<div className="row heading lg-12">
					<h5 className="headingFont">LEAGUE SCHEDULE AND RESULTS</h5>
				</div>
				<div className="row  leftPadding">
					<p className="para alignContent">By Team</p>
					<span className="dropdown">
						<a
							className="btn btn-secondary dropdown-toggle dropDown"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							All Team
						</a>
					</span>
					<p className="para alignContent">Week</p>
					<span className="dropdown">
						<a
							class="btn  dropdown-toggle"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Upcoming
						</a>
					</span>
				</div>
				<h6 className="h6"> WEEK 4</h6>

				<div className="row">
					<div className="row tableRow">
						<div className="col-lg-6 ">
							<div className="row lg-12">
								<div className="col-lg-4">
									<img className="imgStyle" src={object2} />
								</div>
								<div className="col-lg-8">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
								</div>
							</div>
						</div>
            <div className="col-lg-6" >
            <div className="row lg-12">
								<div className="col-lg-4">
									<img className="imgStyle" src={object2} />
								</div>
								<div className="col-lg-8">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
								</div>
							</div>
            
            
            </div>
					</div>
				</div>
			</div>
		);
	}
}

export default LeagueScheduleResults;
