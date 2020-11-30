import React, { Component } from 'react';
import '../../CSS/draftRounds.css';
import DraftOverView from './../subComponents/draftRoundsOverview';
import redHelmet from '../../Assets/Images/object2.png';
class DraftRounds extends Component {
	state = {};
	render() {
		return (
			<div style={{ marginLeft: '50px', marginRight: '50px' }}>
				<div class="w3-card">
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
						<div className="col-lg-1 col-md-2 col-sm-2 col-xs-2 ml-0" style={{marginRight:"20px"}}>
							<div className="draftRoundTime" style={{ marginLeft: ' 20px' }}>
								<span>01:20</span>
							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2  ml-1 draftTeamDiv" >
							<div>
								<p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 1-ON THE CLOCK</p>
								<span>
									<img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
									<span>TEAM XYZ</span>
								</span>
							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 draftTeamDiv2 ml-1 ">
							<p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 2</p>
							<span>
								<img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
								<span>TEAM XYZ</span>
							</span>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 draftTeamDiv2 ml-1 mr-1">
							<p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 2</p>
							<span>
								<img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
								<span>TEAM XYZ</span>
							</span>
						</div>

						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 draftTeamDiv2 ml-1 ">
							<p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 2</p>
							<span>
								<img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
								<span>TEAM XYZ</span>
							</span>
						</div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 draftTeamDiv2 ml-2 mr-2" >
                        <p style={{ letterSpacing: '1px', wordSpacing: '4px' }}>PICK 2</p>
                        <span>
                            <img src={redHelmet} style={{ float: 'left', marginRight: '5px' }} />
                            <span>TEAM XYZ</span>
                        </span>
                        
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
		);
	}
}

export default DraftRounds;
