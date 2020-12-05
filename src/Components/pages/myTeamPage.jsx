import React, { Component } from 'react';

import MyTeamOverView from './../subComponents/myTeamOverview';
import EditTeam from './../subComponents/smallComponents/editTeam';

import CurrentMatchup from './../subComponents/smallComponents/currentMatchup';
import background from '../../Assets/Images/LeagueMenu.png'

import '../../CSS/myTeamPage.css'
import CurrentMatchupWithHelmet from './../subComponents/smallComponents/currentMatchUpHelmet';
class MyTeamPage extends Component {
    state = {  }
    render() { 
        return (
            
            <div className="" style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <br/>
            <br/>
            <div className="row">
            <div className="col-lg-9 col-md-10"><MyTeamOverView/></div>
<div className="col-lg-3 col-md-6"><div className="myteamWebHide1"><EditTeam className="myteamWebHide1"/></div>

<br/>
<CurrentMatchupWithHelmet/>

<br/>
<br/>

</div>            
            
            
            
            
            
            
            </div> </div>);
    }
}
 
export default MyTeamPage;