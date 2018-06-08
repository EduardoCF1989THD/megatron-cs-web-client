import React, { Component } from 'react';
import CartItem from './../../components/cart-item/CartItem';
import './Checkout.css';


export default class Checkout extends Component {
    render(){
        return(
            <div>
                <CartItem itemName="Spiderman" itemPrice="45" itemCount="4"/>
            </div>
        );
    }
}