import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./composants/interface/Header";
import Liste from "./composants/contacts/Liste";
import { Provider } from "./context";
import AddContact from "./composants/contacts/AddContact";
import{BrowserRouter as Router, Route , Switch}from'react-router-dom'
import Erreur from './composants/pages/Erreur'
import Apropos from "./composants/pages/Apropos";

class App extends Component {
  render() {
// Provider= celui qui donne
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />

            <div className="container">
              {/* <AddContact/> */}
            <Switch>
                <Route exact path ="/" component ={Liste}/>
                <Route exact path ="/liste" component ={Liste}/>
                <Route exact path ="/ajout" component ={AddContact}/>
                <Route exact path ="/apropos" component ={Apropos} />
                <Route component ={Erreur}/>
            </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
