import React, { Component } from 'react';
import player1 from '../../Assets/Images/teamPlayer.png';
import '../../CSS/proposeTrade.css';
import whiteHelmet from "../../Assets/Images/object6.png"
import redHelmet from "../../Assets/Images/object1.png"
import polygone from "../../Assets/Images/Polygon1.png"
import dropIcon from '../../Assets/Images/dropicon.png'
import background from '../../Assets/Images/LeagueMenu.png'
class Trade extends Component {
	state = {};
	render() {
		return (
            <div style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <br/>
            <br/>
            <div className="card proposeTrade proposeTradeCard" >
          
				<div className="row">
					<div className="col-7">
                        <h5 className="h5Propose">PROPOSE TRADE</h5>
                        <h6 className="h6Propose">TRADE WITH THE BIG(2-0-0)</h6>
                        <span>
                        <img className ="proposeImage" src={whiteHelmet}/>
                        <img className ="proposeImage1" src={polygone}/>
                        <img className ="proposeImage1" src={polygone}/>
                        <img className ="proposeImage" src={redHelmet}/>
                        </span>
                        <p className="proposeTradePara">Select the player you want to receive from The BigBoys </p>
					</div>
                    <div className="col-5 ">
                    <button className="btn btn-lg proposeBtn proposeBtnStyle" >CONFIRM TRADE</button>
						
					</div>
				</div>
				<div className="row  mr-1">
                <div className="col-4 blueDivPropose  text-center">
                <span className="text-center">NFL week 11</span>
            </div>
					<div className="col-4   greenDivPropose text-center">
						<span className="text-center " style={{color:"black"}}>NFL WEEK 11</span>
					</div>
					<div className="col-4  greyDivPropose text-center">
						<span className="text-center" style={{color:"black"}}>SEASON 2020  <img src={dropIcon} className="proposeSeasoneDropDown"/></span>
					</div>
				</div>
                <div className="tableWidth">
                <div className="row table">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-responsive">
                
                
                <table class="table table-striped">
               
                    <thead className="">


                   

                        <tr>
                            <th scope="col">SLOT</th>
                            <th scope="col" className="proposeTabledotedLine" >PLAYERS</th>
                            <th scope="col" className="proposeTabledotedLine">ACTION</th>
                            <th scope="col">OPP</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">PROJ</th>
                            <th scope="col">SCR</th>
                            <th scope="col">OPRK</th>
                            <th scope="col">%St</th>
                            <th scope="col">%ROST</th>
                            <th scope="col" className="proposeTabledotedLine">+/-</th>
                            <th scope="col">PRK</th>
                            <th scope="col">FPTS</th>
                            <th scope="col">AVG</th>
                            <th scop="col">LST</th>
                        </tr>


                        
                    </thead>
                    <tbody className="proposeTable">


                  
                
               

                        <tr>
                            <td>QB</td>
                            <td className="proposeTabledotedLine">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={player1}  className="proposeTradePlayerImage" />
                                    </div>
                                    <div className="col-lg-8" style={{ float: 'left' }}>
                                        <span
                                            className="proposeTradePlayer"
                                        >
                                            John DOE
                                        </span>
                                        <br />
                                        <span>Buf,QB </span>
                                    </div>
                                </div>
                            </td>
                            <td className="proposeTabledotedLine " style={{display:"flex",justifyContent:"center"}}>
                           <button className="btn proposeTradeButton">TRADE</button>
                            
                            </td>
                            <td>
                            <span className="proposeTableDept">DEPT</span>
                            
                            </td>
                            <td><span
                            className="proposeTradeStatus">SUN 11:00pm</span></td>
                            <td>0.0</td>
                            <td>...</td>
                            <td> <span style={{color: '#03AC36',
                            fontSize: '16'}}>32nd</span></td>
                            <td>14.0</td>
                            <td>99.9</td>
                            <td className="proposeTabledotedLine">0</td>
                            <td>31</td>
                            <td>90.4</td>
                            <td>30.1</td>
                            <td>..</td>
                        </tr>
                        



                       

                      






                       
                        <tr>
                            <td></td>
                            <td className="proposeTabledotedLine">
                            
                                
                            </td>
                            <td className="proposeTabledotedLine">
                          
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
                            <td className="proposeTabledotedLine"></td>
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
            </div>
		);
	}
}

export default Trade;
