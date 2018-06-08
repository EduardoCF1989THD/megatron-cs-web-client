import React, { Component } from 'react';
import './CartItem.css';

export default class CartItem extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="cart-item-container">
                <img src="images/spiderman.png" className="cart-item-image"/>
                <div className="item-information-container">
                    <h2>{this.props.itemName}</h2>
                    <h4>Price: ${this.props.itemPrice}</h4>
                    <div>
                        <h4>Qty: {this.props.itemCount}</h4>
                    </div>
                </div>
            </div>
        );
       
    }
}