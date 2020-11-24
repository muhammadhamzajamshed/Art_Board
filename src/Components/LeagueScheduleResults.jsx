import React, { Component } from 'react';
import '../CSS/LeagueScheduleResults.css'
import object1 from '../Assets/Images/object1.png'
import object2 from '../Assets/Images/object2.png'
class LeagueScheduleResults extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card LeagueSchedule ">
            <div className="row heading">
            <h5>LEAGUE SCHEDULE AND RESULTS</h5>
            </div>
            <div className="row table">
            
            
            
            
            <table class="table table-striped">
  <thead className="tableHeader">
    <tr>
      <th scope="col"></th>
      <th scope="col">TEAMS</th>
      <th scope="col">WINS</th>
      <th scope="col">LOSES</th>
      <th scope="col">TIES</th>
      <th scope="col">.PCT</th>
      <th scope="col">GB</th>
    </tr>
  </thead>
  <tbody className="tableData">
    <tr>
      <th scope="row"></th>
      <td><span className="count">1</span><img className="imgStyle" src={object1}/> JOE'S CLUB</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td><span  className="count">2</span><img className="imgStyle" src={object2}/>JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    
  </tbody>
</table>
            
            </div>


            </div>
         );
    }
}
 
export default LeagueScheduleResults;