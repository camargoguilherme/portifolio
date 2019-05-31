import React, { Component, Fragment } from "react";
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from "../../components/Footer";
import ListSection from "../../components/ListSection";
import Copyright from "../../components/Copyright";

import { PROFILE } from '../../services/api';

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      profile: [],
      ready: false
    }
  }

  async componentDidMount(){
    const profile = await PROFILE();
    this.setState({ profile, ready: true });
  }

  render() {
    const { profile, ready } = this.state;
    if(ready){
      return (
        <Fragment >
          <Nav />
          <Header />
          <ListSection />
          <Footer />
          <Copyright profile={profile}/>
        </Fragment>
      );
    }else{
      return null;
    }


  }
}

export default Main;
