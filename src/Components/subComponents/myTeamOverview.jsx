import React, { Component } from 'react';
import player1 from '../../Assets/Images/teamPlayer.png';
import '../../CSS/myTeamOverView.css';
import arrow from '../../Assets/Images/4arrows.png'
class MyTeamOverView extends Component {
	state = {};
	render() {
		return (
            
            <div className="card myoverview" style={{marginRight:"15px", marginLeft:"15px"}}>
            <div className="row mt-6" style={{marginTop:"15px", }}>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <div className="row lg-12 overviewInc">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1  text-center "><div className="myblueDivOverview myincDecButton"><span className=""> &#60;</span></div></div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2  myoverviewFontColor"><span>NFL Week 10</span></div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 "><span>NFL Week 11</span></div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 myoverviewFontColor"><span>NFL Week 2</span></div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1  text-center "><div className="myblueDivOverview myincDecButton"><span className=""> &#62;</span></div></div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 "><i class="fa fa-calendar" style={{fontSize:"36px"}}></i>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 "></div>
            
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            
            <button className="btn btn-lg myoverviewBtn ">Propose Trade</button>
            <button className="btn btn-lg btn-success mygreenbtn ml-3">Drop  Player</button>
            </div>
            
            </div>
				<div className="row">
					<div className="col-lg-7 col-md-7 col-sm-7">
						<h5 className="myh5Overview">overview</h5>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-5">
						
					</div>
				</div>
				<div className="row ml-1 mr-1">
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 myblueDivOverview text-center">
						<span className="text-center">Starters</span>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mygreenDivOverview text-center">
						<span className="text-center">NFL week 11</span>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mygreyDivOverview text-center">
						<span className="text-center">season 2020</span>
					</div>
				</div>
				<div className="row table">
					<table class="table table-striped ">
						<thead className="">
							<tr>
								<th scope="col">SLOT</th>
                                <th scope="col">Players</th>
                                <th scope="col">Action </th>
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
										<div className="col-lg-4 col-md-6 col-sm-8">
											<img src={player1} style={{ width: '94', height: '62' }} />
										</div>
										<div className="col-lg-8 col-md-6 col-sm-8" style={{ float: 'right' }}>
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
            <td><img src={arrow}/></td>

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

				
			</div>
		);
	}
}

export default MyTeamOverView;
