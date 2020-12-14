import React from 'react'
import { Button, Divider, Input } from 'antd';
import {
    InstagramOutlined
  } from '@ant-design/icons';
import "../CSS/button.css"
import "../CSS/landingPage.css"
import Image from '../Assets/Images/Group 150.png'
import mobileHead from '../Assets/Images/mobileHead.jpeg'
import logo from '../Assets/Images/powerBallNewlogo.png';
function LandingPage() {
    return (
        <div className="landingBody">
            
            <br/>
            <br/>
                <div className="container">
                    <div className="mobLanding">
                        <br/>
                        <br/>
                        <br/>
                        <img src = {mobileHead} style={{
                            width : '100%'
                        }} />
                    </div>
                    <div className="webLanding">
                        <div className="container">
                        <div className="row" style={{
                            backgroundColor: 'black',
                            overflow : 'hidden',
                            verticalAlign : 'middle'
                        }}>
                            <div className="col-3">
                                    <img src={logo } style={{
                                        width : '100%',
                                        marginLeft : '1%',
                                        paddingBottom : '15px',
                                        paddingTop : '35px'
                                    }}/>
                            </div>
                            <div className="col-6" style={{
                                textAlign : 'center',
                                padding : '10px',
                                paddingTop : '35px'
                            }}>
                                    
                                    <p style={{
                                        color : 'white',
                                        fontSize : '40px',
                                        letterSpacing : '1px'
                                        }}>WELCOME TO POWERBALL</p>

                                    <div style={{
                                        color : 'white',
                                        fontSize : '30px',
                                        marginTop : '-50px',
                                        letterSpacing : '3px'
                                        }}>
                                        FANTASY FOOTBALL - DONE RIGHT
                                    </div>
                            </div>

                            <div className="col-3">
                                    <img src={Image} style={{
                                        width : '135%',
                                        marginLeft : '-50%',
                                        height : '130%'
                                    }} />
                            </div>   
                                        
                                     
                                     
                                    
                          

                        </div>
                        </div>
                    </div>
                <div className="innerLandingBody">
                <br/>
                <div>
             <div className="row">
                
            <div className="col-xl-5 col-lg-5 col-md-5 col-xs-12">
                <div className="leftcol">
                <h1 className="headingUnique">
                    <b>
                        UNIQUE RULES.<br/>
                        BETTER FORMAT.<br/>
                        PROPER FANTASY FUN.
                    </b>
                </h1>
                <p className="landingPowerball">Powerball's scoring rules provide a better<br/> fantasy football experience, Check them out:</p>
                    <Button size={'large'} type='primary' className="buttonLandingScoring">
                        SCORING RULES
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <p
                    className="email"
                    >For more information<br/>email us at: <b>inquires@powerball.com</b></p>
                </div>
            </div>
            <div className="col-3 col-xs-12">

            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12">
                <div className="mobBackImage">
                <div className="rightCol">
                    <div className="rightColData">
                <h3>
                    <b style={{
                        fontFamily: 'Bebas Neue, cursive',
                        textAlign: 'center'
                    }}>
                        CREATE YOU LEAGUE &<br/> GET READY TO BATTLE
                    </b>
                </h3>
                    <Button size={'large'} type='primary' block className="buttonLanding">
                        SIGN UP
                    </Button>
                    <Divider plain style={{
                        color: 'lightgrey',
                        fontFamily: 'sans-serif'
                    }}>OR</Divider>
                    <h3>
                    <b style={{
                        fontFamily: 'Bebas Neue, cursive',
                        textAlign: 'center'
                    }}>
                        ACCESS YOUR TEAMS &<br/> LEAGUES
                    </b>
                    </h3>
                    <div className="row">
                        <Input placeholder="Username or email" type="text" size="large" />
                    </div>
                    <br/>
                    <div className="row">
                        <Input placeholder="Password" type="password" size="large"/>
                    </div>
                    
                   <br/>
                   <Button size={'large'} type='primary' block className="buttonLanding">
                        LOG IN
                    </Button>
                    <br/>
                    <br/>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
            </div>
                </div>
                <p
                    className="email1"
                    >For more information<br/>email us at: <b>inquires@powerball.com</b></p>
                <div className="socialButton">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
        </div>
        </div>
    )
}

export default LandingPage
