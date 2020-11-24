import React from 'react'
import "../CSS/homePage.css"
import yellowHelmet from '../Assets/Images/object1.png'
import redHelmet from '../Assets/Images/object2.png'
import blackHelmet from '../Assets/Images/object3.png'
import blueHelmet from '../Assets/Images/object4.png'
import whiteHelmet from '../Assets/Images/object6.png'

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
                    
                <div class="w3">
                      
                      <div class="w3-card" >
                             <h3 style={{
                                 backgroundColor: 'white',
                                 color: 'rgb(0, 0, 46)',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px'
                             }}>GAMEWEEK FIXTURES</h3>
                          
                            <div class="container">
                                <div className="row">
                                    <div className="col-4">
                                    <div style={{
                                        backgroundColor: 'rgb(242, 242, 242)',
                                        paddingTop: '40px',
                                        paddingBottom: '40px'
                                    }}>
                                        <div class="w3-container w3-center">
                                            <div className="container">
                                                <div className="row">
                                                <div className="col-5">
                                                    <img src={redHelmet} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>JOE'S CLUB</b> 
                                                </div>
                                                <div className="col-2">
                                                <h1 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign: 'center',
                                                        paddingTop: '10px',
                                                        color: 'rgb(82, 194, 116)'
                                                    }}>
                                                        V
                                                    </h1>
                                                </div>
                                                <div className="col-5">
                                                    <img src={blueHelmet} style={{
                                                        transform: 'scaleX(-1)'
                                                    }} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>MARKSMEN</b> 
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div style={{
                                            backgroundColor: 'rgb(242, 242, 242)',
                                            paddingTop: '40px',
                                            paddingBottom: '40px'
                                        }}>
                                        <div class="w3-container w3-center">
                                            <div className="container">
                                            <div className="row">
                                                <div className="col-5">
                                                    <img src={yellowHelmet} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>TEAM GORDON</b> 
                                                </div>
                                                <div className="col-2">
                                                <h1 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign: 'center',
                                                        paddingTop: '10px',
                                                        color: 'rgb(82, 194, 116)'
                                                    }}>
                                                        V
                                                    </h1>
                                                </div>
                                                <div className="col-5">
                                                    <img src={redHelmet}  style={{
                                                        transform: 'scaleX(-1)'
                                                    }} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>TEAM ALAN</b> 
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div style={{
                                            backgroundColor: 'rgb(242, 242, 242)',
                                            paddingTop: '40px',
                                            paddingBottom: '40px'
                                        }}>
                                        <div class="w3-container w3-center">
                                            <div className="container">
                                                <div className="row">
                                                <div className="col-5">
                                                    <img src={whiteHelmet} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>TEAM BIGBOYS</b> 
                                                </div>
                                                <div className="col-2">
                                                    <h1 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign: 'center',
                                                        paddingTop: '10px',
                                                        color: 'rgb(82, 194, 116)'
                                                    }}>
                                                        V
                                                    </h1>
                                                </div>
                                                <div className="col-5">
                                                    <img src={blackHelmet}  style={{
                                                        transform: 'scaleX(-1)'
                                                    }} /> 
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>SUPERKINGS</b>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                            </div>
                      </div>
                      </div>
                      <br/>
                      <div class="w3">
                      
                      <div class="w3-card" >
                             <h3 style={{
                                 backgroundColor: 'white',
                                 color: 'rgb(0, 0, 46)',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px'
                             }}>RECENT ACTIVITY</h3>
                          
                                <div className="container">
                                <table class="table table-striped">
                        <thead className="homePagetableHeader">
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">TRANSACTION</th>
                            <th scope="col">DETAILS</th>
                            
                            </tr>
                        </thead>
                        <tbody className="homePagetableBody">
                            <tr>
                            <th scope="row"></th>
                            <td>+</td>
                            <td>
                                Team Gordon added Player ABC,<br/>
                                Sea D/ST from Free Agency to Bench
                            </td>
                            
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td>+</td>
                                <td>
                                    Team Alan added Player XYZ,<br/>
                                    ATL, QB from Free Agency to Bench
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td>-</td>
                                <td>
                                    Joes Club dropped Player XYZ,<br/>
                                    NY, QB from Bench to Waivers
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td>+-</td>
                                <td>
                                    Team Alan dropped Player XYZ,ATL,QB<br/>
                                    Team Alan Added Player XYZ,ATL,QB
                                </td>
                            </tr>
                            
                        </tbody>
                        </table>
                                </div>
                            </div>
                      </div>
                </div>
                <div className="col-3">
                    RECENT ACTIVITY
                    <br/>
                    <br/>
                    
                </div>
            </div>
        </div>
    )
}

export default HomePage

