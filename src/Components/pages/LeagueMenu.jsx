import React, { Component } from 'react';

import GordonsSuperLeague from './../GordonsSuperLeague';

import ViewRoasters from './../subComponents/ViewRosters';

import MyTeam from './../subComponents/MyTeam';
import RecentScores from '../subComponents/RecentScores';
import LeagueScheduleResults from './../LeagueScheduleResults';
import background from '../../Assets/Images/LeagueMenu.png'
class League extends Component {
    state = {  }
    render() { 
        return (  
<div style={{marginTop:"10px"}} style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
<div className="row">
<div className="col-lg-3" style={{paddingLeft:"-15px",paddingRight:"-15px"}}>
<ViewRoasters/>
</div>
<div className="col-lg-6">
<GordonsSuperLeague/>
<br/>
<LeagueScheduleResults/>
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