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
          <small>Copyright &copy; Your Website 2019</small>
        </Section>
      </Fragment>
    );
  }
}

export default Main;
