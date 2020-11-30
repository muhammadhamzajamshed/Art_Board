
import React, { Component } from 'react';
import greenBullet from  '../../../Assets/Images/greenBullet.png'

class LiveUpdates extends Component {
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
							LIVE Updates
						</h3>

                        <div class="container">
                        
                            <div className="row ml-1">
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                           <span > <img src={greenBullet}/></span>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-11 col-xs-11">
                            <span>Josh Allen (ATL, QB) has scored a 
                            Touchdown - 3PTS for Joe's Club</span>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-0 col-xs-0">
                          
                            </div>
                           
                            </div>
                            <div className="ml-5 mr-5"><hr style={{borderTop: "2px solid  rgb(233, 227, 227)"}}/></div>
  
                            

                            <div className="row ml-1">
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                           <span > <img src={greenBullet}/></span>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-11 col-xs-11">
                            <span>Josh Allen (ATL, QB) has scored a 
                            Touchdown - 3PTS for Joe's Club</span>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-0 col-xs-0">
                          
                            </div>
                           
                            </div>
                            <div className="ml-5 mr-5"><hr style={{borderTop: "2px solid  rgb(233, 227, 227)"}}/></div>
                            



                            <div className="row ml-1">
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                           <span > <img src={greenBullet}/></span>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-11 col-xs-11">
                            <span>Josh Allen (ATL, QB) has scored a 
                            Touchdown - 3PTS for Joe's Club</span>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-0 col-xs-0">
                          
                            </div>
                           
                            </div>
                            <div className="ml-5 mr-5"><hr style={{borderTop: "2px solid  rgb(233, 227, 227)"}}/></div>
                            

</div>
						<footer class="w3-container">
							<p
								style={{
									textAlign: 'center'
								}}
							/>
						</footer>
					</div>
				</div>
            </div>

		);
	}
}

export default LiveUpdates;
