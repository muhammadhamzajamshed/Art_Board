import React, { Component } from 'react';
import logo from '../../Assets/Images/powerball logo.png';
import footer from '../../Assets/Images/footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import '../../CSS/footer.css'

class Footer extends Component {
	state = {};
	render() {
		return (
			<div
				className="row footerWidth" 
				style={{ backgroundImage: `url(${footer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
			>
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="text-center"><img src={logo} style={{ width: '140px', paddingTop: '10px', paddingLeft: '0px' }} /></div>
				</div>
				<div className="col-lg-4  col-md-12 col-sm-12 text-center">
					<div><span className="" style={{ color: 'white' }}>
						email us at:<strong>inquires@powerball.com</strong>
					</span>
					</div>
					<div className="text-center">
						<span style={{ color: 'white' }}> POWERBALL FANATASY 2020 ALL RIGHTS RESERVERD</span>
					</div>
					<div className="text-center">
						<FaFacebook style={{ color: 'white', width: '20px', height: '20px' , marginRight:"2px"}} />{' '}
						<AiFillInstagram style={{ color: 'white', width: '20px', height: '20px' , marginRight:"2px"}}/>
						<AiFillTwitterCircle style={{ color: 'white', width: '20px', height: '20px' , marginRight:"2px"}}/>
					</div>
				</div>
				<div className="col-lg-4">
					<FontAwesomeIcon icon="check-square" />
				</div>
			</div>
		);
	}
}

export default Footer;
