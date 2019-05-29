import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Header from "../components/Header"; // Importação do Header
import Footer from "../components/Footer"; // Importação do Header

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;