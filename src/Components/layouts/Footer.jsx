import React, { Component } from 'react';
import logo from "../../Assets/Images/powerball logo.png"
import footer from "../../Assets/Images/footer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram ,AiFillTwitterCircle} from 'react-icons/ai';

class Footer extends Component {
    state = {  }
    render() { 
        return ( <div className="row"   style={{backgroundImage:`url(${footer})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        
        <div className="col-lg-4"><img     src={logo}  style={{width:"140px",paddingTop:"10px", paddingLeft:"50px",  }}/></div>
        <div className="col-lg-4 text-center">
        
        <p className="" style={{color:"white"}}>
        email us at:<strong>inquires@powerball.com</strong>
        
        </p>
        <div>
        <p style={{color:"white"}}> POWERBALL FANATASY 2020 ALL RIGHTS RESERVERD</p>
        </div>
        <div className="text-center"><FaFacebook style={{color:"white"}}/> <AiFillInstagram style={{color:"white"}}/><AiFillTwitterCircle style={{color:"white"}}/></div>

        </div>
        <div className="col-lg-4">
        <FontAwesomeIcon icon="check-square" />
        </div>
        
        </div> );
    }
}
 
export default Footer;