import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Home extends Component {

    state = {
        coches: []
    }

    loadCoches=()=>{

        let request = "api/Coches"
        let url = Global.urlApiCoches + request
        axios.get(url).then(response=>{
            this.setState({
                coches: response.data
            })
        })

    }

    deleteCoche=(id)=>{

      let request = "api/coches/deletecoche/" + id
      let url = Global.urlApiCoches + request
      axios.delete(url).then(response=>{
        console.log("delete coche " + id)
        this.loadCoches()
      })

    }

    componentDidMount=()=>{
        this.loadCoches()
    }

  render() {
    return (
      <div>
        <div
          style={{ boxShadow: "5px 5px 20px", marginTop: "20px" }}
          class="container col-xxl-8 px-4 py-5"
        >
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src="https://www.weddingcarsforhire.com/wp-content/uploads/2023/10/DSC_0329-scaled.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">CRUD DE COCHES</h1>
              <p class="lead">
                Crud de Coches para Practicar, recordar pushear a GitHub.
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="container" style={{padding:"20px"}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>MARCA</th>
                <th>IMAGEN</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {
                    //aqui añadir el tbody
                    this.state.coches.map((coche, index)=>{
                        return(<tr key={index}>
                            <td>{coche.marca}</td>
                            <td><img style={{width:"200px", height:"150px"}} src={coche.imagen}/></td>
                            <td><NavLink to={"/detalles/" + coche.idCoche}>Detalles</NavLink></td>
                            <td><NavLink to={"/update/" + coche.idCoche +"/" + coche.marca+"/"+coche.modelo+"/"+coche.conductor}>Editar</NavLink></td>
                            <td>
                              <button 
                              className="btn btn-danger"
                              onClick={()=>{
                                this.deleteCoche(coche.idCoche)
                              }}>
                                Delete
                              </button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
