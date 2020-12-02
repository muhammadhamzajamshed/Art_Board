import React, { Component } from 'react';
import background from '../../Assets/Images/LeagueMenu.png'


import '../../CSS/Rosters.css'
import TeamDraft from './../subComponents/TeamDraft';
class Rosters extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="" style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

<div className="card rosterCard">
<h5 className="h5Rosters">ROSTERS -<span className="rosterSubHeading">GORDON'S SUPER LEAGUE</span></h5>

</div>



            <div className="row ml-1 mr-1">

            <div className="col-lg-4  col-md-6  col-sm-8">
            <TeamDraft/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 ">
            <TeamDraft/>
            </div>

            <div className="col-lg-4 col-md-6  col-sm-8">
            <TeamDraft/>
            </div>

            </div>
            <div className="row ml-1">

            <div className=" col-lg-4 col-md-6  col-sm-8  ">
            <TeamDraft/>
            </div>
            <div className=" col-lg-4 col-md-6  col-sm-8  ">
            <TeamDraft/>
            </div>

            <div className=" col-lg-4 col-md-6  col-sm-8  ">
            <TeamDraft/>
            </div>

            </div>
            <div className="row">

            <div className=" col-lg-4 col-md-6  col-sm-8  ">
            
            </div>
            <div className=" col-lg-4 col-md-6  col-sm-8  ">
            <TeamDraft/>
            </div>

            <div className=" col-lg-4 col-md-6  col-sm-8  ">
            
            </div>

            </div>
            </div>
          
          
         );
    }
}
 
export default Rosters;