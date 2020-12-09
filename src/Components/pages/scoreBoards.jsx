import React, { Component } from 'react';
import LiveUpdates from './../subComponents/smallComponents/liveUpdates';
import LiveNFLScore from './../subComponents/smallComponents/liveNFLScore';
import ScoreBoardOverview from '../subComponents/scoreBoardOverview.jsx'

import background from '../../Assets/Images/LeagueMenu.png'
import Standings from './../subComponents/Standings';
import '../../CSS/scoreBoards.css'
import { Collapse } from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';

import RealTimeStandings from './../subComponents/realTimeStandings';


const { Panel } = Collapse;
class Scoreboards extends Component {
    state = {
        expandIconPosition: "right",
      };

      onPositionChange = expandIconPosition => {
        this.setState({ expandIconPosition });
      };
    render() { 
        const { expandIconPosition } = this.state;
        return ( 
            <div style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                
            <br/>
            <br/>
            <div className="container-fluid">
                    <br/>
					
                    <div className="webScoreBor">
                    <div className="row">

                        <div className="liveUpdateWeb col-lg-3 col-md-3 "><LiveUpdates/></div>
                        <div className="col-lg-6 col-md-6 col-sm-6 "><ScoreBoardOverview/></div>
                        <div className="col-lg-3 col-md-3 col-sm-3"><LiveNFLScore/>

                        <br/><RealTimeStandings/>
                        </div>



                        </div>
                    </div>

                    <div className="mobScoreBor">
                    <div className="row">
                        <div className="col-12 "><ScoreBoardOverview/><br/></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <Collapse
                            bordered={false}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
                            className="site-collapse-custom-collapse"
                            expandIconPosition={expandIconPosition}
                        >
                            <Panel header="NFL SCORES" key="1" className="site-collapse-custom-panel">
                                <LiveNFLScore/>
                            </Panel>
                            <Panel header="REAL-TIME STANDINGS" key="2" className="site-collapse-custom-panel">
                                <Standings/>
                            </Panel>
                        </Collapse>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default Scoreboards;