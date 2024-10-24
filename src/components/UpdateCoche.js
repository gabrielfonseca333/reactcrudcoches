import React, { Component } from 'react'

export default class UpdateCoche extends Component {
  render() {
    return (
      <div>
        <h1>Update Coche {this.props.id}</h1>
        <ul>
            <li>{this.props.marca}</li>
            <li>{this.props.modelo}</li>
            <li>{this.props.conductor}</li>
        </ul>
        <img
        
        src={this.props.imagen}/>
      </div>
    )
  }
}
