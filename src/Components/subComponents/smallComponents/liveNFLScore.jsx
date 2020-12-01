import React, { Component } from 'react';
import whiteCircle from '../../../Assets/Images/whiteCircle.png';
import redCircle from '../../../Assets/Images/redCircle.png';

import '../../../CSS/liveNFLScores.css'
class LiveNFLScore extends Component {
	state = {};
	render() {
		return (
			
				<div >
					<div class="w3-card mr-1">
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
							LIVE NFL SCORE
						</h3>

                        <div className="" >
                      
                            <div className="  row liveScore ml-1 mr-1 mt-2 mb-2" style={{backgroundColor:"#F2F2F2"}} >
                            <div className="col-lg-5 col-md-5 col-sm-5 liveScore "><span style={{float:"left"}}><img src={whiteCircle}/> TEAM A</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 ">
                            <div className="row lg-12 text-center ">
                            <div className="text-center">
                            <span style={{color:"green",fontWeight:"bold"}}> 34 <span style={{fontWeight:"bold"}}>-<span style={{ fontWeight:"bold"}}>17</span></span></span>
                            
                            
                            </div>
                            </div>
                            <div className=""><span style={{fontWeight:"bold"}}>FINAL</span></div>
                            
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 "><span style={{float:"right"}}>  TEAM A <span ><img src={redCircle}/></span> </span></div>
                            </div>




                        
                            <div className="  row liveScore ml-1 mr-1 mt-2 mb-2" style={{backgroundColor:"#F2F2F2"}} >
                            <div className="col-lg-5 col-md-5 col-sm-5 liveScore "><span style={{float:"left"}}><img src={whiteCircle}/> TEAM A</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 ">
                            <div className="row lg-12 text-center ">
                            <div className="text-center">
                            <span style={{color:"green",fontWeight:"bold"}}> 34 <span style={{fontWeight:"bold"}}>-<span style={{ fontWeight:"bold"}}>17</span></span></span>
                            
                            
                            </div>
                            </div>
                            <div className=""><span style={{fontWeight:"bold"}}>FINAL</span></div>
                            
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 "><span style={{float:"right"}}>  TEAM A <span ><img src={redCircle}/></span> </span></div>
                            </div>



                            <div className="  row liveScore ml-1 mr-1 mt-2 mb-2" style={{backgroundColor:"#F2F2F2"}} >
                            <div className="col-lg-5 col-md-5 col-sm-5 liveScore "><span style={{float:"left"}}><img src={whiteCircle}/> TEAM A</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 ">
                            <div className="row lg-12 text-center ">
                            <div className="text-center">
                            <span style={{color:"green",fontWeight:"bold"}}> 34 <span style={{fontWeight:"bold"}}>-<span style={{ fontWeight:"bold"}}>17</span></span></span>
                            
                            
                            </div>
                            </div>
                            <div className=""><span style={{fontWeight:"bold"}}>FINAL</span></div>
                            
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 "><span style={{float:"right"}}>  TEAM A <span ><img src={redCircle}/></span> </span></div>
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
				</div>
		
		);
	}
}

export default LiveNFLScore;
