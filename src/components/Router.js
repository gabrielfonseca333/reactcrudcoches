import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import CreateCoche from './CreateCoche'
import DetallesCoche from './DetallesCoche'

export default class Router extends Component {
  render() {

    function DetalleCocheElement(){

        let {id} = useParams();
        return <DetallesCoche id={id}/>
    }





    return (
      <div>
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/create' element={<CreateCoche/>}></Route>
                <Route path='/detalles/:id' element={<DetalleCocheElement/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
