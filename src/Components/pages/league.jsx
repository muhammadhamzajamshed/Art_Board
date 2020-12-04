import React, { Component } from 'react';

import GordonsSuperLeague from './../GordonsSuperLeague';

import ViewRoasters from './../subComponents/ViewRosters';
import ViewMobileRoster from './viewRosterMovileView'
import '../../CSS/GordonsSuperLeague.css'
import MyTeam from './../subComponents/MyTeam';

import MobileRecentScores from '../pages/mobileRecentView'
import RecentScores from '../subComponents/RecentScores';
import LeagueSchedule from './../leagueSchedule';
import LeagueScheduleMobile from './leagueScheduleMobileView'
import background from '../../Assets/Images/LeagueMenu.png'
import {CaretRightOutlined} from '@ant-design/icons';
import { Collapse } from 'antd';


const { Panel } = Collapse;
class League extends Component {
    state = {
        expandIconPosition: "right",
      };

      onPositionChange = expandIconPosition => {
        this.setState({ expandIconPosition });
      };
    render() { 
        const { expandIconPosition } = this.state;
        return (  
            <div>
                <div className="webLeague" style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
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
            <div className="card GordonsSuperLeagueMobile">
                <GordonsSuperLeague/>
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
                    className="site-collapse-custom-collapse"
                    expandIconPosition={expandIconPosition}
                >
                    <Panel header="LEAGUE SCHEDULE" key="1" className="site-collapse-custom-panel">
                    <LeagueScheduleMobile/>
                    </Panel>
                    <Panel header="VIEW ROSTERS" key="2" className="site-collapse-custom-panel">
                    <ViewMobileRoster />
                    </Panel>
                    <Panel header="RECENT SCORES" key="3" className="site-collapse-custom-panel">
                    <MobileRecentScores/>
                    </Panel>
                </Collapse>
            </div>
            </div>
        );
    }
}
 
export default League;