import React, { Component } from 'react';

import GordonsSuperLeague from './../GordonsSuperLeague';

import ViewRoasters from './../subComponents/ViewRosters';

import MyTeam from './../subComponents/MyTeam';
import RecentScores from '../subComponents/RecentScores';
import LeagueSchedule from './../leagueSchedule';
import background from '../../Assets/Images/LeagueMenu.png'
class League extends Component {
    state = {  }
    render() { 
        return (  
<div  style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
<div className="row mt-2">
<div className="col-lg-3">
<ViewRoasters/>
</div>
<div className="col-lg-6">
<GordonsSuperLeague/>
<br/>
<LeagueSchedule/>
</div>
<div className="col-lg-3">
<MyTeam/>
<br/>
<RecentScores/>

</div>

</div>
</div>
        );
    }
}
 
export default League;