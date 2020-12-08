import React, { Component } from 'react';  


import PlayOffBrackets from './playoffsBracket';

import RecentScores from './../subComponents/RecentScores';
import background from '../../Assets/Images/LeagueMenu.png'

import RealTimeStandings from './../subComponents/realTimeStandings';

import '../../CSS/PlayOffs.css'

class PlayOffs extends Component {
    state = {  }
    render() { 
        return (



<div style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
<br/>
<br/>
<div className="row ml-3 mr-3">
<div className="col-lg-8 col-md-12 col-sm-12">
<PlayOffBrackets/>
</div>
<div className=" col-lg-4 col-md-3 col-sm-3">
<div className=" playoffsMobileHide">
<div ><RecentScores/></div>

<div ><RealTimeStandings/></div>
</div>
</div>

</div>
</div>







          );
    }
}
 


export default PlayOffs;