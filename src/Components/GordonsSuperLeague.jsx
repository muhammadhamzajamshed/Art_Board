import React, { Component } from 'react';
import {FiSettings} from 'react-icons/fi';
import '../CSS/GordonsSuperLeague.css'
import object1 from '../Assets/Images/object1.png'
import object2 from '../Assets/Images/object2.png'
import object3 from '../Assets/Images/object3.png'
import object4 from '../Assets/Images/object4.png'
import object5 from '../Assets/Images/object5.png'
import object6 from '../Assets/Images/object6.png'

import LeagueScheduleResults from './LeagueScheduleResults';

import ViewRoasters from './subComponents/ViewRosters';

import MyTeam from './subComponents/MyTeam';
import RecentScores from './subComponents/RecentScores';
class GordonsSuperLeague extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div>
              <div className="card GordonsSuperLeague">
                  <div className="row">
                    <div className="col-10">
                    <h5 className="h5GSL">GORDONS SUPER LEAGUE 2020</h5>
                    <p className="paragGSL">STANDARD RULES  | 10 TEAMS | HEAD-TO-HEAD POINTS </p>
                    <br/>
                    <h6 className="h6GSL">FULL STANDINGS</h6>
                    </div>
                    <div className="col-2">
                    <FiSettings className=" mr-3 mt-2" style={{width:"30px" ,height:"30px",float:"right"}}/>
                    </div>
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
      <td><span className="count">1</span></td>
      <td><img className="imgStyle" src={object1}/> JOE'S CLUB</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      
    </tr>
    <tr>
      <td><span className="count">2</span></td>
      <td><img className="imgStyle" src={object2}/>JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
      <td><span className="count">3</span></td>
      <td><img className="imgStyle" src={object3}/> JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
      <td><span className="count">4</span></td>
      <td><img className="imgStyle" src={object4}/> JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
      <td><span className="count">5</span></td>
      <td><img className="imgStyle" src={object5}/> JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
    <td><span className="count">6</span></td>
      <td><img className="imgStyle" src={object6}/> JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
    <td><span className="count">7</span></td>
    <td><img className="imgStyle" src={object1}/> JOE'S CLUB</td>
    <td>0</td>
    <td>3</td>
    <td>3</td>
    <td>3</td>
    <td>3</td>
    
  </tr>
  <tr>
  <td><span className="count">8</span></td>
  <td><img className="imgStyle" src={object2}/> JOE'S CLUB</td>
  <td>0</td>
  <td>3</td>
  <td>3</td>
  <td>3</td>
  <td>3</td>
  
</tr>
<tr>
<td><span className="count">9</span></td>
<td><img className="imgStyle" src={object1}/> JOE'S CLUB</td>
<td>0</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>

</tr>
<tr>
<td><span className="count">10</span></td>
<td><img className="imgStyle" src={object2}/> JOE'S CLUB</td>
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
            </div>

            
            </div>
          
          
         );
    }
}
 
export default GordonsSuperLeague;