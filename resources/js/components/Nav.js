import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/formulario/index">Lista</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formulario/form">Crear Empresa</Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}