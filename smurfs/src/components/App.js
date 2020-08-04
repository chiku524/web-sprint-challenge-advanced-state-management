import React, { Component } from "react";
import SmurfCard from './SmurfCard';
import Smurf from './Smurf';
import Form from './Form';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfCard />
        <br />
        <Smurf />
        <br />
        <Form />
      </div>
    );
  }
}

export default App;
