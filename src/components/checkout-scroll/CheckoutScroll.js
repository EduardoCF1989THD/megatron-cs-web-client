import React, { Component } from 'react';
import CartItem from '../cart-item/CartItem';
import './CheckOutScroll.css';

export default class CheckoutScroll extends Component {
    render(){
        return(
            <div className="scroll">
                <CartItem itemName="Spiderman" itemPrice="45" itemCount="4"/>
                <hr/>
                <CartItem itemName="Spiderman" itemPrice="45" itemCount="4"/>
                <hr/>
                <CartItem itemName="Spiderman" itemPrice="45" itemCount="4"/>
            </div>
        );
    }
}