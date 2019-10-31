import React from "react";
import Logo from './logo.png';
import Image from '../images/solid.jpg';
import Consult from '../images/consult.jpg';

class Book extends React.Component {
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
                  <button>Book Consultation</button>
                </div> 
  
    
          </div> 
    
            
    
        </header>
      

            <div>          
                <img src={Image} className="App-Image" alt="logo" />
            </div>

            <div>          
                <img src={Consult} className="App-Consult" alt="logo" />
            </div>
   
     <div className= "about-intro">
       Gluten Free Consult 
     </div>  

     <div className= "book-content">
       Please fill out your information below. 
       
       
       <br/>
     </div>  

             <form>
            
                <p>FIRST NAME:</p>
                <input
                type="text"
                />
             </form>
     

     </div>   
      );
    }
}
export default Book;