import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import CreateCoche from "./CreateCoche";
import DetallesCoche from "./DetallesCoche";
import UpdateCoche from "./UpdateCoche";
import Menu2 from "./Menu2";

export default class Router extends Component {
  render() {
    function DetalleCocheElement() {
      let { id } = useParams();
      return <DetallesCoche id={id} />;
    }

    function UpdateCocheElement() {
      let { id, marca, modelo, conductor } = useParams();
      return (
        <UpdateCoche
          id={id}
          marca={marca}
          modelo={modelo}
          conductor={conductor}
        />
      );
    }
///:id/:marca/:modelo/:conductor/:imagen
    return (
      <div>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<CreateCoche />}></Route>
            <Route
              path="/detalles/:id"
              element={<DetalleCocheElement />}
            ></Route>
            <Route
              path="/update/:id/:marca/:modelo/:conductor/"
              element={<UpdateCocheElement />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
