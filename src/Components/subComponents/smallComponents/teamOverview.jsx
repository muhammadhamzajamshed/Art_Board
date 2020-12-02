import React, { Component } from 'react';
import whiteHelmet from '../../../Assets/Images/object6.png'
class TeamOverView extends Component {
    state = {  }
    render() { 
        return (  <div className="container">
        <div class="w3-container">
            
            <div class="w3-card" style={{backgroundColor:"white"}}>
                <h3
                    style={{
                        backgroundColor: 'rgb(0, 0, 46)',
                        color: 'white',
                        textAlign: 'center',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        fontFamily: 'Bebas Neue,cursive',
                        letterSpacing: '1px'
                    }}
                >
                TEAM OVERVIEW
                </h3>

                <div class="container">
                <div
                        className="row "
                        style={{
                            
                            padding: '10px',
                            textAlign: 'justify',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '8px',
                            marginTop: '6px'
                        }}
                    >
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            
                                <img
                                    style={{
                                        marginLeft: '2px',
                                        marginRight: '2px',
                                        width: '78px',
                                        height: '72px',
                                        float:"left"
                                    }}
                                    src={whiteHelmet}
                                />
                               
                            
                        </div>
<div className="col-lg-2 col-md-2 col-sm-2"/>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div><span style={{fontFamily:'Gilroy '}}>
                        
                        THE BIGBOYS
                        <div><span style={{color:'#CBCBCB'}}>  2-0-1
                    #2 SUPER LEAGUE
                    </span>
                    </div>
                    </span>
                    </div></div>
                        
                    </div>
                    
                

                    {/*<p style={{
                backgroundColor: 'rgb(241, 241, 241)',
                padding: '10px',
                textAlign: 'justify'
            }}>JOE'S CLUB</p>*/}
            
                </div>

                <footer class="w3-container">
                    <p
                        style={{
                            textAlign: 'center',
                            
                        }}
                    >
                    
                    </p>
                    </footer>  
            </div>
        </div>
    </div>);
    }
}
 
export default TeamOverView;