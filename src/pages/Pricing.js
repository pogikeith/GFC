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
                to="/Book"> Book Consultation
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
      At Gluten Free Consult, we have many packages available to accomodate most budgets. Consultations start as low as $19.99 and go up from there. See packages below. If you dont see a package that accomodates you,
      please contact us! Every consult comes with a brief overview of the call.<br/>
      <br/>
      $19.99: Let us walk through some of the basics of Gluten Free Living. This 15 minute consult will briefly guide through the do's and dont's of eating gluten free. The main  
      objective of this appointment is to answer all your pertinent questions. <br/>
      <br/>
      $54.99: This is a half hour consultation. We will go through all your favorite places to eat out and what you like to eat or cook at home. By the end of this consult you 
      should be feeling very calm and know that living without gluten is not only possible but not a burden to you or others. At the end of the call, you will receive a menu of 
      the things you can use to substitute or eat around so eating is still something you can do socially and so you can continue to enjoy your favorite foods.<br/>
      <br/>
      $79.99: Everyone should be able to eat their feelings. This consult will cover the above, but we will go into more depth about restaurants that have seriously good GF menus or items. <br/>
     </div>  

     </div>   
      );
    }
}
export default Pricing;