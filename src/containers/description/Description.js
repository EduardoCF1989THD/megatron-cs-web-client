import React, { Component } from 'react';
import './Description.css';


export default class Description extends Component{
    render(){
        return(
            <div className="description-container">
                <div className="description-image-container">
                    <img className="description-image" src="images/ironman1.png"/>
                    <button className="add-to-cart-button">Add to cart</button>
                </div>
                <div className="description-text-container">
                    <h2>Ironman</h2>
                    <p className="description-text" >This is the description of the comic. skfsd kjfksjnfksf jkbfakbas kfbkdasf
                    This is the description of the comic. skfsdkjfk sjnfksfjk bfakbaskfbkdasf
                    This is the description of the comic. skfsdkj fksjnfk sfjkbfak baskfbkdasf
                    This is the description of the comic. skfsdk jfksjnfk sfjkbf  akbas kfbkdasf
                    </p>
                </div>
            </div>
        );
    }
}