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
      <Section className="page-section" id="blog">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Blog</h2>
        <Divider className="divider-light"/>
        
      </Section>
    );
  }
}

export default Blog;
