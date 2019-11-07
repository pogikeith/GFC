import React from "react";
import Image from '../images/confirm.png';


class Confirm extends React.Component {
    render(){
      return (
      
        <header>
                <div className="Confirm">
                    <img src={Image} className="App-logo" alt="logo" />
                        
                </div>
                <div className="Confirmtext">
                    <h1>Thank you for booking your consultation!</h1>
                </div>
        </header>

           
          
             
        
                
    
    );
  }

} 
export default Confirm;
