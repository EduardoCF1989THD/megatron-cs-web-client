import React, { Component } from 'react';
import logo from './logo.svg';
import DirectoryItem from './components/directory-item/DirectoryItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DirectoryItem/>
       
      </div>
    );
  }
}

export default App;
