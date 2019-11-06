import React from "react";
import Logo from './logo.png';
import Image from '../images/solid.jpg';
import ImageAbout from '../images/about.jpg';
import Profile from '../images/profile.jpg';

class About extends React.Component {
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

      <div>          
        <img src={ImageAbout} className="App-About" alt="logo" />
      </div>

      <div>          
        <img src={Profile} className="About-ProfilePic" alt="logo" />
      </div>

      <div className= "about-intro">
       About Us:
     </div>  

     <div className= "about-body">
       Welcome to Gluten Free Consult! Did you know Celiac Disease effects at least 1% of Americans? Only 97% are diagnosed. This means over 3 million people deal with it daily. Unfortunatley this can be a crippling disease 
       with side-effects ranging from dehabilitating anxiety to intense burning sensations inside the body. 
     </div>  


 </div>
      
    
              
      );
 }
}
export default About;