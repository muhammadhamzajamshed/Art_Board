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

function App() {
  return (
    <React.Fragment>
        
        <div>
        <League/>
        <Header/>
          <Switch>
           <Route path="/header" component={Header}/>
           <Route path="/DraftRulePage" component={DraftRulesPage}/>
           <Route path="/landingPage" component={LandingPage}/>
           <Route path="/home" component={Home}/>
           <Route path="/viewRosters" components={ViewRoasters}/>
           <Route path="/league" components={League}/>
           <Route path="/GordonsSuperLeague" component={GordonsSuperLeague}/>4

          </Switch>
          <br/><br/>
          <Footer/>
        </div>
        
        </React.Fragment>
  );
}

export default App;