import React, { Component, Fragment } from "react";
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Section from '../../components/Section';
import Footer from "../../components/Footer";
import ListSection from "../../components/ListSection";

class Main extends Component {
  render() {
    return (
      <Fragment >
        <Nav />
        <Header />
        <ListSection/>
        <Footer />
        <Section className="copyright py-4 text-center text-white">
          <small>Guilherme Camargo Desenvolvimento Back-end 2019</small>
          <br/>
          <small>guilhermecamargo57@hotmail.com</small>
          <br/>
          <small>+55 (43) 984 231 673</small>
        </Section>
      </Fragment>
    );
  }
}

export default Main;
