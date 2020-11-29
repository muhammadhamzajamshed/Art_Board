import React, { Component } from 'react';
import player1 from '../../Assets/Images/teamPlayer.png';
import '../../CSS/tradeConfirm.css';
import whiteHelmet from "../../Assets/Images/object6.png"
import redHelmet from "../../Assets/Images/object2.png"
import polygone from "../../Assets/Images/reversePolygon.png"
import dropIcon from '../../Assets/Images/dropicon.png'
import greenPolygon from '../../Assets/Images/green Polygon.png'

class TradeConfirm extends Component {
	state = {};
	render() {
		return (
            
            <div className="card proposeTrade" style={{marginRight:"15px", marginLeft:"15px"}}>
          
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5 className="h5Propose">PROPOSE TRADE</h5>
                        <h6 className="h6Propose">TRADE WITH THE BIG(2-0-0)</h6>
                        <span>
                        <img className ="proposeImage" src={whiteHelmet}/>
                        <img className ="proposeImage" src={polygone}/><img className ="proposeImage" src={polygone}/>
                        <img className ="proposeImage" src={redHelmet}/>
                        </span>
                        <p style={{fontSize:"25px"}}>Select the player you want to offer to The BigBoys </p>
					</div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="row lg-12">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div className="row lg-12">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span className="text-center" style={{marginTop:"10px"}}><img src={greenPolygon}/></span></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"><img src={player1}/ ></div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7"><span
                    style={{
                        color: '#064EA4',
                        fontSize: '24px',
                        textDecoration: 'underline',
                        fontFamily: 'sans-serif'
                    }}
                >
                    John DOE<br/>
                    
                </span><span style={{
                
                    fontSize: '24px',
                    
                    fontFamily: 'sans-serif'
                }}>Buf,QB </span></div>
                    
                    </div>
                   
						
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"> <button className="btn btn-lg confirmTradeButton  " style={{float:"",marginRight:"22px",paddingLeft:"10px",paddingRight:"10px"}}>CONFIRM TRADE</button>
                    </div>
                    </div>
                    
					</div>
				</div>
				<div className="row ml-1 mr-1">
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 blueDivPropose text-center">
						<span className="text-center">Starters</span>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 greenDivPropose text-center">
						<span className="text-center">NFL week 11</span>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 greyDivPropose text-center">
						<span className="text-center">season 2020  <img src={dropIcon} style={{marginLeft:"5px"}}/></span>
					</div>
				</div>
				<div className="row table">
					<table class="table table-striped ">
						<thead className="">
							<tr>
								<th scope="col">SLOT</th>
                                <th scope="col">Players</th>
                                <th scope="col">Action</th>
								<th scope="col">OPP</th>
								<th scope="col">STATUS</th>
								<th scope="col">PROJ</th>
								<th scope="col">SCR</th>
								<th scope="col">OPRK</th>
								<th scope="col">%St</th>
								<th scope="col">%ROST</th>
								<th scope="col">+/-</th>
								<th scope="col">PRK</th>
								<th scope="col">FPTS</th>
								<th scope="col">AVG</th>
								<th scop="col">LST</th>
							</tr>
						</thead>
						<tbody className="proposeTable">
							<tr>
								<td>QB</td> 
								<td>
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
											<img src={player1} style={{ width: '94', height: '62' }} />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 " style={{ float: 'left' }}>
											<span
												style={{
													color: '#064EA4',
													fontSize: '24',
													textDecoration: 'underline',
													fontFamily: 'sans-serif'
												}}
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td>
                               <button className="btn proposeTradeButton">TRADE</button>
                                
                                </td>
                                <td>
                                <span style={{color: '#064EA4',
                                fontSize: '16'}}>DEPT</span>
                                
                                </td>
                                <td><span
                                style={{
                                    color: '#064EA4',
                                    fontSize: '16',
                                    textDecoration: 'underline',
                                    fontFamily: ''
                                }}>SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td>0</td>
                                <td>31</td>
                                <td>90.4</td>
                                <td>30.1</td>
                                <td>..</td>
                            </tr>
                            



                            <tr>
								<td>QB</td>
								<td>
									<div className="row">
										<div className="col-lg-3  col-md-3 col-sm-3 col-xs-3">
											<img src={player1} style={{ width: '94', height: '62' }} />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
											<span
												style={{
													color: '#064EA4',
													fontSize: '24',
													textDecoration: 'underline',
													fontFamily: 'sans-serif'
												}}
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td>
                               <button className="btn proposeTradeButton">TRADE</button>
                                
                                </td>
                                <td>
                                <span style={{color: '#064EA4',
                                fontSize: '16'}}>DEPT</span>
                                
                                </td>
                                <td><span
                                style={{
                                    color: '#064EA4',
                                    fontSize: '16',
                                    textDecoration: 'underline',
                                    fontFamily: ''
                                }}>SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td>0</td>
                                <td>31</td>
                                <td>90.4</td>
                                <td>30.1</td>
                                <td>..</td>
                            </tr>
                            



                            <tr>
								<td>QB</td>
								<td>
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
											<img src={player1} style={{ width: '94', height: '62' }} />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
											<span
												style={{
													color: '#064EA4',
													fontSize: '24',
													textDecoration: 'underline',
													fontFamily: 'sans-serif'
												}}
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td>
                               <button className="btn proposeTradeButton">TRADE</button>
                                
                                </td>
                                <td>
                                <span style={{color: '#064EA4',
                                fontSize: '16'}}>DEPT</span>
                                
                                </td>
                                <td><span
                                style={{
                                    color: '#064EA4',
                                    fontSize: '16',
                                    textDecoration: 'underline',
                                    fontFamily: ''
                                }}>SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td>0</td>
                                <td>31</td>
                                <td>90.4</td>
                                <td>30.1</td>
                                <td>..</td>
                            </tr>
                            



                            <tr>
								<td></td>
								<td>
								
									
                                </td>
                                <td>
                              
                                </td>
                                <td>
                                <span style={{color: '#064EA4',
                                fontSize: '16'}}></span>
                                
                                </td>
                                <td><span
                               >Totals</span></td>
                                <td>71.5</td>
                                <td>0.0</td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            



                            <tr>
                            <td>QB</td>
                            <td>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                        <img src={player1} style={{ width: '94', height: '62' }} />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
                                        <span
                                            style={{
                                                color: '#064EA4',
                                                fontSize: '24',
                                                textDecoration: 'underline',
                                                fontFamily: 'sans-serif'
                                            }}
                                        >
                                            John DOE
                                        </span>
                                        <br />
                                        <span>Buf,QB </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                           <button className="btn proposeTradeButton">TRADE</button>
                            
                            </td>
                            <td>
                            <span style={{color: '#064EA4',
                            fontSize: '16'}}>DEPT</span>
                            
                            </td>
                            <td><span
                            style={{
                                color: '#064EA4',
                                fontSize: '16',
                                textDecoration: 'underline',
                                fontFamily: ''
                            }}>SUN 11:00pm</span></td>
                            <td>0.0</td>
                            <td>...</td>
                            <td> <span style={{color: '#03AC36',
                            fontSize: '16'}}>32nd</span></td>
                            <td>14.0</td>
                            <td>99.9</td>
                            <td>0</td>
                            <td>31</td>
                            <td>90.4</td>
                            <td>30.1</td>
                            <td>..</td>
                        </tr>
                        <tr>
								<td>QB</td>
								<td>
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
											<img src={player1} style={{ width: '94', height: '62' }} />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
											<span
												style={{
													color: '#064EA4',
													fontSize: '24',
													textDecoration: 'underline',
													fontFamily: 'sans-serif'
												}}
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td>
                               <button className="btn proposeTradeButton">TRADE</button>
                                
                                </td>
                                <td>
                                <span style={{color: '#064EA4',
                                fontSize: '16'}}>DEPT</span>
                                
                                </td>
                                <td><span
                                style={{
                                    color: '#064EA4',
                                    fontSize: '16',
                                    textDecoration: 'underline',
                                    fontFamily: ''
                                }}>SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td>0</td>
                                <td>31</td>
                                <td>90.4</td>
                                <td>30.1</td>
                                <td>..</td>
                            </tr>
                            <tr>
								<td>QB</td>
								<td>
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
											<img src={player1} style={{ width: '94', height: '62' }} />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
											<span
												style={{
													color: '#064EA4',
													fontSize: '24',
													textDecoration: 'underline',
													fontFamily: 'sans-serif'
												}}
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td>
                               <button className="btn proposeTradeButton">TRADE</button>
                                
                                </td>
                                <td>
                                <span style={{color: '#064EA4',
                                fontSize: '16'}}>DEPT</span>
                                
                                </td>
                                <td><span
                                style={{
                                    color: '#064EA4',
                                    fontSize: '16',
                                    textDecoration: 'underline',
                                    fontFamily: ''
                                }}>SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td>0</td>
                                <td>31</td>
                                <td>90.4</td>
                                <td>30.1</td>
                                <td>..</td>
                            </tr>
                            


                            <tr>
								<td></td>
								<td>
								
									
                                </td>
                                <td>
                              
                                </td>
                                <td>
                                <span style={{color: '#064EA4',
                                fontSize: '16'}}></span>
                                
                                </td>
                                <td><span
                               >Totals</span></td>
                                <td>71.5</td>
                                <td>0.0</td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>


						</tbody>
					</table>
				</div>

				
			</div>
		);
	}
}

export default TradeConfirm;
