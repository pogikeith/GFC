
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './pages/Home'; 
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

import './App.css';


class App extends Component {
  render() {
    return (
      
      <Router>
          <div>
          

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/pricing' component={Pricing}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/book' component={Book}/>

          </Switch>

          

          </div>
      </Router>
      
      

    
    );
  }
}

export default App;
