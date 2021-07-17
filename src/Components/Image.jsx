import React, { Component } from 'react'

export class Image extends Component {
    render() {
        return (<div><div>
            <span>{this.props.title}</span>
           <img src={this.props.src} />
           
           </div>
           
           </div>
        )
    }
}

export default Image
