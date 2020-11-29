import React, { Component } from 'react';
import yellow from '../../Assets/Images/object1.png';
import red from '../../Assets/Images/object2.png';
import white from '../../Assets/Images/object6.png'
import green from '../../Assets/Images/object5.png'
import black from '../../Assets/Images/object3.png'
import blue from '../../Assets/Images/object4.png'
class ViewRoasters extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<div class="w3-container">
					
					<div class="w3-card" style={{paddingLeft:"-15px", paddingRight:"-15px"}}>
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
							VIEW ROSTERS
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
								<div className="col-lg-11 col-md-11 col-sm-11">
									<span>
										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '31.96px',
												height: '29px'
											}}
											src={yellow}
										/>
										TEAM GORDON
									</span>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
								</div>
							</div>
						    
                        

							{/*<p style={{
                        backgroundColor: 'rgb(241, 241, 241)',
                        padding: '10px',
                        textAlign: 'justify'
                    }}>JOE'S CLUB</p>*/}
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
                    <div className="col-lg-11 col-md-11 col-sm-11">
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
                            JOE'S CLUB
                        </span>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
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
								<div className="col-lg-11 col-md-11 col-sm-11">
									<span>
										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '31.96px',
												height: '29px'
											}}
                                            src={green}
                                            alt="###"
										/>
										TEAM ALLAN
									</span>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
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
                            <div className="col-lg-11 col-md-11 col-sm-11">
                                <span>
                                    <img
                                        style={{
                                            marginLeft: '5px',
                                            marginRight: '10px',
                                            width: '31.96px',
                                            height: '29px'
                                        }}
                                        src={blue}
                                        alt="###"
                                    />
                                   MARKSMEN
                                </span>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1">
                                <span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
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
								<div className="col-lg-11 col-md-11 col-sm-11">
									<span>
										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '31.96px',
												height: '29px'
											}}
                                            src={black}
                                            alt="###"
										/>
										SUPPER KINGS
									</span>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
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
                            <div className="col-lg-11 col-md-11 col-sm-11">
                                <span>
                                    <img
                                        style={{
                                            marginLeft: '5px',
                                            marginRight: '10px',
                                            width: '31.96px',
                                            height: '29px'
                                        }}
                                        src={white}
                                        alt="###"
                                    />
                                    TEAM BIGBOYS
                                </span>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1">
                                <span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
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
								<div className="col-lg-11 col-md-11 col-sm-11">
									<span>
										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '31.96px',
												height: '29px'
											}}
                                            src={yellow}
                                            alt="###"
										/>
										JOE'S CLUB
									</span>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
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
								<div className="col-lg-11 col-md-11 col-sm-11">
									<span>
										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '31.96px',
												height: '29px'
											}}
                                            src={yellow}
                                            alt="###"
										/>
										JOE'S CLUB
									</span>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1">
									<span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
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
                            <div className="col-lg-11 col-md-11 col-sm-11">
                                <span>
                                    <img
                                        style={{
                                            marginLeft: '5px',
                                            marginRight: '10px',
                                            width: '31.96px',
                                            height: '29px'
                                        }}
                                        src={yellow}
                                        alt="###"
                                    />
                                    JOE'S CLUB
                                </span>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1">
                                <span style={{ float: 'right', fontWeight: 'bold', color: '#707070' }}>&#62;</span>
                            </div>
                        </div>

						</div>

						<footer class="w3-container">
							<p
								style={{
									textAlign: 'center',
									color: 'rgb(155, 155, 155)'
								}}
							>
								
							</p>
                            </footer>  
					</div>
				</div>
			</div>
		);
	}
}

export default ViewRoasters;
