import React, { Component } from 'react';
import player1 from '../../Assets/Images/teamPlayer.png';
import '../../CSS/overview.css';
import '../../CSS/freeagentsOverview.css'
import dropIcon from '../../Assets/Images/dropicon.png'
class DraftRoundsOverview extends Component {
	state = {};
	render() {
		return (
            
            <div className="card freeAgentsOverview" style={{marginRight:"15px", marginLeft:"15px"}}>
           
				<div className="row">
					<div className="col-lg-7 col-md-7 col-sm-7">
						<h5 className="h5freeAgentsOverview">OVERVIEW</h5>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-5">
						
					</div>
				</div>
				<div className="row ml-1 mr-1">
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 blueDivfreeAgentsOverview text-center">
						<span className="text-center">Starters</span>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 greenDivfreeAgentsOverview text-center">
						<span className="text-center">NFL week 11</span>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 greyDivfreeAgentsOverview text-center">
						<span className="text-center">season 2020 <img src={dropIcon} style={{marginLeft:"5px"}}/></span>
					</div>
				</div>
				<div className="row table">
					<table class="table table-striped ">
						<thead className="">
							<tr>
								<th scope="col">SLOT</th>
                                <th scope="col">Players</th>
                                <th scope="col"></th>
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
						<tbody className="">
							<tr>
								<td>QB</td>
								<td>
									<div className="row">
										<div className="col-lg-3">
											<img src={player1} style={{ width: '94', height: '62' }} />
										</div>
										<div className="col-lg-8" style={{ float: 'left' }}>
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
                                            <span>Buf,QB   </span>
                                            
										</div>
									</div>
                                </td>
                                <td> <button className="btn proposeTradeButton">DRAFT</button></td>
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
						</tbody>
					</table>
                </div>
                
                <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><span></span></div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 freeAgentsOverviewBtn text-center"><span >&#60;</span></div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 mt-3"><span className="pagination" >1</span></div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 mt-3"><span className="pagination">2</span></div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 mt-3"><span>3</span></div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 mt-3"><span className="pagination">4</span></div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 mt-3"><span>-</span></div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 mt-3"><span>-</span></div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 mt-3"><span className="pagination">5</span></div>
             
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 freeAgentsOverviewBtn text-center"><span>&#62;</span></div>
                
                </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
                
                
                </div>

				
			</div>
		);
	}
}

export default DraftRoundsOverview;
