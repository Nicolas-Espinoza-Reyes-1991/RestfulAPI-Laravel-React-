import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./formulario/Form"
import List from "./formulario/List"
import Edit from "./formulario/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  
function Main(){
  return (
    <Router>
      <main>
        <Nav/>
        <Switch>
          <Route path="/formulario/index" exact component={List} />
          <Route path="/formulario/form"  component={Form} />
          <Route path="/formulario/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  )
}

export default Main;
// for <div id="main-formulario"></div>
ReactDOM.render(<Main />, document.getElementById('main-formulario'));