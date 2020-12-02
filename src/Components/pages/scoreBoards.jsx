import React, { Component } from 'react';
import LiveUpdates from './../subComponents/smallComponents/liveUpdates';
import LiveNFLScore from './../subComponents/smallComponents/liveNFLScore';
import ScoreBoardOverview from '../subComponents/scoreBoardOverview.jsx'

import background from '../../Assets/Images/LeagueMenu.png'
import Standings from './../subComponents/Standings';


class Scoreboards extends Component {
    state = {  }
    render() { 
        return ( 
<div style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
<div className="row">

<div className="col-lg-3 col-md-3 "><LiveUpdates/></div>
<div className="col-lg-6 col-md-6 col-sm-6 "><ScoreBoardOverview/></div>
<div className="col-lg-3 col-md-3 col-sm-3"><LiveNFLScore/>

<br/><Standings/>
</div>



</div>
</div>

         );
    }
}
 
export default Scoreboards;