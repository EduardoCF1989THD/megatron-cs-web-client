import React, { Component } from 'react';
import logo from './logo.svg';
import DirectoryItem from './components/directory-item/DirectoryItem';
import Cart from './components/cart/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cart/>
        <div className="grid-container">
          <DirectoryItem className="grid-item" name="Iron man" image="images/ironman1.png"/>
          <DirectoryItem name="Iron man" image="images/ironman1.png"/>
          <DirectoryItem name="Iron man" image="images/ironman1.png"/>
          <DirectoryItem name="Iron man" image="images/ironman1.png"/>
        </div>
      </div>
    );
  }
}

export default App;
