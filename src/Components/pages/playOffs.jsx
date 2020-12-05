import React, { Component } from 'react';  


import PlayOffBrackets from './playoffsBracket';

import RecentScores from './../subComponents/RecentScores';
import Standings from './../subComponents/Standings';
import background from '../../Assets/Images/LeagueMenu.png'
import playoffs from '../../Assets/Images/Playoffs.png'
import RealTimeStandings from './../subComponents/realTimeStandings';

class PlayOffs extends Component {
    state = {  }
    render() { 
        return (



<div style={{ backgroundImage:`url(${playoffs})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
<div className="row ml-3 mr-3">
<div className="col-lg-8 col-md-12 col-sm-12" >

</div>
<div className="col-lg-4 col-md-3 col-sm-3">
<RecentScores/>

<RealTimeStandings/>

</div>





</div>
</div>


          );
    }
}
 


export default PlayOffs;