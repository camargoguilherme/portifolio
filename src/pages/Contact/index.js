import React, { Component } from "react";
import Section from '../Section';
import Divider from '../../components/Divider';
import Form from '../../components/Form';

import data from '../../database/data.json';

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = { ...data}
  }
  render() {
    return (
      <Section className="page-section" id="contact">
        {/* <!-- Contact Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <Divider />
        <Form />
      </Section>
    );
  }
}

export default Contact;
