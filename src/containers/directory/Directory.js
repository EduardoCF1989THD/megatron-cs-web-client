import React,{ Component } from 'react';
import DirectoryItem from './../../components/directory-item/DirectoryItem';
import Cart from './../../components/cart/Cart';
import './Directory.css';

export default class Directory extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    
    addToCart = (e) => {
      e.preventDefault();
      this.setState({
          count: this.state.count + 1
      });
    }
      render() {
        return (
          <div>
            <div>
              <Cart count={this.state.count} />
            </div>
            <div className="grid-container">
              <DirectoryItem name="Iron man" image="images/ironman1.png" addToCart={this.addToCart}/>
              <DirectoryItem name="Spiderman" image="images/spiderman.png" addToCart={this.addToCart}/>
              <DirectoryItem name="Infinity Gountlet" image="images/infinity-gountlet.png" addToCart={this.addToCart}/>
              <DirectoryItem name="The Thing" image="images/the-thing.png" addToCart={this.addToCart}/>
            </div>
          </div>
        );
      }
}