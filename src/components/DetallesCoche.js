import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesCoche extends Component {
  state = {
    coche: null,
  };

  findCoche=()=>{
    let id = this.props.id
    let request = "api/Coches/FindCoche/" + id
    let url = Global.urlApiCoches + request

    axios.get(url).then(response=>{
      this.setState({
        coche:response.data
      })
    })

    
  }

  componentDidMount=()=>{
    this.findCoche()
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
          <div style={{textAlign:"center"}}>
            <NavLink to="/">Volver</NavLink>
            <h1>{this.state.coche.modelo}</h1>
            <img style={{width:"500px"}} src={this.state.coche.imagen}/>
            <p>Marca: <b>{this.state.coche.marca}</b> </p>
            <hr/>
            <p>Conductor: <b>{this.state.coche.conductor}</b></p>
          </div>
        )}
      </div>
    );
  }
}
