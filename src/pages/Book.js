import React from "react";
import Logo from './logo.png';
import Image from '../images/solid.jpg';
import Consult from '../images/consult.jpg';
import DropdownDate from 'react-dropdown-date';
import axios from "axios"

//dropdown1
const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
//dropdown1

class Book extends React.Component { 
    constructor (props) {
        super(props); 
            this.state= {
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                notes: "",
                date: null, selectedDate: '2019-11-15'    
        }
          
    }
//drop
    // constructor(props) {
    //     super(props);
    //     this.state = { date: null, selectedDate: '2012-11-15' };
    // }

 //drop   
    // handleSubmit = (event) =>{
    //     event.preventDefault();
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post("https://gfcsite.herokuapp.com/guide", {
             firstname: this.state.firstname,
             lastname: this.state.lastname,
             email:this.state.email,
             phone: this.state.phone,
             notes:this.state.notes,
             date:this.state.date
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    // handleSubmit= (event) => { 
    //     console.log('clicked')
    //     event.preventDefault(); 
    //     console.log (this.state.lastname)
    // }

    // handleSubmit= (event) => { 
    //     console.log('clicked')
    //     event.preventDefault(); 
    //     console.log (this.state.email)
    // }

    // handleSubmit= (event) => { 
    //     console.log('clicked')
    //     event.preventDefault(); 
    //     console.log (this.state.phone)
    // }

    // handleSubmit= (event) => { 
    //     console.log('clicked')
    //     event.preventDefault(); 
    //     console.log (this.state.notes)
    // }

    // handleSubmit= (event) => { 
    //     console.log('clicked')
    //     event.preventDefault(); 
    //     console.log (this.state.dayandtime)
    // }


    

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
                <img src={Consult} className="App-Consult" alt="logo" />
            </div>
   
     <div className= "about-intro">
       Gluten Free Consult 
     </div>  

     <div className= "book-content">
       Please fill out your information below. 
       <br/>
     </div>  

            <form className="table" onSubmit={this.handleSubmit} >
              
                
                    <p>FIRST NAME:</p> <input name="firstname" onChange= {(e)=> this.setState({firstname: e.target.value})} type="text" placeholder="First Name" /> 
                    <p>LAST NAME:</p> <input name="lastname" onChange= {(e)=> this.setState({lastname: e.target.value})} type="text" placeholder="Last Name" /> 
                    <p>EMAIL:</p> <input name="email" onChange= {(e)=> this.setState({email: e.target.value})} type="text" placeholder="Email" /> 
                    <p>PHONE:</p> <input name="phone" onChange= {(e)=> this.setState({phone: e.target.value})} type="text" placeholder="Phone" /> 

                   
                    <div className="dropmenu">
                    <h2>Appt Day </h2>
                                    <DropdownDate 
                                        
                                        startDate={                         // optional, if not provided 1900-01-01 is startDate
                                            '2019-11-01'                    // 'yyyy-mm-dd' format only
                                        }
                                        endDate={                           // optional, if not provided current date is endDate
                                            '2021-01-31'                    // 'yyyy-mm-dd' format only
                                        }
                                        selectedDate={                      // optional
                                            this.state.selectedDate         // 'yyyy-mm-dd' format only
                                        }
                                        order={                             // optional
                                            ['year', 'month', 'day']        // Order of the dropdowns
                                        }
                                        onMonthChange={(month) => {         // optional
                                            console.log(month);
                                        }}
                                        onDayChange={(day) => {             // optional
                                            console.log(day);
                                        }}
                                        onYearChange={(year) => {           // optional
                                            console.log(year);
                                        }}
                                        onDateChange={(date) => {           // optional
                                            console.log(date);
                                            this.setState({ date: date, selectedDate: formatDate(date) });
                                        }}
                                        ids={                               // optional
                                            {
                                                year: 'select-year',
                                                month: 'select-month',
                                                day: 'select-day'
                                            }
                                        }
                                        names={                             // optional
                                            {
                                                year: 'year',
                                                month: 'month',
                                                day: 'day'
                                            }
                                        }
                                        classes={                           // optional
                                            {
                                                dateContainer: 'classes',
                                                yearContainer: 'classes',
                                                monthContainer: 'classes',
                                                dayContainer: 'classes',
                                                year: 'classes classes',
                                                month: 'classes classes',
                                                day: 'classes classes',
                                                yearOptions: 'classes',
                                                monthOptions: 'classes',
                                                dayOptions: 'classes'
                                            }
                                        }
                                        defaultValues={                     // optional
                                            {
                                                year: 'select year',
                                                month: 'Select Month',
                                                day: 'select day'
                                            }
                                        }
                                        options={                           // optional
                                            {
                                                yearReverse: true,              // false by default
                                                monthShort: true,               // false by default
                                                monthCaps: true                 // false by default
                                    }
                                }
                                

                                
                                DropdownDate/>
       

                </div>





                    <p>REQUESTED TIME (AM or PM and Time Zone) and NOTES TO STAFF:</p> <input name="notes" onChange= {(e)=> this.setState({notes: e.target.value})} type="text" placeholder="Notes" />
                    {/* <p>BOOK DAY AND TIME:</p> <input onChange= {(e)=> this.setState({dayandtime: e.target.value})} type="text" placeholder="Enter Here" /> */}

                    <button type="submit" className="dropbtn">Submit</button>

            </form>
            {/* //dropdown2 */}

<div>
    
       
    
    {/* <div className="Booktime">
        <h2>Book Day </h2>  
    </div> */}

   

  
 

</div>
{/*    
<button onClick={(event) => this.handleSubmit(event)} className="dropbtn">Submit</button> */}

{/* dropdown2 */}
             
                         
                         {/* <p>Select Day</p>

                        <div class="dropdown">
                            <button onclick="()" class="dropbtn">Dropdown</button>
                            <div id="myDropdown" class="dropdown-content">
                                 <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                     </div>  */}
                      

                      
                
                    {/* <div className= "subject-table">
                        <p>NOTES TO STAFF:</p>
                    </div>

                        <div className= "text-area">
                             <textarea>

                            </textarea>
                            
                         </div> */}
                        
               
             
     
   </div> 

      );
                          
   }
}
export default Book;