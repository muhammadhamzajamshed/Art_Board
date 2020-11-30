import React, { Component } from 'react';

import MyTeamOverView from './../subComponents/myTeamOverview';
import EditTeam from './../subComponents/smallComponents/editTeam';

import CurrentMatchup from './../subComponents/smallComponents/currentMatchup';
class MyTeamPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
            <div className="col-lg-9"><MyTeamOverView/></div>
<div className="col-lg-3"><EditTeam/>

<br/>
<CurrentMatchup/></div>            
            
            
            
            
            
            
            </div> );
    }
}
 
export default MyTeamPage;