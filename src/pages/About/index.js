import React, { Component } from "react";
import Section from '../Section';
import Divider from '../../components/Divider';
import Button from '../../components/Button';
import Content from '../../components/Content'

class About extends Component {
  constructor(props){
    super(props)
    this.state = { ...props}
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
