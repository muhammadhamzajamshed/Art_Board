import React, { Component } from 'react';
import {FiSettings} from 'react-icons/fi';
import '../../CSS/PlayOffBrackets.css'
import circle from '../../Assets/Images/Ellipse.png'
import line from '../../Assets/Images/Line.png'
import vline from '../../Assets/Images/VLine.png'

class PlayOffBrackets extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="card PlayOffBrackets ">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="h5">PLAYOFFS BRACKET  <span style={{color:"#CBCBCB" , fontSize:"58px"}}>GORDON SUPER LEAGUE</span></h5>
            <hr className="new5"/>

            <h6 className="h6">Champions Bracket</h6>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 paraContent"><p>round 1  | NFL WEEK 14-15</p></div>
            <div className="col-lg-5 col-md-5 col-sm-5 paraContent"><p>CHAMPIONSHIP  | NFL WEEK 16</p></div>
            </div>
           
           
            </div>
            
            </div>
            <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-2">
            <div className="box" style={{marginTop:"50px", marginBottom:"50px"}}>
            <div><img src={circle} className="circle"/></div>
            <div><img src={circle} className="circle"/></div>
            
            
            </div>
            <div className="box" style={{marginTop:"50px", marginBottom:"50px"}}>
            <div><img src={circle} className="circle"/></div>
            
            <div><img src={circle} className="circle"/></div>
            
            
            </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 text-center">
           <div style={{marginTop:"105px",marginLeft:"8px"}}>
                <img src={line} />
                <img src={vline} style={{marginLeft: "53px"}} />
                
                <img src={line} />

            </div>
            </div>
            
            <div className="col-lg-4 col-md-3 col-sm-2">
            <div className="box1" style={{marginTop:"50px", marginBottom:"50px"}}></div>
            <div className="box" style={{ marginLeft:"35px",marginTop:"50px", marginBottom:"50px"}}>
            <div><img src={circle} className="circle"/></div>
            <div><img src={circle} className="circle"/></div>
            
            

            </div></div>
            <div className="col-lg-3 col-md-3 col-sm-3">
          
            
            
            </div>
            
            
            
            
           
            
            </div>
            <hr className="new5"/>
            <h6 className="h6">Winners Consolation ladder</h6>
            <div className="box" style={{marginTop:"50px", marginBottom:"50px"}}>
            <div><img src={circle} className="circle"/></div>
            <div><img src={circle} className="circle"/></div>
            
            
            </div>
       
            </div>
          
          
         );
    }
}
 
export default PlayOffBrackets;