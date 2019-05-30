import React, { Component } from "react";
import Section from '../Section';
import Divider from '../Divider';
import Content from '../Content';
import Button from '../Button';

import data from '../../database/data.json';

class Infos extends Component {
  constructor(props){
    super(props)
    this.state = { ...data}
  }
  render() {
    return (
      <Section className="page-section bg-primary text-white mb-0" id="infos">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">Infos</h2>
        <Divider className="divider-light"/>
        <Content/>
        <Button>{this.state.curriculum}</Button>
      </Section>
    );
  }
}

export default Infos;
