import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { Navigate } from "react-router-dom";

export default class UpdateCoche extends Component {
  state = {
    coche: null,
  };
  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  state = {
    status: false,
    coche: null,
  };

  findCoche = () => {
    let id = this.props.id;
    let request = "api/Coches/FindCoche/" + id;
    let url = Global.urlApiCoches + request;

    axios.get(url).then((response) => {
      this.setState({
        coche: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.findCoche();
  };

  updateCoche = (e) => {
    e.preventDefault();

    let id = parseInt(this.cajaId.current.value);
    let marca = this.cajaMarca.current.value;
    let modelo = this.cajaModelo.current.value;
    let conductor = this.cajaConductor.current.value;
    let imagen = this.cajaImagen.current.value;

    let request = "api/coches/updatecoche";
    let url = Global.urlApiCoches + request;

    let coche = {
      idCoche: id,
      marca: marca,
      modelo: modelo,
      conductor: conductor,
      imagen: imagen,
    };

    axios.put(url, coche).then((response) => {
      console.log("Coche " + id + " ha sido modificado");
      this.setState({
        status: true,
      });
    });
  };

  render() {
    if (this.state.status == true) {
      return <Navigate to="/" />;
    } else {
      return (
        <div>
          {this.state.coche && (
            <div>
              <img src={this.state.coche.imagen} />
              <form>
                <h1 style={{ marginBottom: "20px" }}>
                  Update Coche {this.props.id}
                </h1>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.coche.idCoche}
                  disabled
                  ref={this.cajaId}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Marca"
                  defaultValue={this.state.coche.marca}
                  ref={this.cajaMarca}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Modelo"
                  defaultValue={this.state.coche.modelo}
                  ref={this.cajaModelo}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Conductor"
                  defaultValue={this.state.coche.conductor}
                  ref={this.cajaConductor}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="URL imagen"
                  defaultValue={this.state.coche.imagen}
                  ref={this.cajaImagen}
                />
                <br />
                <button onClick={this.updateCoche} className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          )}
        </div>
      );
    }
  }
}
