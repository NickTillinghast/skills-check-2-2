import React, { Component } from "react";
import Header from "./components/Header/Header";
import { HashRouter } from "react-router-dom";
import routes from "./route";
// import House from "./components/House/House";

// import { Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <div className="middle">{routes}</div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
