import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Directory from './containers/directory/Directory';
import Description from './containers/description/Description';
import Checkout from './containers/checkout/Checkout';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Checkout/>
      </div>
    );
  }
}

export default App;
