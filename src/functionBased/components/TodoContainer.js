import React from "react";
import { Route, Switch } from 'react-router-dom';

import Navbar from "./Navbar";

import Home from "../pages/Home";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";

const ToDoContainer = () => {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="*" component={NotMatch}></Route>
      </Switch>
    </>
  );
}

export default ToDoContainer