import React, { Component } from 'react';
import '../CSS/LeagueScheduleResults.css';
import object1 from '../Assets/Images/object1.png';
import object2 from '../Assets/Images/object2.png';

import revert from '../Assets/Images/reverrtHelmet.png';

class LeagueScheduleResults extends Component {
	state = {};
	render() {
		return (
			<div className="card LeagueSchedule ">
				<div className="w3-card heading lg-12">
					<h5 className="headingFont ml-1">LEAGUE SCHEDULE AND RESULTS</h5>
				</div>
				<div className="row ml-2 mt-3 mb-3">
					<div className="col-lg-10 col-md-10">
						<div className="row lg-12">
							<div className="col-lg-5 col-md-5 mr-2">
								<span style={{ float: 'left' }}>
									<span style={{ fontSize: '22px' }}>
										By TEAM{' '}
										<span className="ml-2">
											<div class="btn-group">
												<button
													type="button"
													class="btn btn-outline-secondary dropdown-toggle"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
													style={{
														borderRadius: '16px',
														paddingLeft: '5px',
														marginLeft: '2px'
													}}
												>
													All TEAM
												</button>
												<div class="dropdown-menu">
													<a class="dropdown-item" href="#">
														Action
													</a>
													<a class="dropdown-item" href="#">
														Another action
													</a>
													<a class="dropdown-item" href="#">
														Something else here
													</a>
													<div class="dropdown-divider" />
													<a class="dropdown-item" href="#">
														Separated link
													</a>
												</div>
											</div>
										</span>
									</span>
								</span>
							</div>
							<div className="col-lg-5 col-md-5">
								<span style={{ float: 'left' }}>
									<span style={{ fontSize: '22px' }}>
										WEEK<span className="ml-2">
											<div class="btn-group">
												<button
													type="button"
													class="btn btn-outline-secondary dropdown-toggle"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
													style={{ borderRadius: '16px', paddingLeft: '5px' }}
												>
													UPCOMING
												</button>
												<div class="dropdown-menu">
													<a class="dropdown-item" href="#">
														Action
													</a>
													<a class="dropdown-item" href="#">
														Another action
													</a>
													<a class="dropdown-item" href="#">
														Something else here
													</a>
													<div class="dropdown-divider" />
													<a class="dropdown-item" href="#">
														Separated link
													</a>
												</div>
											</div>
										</span>
									</span>
								</span>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-2" />
				</div>
				<h6 className="h6"> WEEK 4</h6>
				<div className="row headingMargin">
					<div className="col-lg-4">
						<p>Home Team</p>
					</div>
					<div className="col-lg-4" style={{ textAlign: 'center' }}>
						<p>Scores</p>
					</div>
					<div className="col-lg-4 ">
						<p style={{ float: 'right', marginRight: '35px' }}>Away Team</p>
					</div>
				</div>
				<div className="">
					<div className="row lg-12 tableRow">
						<div className="col-lg-6 col-md-6">
							<div className="row lg-12">
								<div className="col-lg-3 col-md-3">
									<img className="" src={object2} />
								</div>
								<div className="col-lg-9 col-md-9">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-lg-6  col-md-6">
							<div className="row lg-12">
								<div className="col-lg-9 col-md-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right' }}>TEAM NAME</h4>
										<h6 style={{ float: 'right' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-lg-3 col-md-3">
									<img style={{ float: 'right' }} className="" src={revert} />
								</div>
							</div>
						</div>
					</div>

					<div className="row lg-12 tableRow">
						<div className="col-lg-6 col-md-6">
							<div className="row lg-12">
								<div className="col-lg-3 col-md-3">
									<img className="" src={object2} />
								</div>
								<div className="col-lg-9 col-md-9">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-lg-6  col-md-6">
							<div className="row lg-12">
								<div className="col-lg-9 col-md-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right' }}>TEAM NAME</h4>
										<h6 style={{ float: 'right' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-lg-3 col-md-3">
									<img style={{ float: 'right' }} className="" src={revert} />
								</div>
							</div>
						</div>
					</div>

					<div className="row lg-12 tableRow">
						<div className="col-lg-6 col-md-6">
							<div className="row lg-12">
								<div className="col-lg-3 col-md-3">
									<img className="" src={object2} />
								</div>
								<div className="col-lg-9 col-md-9">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-lg-6  col-md-6">
							<div className="row lg-12">
								<div className="col-lg-9 col-md-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right' }}>TEAM NAME</h4>
										<h6 style={{ float: 'right' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-lg-3 col-md-3">
									<img style={{ float: 'right' }} className="" src={revert} />
								</div>
							</div>
						</div>
					</div>

					<div className="row lg-12 tableRow">
						<div className="col-lg-6 col-md-6">
							<div className="row lg-12">
								<div className="col-lg-3 col-md-3">
									<img className="" src={object2} />
								</div>
								<div className="col-lg-9 col-md-9">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-lg-6  col-md-6">
							<div className="row lg-12">
								<div className="col-lg-9 col-md-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right' }}>TEAM NAME</h4>
										<h6 style={{ float: 'right' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-lg-3 col-md-3">
									<img style={{ float: 'right' }} className="" src={revert} />
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
