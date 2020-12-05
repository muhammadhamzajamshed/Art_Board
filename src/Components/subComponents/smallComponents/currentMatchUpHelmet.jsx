import React, { Component } from 'react';
import whiteHelmet from '../../../Assets/Images/object6.png';
import redHelmet from '../../../Assets/Images/object2.png'
import reversehelmet from '../../../Assets/Images/reverrtHelmet.png'

import '../../../CSS/CurrentMatchupWithHelmet.css'
class CurrentMatchupWithHelmet extends Component {
	state = {};
	render() {
		return (

            
            <div className="container">
            

            <div className="currentMatchupWebView  ">
				<div class="w3-container">
					<div class="w3-card " style={{backgroundColor:"white"}}>
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
							Current Matchup
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
                                <div className="col-lg-8 col-md-8 col-sm-8 ">
                               
									<span style={{ fontWeight: 'bold', float: 'left' }}> <img src={redHelmet} alt='' /><span style={{float:"left"}}> THE BIGBOYS</span></span>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4">
									<span style={{ color: 'green' }}>56.2</span>
								</div>
                            </div>
                            
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
                            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                            
                                <span style={{ fontWeight: 'bold', float: 'left' }}><img src={redHelmet} alt='' />Harry's club</span>
                            </div>
        
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                <span style={{ }}>33.3</span>
                            </div>
                        
                    </div>
                        </div>
                        



            
    

						<footer class="w3-container">
							<p
								style={{
									textAlign: 'center',
									textDecoration:"underLine"
								}}
							> VIEW LAST MATCHUPS</p>
						</footer>
					</div>
                </div>
                
                </div>


<div className="currentMatchupMobileView   " >


<div class="w3-container">
					<div class="w3-card " style={{backgroundColor:"white"}}>
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
							Current Matchup
						</h3>

						<div class="container">
							<div
								className="row "
								style={{
									
									marginLeft: '5px',
									marginRight: '5px',
									
									marginTop: '6px'
								}}
							>
                                <div className="col-4 ">
                                <div style={{float:"left"}}>
                                <span style={{float:"left"}}><img src={redHelmet} alt='' />
                                       <span style={{ fontWeight: 'bold', float: 'left' }}> 
                                       THE BIGBOYS 
                                       </span>
                                </span>
                                </div>
                               
								</div>

                                <div className="col-4">
                                <div className="row mt-5">
                                <div className="col-6"><span style={{color:"green" ,fontWeight:"bold",float:"left"}}>56.2 - </span></div>
                                
                                <div className="col-6"><span>33.3</span></div>
                                </div>
                                </div>

                                
                                <div className="col-4">
                                
                                 <div style={{float:"right"}}>
                                 <span style={{float:"right"}}><img src={reversehelmet} alt='' />
                                        <span style={{ fontWeight: 'bold', float: 'right' }}> 
                                        THE BIGBOYS 
                                        </span>
                                 </span>
                                 </div>
                                </div>
                            </div>
                         
                        
                        </div>
                        
                       


            
    

						<footer class="w3-container">
							<p
								style={{
									textAlign: 'center',
									textDecoration:"underLine"
								}}
							> VIEW LAST MATCHUPS</p>
						</footer>
					</div>
                </div>

</div>






			</div>
		);
	}
}

export default CurrentMatchupWithHelmet;
