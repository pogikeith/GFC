import React from "react";
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