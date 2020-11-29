import React, { Component } from 'react';

import TeamOverView from './../subComponents/smallComponents/teamOverview';
import OverView from './../subComponents/overview';
import LastMatchup from './../subComponents/smallComponents/lastMatchup';
import CurrentMatchup from './../subComponents/smallComponents/currentMatchup';
class MatchUps extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div className="row">
         
            <div className="col-lg-4"><TeamOverView/></div>
            <div className="col-lg-4"><LastMatchup/></div>
            <div className="col-lg-4"><CurrentMatchup/></div>
           
            
            
            </div>
            <br/>
            <OverView/>
            
            
            
            
            </div> );
    }
}
 
export default MatchUps;