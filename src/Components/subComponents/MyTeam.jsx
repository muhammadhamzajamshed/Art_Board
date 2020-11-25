import React, { Component } from 'react';

import red from '../../Assets/Images/object2.png';

class MyTeam extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<div class="w3-container">
					
					<div class="w3-card">
						<h3
							style={{
								backgroundColor: 'rgb(0, 0, 46)',
								color: 'white',
								textAlign: 'center',
								paddingTop: '10px',
								paddingBottom: '10px',
								fontFamily: 'Bebas Neue,cursive',
								letterSpacing: '1px'
							}}
						>
							MY TEAM
						</h3>

						<div class="container">
                        <div
								className="row "
								style={{
									
									padding: '10px',
									textAlign: 'justify',
									marginLeft: '10px',
									marginRight: '10px',
									marginBottom: '8px',
									marginTop: '6px'
								}}
							>
								<div className="col-lg-12 col-md-12 col-sm-12">
									<span style={{fontFamily:'Gilroy '}}>
										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '78px',
												height: '72px'
											}}
											src={red}
										/>
                                        JOE'S CLUB
                                        <span style={{color:'#CBCBCB'}}>  2-0-1
                                    #2 SUPER LEAGUE
                                    </span>
                                    </span>
                                    
								</div>
								
							</div>
						    
                        

							{/*<p style={{
                        backgroundColor: 'rgb(241, 241, 241)',
                        padding: '10px',
                        textAlign: 'justify'
                    }}>JOE'S CLUB</p>*/}
                    
						</div>

						<footer class="w3-container">
							<p
								style={{
									textAlign: 'center',
									
								}}
							>
							My Team home
							</p>
                            </footer>  
					</div>
				</div>
			</div>
		);
	}
}

export default MyTeam;
