import React, { Component } from 'react';
import '../CSS/LeagueScheduleResults.css'
import object1 from '../Assets/Images/object1.png'
import object2 from '../Assets/Images/object2.png'
class LeagueScheduleResults extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card LeagueSchedule ">
            <div className="row heading lg-12">
            <h5 className="headingFont">LEAGUE SCHEDULE AND RESULTS</h5>
            </div>
            <div className="row">
            
            <p>By Team</p> <span><div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div></span>
            
            </div>
            

            </div>
         );
    }
}
 
export default LeagueScheduleResults;