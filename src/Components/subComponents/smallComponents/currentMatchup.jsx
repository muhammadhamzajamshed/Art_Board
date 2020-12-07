import React, { Component } from 'react';
import whiteHelmet from '../../../Assets/Images/object6.png';
class CurrentMatchup extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<div class="w3-container">
					<div class="w3-card " style={{backgroundColor:"white"}}>
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
							Current Matchup
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
								<div className="col-lg-8 col-md-8 col-sm-8 ">
									<span style={{ fontWeight: 'bold', float: 'left' }}>THE BIGBOYS</span>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4">
									<span style={{ color: 'green' }}>56.2</span>
								</div>
							</div>

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
							<div className="col-lg-8 col-md-8 col-sm-8 ">
								<span style={{ fontWeight: 'bold', float: 'left' }}>Harry's club</span>
							</div>
		
							<div className="col-lg-4 col-md-4 col-sm-4">
								<span style={{ }}>33.3</span>
							</div>
						
					</div>
                        </div>
                        



                     
    

						<footer class="w3-container">
							<p
								style={{
									textAlign: 'center',
									textDecoration:"underLine"
								}}
							> {/*VIEW LAST MATCHUPS*/}</p>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}

export default CurrentMatchup;
