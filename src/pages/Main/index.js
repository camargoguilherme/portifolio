import React, { Component, Fragment } from "react";
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from "../../components/Footer";
import ListSection from "../../components/ListSection";
import Copyright from "../../components/Copyright";
import api from '../../services/api';


class Main extends Component {
  render() {
    return (
      <Fragment >
        <Nav />
        <Header />
        <ListSection />
        <Footer />
        <Copyright />
      </Fragment>
    );
  }
}

export default Main;
