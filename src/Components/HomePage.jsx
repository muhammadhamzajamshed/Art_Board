import React from 'react'
import "../CSS/homePage.css"
import { Card } from 'antd';
function HomePage() {
    return (
        <div>
            <div>
                <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                        <p className="homepageBanner">
                            AD SPACE FOR HOMEPAGE
                        </p>
                </div>
                <div className="col-3"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    
                    <div className="container">
                    <div class="w3-container">
                      
                      <div class="w3-card" >
                             <h3 style={{
                                 backgroundColor: 'rgb(0, 0, 46)',
                                 color: 'white',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px'
                             }}>GAMEWEEK FIXTURES</h3>
                          
                          <div class="container">
                            <p style={{
                                backgroundColor: 'rgb(241, 241, 241)',
                                padding: '10px',
                                textAlign: 'justify'
                            }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            <p style={{
                                backgroundColor: 'rgb(241, 241, 241)',
                                padding: '10px',
                                textAlign: 'justify'
                            }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            <p style={{
                                backgroundColor: 'rgb(241, 241, 241)',
                                padding: '10px',
                                textAlign: 'justify'
                            }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            
                          </div>

                          <footer class="w3-container">
                            <p style={{
                                textAlign:'center',
                                color: 'rgb(155, 155, 155)',
                            }}> See all fixtures</p>
                          </footer>
                      </div>
                      </div>
                    </div>
                </div>
                <div className="col-6">
                    
                    <div class="w3-panel w3-card-2">
                        <br/>
                        <h3 style={{
                            color: 'rgb(0, 0, 46)',
                            textAlign: 'center',
                            fontFamily: 'Bebas Neue,cursive',
                            
                        }}>
                            UPCOMING LEAGUE MATCHUPS
                        </h3>

                        <div className="container">
                            <div className="row">
                                <div className="col-3">A</div>
                                <div className="col-3">B</div>
                                <div className="col-3">C</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-3">
                    RECENT ACTIVITY
                </div>
            </div>
        </div>
    )
}

export default HomePage
