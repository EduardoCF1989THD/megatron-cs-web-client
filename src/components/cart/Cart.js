import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div className="cart-container">
                <h6 className="cart-text">{this.state.count}</h6>
                <img  className="cart-image" src="images/cart-icon.png"></img>
            </div>
        );
    }
}