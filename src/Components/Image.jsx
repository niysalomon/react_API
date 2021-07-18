import React, { Component } from 'react';
import '../App.css';

export class Image extends Component {
    render() {
        return (<div className="data">
            <div className="titleclass">Title:&nbsp;
            <span>{this.props.title}</span>
            </div>
            <div className="imgclass">
           <img src={this.props.src} />
           
           </div>
           
           </div>
        )
    }
}

export default Image
