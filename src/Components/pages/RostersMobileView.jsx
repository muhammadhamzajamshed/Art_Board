import React, { Component } from 'react';
import background from '../../Assets/Images/LeagueMenu.png'


import '../../CSS/Rosters.css'
import TeamDraft from './../subComponents/TeamDraft';
import {CaretRightOutlined} from '@ant-design/icons';
import { Collapse } from 'antd';

const { Panel } = Collapse;
class RostersMobileView extends Component {
    state = {
        expandIconPosition: "right",
      };

      onPositionChange = expandIconPosition => {
        this.setState({ expandIconPosition });
      };
    render() { 
        const { expandIconPosition } = this.state;
        return ( 
            
            <div  className="" style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <br/><br/><br/><br/>
                <div className="container">
                <h5 className="h5Rosters">ROSTERS -<span className="rosterSubHeading">GORDON'S SUPER LEAGUE</span></h5>
                </div>



            <div className="row ml-1 mr-1">

            <div className="col-lg-4  col-md-6  col-sm-8 col-xs-12">
            <TeamDraft/>
            </div>
            
            <div className="container">
                <div className="col-xs-12">
                <Collapse
                    bordered={false}
                    
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
                    className="site-collapse-custom-collapse"
                    expandIconPosition={expandIconPosition}
                >
                    <Panel header="TEAM XYZ" key="1" className="site-collapse-custom-panel">
                        <TeamDraft/>
                    </Panel>
                    <Panel header="TEAM XYZ" key="2" className="site-collapse-custom-panel">
                        <TeamDraft />
                    </Panel>
                    <Panel header="TEAM XYZ" key="3" className="site-collapse-custom-panel">
                        <TeamDraft/>
                    </Panel>
                    <Panel header="TEAM XYZ" key="4" className="site-collapse-custom-panel">
                        <TeamDraft/>
                    </Panel>
                    <Panel header="TEAM XYZ" key="5" className="site-collapse-custom-panel">
                        <TeamDraft />
                    </Panel>
                    <Panel header="TEAM XYZ" key="6" className="site-collapse-custom-panel">
                        <TeamDraft/>
                    </Panel>
                    <Panel header="TEAM XYZ" key="7" className="site-collapse-custom-panel">
                        <TeamDraft/>
                    </Panel>
                    <Panel header="TEAM XYZ" key="8" className="site-collapse-custom-panel">
                        <TeamDraft />
                    </Panel>
                    <Panel header="TEAM XYZ" key="9" className="site-collapse-custom-panel">
                        <TeamDraft/>
                    </Panel>
                    
                </Collapse>
                </div>
            </div>

            </div>
            </div>
          
          
         );
    }
}
 
export default RostersMobileView;