import React, { Component } from 'react';

import red from '../../../Assets/Images/object2.png';

class EditTeam extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<div class="w3-container" >
					
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
							EDIT TEAM
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
								<div className="col-lg-12 col-md-12 col-sm-12 text-center">
									
										<img
											style={{
												marginLeft: '5px',
												marginRight: '10px',
												width: '78px',
												height: '72px'
											}}
											src={red}
										/>
                                        
                                       <div>
                                    Change Color
                                   </div>
                                    
                                   <form className="text-center">
                                   <div class="form-group">
                                     <label for="club" style={{float:"left"}}>Club Name:</label>
                                     <input type="text" class="form-control" id="text" placeholder="JOE'S CLUB"/>
                                   </div>
                                   <div class="form-group">
                                     <label for="location"  style={{float:"left"}}>LOCATION:</label>
                                     <input type="text" class="form-control" id="location"  placeholder="DENVER"/>
                                   </div>
                             
                                   <button className="btn  btn-lg" style={{paddingLeft:"15px",paddingRight:"15px",backgroundColor:"black" ,color:"white"}}> UPDATE</button>
                                 </form>
       
       
							




                            
                           

							
                    
                        </div>
                        </div>
                        </div>

					
					</div>
				</div>
			</div>
		);
	}
}

export default EditTeam;
