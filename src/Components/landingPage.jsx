import React from 'react'
import { Button, Divider, Input } from 'antd';
import {
    InstagramOutlined
  } from '@ant-design/icons';
import "../CSS/button.css"
import "../CSS/landingPage.css"
function LandingPage() {
    return (
        <div className="landingBody">
                <div className="container">
                <div className="innerLandingBody">
                <div className="container">
            <div className="row">
            <div className="col-5">
                <h1>
                    <b>
                        UNIQUE RULES.<br/>
                        BETTER FORMAT.<br/>
                        PROPER FANTASY FUN.
                    </b>
                </h1>
                <p style={{
                    fontSize: '16px',
                    fontFamily: 'sans-serif',
                    letterSpacing: '0px'
                }}>Powerball's scoring rules provide a better<br/> fantasy football experience, Check them out:</p>
                    <Button size={'large'} type='primary' className="buttonLandingScoring">
                        SCORING RULES
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <p style={{
                    fontSize: '16px',
                    fontFamily: 'sans-serif',
                    letterSpacing: '0px'
                }}>For more information<br/>email us at: <b>inquires@powerball.com</b></p>
            </div>
            <div className="col-3">

            </div>
            <div className="col-4">
                <div style={{
                    textAlign: 'center',
                }}>
                <h3>
                    <b>
                        CREATE YOU LEAGUE &<br/> GET READY TO BATTLE
                    </b>
                </h3>
                    <Button size={'large'} type='primary' block className="buttonLanding">
                        SIGN UP
                    </Button>
                    <Divider plain style={{
                        color: 'lightgrey'
                    }}>OR</Divider>
                    <h3>
                    <b>
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
                </div>
            </div>
            </div>
        </div>
        
            </div>
                </div>
                <div className="socialButton">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
        </div>
        </div>
    )
}

export default LandingPage
