import React from "react";
import { Link } from "react-router-dom";
import Logo from './logo.png';
import Image from '../images/solid.jpg';
import Price from '../images/pricing.jpg';

class Pricing extends React.Component {
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
                to="/Book"><button1> Book Consultation</button1>
              </Link>
            </div>  

             
        </div> 
  
        
  
      </header>
      
            <div>          
                <img src={Image} className="App-Image" alt="logo" />
            </div>

            <div>          
                <img src={Price} className="Pricing-Image" alt="logo" />
            </div>
       
     <div className= "pricing">
       Pricing
     </div>  

     <div className= "pricing-body">
      At Gluten Free Consult we have many packages available to accomodate most budgets. Consultations start as low as $19.99 and go up from there. See packages below, if you dont see a package that accomodates you
      please contact us! <br/>
      <br/>
      $19.99: <br/>
      <br/>
      $54.99: <br/>
      <br/>
      $79.99: <br/>
     </div>  

     </div>   
      );
    }
}
export default Pricing;