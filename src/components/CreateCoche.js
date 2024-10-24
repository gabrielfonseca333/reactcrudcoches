import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


export default class CreateCoche extends Component {

    cajaId = React.createRef()
    cajaMarca = React.createRef()
    cajaModelo = React.createRef()
    cajaConductor = React.createRef()
    cajaImagen = React.createRef()

    state = {
        status : false
    }
    
    crearCoche=(e)=>{
        e.preventDefault()
        
        let id =  parseInt(this.cajaId.current.value)
        let marca = this.cajaMarca.current.value
        let modelo = this.cajaModelo.current.value
        let conductor = this.cajaConductor.current.value
        let imagen = this.cajaImagen.current.value

        let request = "api/coches/insertcoche"
        let url = Global.urlApiCoches + request

        let coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        axios.post(url, coche).then(response=>{
            console.log("Coche " + id + " ha sido creado")
            this.setState({
                status:true
            })
        })

        


    }


  render() {

    if(this.state.status == true){
        return <Navigate to="/" />
    }else{
        return (
            <div style={{padding:"20px", textAlign:"center", boxShadow:"5px 5px 20px", marginTop:"20px"}}className='container'>
              <form>
                  <h1 style={{marginBottom:"20px"}}>Crear Coche</h1>
                  <input type='text' className='form-control' placeholder='ID' ref={this.cajaId}/><br/>
                  <input type='text' className='form-control' placeholder='Marca' ref={this.cajaMarca}/><br/>
                  <input type='text' className='form-control' placeholder='Modelo' ref={this.cajaModelo}/><br/>
                  <input type='text' className='form-control' placeholder='Conductor' ref={this.cajaConductor}/><br/>
                  <input type='text' className='form-control' placeholder='URL imagen' ref={this.cajaImagen}/><br/>
                  <button onClick={this.crearCoche} className='btn btn-primary'>
                      Crear
                  </button>
              </form>
            </div>
          )
    }


    
  }
}
