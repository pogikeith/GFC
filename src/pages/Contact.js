import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontIcon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesome } from "@fortawesome/free-solid-svg-icons";
    
import Logo from './logo.png';
import Image from '../images/solid.jpg';


class Contact extends React.Component {
    render() {
        
      return (
        
        <div className="App">
        <header className="App-header">
            <img src={Logo} className="App-logo" alt="logo" />
              
            <div className="nav-link-wrapper">
              <a href= "/" > Home
              </a>
  
              <a href="./Pricing"> Pricing 
              </a>
  
              <a href="./About"> About Us
              </a>
  
              <a
                href="./Contact"> Contact Us
              </a>
           
              <div className="Button">
              <a  className="Button"
                href="./Book"><button> Book Consultation</button>
              </a>
            </div>  

              
        </div> 
  
        {/* <div className="bullet-point-group">
            <div className="icons">
              <FontAwesomeIcon icon="phone" />
            </div>
        </div>     */}
  
      </header>
      <div>          
        <img src={Image} className="App-Image" alt="logo" />
      </div>

        <div>
            <h2>Contact Us</h2>
        </div>

            <div className="icons">
              <FontAwesomeIcon icon="phone" />
            </div>
          
  </div>     
      );
    }
}

export default Contact;