import React, {Component} from 'react';
import './DirectoryItem.css';

export default class DirectoryItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="directory-grid">
                <img className="directory-item-image" src={this.props.image}></img>
                <h2>{this.props.name}</h2>
                <button>Add to cart</button>
            </div>
        );
    }
}