import React, { Component } from 'react';
import '../../CSS/draftRounds.css';
import DraftOverView from './../subComponents/draftRoundsOverview';
import redHelmet from '../../Assets/Images/object2.png';
import background from '../../Assets/Images/LeagueMenu.png'

class DraftRounds extends Component {
	state = {};
	render() {
		return (
			<div>
				<div className="webDraftRound">
				<div  style={{  backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}  >
			<br/>
				<div style={{ marginLeft: '50px', marginRight: '50px', backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}  >
				<div class="w3-card ml-3 mr-3" style={{ backgroundColor:"white"}}>
					<h3
						style={{
							backgroundColor: 'rgb(0, 0, 46)',
							color: 'white',
							paddingLeft: '10px',
							paddingTop: '10px',
							paddingBottom: '10px',
							fontFamily: 'Bebas Neue,cursive',
							letterSpacing: '1px'
						}}
					>
						Round 1 of 16
					</h3>

					<div className=" row lg-12">
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ml-2" style={{marginRight:"20px"}}>
							<div className="draftRoundTime" style={{ marginLeft: ' 20px' }}>
								<span>01:20</span>
							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2  ml-2 draftTeamDiv" >
							<div>
								<p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 1-ON THE CLOCK</p>
								<span>
									<img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
									<span>TEAM XYZ</span>
								</span>
							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 draftTeamDiv2 ml-2 ">
							<p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 2</p>
							<span>
								<img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
								<span>TEAM XYZ</span>
							</span>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 draftTeamDiv2 ml-2 mr-1">
							<p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 2</p>
							<span>
								<img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
								<span>TEAM XYZ</span>
							</span>
						</div>

						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 draftTeamDiv2 ml-2 ">
							<p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 2</p>
							<span>
								<img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
								<span>TEAM XYZ</span>
							</span>
						</div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 draftTeamDiv2 ml-2 mr-2" >
                        
                        
                        </div>
					</div>

					<footer class="w3-container">
						<p
							style={{
								textAlign: 'center'
							}}
						/>
					</footer>
				</div>

				<br />
				<DraftOverView />
			</div>


			</div>
				</div>
				<div className="mobDraftRound" style={{
					backgroundColor: 'whitesmoke'
				}}>
					<br/>
					<div className="container-fluid">
						<div className="row">
									<div className="col-6">
										<div class="w1-card ml-3" style={{ backgroundColor:"white"}}>
										<h3
											style={{
												backgroundColor: 'rgb(0, 0, 46)',
												color: 'white',
												paddingLeft: '10px',
												paddingRight: '10px',
												paddingTop: '5px',
												paddingBottom: '5px',
												fontFamily: 'Bebas Neue,cursive',
												textAlign: 'center',
												fontSize : '20px'
											}}
										>
											Round 1 of 16
										</h3>
										<div className="draftRoundTime" style={{ textAlign: 'center', fontSize: '42px' }}>
											<span>01:20</span>
										</div>
										</div>
									</div>
									<div className="col-6">
										<div className="row">
											<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2  mr-3 draftTeamDiv" >
											<div  style={{
													textAlign : 'center'
												}}>
												<p style={{ fontSize: '12px'}}>PICK 1-ON THE CLOCK</p>
												<span>
													<img src={redHelmet} style={{ width: '36px' }} />
													<span style={{fontSize: '12px' }}>TEAM XYZ</span>
												</span>
											</div>
											</div>
										</div>
										<div className="row mr-1" style={{
											marginTop: '6px'
										}}>
											<div className="col-4" style={{
												backgroundColor: '#cbcbcb',
												fontFamily: 'Bebas Neue,cursive',
												color: 'white',
												marginRight: '1px',
												marginLeft: '-2px'
											}}>
												<div className="row ml-1" style={{
													textAlign: 'center'
												}}>
													Pick 2
												</div>
												<div className="row" style={{
													marginLeft: '0px'
												}}>
													<img src={redHelmet} style={{ width: '16px' }} />
													<span style={{fontSize: '12px' }}>TEAM XYZ</span>
												</div>
											</div>

											<div className="col-4" style={{
												backgroundColor: '#cbcbcb',
												fontFamily: 'Bebas Neue,cursive',
												color: 'white',
												marginRight: '1px',
											}}>
												<div className="row ml-1" style={{
													textAlign: 'center'
												}}>
													Pick 2
												</div>
												<div className="row" style={{
													marginLeft: '0px'
												}}>
													<img src={redHelmet} style={{ width: '16px' }} />
													<span style={{fontSize: '12px' }}>TEAM XYZ</span>
												</div>
											</div>

											<div className="col-4" style={{
												backgroundColor: '#cbcbcb',
												fontFamily: 'Bebas Neue,cursive',
												color: 'white',
											}}>
												<div className="row ml-1" style={{
													textAlign: 'center'
												}}>
													Pick 2
												</div>
												<div className="row" style={{
													marginLeft: '0px'
												}}>
													<img src={redHelmet} style={{ width: '16px' }} />
													<span style={{fontSize: '12px' }}>TEAM XYZ</span>
												</div>
											</div>
										</div>
										
									</div>
					</div>
						<br/>
						<div className="row">
						<DraftOverView />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DraftRounds;
