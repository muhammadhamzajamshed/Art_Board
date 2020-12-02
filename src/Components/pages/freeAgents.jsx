import React, { Component } from 'react';

import FreeagentsOverView from './../subComponents/freeagentsOverview';
import background from '../../Assets/Images/LeagueMenu.png'
class FreeAgents extends Component {
    state = {  }
    render() { 
        return (  

            <div style={{ backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <div style={{marginLeft:"50px",marginRight:"50px"}} >


            
            <div class="w3-container">
                <div class="w3-card" style={{backgroundColor:"white"}}>
                    <h3
                        style={{
                            backgroundColor: 'rgb(0, 0, 46)',
                            color: 'white',
                            paddingLeft:"10px",
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            fontFamily: 'Bebas Neue,cursive',
                            letterSpacing: '1px'
                        }}
                    >
                    FREE AGENTS LIST
                    </h3>

                    <div class="container">
                        <div
                            className="row "
                            style={{
                                padding: '10px',
                                textAlign: 'justify',
                              
                                marginRight: '10px',
                                marginBottom: '8px',
                                marginTop: '6px'
                            }}
                        >
                            <div className="col-lg-2 col-md-2 col-sm-2 ">
                                <span style={{ fontWeight: 'bold', float: 'left' }}><span>Position <span><div class="btn-group">
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{borderRadius:"20px" ,paddingLeft:"5px" }}>
                                All 
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                              </div></span></span></span>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 ">
                        {/*<span style={{ fontWeight: 'bold', float: 'left' }}>All Teams</span>*/}
                        
<div class="btn-group">
  <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{borderRadius:"20px"}}>
  All Teams
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 ">
                                <span style={{ fontWeight: 'bold', float: 'left' }}>Search <span><input style={{borderRadius:"20px"}} type="text"/></span></span>
                            </div>
                            

                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <span style={{ color: 'blue', float:"right",textDecoration:"underLine" }}>Results Filter</span>
                            </div>
                        </div>
                    </div>
                    



               
                
        


                    <footer class="w3-container">
                        <p
                            style={{
                                textAlign: 'center'
                            }}
                        />
                    </footer>
                </div>
            </div>
        


           
            <br/>
            <FreeagentsOverView/>
            
            
            
            
            
            
            </div>
            </div>
        );
    }
}
 
export default FreeAgents;