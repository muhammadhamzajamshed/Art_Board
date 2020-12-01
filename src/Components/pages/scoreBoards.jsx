import React, { Component } from 'react';
import LiveUpdates from './../subComponents/smallComponents/liveUpdates';
import LiveNFLScore from './../subComponents/smallComponents/liveNFLScore';
import ScoreBoardOverview from '../subComponents/scoreBoardOverview.jsx'

class Scoreboards extends Component {
    state = {  }
    render() { 
        return ( 

<div className="row mt-5">

<div className="col-lg-3 col-md-3 "><LiveUpdates/></div>
<div className="col-lg-6 col-md-6 col-sm-6 "><ScoreBoardOverview/></div>
<div className="col-lg-3 col-md-3 col-sm-3"><LiveNFLScore/></div>



</div>

         );
    }
}
 
export default Scoreboards;