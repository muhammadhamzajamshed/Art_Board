import React, { Component } from 'react';

import MyTeamOverView from './../subComponents/myTeamOverview';
import EditTeam from './../subComponents/smallComponents/editTeam';

import CurrentMatchup from './../subComponents/smallComponents/currentMatchup';
import background from '../../Assets/Images/LeagueMenu.png'
class MyTeamPage extends Component {
    state = {  }
    render() { 
        return (
            
            <div className="" style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <div className="row">
            <div className="col-lg-9"><MyTeamOverView/></div>
<div className="col-lg-3"><EditTeam/>

<br/>
<CurrentMatchup/></div>            
            
            
            
            
            
            
            </div> </div>);
    }
}
 
export default MyTeamPage;