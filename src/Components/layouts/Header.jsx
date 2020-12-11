import React, { Component } from 'react';
import logo from '../../Assets/Images/powerball logo.png';
import header from '../../Assets/Images/Header.png';
// import { Avatar, Image } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import profilePic from '../../Assets/Images/Ellipse 1.png';
import redHelmet from '../../Assets/Images/object2.png';
import line from '../../Assets/Images/headerLine.png';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../../CSS/header.css';

import mHelmet from '../../Assets/Images/mHelmet.png';
import msymbol from '../../Assets/Images/mSymbol.png';
import mcup from '../../Assets/Images/mCup.png';
import mball from '../../Assets/Images/mball.png';
import mfootball from '../../Assets/Images/mfootball-shield-symbol.png';
import newLogo from '../../Assets/Images/powerBallNewlogo.png'
import mobileBackGround from  '../../Assets/Images/mobileBackground.png'
import { Link } from 'react-router-dom';
class Header extends Component {
	render() {
		const menu = (
			<Menu style={{ backgroundColor: 'white' }}>
				<Menu.Item key="0">
					<a href="###" style={{ color: 'black' }}>
						Overview
					</a>
				</Menu.Item>
				<Menu.Item key="1">
				<Link to="/roster"><a href="" style={{ color: 'black' }}>
						Rosters
					</a></Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/scoreboards"><a href="" style={{ color: 'black' }}>
						ScoreBoards
					</a></Link>
				</Menu.Item>
				<Menu.Item key="3">
					<a href="" style={{ color: 'black' }}>
						Settings
					</a>
				</Menu.Item>
			</Menu>
		);

		const menu1 = (
			<Menu style={{ backgroundColor: 'white' }}>
				<Menu.Item key="0">
					<a href="" style={{ color: 'black' }}>
						<img src={redHelmet} style={{ height: '25px', width: '30px', marginRight: '3px' }} />TEAM A
					</a>
				</Menu.Item>
				<Menu.Item key="1">
					<a href="" style={{ color: 'black' }}>
						<img src={redHelmet} style={{ height: '25px', width: '30px', marginRight: '3px' }} />TEAM A
					</a>
				</Menu.Item>
				<Menu.Item key="2">
					<a href="" style={{ color: 'black' }}>
						<img src={redHelmet} style={{ height: '25px', width: '30px', marginRight: '3px' }} />TEAM A
					</a>
				</Menu.Item>
				<Menu.Item key="3">
					<a href="" style={{ color: 'black' }}>
						<img src={redHelmet} style={{ height: '25px', width: '30px', marginRight: '3px' }} />TEAM A
					</a>
				</Menu.Item>
			</Menu>
		);

		const menu2 = (
			<Menu style={{ backgroundColor: 'white' }}>
				<Menu.Item key="0" className="hoverProperty">
					<a href="" className="hoverProperty" style={{ color: 'black' }}>
						<img src={redHelmet} style={{ height: '25px', width: '30px', marginRight: '3px' }} />TEAM A
					</a>
				</Menu.Item>
				<Menu.Item key="1">
					<a href="" style={{ color: 'white',backgroundColor:"black" }}>
						<img src={redHelmet} style={{ height: '25px', width: '30px', marginRight: '3px' }} />TEAM A
					</a>
				</Menu.Item>
				<Menu.Item key="2">
					<a href="" style={{ color: 'black' }}>
						<img src={redHelmet} style={{ height: '25px', width: '30px', marginRight: '3px' }} />TEAM A
					</a>
				</Menu.Item>
				<Menu.Item key="3">
					<a href="" style={{ color: 'black' }}>
						<img src={redHelmet} style={{ height: '25px', width: '30px', marginRight: '3px' }} />TEAM A
					</a>
				</Menu.Item>
			</Menu>
		);

		const menu3 = (
			<Menu style={{ backgroundColor: 'white' }}>
				<Menu.Item key="0">
				<Link to="freeagents">	<a href="###" style={{ color: 'black' }}>
						Free Agents
					</a></Link>
				</Menu.Item>
				<Menu.Item key="1">
				<Link to="/trade"><a href="" style={{ color: 'black' }}>
						Trade
					</a></Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/tradeConfirm"><a href="" style={{ color: 'black' }}>
						Confirm Trade
					</a></Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/matchups"><a href="" style={{ color: 'black' }}>
						Matchups
					</a></Link>
				</Menu.Item>
			</Menu>
		);
		
		return (
			<React.Fragment>
				<div className="headerContainer   " id="hideDesktopNav">
					

					<div className="row ">
						<div
							className="col-lg-12 col-md-12 col-sm-12  col-xs-12"
							style={{
								backgroundImage: `url(${header})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundColor:"black"
							}}
						>
							<div className="row topHeaderNave" style={{ paddingTop: '15px', paddingBottom: '15px' }}>
								<div className="col-3"> <img src={newLogo} style={{height:" 120px",
									width: "220px", marginLeft:"35px"}} alt=""/></div>

									<div className="col-8">
									<div className="row lg-12 " style={{marginTop: "25px", fontFamily: 'Bebas Neue,cursive'}}>
									
									<div className="col-lg-3 col-md-3 col-sm-3  col-xs-3">
									<Link to="/home"><h4 style={{ color: 'white' ,marginTop:"20px" ,textAlign:"center" ,fontSize:"36px", fontFamily: 'Bebas Neue,cursive' }}> HOME</h4>
								</Link>
									</div>
								<div className="col-lg-3 col-md-3 col-sm-3  col-xs-3">
									<h4 style={{ color: 'white',marginTop:"20px",fontSize:"36px", fontFamily: 'Bebas Neue,cursive'  }}>NFL FIXTURES</h4>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-3  col-xs-3">
									<Link to="/scoringRules"><h4 style={{ color: 'white' ,marginTop:"20px", fontSize:"36px", fontFamily: 'Bebas Neue,cursive' }}> SCORRING RULES</h4></Link>
								</div>

								<div className="col-lg-3 col-md-3 col-sm-3  col-xs-3">
								<Link to="/DraftRulePage"><h4 style={{ color: 'white',marginTop:"20px" ,fontSize:"36px", fontFamily: 'Bebas Neue,cursive' }}>DRAFT RULES</h4></Link>
								</div>

									</div>
									</div>
								

								<div className="col-1">
									{/*<Avatar size={44} style={{ color: '#f56a00', backgroundColor: '#141413' }}>U</Avatar>*/}
									<img src={profilePic} style={{ width:"60" ,height: '60px' ,marginTop:"35px",  }} alt=""/>
								</div>
							</div>
						</div>
					</div>
					<div className="row " style={{ backgroundColor: '#FFFFFF'}}>
						<div className="col-lg-2 col-md-2 col-sm-2  col-xs-2" />
						<div className="col-lg-7 col-md-7 col-sm-7  col-xs-7 " style={{marginTop:"5px"}}>
							<div className="row subHeader">
								<div className="col-lg-3 col-md-3 col-sm-3  col-xs-3">
									<div className="row lg-12">
								
										<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
											<span>
												{' '}
												<img src={redHelmet} style={{ width: '40px', height: '35px',marginTop:"2px"}} />
											</span>
										</div>
										<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"/>
										<div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" >
											<span className="" style={{color :"#C5C5C5",fontSize:"14px"}}> Joes_Club</span> <div className="text-center" style={{color :"#C5C5C5" ,fontSize:"12px",lineHeight: "0px"}}>2-0-1</div>
										</div>
										<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
											<img src={line} />
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-2 col-sm-2  col-xs-2 subHeader">
									<Link to="/myTeamPage"><h6 className="subHeader"  style={{paddingTop:"6px"}}>My Team</h6></Link>
								</div>
								<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 mt-1">
									<Link to="league"><Dropdown overlay={menu} trigger={[ 'click' ]}>
										<a
											className="ant-dropdown-link"
											onClick={(e) => e.preventDefault()}
											style={{ color: 'black' }}
										>
											League <DownOutlined />
										</a>
									</Dropdown> </Link>
								</div>
								<div className="col-lg-2 col-md-2 col-sm-2  col-xs-2 mt-1">
								<Link to="/draftRounds"><Dropdown overlay={menu3} trigger={[ 'click' ]}>
										<a
											className="ant-dropdown-link"
											onClick={(e) => e.preventDefault()}
											style={{ color: 'black' }}
										>
											Draft <DownOutlined />
										</a>
									</Dropdown></Link>
								</div>
								<div className="col-lg-2 col-md-2 col-sm-2  col-xs-2 mt-1">
									<Dropdown overlay={menu1} trigger={[ 'click' ]}>
										<a
											className="ant-dropdown-link"
											onClick={(e) => e.preventDefault()}
											style={{ color: 'black' }}
										>
											Other Team <DownOutlined />
										</a>
									</Dropdown>
								</div>
								<div className="col-lg-1 col-md-1 col-sm-1  col-xs-1 subHeader">
									<Link to="/playoffs"><h6 className="subHeader" style={{paddingTop:"6px"}}>Playoffs</h6></Link>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-3  col-xs-3" />
					</div>
				</div>

				<div class="mobile-container" id="fadeshow1"	>
					<div class="topnav  " style={{
						
					
					}}>
					<div className=" mobileHeaderBackGround " style={{paddingTop:"10px",paddingBottom:"10px"}}>
						<a href="#home" className="active  ">
							<img src={newLogo} style={{ width: '100px', height: '60px' , marginLeft:"4px" }} alt=""/>
						</a>
					
						<a href=";" className="icon">
							<i class="fa fa-bars" style={{fontSize:"30px",marginRight:"6px" ,marginBottom:"10px" }} />
						</a>
					</div>
				
						<div className="row  mb-1" style={{backgroundColor:"white"}}>
						<div className="col-1"></div>
						<div className="col-2 "><Link to=""><img src={mHelmet} /></Link><p style={{color:"black"}}>cup</p></div>
						<div className="col-2"><Link to="/league"><img src={mcup} /></Link><p style={{color:"black"}}>League</p></div>
						<div className="col-2 "> <Link to="/draftRulePage"><img src={mball} /></Link><p style={{color:"black"}}>Draft</p></div>
						<div className="col-2 "><Link to="/myTeamPage"><img src={mfootball} /></Link><p style={{color:"black"}}>Teams</p></div>
						<div className="col-2 "><Link to=""><img  src={msymbol} /></Link><p  style={{color:"black"}}>Playoffs</p></div>
						<div className="col-1"></div>
						
													
												</div>

												
												<br/>
						</div>

					
						

				</div>

			</React.Fragment>
		);
	}
}

export default Header;
