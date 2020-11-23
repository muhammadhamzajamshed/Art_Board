import React, { Component } from 'react';
import logo from '../../Assets/Images/powerball logo.png'
import header from '../../Assets/Images/Header.png'
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <div className="row">
                <div className="col-lg-12"  style={{backgroundImage:`url(${header})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="row" style={{ paddingTop:"15px" , paddingBottom:"15px"}}>
                <div className="col-lg-2"> <img     src={logo}  style={{width:"150px", paddingLeft:"50px" }}/></div>
                <div className="col-lg-2">
                <h4 style={{color:"white"}}> HOME</h4>
                </div> 
                <div className="col-lg-2">
                <h4 style={{color:"white"}}>NFL FIXTURES</h4>
                </div>
                <div className="col-lg-2">
                <h4 style={{color:"white"}}> SCORRING RULES</h4>
                </div>

                <div className="col-lg-2">
               <h4 style={{color:"white"}}>DRAFT RULES</h4>
                </div>

                
                <div className="col-lg-2">
                <Avatar size={44} style={{ color: '#f56a00', backgroundColor: '#141413' }}>U</Avatar></div>                
                
                
                </div>
                
                
                
                </div>

            </div>
            <div className="row" style={{backgroundColor:"#e6e4d8"}}>
            
            <div className="col-lg-4">
            </div>
            <div className="col-lg-6">
                        <div className="row">   
                        <div className="col-lg-2" >
                        <h6>Joes_Club</h6>
                        <p>2-0-1</p>
                        </div>              
                        <div className="col-lg-2">
                        <h6>My Team</h6>
                        </div> 
                        <div className="col-lg-2">
                        <h6>League</h6>

                        </div> 
                        <div className="col-lg-2">
                        <h6>Draft</h6>

                        </div> 
                        <div className="col-lg-2">
                        <h6>Other Team </h6>

                        </div>                
                        <div className="col-lg-2">
                        <h6>PlayOffs</h6>

                        </div>  
                        </div>

            </div>
            
            <div className="col-lg-2">
             </div> 
            </div>


            </div>


            </React.Fragment>
        );
    }
}

export default Header;