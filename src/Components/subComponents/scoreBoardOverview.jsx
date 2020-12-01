import React, { Component } from 'react';
import '../../CSS/scoreBoardOverview.css';
import online from '../../Assets/Images/online.png';
import redHelmet from '../../Assets/Images/object2.png';
import revertHelmet from '../../Assets/Images/reverrtHelmet.png';
import player from '../../Assets/Images/playerBackground.png';
class ScoreBoardOverview extends Component {
	state = {};
	render() {
		return (
			<div className="card scoreBoardOverview" style={{paddingRight: '22px' }}>
				<div className="row">
					<div className="col-lg-7 col-md-7 col-sm-7">
						<h5 className="h5scoreBoardOverview ">overview</h5>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-5" />
				</div>
				<div className="row mt-6" style={{ marginTop: '15px' }}>
					<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
						<div className="row lg-12 overviewInc">
							<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1  text-center ">
								<div className="sboblueDiv sboincDecButton">
									<span className=""> &#60;</span>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3  scoreboardOverviewFontColor">
								<span>NFL Week 10</span>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
								<span>
									NFL Week 11 <img src={online} />
								</span>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 scoreboardOverviewFontColor">
								<span>NFL Week 12 </span>
							</div>
							<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1  text-center ">
								<div className="sboblueDiv sboincDecButton">
									<span className=""> &#62;</span>
								</div>
							</div>
							<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 " />
						</div>
					</div>
					<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
						<i class="fa fa-calendar" style={{ fontSize: '36px', float: 'right', marginRight: '15px' }} />
					</div>
				</div>

				<div className="row ">
					<div className="col-lg-6 col-md-6 ">
						<div className=" ">
							<div className="row lg-12 ml-2 sboBorder">
								<div className="col-lg-4 col-md-4 col-sm-4" >
									<div>
										<img src={redHelmet} style={{width:"50px",height:"50px"}}/>
									</div>
									<div>
										{' '}
										<span style={{ color: '#00002E', fontWeight: 'bold' }}>JOE'S Club</span>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-4">
									<div className="text-center">
										<span style={{ color: 'green' }}><img src={online}/> IN-Play</span>
									</div>
									<div className="text-center">
										<span style={{ color: 'green' }}>80.0 </span> -<span>78.0</span>
									</div>
								</div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                <div style={{float:"right"}}>
									<div style={{ float: 'right' }}>
										<img src={revertHelmet} style={{width:"50px",height:"50px"}}/>
									</div>
									<br />
									<div style={{ float: 'right' }}>
										{' '}
										<span style={{ color: '#00002E', fontWeight: 'bold', float: 'right' }}>
											TEAM GORDON
										</span>
                                    </div>
                                    </div>
								</div>
							</div>
						</div>

						<div className="row text-center ml-2">
							<div className="col-lg-6 col-md-6 sboBorder">
								<div className="row lg-12 text-center ">
									<div className="col-lg-6 col-lg-6 col-md-6">
										<span style={{ float: 'left' }}>Playing: 2</span>
									</div>
									<div className="col-lg-6 col-lg-6 col-md-6">
										<span style={{ float: 'right' }}>To-play: 3</span>
									</div>
								</div>
								<div className="row lg-12 text-center ">
									<div className="col-lg-6 col-md-6">
										<span style={{ float: 'left' }}>Mins left: 120</span>
									</div>
									<div className="col-lg-6 col-md-6">
										<span style={{ float: 'right' }}>Proj. Pts: 110.2</span>
									</div>
								</div>

								<div className="text-center">
									<h5 style={{color:"#CBCBCB"}}>TOP PERFORMERS</h5>
								</div>

								<div className="row">
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}} />
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}}/>
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}}/>
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
								</div>
								
                            </div>
                            <div className="col-lg-6 col-md-6 sboBorder" >
                            
                            
                            <div className="row lg-12 text-center ">
									<div className="col-lg-6 col-lg-6 col-md-6">
										<span style={{ float: 'left' }}>Playing: 2</span>
									</div>
									<div className="col-lg-6 col-lg-6 col-md-6">
										<span style={{ float: 'right' }}>To-play: 3</span>
									</div>
								</div>
								<div className="row lg-12 text-center ">
									<div className="col-lg-6 col-md-6">
										<span style={{ float: 'left' }}>Mins left: 120</span>
									</div>
									<div className="col-lg-6 col-md-6">
										<span style={{ float: 'right' }}>Proj. Pts: 110.2</span>
									</div>
								</div>

								<div className="text-center">
									<h5  style={{color:"#CBCBCB"}}>TOP PERFORMERS</h5>
								</div>

								<div className="row">
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player}  style={{width:"35px", height:"35px"}}/>
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}} />
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}}/>
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
								</div>
								
                            
                            
                            </div>
                            
						</div>
					</div>
                    <div className="col-lg-6 col-md-6" >
                    
                    
                    <div className=" ">
							<div className="row lg-12 ml-2 sboBorder">
								<div className="col-lg-4 col-md-4 col-sm-4" >
									<div>
										<img src={redHelmet} style={{width:"50px",height:"50px"}}/>
									</div>
									<div>
										{' '}
										<span style={{ color: '#00002E', fontWeight: 'bold' }}>JOE'S Club</span>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-4">
									<div className="text-center">
										<span style={{ color: 'green' }}><img src={online}/> IN-Play</span>
									</div>
									<div className="text-center">
										<span style={{ color: 'green' }}>80.0 </span> -<span>78.0</span>
									</div>
								</div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                <div style={{float:"right"}}>
									<div style={{ float: 'right' }}>
										<img src={revertHelmet} style={{width:"50px",height:"50px"}}/>
									</div>
									<br />
									<div style={{ float: 'right' }}>
										{' '}
										<span style={{ color: '#00002E', fontWeight: 'bold', float: 'right' }}>
											TEAM GORDON
										</span>
                                    </div>
                                    </div>
								</div>
							</div>
						</div>

						<div className="row text-center ml-2">
							<div className="col-lg-6 col-md-6 sboBorder">
								<div className="row lg-12 text-center ">
									<div className="col-lg-6 col-lg-6 col-md-6">
										<span style={{ float: 'left' }}>Playing: 2</span>
									</div>
									<div className="col-lg-6 col-lg-6 col-md-6">
										<span style={{ float: 'right' }}>To-play: 3</span>
									</div>
								</div>
								<div className="row lg-12 text-center ">
									<div className="col-lg-6 col-md-6">
										<span style={{ float: 'left' }}>Mins left: 120</span>
									</div>
									<div className="col-lg-6 col-md-6">
										<span style={{ float: 'right' }}>Proj. Pts: 110.2</span>
									</div>
								</div>

								<div className="text-center">
									<h5 style={{color:"#CBCBCB"}}>TOP PERFORMERS</h5>
								</div>

								<div className="row">
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}} />
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}}/>
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}}/>
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
								</div>
								
                            </div>
                            <div className="col-lg-6 col-md-6 sboBorder" >
                            
                            
                            <div className="row lg-12 text-center ">
									<div className="col-lg-6 col-lg-6 col-md-6">
										<span style={{ float: 'left' }}>Playing: 2</span>
									</div>
									<div className="col-lg-6 col-lg-6 col-md-6">
										<span style={{ float: 'right' }}>To-play: 3</span>
									</div>
								</div>
								<div className="row lg-12 text-center ">
									<div className="col-lg-6 col-md-6">
										<span style={{ float: 'left' }}>Mins left: 120</span>
									</div>
									<div className="col-lg-6 col-md-6">
										<span style={{ float: 'right' }}>Proj. Pts: 110.2</span>
									</div>
								</div>

								<div className="text-center">
									<h5  style={{color:"#CBCBCB"}}>TOP PERFORMERS</h5>
								</div>

								<div className="row">
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player}  style={{width:"35px", height:"35px"}}/>
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}} />
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div>
											<img src={player} style={{width:"35px", height:"35px"}}/>
										</div>
										<div className="text-center">
											<p> 20 PTS</p>
										</div>
									</div>
								</div>
								
                            
                            
                            </div>
                            
						</div>
                    
                    
                    
                    
                    </div>
				</div>
			</div>
		);
	}
}

export default ScoreBoardOverview;
