import React, { Component } from 'react';

import red from '../../Assets/Images/object2.png';
import redRevert from '../../Assets/Images/reverrtHelmet.png';

class RecentScores extends Component {
	state = {};
	render() {
		return (
			<div class="w3-card mr-2" style={{ marginBottom: '25px' ,backgroundColor:"white"}}>
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
					RECENT SCORES
				</h3>

				<div class="container" style={{backgroundColor:"white"}}>
					<div
						className="row "
						style={{
							backgroundColor: 'rgb(241, 241, 241)',
							padding: '10px',
							textAlign: 'justify',
							marginLeft: '5px',
							marginRight: '5px',
							marginBottom: '8px',
							marginTop: '6px'
						}}
					>
						<div className="col-lg-4 col-md-4 col-sm-4" style={{ paddingRight: '-15px' }}>
							<span style={{ float: 'left' }}>
								<img
									style={{
										marginLeft: '5px',
										marginRight: '10px',
										width: '31.96px',
										height: '29px'
									}}
									src={red}
								/>
							</span>
							<br />
							<div style={{ float: 'left' }}>TEAM NAME</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="text-center">
								{' '}
								<span style={{ fontFamily: 'Bebas Neue,cursive', fontSize: '32', fontWeight: 'bold' }}>
									<span style={{ color: '#03AC36' }}>80.0</span> - 78.0
								</span>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-4">
							<div style={{ float: 'right' }}>
								<img
									style={{
										marginLeft: '5px',
										marginRight: '10px',
										width: '31.96px',
										height: '29px',
										float: 'right'
									}}
									src={redRevert}
								/>
								<div style={{ float: 'right' }}>TEAM NAME</div>
							</div>
						</div>
					</div>

					<div
						className="row "
						style={{
							backgroundColor: 'rgb(241, 241, 241)',
							padding: '10px',
							textAlign: 'justify',
							marginLeft: '5px',
							marginRight: '5px',
							marginBottom: '8px',
							marginTop: '6px'
						}}
					>
						<div className="col-lg-4 col-md-4 col-sm-4" style={{ paddingRight: '-15px' }}>
							<span style={{ float: 'left' }}>
								<img
									style={{
										marginLeft: '5px',
										marginRight: '10px',
										width: '31.96px',
										height: '29px'
									}}
									src={red}
								/>
							</span>
							<div style={{ float: 'left' }}>TEAM NAME</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="text-center">
								{' '}
								<span style={{ fontFamily: 'Bebas Neue,cursive', fontSize: '32', fontWeight: 'bold' }}>
									<span style={{ color: '#03AC36' }}>80.0</span> - 78.0
								</span>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-4">
							<div style={{ float: 'right' }}>
								<img
									style={{
										marginLeft: '5px',
										marginRight: '10px',
										width: '31.96px',
										height: '29px',
										float: 'right'
									}}
									src={redRevert}
								/>
								<div style={{ float: 'left' }}>TEAM NAME</div>
							</div>
						</div>
					</div>

					<div
						className="row "
						style={{
							backgroundColor: 'rgb(241, 241, 241)',
							padding: '10px',
							textAlign: 'justify',
							marginLeft: '5px',
							marginRight: '5px',
							marginBottom: '8px',
							marginTop: '6px'
						}}
					>
						<div className="col-lg-4 col-md-4 col-sm-4" style={{ paddingRight: '-15px' }}>
							<span style={{ float: 'left' }}>
								<img
									style={{
										marginLeft: '5px',
										marginRight: '10px',
										width: '31.96px',
										height: '29px'
									}}
									src={red}
								/>
							</span>
							<div style={{ float: 'left' }}>TEAM NAME</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="text-center">
								{' '}
								<span style={{ fontFamily: 'Bebas Neue,cursive', fontSize: '32', fontWeight: 'bold' }}>
									<span style={{ color: '#03AC36' }}>80.0</span> - 78.0
								</span>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-4">
							<div style={{ float: 'right' }}>
								<img
									style={{
										marginLeft: '5px',
										marginRight: '10px',
										width: '31.96px',
										height: '29px',
										float: 'right'
									}}
									src={redRevert}
								/>
								<div style={{ float: 'right' }}>TEAM NAME</div>
							</div>
						</div>
					</div>

					<div
						className="row "
						style={{
							backgroundColor: 'rgb(241, 241, 241)',
							padding: '10px',
							textAlign: 'justify',
							marginLeft: '5px',
							marginRight: '5px',
							marginBottom: '8px',
							marginTop: '6px'
						}}
					>
						<div className="col-lg-4 col-md-4 col-sm-4" style={{ paddingRight: '-15px' }}>
							<span style={{ float: 'left' }}>
								<img
									style={{
										marginLeft: '5px',
										marginRight: '10px',
										width: '31.96px',
										height: '29px'
									}}
									src={red}
								/>
							</span>
							<div style={{ float: 'left' }}>TEAM NAME</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="text-center">
								{' '}
								<span style={{ fontFamily: 'Bebas Neue,cursive', fontSize: '32', fontWeight: 'bold' }}>
									<span style={{ color: '#03AC36' }}>80.0</span> - 78.0
								</span>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-4">
							<div style={{ float: 'right' }}>
								<img
									style={{
										marginLeft: '5px',
										marginRight: '10px',
										width: '31.96px',
										height: '29px',
										float: 'right'
									}}
									src={redRevert}
								/>
								<div style={{ float: 'right' }}>TEAM NAME</div>
							</div>
						</div>
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
							textDecoration: 'underLine'
						}}
					>
						Full Scores
					</p>
				</footer>
			</div>
		);
	}
}

export default RecentScores;
