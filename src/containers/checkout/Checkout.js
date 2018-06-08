import React, { Component } from 'react';
import CheckoutScroll from './../../components/checkout-scroll/CheckoutScroll';
import './Checkout.css';


export default class Checkout extends Component {
    render(){
        return(
            <div>
                <CheckoutScroll/>
            </div>
        );
    }
}