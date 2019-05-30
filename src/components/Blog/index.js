import React, { Component } from "react";
import Section from '../Section';
import Divider from '../Divider';
import Content from '../Content';
import Button from '../Button';

import data from '../../database/data.json';

class Blog extends Component {
  constructor(props){
    super(props)
    this.state = { ...data}
  }
  render() {
    return (
      <Section className="page-section bg-primary text-white mb-0" id="blog">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">Blog</h2>
        <Divider className="divider-light"/>
        <Content/>
        <Button>{this.state.curriculum}</Button>
      </Section>
    );
  }
}

export default Blog;
