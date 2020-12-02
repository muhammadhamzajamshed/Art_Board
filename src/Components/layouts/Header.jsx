import React, { Component } from 'react';
import logo from '../../Assets/Images/powerball logo.png'
import header from '../../Assets/Images/Header.png'
// import { Avatar, Image } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import profilePic from '../../Assets/Images/Ellipse 1.png'
import redHelmet from "../../Assets/Images/object2.png"
import line from '../../Assets/Images/headerLine.png'

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../../CSS/header.css'

class Header extends Component {
    render() {
        const menu = (
            <Menu style={{backgroundColor:"white"}}>
              <Menu.Item key="0" >
                <a href="" style={{color:"black"}}>Overview</a>
              </Menu.Item>
              <Menu.Item key="1">
                <a href=""  style={{color:"black"}}>Rosters</a>
              </Menu.Item>
              <Menu.Item key="2" >
                <a href="" style={{color:"black"}}>ScoreBoards</a>
              </Menu.Item>
              <Menu.Item key="3" >
                <a href="" style={{color:"black"}}>Settings</a>
              </Menu.Item>
              
              
            </Menu>
          );

          const menu1 = (
            <Menu style={{backgroundColor:"white"}}>
              <Menu.Item key="0" >
                <a href="" style={{color:"black"}}><img src ={redHelmet} style={{height:"25px" , width:"30px",marginRight:"3px"}}/>TEAM A</a>
              </Menu.Item>
              <Menu.Item key="1">
              <a href="" style={{color:"black"}}><img src ={redHelmet} style={{height:"25px" , width:"30px",marginRight:"3px"}}/>TEAM A</a>
              </Menu.Item>
              <Menu.Item key="2" >
              <a href="" style={{color:"black"}}><img src ={redHelmet} style={{height:"25px" , width:"30px",marginRight:"3px"}}/>TEAM A</a>
              </Menu.Item>
              <Menu.Item key="3" >
              <a href="" style={{color:"black"}}><img src ={redHelmet} style={{height:"25px" , width:"30px",marginRight:"3px"}}/>TEAM A</a>
              </Menu.Item>
              
              
            </Menu>
          );


          const menu2 = (
            <Menu style={{backgroundColor:"white"}}>
              <Menu.Item key="0" >
                <a href="" style={{color:"black"}}><img src ={redHelmet} style={{height:"25px" , width:"30px",marginRight:"3px"}}/>TEAM A</a>
              </Menu.Item>
              <Menu.Item key="1">
              <a href="" style={{color:"black"}}><img src ={redHelmet} style={{height:"25px" , width:"30px",marginRight:"3px"}}/>TEAM A</a>
              </Menu.Item>
              <Menu.Item key="2" >
              <a href="" style={{color:"black"}}><img src ={redHelmet} style={{height:"25px" , width:"30px",marginRight:"3px"}}/>TEAM A</a>
              </Menu.Item>
              <Menu.Item key="3" >
              <a href="" style={{color:"black"}}><img src ={redHelmet} style={{height:"25px" , width:"30px",marginRight:"3px"}}/>TEAM A</a>
              </Menu.Item>
              
              
            </Menu>
          );
        return (
            <React.Fragment>
            <div className="headerContainer">

            <img   className="box-1 stack-top"  src={logo}  />

                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12  col-xs-12"  style={{backgroundImage:`url(${header})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="row" style={{ paddingTop:"15px" , paddingBottom:"15px"}}>
                <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2"> </div>
                <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
                <h4 style={{color:"white"}}> HOME</h4>
                </div> 
                <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
                <h4 style={{color:"white"}}>NFL FIXTURES</h4>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
                <h4 style={{color:"white"}}> SCORRING RULES</h4>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
               <h4 style={{color:"white"}}>DRAFT RULES</h4>
                </div>

                
                <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
        {/*<Avatar size={44} style={{ color: '#f56a00', backgroundColor: '#141413' }}>U</Avatar>*/}
                <img src={profilePic} style={{height:"50px"}}/> 
                </div>                
                
                
                </div>
                
                
                
                </div>

            </div>
            <div className="row" style={{backgroundColor:"#FFFFFF"}}>
            
            <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8  col-xs-8 ">
                        <div className="row">   
                        <div className="col-lg-3 col-md-3 col-sm-3  col-xs-3" >
                        <div className="row lg-12">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"><span> <img src={redHelmet} style={{width:"40px", height:"35px"}}   /></span></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"><span>Joes_Club</span> <div>2-0-1</div></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"><img src={line}/></div>
                        </div>
                       
                       
                        </div>              
                        <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
                        <h6>My Team</h6>
                        </div> 
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}  style={{color:"black"}}>
                          League <DownOutlined />
                        </a>
                      </Dropdown>
                      

                        </div> 
                        <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
                        <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color:"black"}}>
      Draft <DownOutlined />
    </a>
  </Dropdown>
  

                        </div> 
                        <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
                        <Dropdown overlay={menu1} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color:"black"}}>
                          Other Team <DownOutlined />
                        </a>
                      </Dropdown>

                        </div>                
                        <div className="col-lg-1 col-md-1 col-sm-1  col-xs-1">
                        <h6>PlayOffs</h6>

                        </div>  
                        </div>

            </div>
            
            <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2" >
             </div> 
            </div>
            

            </div>


            </React.Fragment>
        );
    }
}

export default Header;