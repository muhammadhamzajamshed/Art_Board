import React, { Component } from 'react';
import backGround from "../../Assets/Images/background.jpg"
import image from "../../Assets/Images/image.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram ,AiFillTwitterCircle} from 'react-icons/ai';

class Footer extends Component {
    state = {  }
    render() { 
        return ( <div className="row"   style={{backgroundImage:`url(${backGround})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        
        <div className="col-lg-4"><img     src={image}  style={{width:"140px",paddingTop:"10px", paddingLeft:"50px",  }}/></div>
        <div className="col-lg-4 text-center">
        
        <p className="">
        email us at:<strong>inquires@powerball.com</strong>
        
        </p>
        <div>
        <p> POWERBALL FANATASY 2020 ALL RIGHTS RESERVERD</p>
        </div>
        <div className="text-center"><FaFacebook/> <AiFillInstagram/><AiFillTwitterCircle/></div>

        </div>
        <div className="col-lg-4">
        <FontAwesomeIcon icon="check-square" />
        </div>
        
        </div> );
    }
}
 
export default Footer;