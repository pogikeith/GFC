import React from "react";
import { Link } from "react-router-dom";
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
            <Link to = "/" > Home
                  </Link>
      
                  <Link to ="/Pricing"> Pricing 
                  </Link>
      
                  <Link to ="/About"> About Us
                  </Link>
      
                  <Link
                    to ="/Contact"> Contact Us
                  </Link>
           
              <div className="Button1">
              <Link  className="Button1"
                to="/Book"> Book Consultation
              </Link>
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

            <div className="text"><ul>
           <li>Phone: 385.204.5049</li>
           <li>Toll Free: 866.341.8213</li>
              </ul> 
            </div> 
          

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