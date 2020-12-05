import React, { Component } from 'react';

import '../../CSS/Standing.css';
import object1 from '../../Assets/Images/object1.png';
import object2 from '../../Assets/Images/object2.png';
import object3 from '../../Assets/Images/object3.png';
import object4 from '../../Assets/Images/object4.png';
import object5 from '../../Assets/Images/object5.png';
import object6 from '../../Assets/Images/object6.png';
import online from '../../Assets/Images/online.png'

class RealTimeStandings extends Component {
	state = {};
	render() {
		return (
			<div className="card Standings ">
				
					
						<h3 className="StandingHeader">
							<span className="ml-2 standingFontFamily" style={{fontFamily: "Bebas Neue"}} >REAl-TIME STANDINGS</span>
						</h3>
				
				
				<div className="row Standingtable">
					<table class="table table-striped">
						<thead className="StandingTableHeader">
							<tr>
								
								<th scope="col">TEAMS</th>
								<th scope="col">WINS</th>
								<th scope="col">LOSES</th>
								<th scope="col">TIES</th>
								<th scope="col">.PCT</th>
								<th scope="col">GB</th>
							</tr>
						</thead>
						<tbody className="StandingTableData">
							<tr className="StandingTableData">
								
								<td >
									<span className="count">1</span>
									<img className="imgStyle" src={object1} /> JOE'S CLUB
								</td>
								<td>3</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								
								<td>
									<span className="count">2</span>
									<img className="imgStyle" src={object2} alt=""/>JOE'S CLUB <img src={online} alt=""/>
								</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
							</tr>
							<tr>
								
								<td>
									<span className="count">3</span>
									<img className="imgStyle" src={object3} alt=""/> JOE'S CLUB <img src={online} alt=""/>
								</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
							</tr>
							<tr>
								
								<td>
									<span className="count">4</span>
									<img className="imgStyle" src={object4} alt="" /> JOE'S CLUB
								</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
							</tr>
							<tr>
								
								<td>
									<span className="count">5</span>
									<img className="imgStyle" src={object5} alt=""/> JOE'S CLUB
								</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
							</tr>
							<tr>
								
								<td>
									<span className="count">6</span>
									<img className="imgStyle" src={object6} alt=""/> JOE'S CLUB
								</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
							</tr>
							<tr>
								
								<td>
									<span className="count">7</span>
									<img className="imgStyle" src={object1} alt="" /> JOE'S CLUB <img src={online} alt=""/>
								</td>
								<td>0</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
							</tr>
							<tr>
							
								<td>
									<span className="count">8</span>
									<img className="imgStyle" src={object2} alt=""/> JOE'S CLUB
								</td>
								<td>0</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
							</tr>
							<tr>
								
								<td>
									<span className="count">9</span>
									<img className="imgStyle" src={object1} alt=""/> JOE'S CLUB
								</td>
								<td>0</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
							</tr>
							<tr>
							
								<td>
									<span className="count">10</span>
									<img className="imgStyle" src={object2} alt="" /> JOE'S CLUB
								</td>
								<td>0</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/*<LeagueScheduleResults/>

            <ViewRoasters/>
            <MyTeam/>

            <br/>
        <RecentScores/>*/}

        <footer class="w3-container">
							<p
								style={{
                                    textAlign: 'center',
                                    textDecoration:"underline",
                                    fontSize:"22px"
                                    
									
								}}
							>
							VIEW FULL STANDINGS
							</p>
                            </footer>  
			</div>
		);
	}
}

export default RealTimeStandings;
