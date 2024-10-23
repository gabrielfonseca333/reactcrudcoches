import React, { Component } from "react";
import Global from "./Global";

export default class DetallesCoche extends Component {
  state = {
    coche: null,
  };

  mostrarCoche=()=>{
    let id = this.props.id
    let request = "api/Coches/FindCoche/" + id
    let url = Global.urlApiCoches + request

    
  }

  componentDidMount=()=>{
    this.mostrarCoche()
  }

  render() {
    return (
      <div
        style={{
          padding: "20px",
          marginTop: "20px",
          boxShadow: "5px 5px 20px lightblue",
        }}
        className="container"
      >
        {this.state.coche && (
          <div>
            <h1>Nombre del coche</h1>
          </div>
        )}
      </div>
    );
  }
}
