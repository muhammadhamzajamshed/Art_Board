import React, { Component } from 'react';
import player1 from '../../Assets/Images/teamPlayer.png';
import '../../CSS/myTeamOverView.css';
import arrow from '../../Assets/Images/4arrows.png'
import dropDownArrow from "../../Assets/Images/dropIcon (2).png"
import redHelmet from '../../Assets/Images/object2.png'

import { FiSettings } from 'react-icons/fi';

import background from '../../Assets/Images/LeagueMenu.png'
class MyTeamOverView extends Component {
	state = {};
	render() {
		return (
            
            <div className="card myoverview" style={{marginRight:"15px", marginLeft:"15px"}}>
			<div className="myMobilehideDiv">
			<div className="row mt-6" style={{marginTop:"15px", }}>
            <div className="col-7">
            <div className="row lg-12 overviewInc">
            <div className=" text-center "><div className="myblueDivOverview myincDecButton"><span className=""> &#60;</span></div></div>
            <div className="myoverviewFontColor"><span>NFL Week 1</span></div>
            <div className="myoverviewFontColor" style={{color:"black"}}><span>NFL Week 2</span></div>
            <div className="myoverviewFontColor"><span>NFL Week 3</span></div>
            <div className=" text-center "><div className="myblueDivOverview myincDecButton"><span className=""> &#62;</span></div></div>
            <div className=""><i class="fa fa-calendar" style={{fontSize:"36px",color:"#00002E"}}></i>
            </div>
            
            
            </div>
            </div>
            <div className="col-5">
           <div className="mr-2" style={{float:"right"}}> 
            <button className="btn btn-lg myoverviewBtn ml-3 " style={{float:"right"}}>Add Palyer</button>
            <button className="btn btn-lg btn-success mygreenbtn ml-3"  style={{float:"right"}}>Drop  Player</button>
            </div>
</div>            
			</div>
			</div>
<br/>
<br/>
<div className="myWebHide">
<br/>
<br/>
			<div className="card ml-1 mr-1" style={{backgroundColor:"white"}}>
			<div className="row mt-3">
			
			<div className="col-2 ml-1"><img src={redHelmet} style={{width:"36px",height:"32px"}}/></div>
			<div className="col-7"><div><p>
			JOE'S CLUB (2-0-2)</p>
			<p>DENVER</p></div></div>
			<div className="col-2"><FiSettings style={{}}/></div>
			</div>
			</div>

</div>

<div className="myWebHide">
<div className="" >
<br/>
			
			
			</div>
</div>



<div className="myWebHide">
<div className="row lg-12">
<div className="col-3 mt-2"> 
<div className="myblueDivOverview " style={{width:"80px"}}>
<span className="ml-10" style={{marginLeft:"10px"}}> NFL Week 10 <img  className="marginLeft:2px" src={dropDownArrow}/></span></div></div>
<div className="col-3"><span><i class="fa fa-calendar" style={{fontSize:"16px",color:"#00002E"}}></i></span></div>

<div className="col-6 mt-2"><div style={{float:"right"}}>
<button className="btn myteamAddBtn mr-2 ">Add Player</button>
 <button className="btn myteamDropBtn">Drop Player</button>
 </div></div>
</div>
<br/>
<br/>
</div>

				<div className="row">
					<div className="col-lg-7 col-md-7 col-sm-7">
						<h5 className="myh5Overview hideheading">overview</h5>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-5">
						
					</div>
				</div>
				<div className="row lg-12  mr-1 ">
					<div className="col-4 myblueDivOverview text-center">
						<span className="text-center">Starters</span>
					</div>
					<div className="col-4  mygreenDivOverview text-center">
						<span className="text-center">NFL week 11</span>
					</div>
					<div className="col-4  mygreyDivOverview text-center">
						<span className="text-center">season 2020</span>
					</div>
				</div>
				<div className="row table">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-responsive">
					<table class="table table-striped ">
						<thead className="">
							<tr className="myColTableHead">
								<th scope="col">SLOT</th>
                                <th scope="col" className="myTeamTabledotedLine">Players</th>
                                <th scope="col" className="myTeamTabledotedLine">Action </th>
								<th scope="col">OPP</th>
								<th scope="col"className="myTeamTabledotedLine">STATUS</th>
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
								<td className="mySlot">QB</td>
								<td className="myTeamTabledotedLine">
									<div className="row lg-12">
										<div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
											<img src={player1}  className="myTeamPalyerImage" />
										</div>
										<div className="col-lg-7 col-md-12 col-sm-12 col-xs-12" style={{ float: 'right' }}>
											<span
											className="myTeamPlayerName"
											>
												John DOE
											</span>
											<br />
											<span className="myColFont">Buf,QB </span>
										</div>
									</div>
								</td>
								<td className="myTeamTabledotedLine">
									<span className="webImageAction">
										<img src={arrow} alt=""/>
									</span>
									<span className="mobileImageAction">
										<button className="mobileButtonAction">MOVE</button>
									</span>
								</td>

                                <td>
                                <span className="myTeamDept">DEPT</span>
                                
                                </td >
                                <td className="myTeamTabledotedLine" ><span
								className="myTeamStatus ">SUN 11:00pm</span></td>
                                <td className="myColFont">0.0</td>
                                <td className="myColFont">...</td>
                                <td className="myColFont"> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td className="myColFont">14.0</td>
                                <td className="myColFont">99.9</td>
                                <td className="myColFont">0</td>
                                <td className="myColFont">31</td>
                                <td className="myColFont">90.4</td>
                                <td className="myColFont">30.1</td>
                                <td className="myColFont">..</td>
							</tr>





							<tr>
								<td  className="mySlot">QB</td>
								<td className="myTeamTabledotedLine">
									<div className="row">
										<div className="col-lg-5 col-md-12 col-sm-12">
											<img src={player1}  className="myTeamPalyerImage" />
										</div>
										<div className="col-lg-7 col-md-12 col-sm-12" style={{ float: 'right' }}>
											<span
											className="myTeamPlayerName"
											>
												John DOE
											</span>
											<br />
											<span className="myColFont">Buf,QB </span>
										</div>
									</div>
								</td>
            <td className="myTeamTabledotedLine"><span className="webImageAction">
			<img src={arrow} alt=""/>
		</span>
		<span className="mobileImageAction">
			<button className="mobileButtonAction">MOVE</button>
		</span></td>

                                <td>
                                <span  className="myTeamDept">DEPT</span>
                                
                                </td>
                                <td className="myTeamTabledotedLine"><span
								className="myTeamStatus ">SUN 11:00pm</span></td>
                                <td className="myColFont">0.0</td>
                                <td className="myColFont">...</td>
                                <td className="myColFont"> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td className="myColFont">14.0</td>
                                <td className="myColFont">99.9</td>
                                <td className="myColFont">0</td>
                                <td className="myColFont">31</td>
                                <td className="myColFont">90.4</td>
                                <td className="myColFont">30.1</td>
                                <td className="myColFont">..</td>
							</tr>





							<tr>
								<td  className="mySlot" >QB</td>
								<td className="myTeamTabledotedLine">
									<div className="row">
										<div className="col-lg-5 col-md-12 col-sm-12">
											<img src={player1} className="myTeamPalyerImage" />
										</div>
										<div className="col-lg-7 col-md-12 col-sm-12" style={{ float: 'right' }}>
											<span
											className="myTeamPlayerName"
											>
												John DOE
											</span>
											<br />
											<span  className="myColFont">Buf,QB </span>
										</div>
									</div>
								</td>
            <td className="myTeamTabledotedLine"><span className="webImageAction">
			<img src={arrow} alt=""/>
		</span>
		<span className="mobileImageAction">
			<button className="mobileButtonAction">MOVE</button>
		</span></td>

                                <td>
                                <span  className="myTeamDept">DEPT</span>
                                
                                </td>
                                <td className="myTeamTabledotedLine"><span
                               className="myTeamStatus ">SUN 11:00pm</span></td>
                                <td  className="myColFont">0.0</td>
                                <td  className="myColFont">...</td>
                                <td  className="myColFont"> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td  className="myColFont">14.0</td>
                                <td  className="myColFont">99.9</td>
                                <td  className="myColFont">0</td>
                                <td  className="myColFont">31</td>
                                <td  className="myColFont">90.4</td>
                                <td  className="myColFont">30.1</td>
                                <td  className="myColFont">..</td>
							</tr>




							<tr>
								<td></td>
								<td className="myTeamTabledotedLine">
									
								</td>
            <td className="myTeamTabledotedLine"></td>

                                <td>
                               
                                
                                </td>
                                <td ></td>
                                <td  ></td>
                                <td ></td>
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
							<td  className="mySlot">QB</td>
							<td className="myTeamTabledotedLine">
								<div className="row">
									<div className="col-lg-5 col-md-12 col-sm-12">
										<img src={player1}  className="myTeamPalyerImage" />
									</div>
									<div className="col-lg-7 col-md-12 col-sm-12" style={{ float: 'right' }}>
										<span
										className="myTeamPlayerName"
										>
											John DOE
										</span>
										<br />
										<span  className="myColFont">Buf,QB </span>
									</div>
								</div>
							</td>
		<td className="myTeamTabledotedLine"><span className="webImageAction">
		<img src={arrow} alt=""/>
	</span>
	<span className="mobileImageAction">
		<button className="mobileButtonAction">MOVE</button>
	</span></td>

							<td>
							<span  className="myTeamDept">DEPT</span>
							
							</td>
							<td className="myTeamTabledotedLine"><span
							className="myTeamStatus ">SUN 11:00pm</span></td>
							<td  className="myColFont">0.0</td>
							<td className="myColFont">...</td>
							<td  className="myColFont"> <span style={{color: '#03AC36',
							fontSize: '16'}}>32nd</span></td>
							<td  className="myColFont">14.0</td>
							<td  className="myColFont">99.9</td>
							<td  className="myColFont">0</td>
							<td  className="myColFont">31</td>
							<td  className="myColFont">90.4</td>
							<td  className="myColFont">30.1</td>
							<td  className="myColFont">..</td>
						</tr>


						<tr>
								<td  className="mySlot" >QB</td>
								<td className="myTeamTabledotedLine">
									<div className="row">
										<div className="col-lg-5 col-md-12 col-sm-12">
											<img src={player1}  className="myTeamPalyerImage" />
										</div>
										<div className="col-lg-7 col-md-12 col-sm-12" style={{ float: 'right' }}>
											<span
											className="myTeamPlayerName"
											>
												John DOE
											</span>
											<br />
											<span  className="myColFont">Buf,QB </span>
										</div>
									</div>
								</td>
            <td className="myTeamTabledotedLine"><span className="webImageAction">
			<img src={arrow} alt=""/>
		</span>
		<span className="mobileImageAction">
			<button className="mobileButtonAction">MOVE</button>
		</span></td>

                                <td>
                                <span  className="myTeamDept">DEPT</span>
                                
                                </td>
                                <td className="myTeamTabledotedLine"><span
								className="myTeamStatus ">SUN 11:00pm</span></td>
                                <td  className="myColFont">0.0</td>
                                <td  className="myColFont">...</td>
                                <td  className="myColFont"> <span style={{color: '#03AC36',
                                fontSize: '16'}}>32nd</span></td>
                                <td  className="myColFont">14.0</td>
                                <td  className="myColFont">99.9</td>
                                <td  className="myColFont">0</td>
                                <td  className="myColFont">31</td>
                                <td  className="myColFont">90.4</td>
                                <td  className="myColFont">30.1</td>
                                <td  className="myColFont">..</td>
							</tr>
							<tr>
								<td  className="mySlot" >QB</td>
								<td className="myTeamTabledotedLine">
									<div className="row">
										<div className="col-lg-5 col-md-12 col-sm-12">
											<img src={player1}  className="myTeamPalyerImage" />
										</div>
										<div className="col-lg-7 col-md-12 col-sm-12" style={{ float: 'right' }}>
											<span
												className="myTeamPlayerName"
											>
												John DOE
											</span>
											<br />
											<span  className="myColFont">Buf,QB </span>
										</div>
									</div>
								</td>
            <td className="myTeamTabledotedLine"><span className="webImageAction">
			<img src={arrow} alt=""/>
		</span>
		<span className="mobileImageAction">
			<button className="mobileButtonAction">MOVE</button>
		</span></td>

                                <td>
                                <span  className="myTeamDept" >DEPT</span>
                                
                                </td>
                                <td className="myTeamTabledotedLine"><span
								className="myTeamStatus " >SUN 11:00pm</span></td>
                                <td  className="myColFont">0.0</td>
                                <td>...</td>
                                <td  className="myColFont"> <span style={{color: '#03AC36',
                                fontSize: '16'}}  className="myColFont">32nd</span></td>
                                <td  className="myColFont">14.0</td>
                                <td  className="myColFont">99.9</td>
                                <td  className="myColFont">0</td>
                                <td  className="myColFont">31</td>
                                <td  className="myColFont">90.4</td>
                                <td  className="myColFont">30.1</td>
                                <td  className="myColFont">..</td>
							</tr>



							<tr className="myColFont">
								<td></td>
								<td className="myTeamTabledotedLine">
									
								</td>
            <td className="myTeamTabledotedLine"></td>

                                <td>
                               
                                
                                </td>
                                <td ></td>
                                <td></td>
                                <td></td>
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
		);
	}
}

export default MyTeamOverView;
