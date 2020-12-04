import React, { Component } from 'react';
import object2 from '../../Assets/Images/object2.png';
// import object2 from '../../Assets/Images/object2.png';
import revert from '../../Assets/Images/reverrtHelmet.png'

class leagueScheduleMobileView extends Component {
    render() {
        return (
            <div className="container">
                		<div className="row">
							<div className="col-6">
                            <span style={{ float: 'left' }}>
									<span style={{ fontSize: '10px' }}>
										By Team{' '}
										<span className="ml-2">
											<div class="btn-group">
												<button
													type="button"
													class="btn btn-outline-secondary dropdown-toggle"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
													style={{
                                                        fontSize: '10px',
														borderRadius: '16px',
														paddingLeft: '5px',
                                                        marginLeft: '2px',
                                                        padding: '5px'
													}}
												>
													All Team
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
                            <div className="col-6">
                            <span style={{ float: 'left' }}>
									<span style={{ fontSize: '10px' }}>
										WEEK<span className="ml-2">
											<div class="btn-group">
												<button
													type="button"
													class="btn btn-outline-secondary dropdown-toggle"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
													style={{ padding: '5px', borderRadius: '16px', paddingLeft: '5px' ,fontSize: '10px'}}
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
                               <div className="row">
                               <h6 className="h6" style={{
                                fontSize: '10px',
                                marginLeft: '13px'
                            }}> WEEK 4</h6>
                               </div>

                               <div className="container">
                               <div className="row">
                                   <div className="col-5">
                                   <b>Home Team</b>
                                   </div>
                                   <div className="col-3">
                                   <b>Scores</b>
                                   </div>
                                   <div className="col-4">
                                   <b style={{
                                       float: 'right'
                                   }}>Away Team</b>
                                   </div>
                               </div>
                               </div>
				
				<div className="row lg-12 tableRow">
                    <div className="col-6">
							<div className="row lg-12">
								<div className="col-3">
									<img  style={{width : '30px' }} className="" src={object2} />
								</div>
								<div className="col-9">
									<h4 style={{fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4>
									<h6 style={{fontSize : '10px' }}>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-6">
							<div className="row lg-12">
								<div className="col-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right', fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4><br/>
										<h6 style={{ float: 'right', fontSize : '10px' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-3">
									<img style={{ float: 'right', width: '30px' }} className="" src={revert} />
								</div>
							</div>
						</div>
					</div>
                    <div className="row lg-12 tableRow">
                    <div className="col-6">
							<div className="row lg-12">
								<div className="col-3">
									<img  style={{width : '30px' }} className="" src={object2} />
								</div>
								<div className="col-9">
									<h4 style={{fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4>
									<h6 style={{fontSize : '10px' }}>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-6">
							<div className="row lg-12">
								<div className="col-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right', fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4><br/>
										<h6 style={{ float: 'right', fontSize : '10px' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-3">
									<img style={{ float: 'right', width: '30px' }} className="" src={revert} />
								</div>
							</div>
						</div>
					</div>
                    <div className="row lg-12 tableRow">
                    <div className="col-6">
							<div className="row lg-12">
								<div className="col-3">
									<img  style={{width : '30px' }} className="" src={object2} />
								</div>
								<div className="col-9">
									<h4 style={{fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4>
									<h6 style={{fontSize : '10px' }}>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-6">
							<div className="row lg-12">
								<div className="col-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right', fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4><br/>
										<h6 style={{ float: 'right', fontSize : '10px' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-3">
									<img style={{ float: 'right', width: '30px' }} className="" src={revert} />
								</div>
							</div>
						</div>
					</div>
                    <div className="row lg-12 tableRow">
                    <div className="col-6">
							<div className="row lg-12">
								<div className="col-3">
									<img  style={{width : '30px' }} className="" src={object2} />
								</div>
								<div className="col-9">
									<h4 style={{fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4>
									<h6 style={{fontSize : '10px' }}>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-6">
							<div className="row lg-12">
								<div className="col-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right', fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4><br/>
										<h6 style={{ float: 'right', fontSize : '10px' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-3">
									<img style={{ float: 'right', width: '30px' }} className="" src={revert} />
								</div>
							</div>
						</div>
					</div>
                    <div className="row lg-12 tableRow">
                    <div className="col-6">
							<div className="row lg-12">
								<div className="col-3">
									<img  style={{width : '30px' }} className="" src={object2} />
								</div>
								<div className="col-9">
									<h4 style={{fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4>
									<h6 style={{fontSize : '10px' }}>Manager ID</h6>
								</div>
							</div>
						</div>

						<div className="col-6">
							<div className="row lg-12">
								<div className="col-9">
									<div style={{ float: 'right' }}>
										<h4 style={{ float: 'right', fontSize : '10px' ,fontWeight: 'bold' }}>TEAM NAME</h4><br/>
										<h6 style={{ float: 'right', fontSize : '10px' }}>Manager ID</h6>
									</div>
								</div>
								<div className="col-3">
									<img style={{ float: 'right', width: '30px' }} className="" src={revert} />
								</div>
							</div>
						</div>
					</div>
				
            </div>
        );
    }
}

export default leagueScheduleMobileView;