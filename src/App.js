import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Directory from './containers/directory/Directory';
import Description from './containers/description/Description';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Description/>
      </div>
    );
  }
}

export default App;
