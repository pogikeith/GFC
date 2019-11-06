import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    
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
           
              <div className="Button1">
              <a  className="Button1"
                href="./Book"><button1> Book Consultation</button1>
              </a>
            </div>  
             
        </div>     
  
      </header>


      <div>          
        <img src={Image} className="App-Image" alt="logo" />
      </div>

        
      <div className="text-contact">
          <p>Contact Us</p>
     </div>

        <div className="icons">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">Phone: 385.204.5049 
            <b/>Toll Free: 866.341.8213</div>
          

            <div className="icons">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">Email: contact@gfconsult.com</div>

            
            <div className="icons">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Address: Lehi, UT</div>

          
  </div>     
      );
    }
}

export default Contact;