import React, {Component} from 'react';
import './DirectoryItem.css';

export default class DIrectoryItem extends Component{
    
    render(){
        return (
            <div>
                <img className="directory-item-image" src="images/ironman1.png"></img>
                <h2>Iron man</h2>
                <button>Add to cart</button>
            </div>
        );
    }
}