import React, { Component } from 'react';

import red from '../../Assets/Images/object2.png';
import redRevert from '../../Assets/Images/reverrtHelmet.png'

class RecentScores extends Component {
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
							RECENT SCORES
						</h3>

						<div class="container">
                        <div
								className="row "
								style={{
									backgroundColor: 'rgb(241, 241, 241)',
									padding: '10px',
									textAlign: 'justify',
									marginLeft: '10px',
									marginRight: '10px',
									marginBottom: '8px',
									marginTop: '6px'
								}}
							>
								<div className="col-lg-5 col-md-5 col-sm-5">
									<span>
										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '31.96px',
												height: '29px'
											}}
											src={red}
                                        />
                                        <div>
                                        TEAM NAME
                                        </div>
									</span>
								</div>
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                <p style={{fontFamily: 'Bebas Neue,cursive', fontSize:"32" , fontWeight:"bold"}}><span style={{color:"#03AC36"}}>80.0</span>  -  78.0</p>
                                </div>
                                
                                <div className="col-lg-5 col-md-5 col-sm-5" >
                                <div style={{float:"right"}}>

										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '31.96px',
                                                height: '29px'
                                                ,float: "right"
											}}
											src={redRevert}
                                        />
                                        <div>
                                        TEAM NAME
                                        </div>
										
									</div>
								</div>
							</div>
						    
                            <div
                            className="row "
                            style={{
                                backgroundColor: 'rgb(241, 241, 241)',
                                padding: '10px',
                                textAlign: 'justify',
                                marginLeft: '10px',
                                marginRight: '10px',
                                marginBottom: '8px',
                                marginTop: '6px'
                            }}
                        >
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <span>
                                    <img
                                        style={{
                                            marginLeft: '5px',
                                            marginRight: '10px',
                                            width: '31.96px',
                                            height: '29px'
                                        }}
                                        src={red}
                                    />
                                    <div>
                                    TEAM NAME
                                    </div>
                                </span>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                            <p style={{fontFamily: 'Bebas Neue,cursive', fontSize:"32" , fontWeight:"bold"}}><span style={{color:"#03AC36"}}>80.0</span>  -  78.0</p>
                            </div>
                            
                            <div className="col-lg-5 col-md-5 col-sm-5" >
                            <div style={{float:"right"}}>

                                    <img
                                        style={{
                                            marginLeft: '5px',
                                            marginRight: '10px',
                                            width: '31.96px',
                                            height: '29px'
                                            ,float: "right"
                                        }}
                                        src={redRevert}
                                    />
                                    <div>
                                    TEAM NAME
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div
                        className="row "
                        style={{
                            backgroundColor: 'rgb(241, 241, 241)',
                            padding: '10px',
                            textAlign: 'justify',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '8px',
                            marginTop: '6px'
                        }}
                    >
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <span>
                                <img
                                    style={{
                                        marginLeft: '5px',
                                        marginRight: '10px',
                                        width: '31.96px',
                                        height: '29px'
                                    }}
                                    src={red}
                                />
                                <div>
                                TEAM NAME
                                </div>
                            </span>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2">
                        <p style={{fontFamily: 'Bebas Neue,cursive', fontSize:"32" , fontWeight:"bold"}}><span style={{color:"#03AC36"}}>80.0</span>  -  78.0</p>
                        </div>
                        
                        <div className="col-lg-5 col-md-5 col-sm-5" >
                        <div style={{float:"right"}}>

                                <img
                                    style={{
                                        marginLeft: '5px',
                                        marginRight: '10px',
                                        width: '31.96px',
                                        height: '29px'
                                        ,float: "right"
                                    }}
                                    src={redRevert}
                                />
                                <div>
                                TEAM NAME
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div
                    className="row "
                    style={{
                        backgroundColor: 'rgb(241, 241, 241)',
                        padding: '10px',
                        textAlign: 'justify',
                        marginLeft: '10px',
                        marginRight: '10px',
                        marginBottom: '8px',
                        marginTop: '6px'
                    }}
                >
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <span>
                            <img
                                style={{
                                    marginLeft: '5px',
                                    marginRight: '10px',
                                    width: '31.96px',
                                    height: '29px'
                                }}
                                src={red}
                            />
                            <div>
                            TEAM NAME
                            </div>
                        </span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                    <p style={{fontFamily: 'Bebas Neue,cursive', fontSize:"32" , fontWeight:"bold"}}><span style={{color:"#03AC36"}}>80.0</span>  -  78.0</p>
                    </div>
                    
                    <div className="col-lg-5 col-md-5 col-sm-5" >
                    <div style={{float:"right"}}>

                            <img
                                style={{
                                    marginLeft: '5px',
                                    marginRight: '10px',
                                    width: '31.96px',
                                    height: '29px'
                                    ,float: "right"
                                }}
                                src={redRevert}
                            />
                            <div>
                            TEAM NAME
                            </div>
                            
                        </div>
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
                                    textDecoration:"underLine"
								}}
							>
								Full Scores
							</p>
                            </footer>  
					</div>
				</div>
			</div>
		);
	}
}

export default RecentScores;
