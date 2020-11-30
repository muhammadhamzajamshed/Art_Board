import React, { Component } from 'react';
import whiteCircle from '../../../Assets/Images/whiteCircle.png';
import redCircle from '../../../Assets/Images/redCircle.png';

import '../../../CSS/liveNFLScores.css'
class LiveNFLScore extends Component {
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
							LIVE NFL SCORE
						</h3>

                        <div className="container" >
                      
                            <div className="  row liveScore ml-1 mr-1 mt-2 mb-2" style={{backgroundColor:"#F2F2F2"}} >
                            <div className="col-lg-5 col-md-5 col-sm-5 liveScore "><span><img src={whiteCircle}/> TEAM A</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 ">
                            <div className="row lg-12 text-center">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"><span style={{color:"green",float:"right",fontWeight:"bold"}}>34</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span style={{fontWeight:"bold"}}>-</span></div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"><span style={{float:"left" ,fontWeight:"bold"}}>17</span></div>
                            
                            
                            </div>
                            <div className="text-center"><span style={{fontWeight:"bold"}}>FINAL</span></div>
                            
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 "><span style={{float:"right"}}>  TEAM A <span ><img src={redCircle}/></span> </span></div>
                            </div>




                            <div className="  row liveScore ml-1 mr-1 mt-2 mb-2" style={{backgroundColor:"#F2F2F2"}} >
                            <div className="col-lg-5 col-md-5 col-sm-5 liveScore "><span><img src={whiteCircle}/> TEAM A</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 ">
                            <div className="row lg-12 text-center">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"><span style={{color:"green",float:"right",fontWeight:"bold"}}>34</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span style={{fontWeight:"bold"}}>-</span></div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"><span style={{float:"left" ,fontWeight:"bold"}}>17</span></div>
                            
                            
                            </div>
                            <div className="text-center"><span style={{fontWeight:"bold"}}>FINAL</span></div>
                            
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 "><span style={{float:"right"}}>  TEAM A <span ><img src={redCircle}/></span> </span></div>
                            </div>



                            <div className="  row liveScore ml-1 mr-1 mt-2 mb-2" style={{backgroundColor:"#F2F2F2"}} >
                            <div className="col-lg-5 col-md-5 col-sm-5 liveScore "><span><img src={whiteCircle}/> TEAM A</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 ">
                            <div className="row lg-12 text-center">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"><span style={{color:"green",float:"right",fontWeight:"bold"}}>34</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span style={{fontWeight:"bold"}}>-</span></div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"><span style={{float:"left" ,fontWeight:"bold"}}>17</span></div>
                            
                            
                            </div>
                            <div className="text-center"><span style={{fontWeight:"bold"}}>FINAL</span></div>
                            
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
			</div>
		);
	}
}

export default LiveNFLScore;
