import React, { Component } from 'react';
import player1 from '../../Assets/Images/teamPlayer.png';
import '../../CSS/tradeConfirm.css';
import whiteHelmet from "../../Assets/Images/object6.png"
import redHelmet from "../../Assets/Images/object2.png"
import polygone from "../../Assets/Images/reversePolygon.png"
import dropIcon from '../../Assets/Images/dropicon.png'
import greenPolygon from '../../Assets/Images/green Polygon.png'
import background from '../../Assets/Images/LeagueMenu.png'

class TradeConfirm extends Component {
	state = {};
	render() {
		return (
            <div style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <br/>
            <br/>
            <div className="card confirmTrade coonfirmTradeCard" >
          
				<div className="row">
					<div className="col-5 ">
                        <h5 className="h5confirm">PROPOSE TRADE</h5>
                        <h6 className="h6confirm">TRADE WITH THE BIG(2-0-0)</h6>
                        <span>
                        <img className ="confirmImage" src={whiteHelmet}/>
                        <img className ="confirmImage1" src={polygone}/>
                        <img className ="confirmImage1" src={polygone}/>
                        <img className ="confirmImage" src={redHelmet}/>
                        </span>
                        <p className="confirmTradePara">Select the player you want to offer to The BigBoys </p>
					</div>
                    <div className="col-7">
                    <div className="row lg-12">
                    <div className="col-6 ">
                    <div className="row lg-12">
                    <div className="col-2 "><span className="text-center" style={{marginTop:"10px"}}><img src={greenPolygon} className="confirmArrow"/></span></div>
                    <div className="col-3 "><img className="confirmTradePlayerImage" src={player1} /></div>
                    <div className="col-7 ">
                    <span className="confirmTradePlayer">
                    John DOE<br/>
                    </span>
                    <span className="confirmPlayerInfo">Buf,QB </span></div>
                    
                    </div>
                   
						
                    </div>
                    <div className="col-6">
                     <button className="btn  confirmTradeButton1  " >CONFIRM TRADE</button>
                    </div>
                    </div>
                    
					</div>
				</div>
				<div className="row lg-12 confirmRowDivs">
					<div className="col-4  blueDivconfirm text-center">
						<span className="text-center">Starters</span>
					</div>
					<div className="col-4  greenDivconfirm text-center">
						<span className="text-center" style={{color:"black"}}>NFL week 11</span>
					</div>
					<div className="col-4  greyDivconfirm text-center">
						<span className="text-center" style={{color:"black"}}>season 2020  <img src={dropIcon} style={{marginLeft:"4px"}}/></span>
					</div>
				</div>
                <div className="row table">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-responsive">
                
					<table class="table table-striped ">
						<thead className="">
							<tr>
								<th scope="col">SLOT</th>
                                <th scope="col" className="confirmTabledotedLine">PLAYER</th>
                                <th scope="col" className="confirmTabledotedLine">ACTION</th>
								<th scope="col">OPP</th>
								<th scope="col">STATUS</th>
								<th scope="col">PROJ</th>
								<th scope="col">SCR</th>
								<th scope="col">OPRK</th>
								<th scope="col">%St</th>
								<th scope="col">%ROST</th>
								<th scope="col" className="confirmTabledotedLine">+/-</th>
								<th scope="col">PRK</th>
								<th scope="col">FPTS</th>
								<th scope="col">AVG</th>
								<th scop="col">LST</th>
							</tr>
						</thead>
						<tbody className="confirmTable">
							<tr>
								<td>QB</td> 
								<td className="confirmTabledotedLine">
									<div className="row">
										<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
											<img src={player1} className="confirmTradePlayerImage" />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 " style={{ float: 'left' }}>
											<span
                                            className="confirmTradePlayer"
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td className="confirmTabledotedLine">
                               <button className="btn confirmTradeButton">OFFER</button>
                                
                                </td>
                                <td>
                                <span className="confirmTableDept">DEPT</span>
                                
                                </td>
                                <td><span
                                className="confirmTradeStatus">SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td style={{ borderRight: "1px dashed lightgrey"}}>0</td>
                                <td>31</td>
                                <td>90.4</td>
                                <td>30.1</td>
                                <td>..</td>
                            </tr>
                            



                            <tr>
								<td>QB</td>
								<td className="confirmTabledotedLine">
									<div className="row">
										<div className="col-lg-4  col-md-4 col-sm-4 col-xs-4">
											<img src={player1} className="confirmTradePlayerImage" />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
											<span
                                            className="confirmTradePlayer"
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td className="confirmTabledotedLine">
                               <button className="btn confirmTradeButton">OFFER</button>
                                
                                </td>
                                <td>
                                <span className="confirmTableDept">DEPT</span>
                                
                                </td>
                                <td><span
                                className="confirmTradeStatus">SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td className="confirmTabledotedLine">0</td>
                                <td>31</td>
                                <td>90.4</td>
                                <td>30.1</td>
                                <td>..</td>
                            </tr>
                            



                            <tr>
								<td>QB</td>
								<td className="confirmTabledotedLine">
									<div className="row">
										<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
											<img src={player1} className="confirmTradePlayerImage" />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
											<span
											className="confirmTradePlayer"
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td className="confirmTabledotedLine">
                               <button className="btn confirmTradeButton">OFFER</button>
                                
                                </td>
                                <td>
                                <span className="confirmTableDept">DEPT</span>
                                
                                </td>
                                <td><span
                                className="confirmTradeStatus">SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td className="confirmTabledotedLine">0</td>
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
                            <td className="confirmTabledotedLine">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <img src={player1} className="confirmTradePlayerImage" />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
                                        <span
                                        className="confirmTradePlayer"
                                        >
                                            John DOE
                                        </span>
                                        <br />
                                        <span>Buf,QB </span>
                                    </div>
                                </div>
                            </td>
                            <td className="confirmTabledotedLine">
                           <button className="btn confirmTradeButton">OFFER</button>
                            
                            </td>
                            <td>
                            <span className="confirmTableDept">DEPT</span>
                            
                            </td>
                            <td><span
                            className="confirmTradeStatus">SUN 11:00pm</span></td>
                            <td>0.0</td>
                            <td>...</td>
                            <td> <span style={{color: '#03AC36',
                            fontSize: '16'}}>32nd</span></td>
                            <td>14.0</td>
                            <td>99.9</td>
                            <td className="confirmTabledotedLine">0</td>
                            <td>31</td>
                            <td>90.4</td>
                            <td>30.1</td>
                            <td>..</td>
                        </tr>
                        <tr>
								<td>QB</td>
								<td className="confirmTabledotedLine">
									<div className="row">
										<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
											<img src={player1} className="confirmTradePlayerImage" />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
											<span
											className="confirmTradePlayer"
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td className="confirmTabledotedLine">
                               <button className="btn confirmTradeButton">OFFER</button>
                                
                                </td>
                                <td>
                                <span className="confirmTableDept">DEPT</span>
                                
                                </td>
                                <td><span
                                className="confirmTradeStatus">SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td className="confirmTabledotedLine">0</td>
                                <td>31</td>
                                <td>90.4</td>
                                <td>30.1</td>
                                <td>..</td>
                            </tr>
                            <tr>
								<td>QB</td>
								<td className="confirmTabledotedLine">
									<div className="row">
										<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
											<img src={player1} className="confirmTradePlayerImage" />
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{ float: 'left' }}>
											<span
                                            className="confirmTradePlayer"
											>
												John DOE
											</span>
											<br />
											<span>Buf,QB </span>
										</div>
									</div>
                                </td>
                                <td className="confirmTabledotedLine">
                               <button className="btn confirmTradeButton">OFFER</button>
                                
                                </td>
                                <td>
                                <span className="confirmTableDept">DEPT</span>
                                
                                </td>
                                <td><span
                                className="confirmTradeStatus">SUN 11:00pm</span></td>
                                <td>0.0</td>
                                <td>...</td>
                                <td> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td>14.0</td>
                                <td>99.9</td>
                                <td className="confirmTabledotedLine">0</td>
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
            </div>
            </div>
		);
	}
}

export default TradeConfirm;
