import React from "react";
import Image from '../images/confirm.png';
import { Link } from "react-router-dom";

class Confirm extends React.Component {
    render(){
      return (
      
        <header>
                <div className="Confirm">
                    <img src={Image} className="App-logo" alt="logo" />
                        
                </div>
                <div className="Confirmtext">
                    <h1>Thank you for booking your consultation!</h1>
                    <div className="returnhome">
                     <Link to = "/" > Return to Homepage
                      </Link>
                    </div>
                </div>

             
        </header>
               
          
             
        
                
    
    );
  }

} 
export default Confirm;
