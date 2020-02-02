import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./composants/interface/Header";
import Liste from "./composants/contacts/Liste";
import { Provider } from "./context";

class App extends Component {
  render() {
// Provider= celui qui donne
    return (
      <Provider>
        <div className="App">
          <Header />

          <div className="container">
            <Liste />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
