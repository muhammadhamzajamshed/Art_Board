import React, { Component } from 'react';  


import PlayOffBrackets from './playoffsBracket';

import RecentScores from './../subComponents/RecentScores';
import Standings from './../subComponents/Standings';
class PlayOffs extends Component {
    state = {  }
    render() { 
        return (




<div className="row ml-4 mr-4">
<div className="col-lg-8">
<PlayOffBrackets/>
</div>
<div className="col-lg-4">
<RecentScores/>

<Standings/>

</div>





</div>


          );
    }
}
 


export default PlayOffs;