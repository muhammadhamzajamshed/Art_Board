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
class GordonsSuperLeague extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div className="card GordonsSuperLeague">
            <div className="row">
            <div className="col-lg-11 col-md-11 col-sm-11">
            <h5 className="h5">GORDONS SUPER LEAGUE 2020</h5>
            <p className="para">STANDARD RULES  | 10 TEAMS | HEAD-TO-HEAD POINTS </p>
            <br/>
            <h6 className="h6">FULL Standings</h6>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1">
            <FiSettings className="settingButton"/>
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
    <tr>
      <th scope="row"></th>
      <td><span  className="count">3</span><img className="imgStyle" src={object3}/> JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td><span  className="count">4</span><img className="imgStyle" src={object4}/> JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td><span  className="count">5</span><img className="imgStyle" src={object5}/> JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td><span  className="count">6</span><img className="imgStyle" src={object6}/> JOE'S CLUB</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      
    </tr>
    <tr>
    <th scope="row"></th>
    <td><span  className="count">7</span><img className="imgStyle" src={object1}/> JOE'S CLUB</td>
    <td>0</td>
    <td>3</td>
    <td>3</td>
    <td>3</td>
    <td>3</td>
    
  </tr>
  <tr>
  <th scope="row"></th>
  <td><span  className="count">8</span><img className="imgStyle" src={object2}/> JOE'S CLUB</td>
  <td>0</td>
  <td>3</td>
  <td>3</td>
  <td>3</td>
  <td>3</td>
  
</tr>
<tr>
<th scope="row"></th>
<td><span  className="count">9</span><img className="imgStyle" src={object1}/> JOE'S CLUB</td>
<td>0</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>

</tr>
<tr>
<th scope="row"></th>
<td><span  className="count">10</span><img className="imgStyle" src={object2}/> JOE'S CLUB</td>
<td>0</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>

</tr>
  </tbody>
</table>
            
            </div>


            </div>
            <LeagueScheduleResults/>
            </React.Fragment>
         );
    }
}
 
export default GordonsSuperLeague;