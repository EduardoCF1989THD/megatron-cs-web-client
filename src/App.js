import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Directory from './containers/directory/Directory';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Directory></Directory>
      </div>
    );
  }
}

export default App;
