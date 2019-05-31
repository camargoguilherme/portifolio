import React, { Component } from "react";
import Section from '../Section';
import Divider from '../Divider';
import Button from '../Button';
import Content from '../Content'

import api from '../../services/api';

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      about: props.about
    }
  }

  render() {
    return (
      <Section className="page-section bg-primary text-white mb-0" id="about">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">Sobre</h2>
        
        <Divider className="divider-light"/>
        <Content data={this.state}/>
        <Button>{this.state.curriculum}</Button>
      </Section>
    );
  }
}

export default About;
