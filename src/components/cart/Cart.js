import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component{
    render(){
        return(
            <div>
                <h6 className="cart-text">{this.props.count}</h6>
                <img  className="cart-image" src="images/cart-icon.png"></img>
            </div>
        );
    }
}