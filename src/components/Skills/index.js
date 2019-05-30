import React, { Component } from "react";
import Section from '../Section';
import Divider from '../Divider';

import data from '../../database/data.json';

class Skills extends Component {
  constructor(props){
    super(props)
    this.state = { ...data}
  }
  render() {
    return (
      <Section className="page-section" id="skills">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
        <Divider />
        <ul className="list-inline text-center">
          {
            this.state.skills &&  this.state.skills.map( (item, index) =>{
              return <li className="card text-uppercase text-center col-md-6 col-lg-2 mb-2" key={index}>{item}</li>
            })
          }
        </ul>
      </Section>
    );
  }
}

export default Skills;
