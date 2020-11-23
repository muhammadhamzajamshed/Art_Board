import React, { Component } from 'react';


class DraftRulesPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{backgroundColor:"#f2f7f4"}}>
             

            <div className="row" style={{ marginLeft:"35px",marginRight:"5px" ,paddingLeft:"15px" ,paddingRight:"15px"}} >
            
                 <div class="card container  my-3 py-3 z-depth-1  col-lg-12 col-md-8 col-sm-8">
 
                 <h4>Draft Rule Page</h4>
                 <br/>
                 <br/>
                 <h6> General Rules</h6>
                
                 <p><strong>1</strong> League wil consist of 10 - 12 Teams</p>


    
    <h6>Teams</h6>
    
    
    
    <p>League Team will be built from the 62 collegiate teams that comprse the power five confrenses plus Notre Dome.</p>

    <div className="row">
    <div className="col-lg-1"></div>
    <div className="col-lg-2"><h6>SEC</h6>
    <p>Alabama</p>
    <p>Alabama</p>
    <p>Alabama</p>
    
    </div>
    <div className="col-lg-2"><h6>BIG 10</h6></div>
    <div className="col-lg-2"><h6>BIG 12</h6></div>
    <div className="col-lg-2"><h6>ACC</h6></div>
    <div className="col-lg-2"><h6>PAC 12</h6></div>
    <div className="col-lg-1"></div>
    </div>
    
 
 
 
 </div>
 
 
 
 </div>
 
             </div>
         );
    }
}
 
export default DraftRulesPage;