import React, { Component } from 'react';
import '../CSS/LeagueScheduleResults.css';
import object1 from '../Assets/Images/object1.png';
import object2 from '../Assets/Images/object2.png';

import revert from '../Assets/Images/reverrtHelmet.png'
import { Divider } from 'antd';

class LeagueSchedule extends Component {
	state = {};
	render() {
		return (
			<div className="card LeagueSchedule ">
				<div className="w3-card heading lg-12">
					<h5 className="headingFont">LEAGUE SCHEDULE</h5>
				</div>
				<div className="row  ">
					<p className="para alignContent">By Team</p>
					<div className="dropdown"  style={{
          marginTop: "10px"}}>
						<a
							className="btn btn-outline-secondary dropdown-toggle dropDown"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							All Team
						</a>
					</div>
          <p className="para alignContent">Week</p>
          
					<div className="dropdown" style={{
            marginTop: "10px"}}>
						<a
							class="btn btn-outline-secondary  dropdown-toggle dropDown"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Upcoming
						</a>
					</div>
				</div>
				<h6 className="h6"> WEEK 4</h6>
        <div className="row headingMargin">
        <div className="col-lg-4">
        <p>Home Team</p>

        </div>
        <div className="col-lg-4" style={{textAlign:"center"}}>
        <p>Scores</p>
        </div>
        <div className="col-lg-4 " >
       <p  style={{float:"right" ,marginRight:"35px"}} >Away Team</p>
        </div>
        
        </div>
				<div className="">
					<div className="row lg-12 tableRow">
						<div className="col-lg-6 ">
							<div className="row lg-12">
								<div className="col-lg-3">
									<img className="imgStyle" src={object2} />
								</div>
								<div className="col-lg-6">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
                </div>
                <div className="col-lg-3">
                 </div>
							</div>
            </div>
            

            <div className="col-lg-6  vl" >
            <div className="row lg-12">
            <div className="col-lg-3"></div>
								<div className="col-lg-6">
								<h4 style={{float:"right"}}>TEAM NAME</h4>
									<h6 style={{float:"right" }}>Manager ID</h6>	
								</div>
								<div className="col-lg-3">
                <img style={{float:"right"}} className="imgStyle" src={revert} />
								</div>
							</div>
            
            
            </div>
          </div>
          



          <div className="row lg-12 tableRow">
						<div className="col-lg-6 ">
							<div className="row lg-12">
								<div className="col-lg-3">
									<img className="imgStyle" src={object2} />
								</div>
								<div className="col-lg-6">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
                </div>
                <div className="col-lg-3"> </div>
							</div>
						</div>
            <div className="col-lg-6" >
            <div className="row lg-12">
            <div className="col-lg-3"></div>
								<div className="col-lg-6">
								<h4 style={{float:"right"}}>TEAM NAME</h4>
									<h6 style={{float:"right" }}>Manager ID</h6>	
								</div>
								<div className="col-lg-3">
                <img style={{float:"right"}} className="imgStyle" src={revert} />
								</div>
							</div>
            
            
            </div>
          </div>
          




          <div className="row lg-12 tableRow">
						<div className="col-lg-6 ">
							<div className="row lg-12">
								<div className="col-lg-3">
									<img className="imgStyle" src={object2} />
								</div>
								<div className="col-lg-6">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
                </div>
                <div className="col-lg-3"> </div>
							</div>
						</div>
            <div className="col-lg-6" >
            <div className="row lg-12">
            <div className="col-lg-3"></div>
								<div className="col-lg-6">
								<h4 style={{float:"right"}}>TEAM NAME</h4>
									<h6 style={{float:"right" }}>Manager ID</h6>	
								</div>
								<div className="col-lg-3">
                <img style={{float:"right"}} className="imgStyle" src={revert} />
								</div>
							</div>
            
            
            </div>
          </div>
          




          <div className="row lg-12 tableRow">
						<div className="col-lg-6 ">
							<div className="row lg-12">
								<div className="col-lg-3">
									<img className="imgStyle" src={object2} />
								</div>
								<div className="col-lg-6">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
                </div>
                <div className="col-lg-3"> </div>
							</div>
						</div>
            <div className="col-lg-6" >
            <div className="row lg-12">
            <div className="col-lg-3"></div>
								<div className="col-lg-6">
								<h4 style={{float:"right"}}>TEAM NAME</h4>
									<h6 style={{float:"right" }}>Manager ID</h6>	
								</div>
								<div className="col-lg-3">
                <img style={{float:"right"}} className="imgStyle" src={revert} />
								</div>
							</div>
            
            
            </div>
          </div>
          




          <div className="row lg-12 tableRow ">
						<div className="col-lg-6 ">
							<div className="row lg-12">
								<div className="col-lg-3">
									<img className="imgStyle" src={object2} />
								</div>
								<div className="col-lg-6">
									<h4>TEAM NAME</h4>
									<h6>Manager ID</h6>
                </div>
                <div className="col-lg-3"> </div>
							</div>
						</div>
            <div className="col-lg-6" >
            <div className="row lg-12">
            <div className="col-lg-3"></div>
								<div className="col-lg-6">
								<h4 style={{float:"right"}}>TEAM NAME</h4>
									<h6 style={{float:"right" }}>Manager ID</h6>	
								</div>
								<div className="col-lg-3">
                <img style={{float:"right"}} className="imgStyle" src={revert} />
								</div>
							</div>
            
            
            </div>
          </div>
          








    
    </div>

				</div>
			
		);
	}
}

export default LeagueSchedule;
