import React, { Component } from 'react';  


import PlayOffBrackets from './playoffsBracket';

import RecentScores from './../subComponents/RecentScores';
import Standings from './../subComponents/Standings';
import background from '../../Assets/Images/LeagueMenu.png'

class PlayOffs extends Component {
    state = {  }
    render() { 
        return (



<div style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
<div className="row ml-3 mr-3">
<div className="col-lg-9 col-md-9 col-sm-9">
<PlayOffBrackets/>
</div>
<div className="col-lg-3 col-md-3 col-sm-3">
<RecentScores/>

<Standings/>

</div>





</div>
</div>


          );
    }
}
 


export default PlayOffs;