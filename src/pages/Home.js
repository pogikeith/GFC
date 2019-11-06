import React from "react";
import { Link } from "react-router-dom";

import Logo from './logo.png';
import Image from '../images/solid.jpg';


class Home extends React.Component {
    render(){
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

     

     <div className= "intro">
       Gluten Free Consult 
     </div>  

     <div className= "body">
       Welcome to Gluten Free Consult! Did you know Celiac Disease effects at least 1% of Americans? Only 97% are diagnosed. This means over 3 million people deal with it daily. Unfortunatley this can be a crippling disease 
       with side-effects ranging from dehabilitating anxiety to intense burning sensations inside the body. At Gluten Free Consult we strive to help those that suffer from simple gluten intolerance to the most sensitive 
       Celiac diagnoses. Being gluten free doesn't mean you can't enjoy going out with friends and family. It doesn't mean you are going to be eating food that tastes like chalk the rest of your life. Our advisors have been 
       living with Celiac for almost 20 years and unlike most dieticians, we have actually tasted the food they eat and have navigated life post diagnosis. We know the feeling of helplessness and sometimes isolation people have 
       once diagnosed.  
       
       
     </div>  

  
     
       
     

    </div>
    );
  }
} 
export default Home;

