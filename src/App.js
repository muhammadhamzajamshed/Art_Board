import logo from './logo.svg';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import { Route, Switch } from "react-router-dom";
// import "bootstrap-css-only/css/bootstrap.min.css";
import "./App.css";
import League from './Components/pages/league.jsx'
import Home from './Components/HomePage'
import LandingPage from './Components/landingPage'
import Header from './Components/layouts/Header.jsx'
import Footer from './Components/layouts/Footer'
import GordonsSuperLeague from './Components/GordonsSuperLeague.jsx'
import DraftRulesPage from './Components/DraftRulePage.jsx'

import ViewRoasters from './Components/subComponents/ViewRosters.jsx'
import ScoringRules from './Components/ScoringRules'
import LeagueMenu from './Components/pages/LeagueMenu'
import PlayOffBrackets from './Components/pages/playoffsBracket'

import Standings from './Components/subComponents/Standings';
import PlayOffs from './Components/pages/playOffs';
import LeagueSchedule from './Components/leagueSchedule';


import Rosters from './Components/pages/Rosters'
import MatchUps from './Components/pages/matchups';
import Trade from './Components/pages/trade';
import TradeConfirm from './Components/pages/tradeConfirm';
import FreeAgents from './Components/pages/freeAgents';
import DraftRounds from './Components/pages/draftRounds';
// sub Component Import
import TeamDraft from './Components/subComponents/TeamDraft';
import OverView from './Components/subComponents/overview.jsx';
import FreeagentsOverView from './Components/subComponents/freeagentsOverview';
import DraftRoundsOverView from './Components/subComponents/draftRoundsOverview.jsx';





function App() {
  return (
    <React.Fragment>
        
        <div>
      
        <Header/>
          <Switch>
           <Route path="/header" component={Header}/>
           <Route path="/DraftRulePage" component={DraftRulesPage}/>
           <Route path="/landingPage" component={LandingPage}/>
           <Route path="/home" component={Home}/>
           <Route path="/viewRosters" component={ViewRoasters}/>
           <Route path="/league" component={League}/>
           <Route path="/leagueMenu" component={LeagueMenu}/>
           <Route path="/playoffs" component={PlayOffs}/>
           <Route path="/scoringRules" component={ScoringRules}/>
           <Route path="/playOffBrackets" component={PlayOffBrackets}/>
           <Route path="/leagueSchedule" component={LeagueSchedule}/>
           <Route path="/standings" component={Standings}/>
           
           <Route path="/GordonsSuperLeague" component={GordonsSuperLeague}/>
          
           <Route path="/roster" component={Rosters}/>
           <Route path="/matchups" component={MatchUps}/>
           <Route path="/trade" component={Trade}/>
           <Route path="/tradeConfirm" component={TradeConfirm}/>
           <Route path="/freeAgents" component={FreeAgents}/>
           <Route path="/draftRounds" component={DraftRounds}/>
{/* Sub Components*/}
           <Route path="/teamDraft" component={TeamDraft}/>
           <Route path="/overview" component={OverView}/>
           <Route path="/freeagentsOverview" component={FreeagentsOverView}/>
           <Route path="/draftRoundsOverview" component={DraftRoundsOverView}/>
           
          </Switch>
          <br/><br/>
          <Footer/>
        </div>
        
        </React.Fragment>
  );
}

export default App;