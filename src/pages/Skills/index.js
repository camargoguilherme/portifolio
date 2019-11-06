import React, { Component } from "react";
import Section from '../Section';
import Divider from '../../components/Divider';

import './styles.css'

import api from '../../services/api';

class Skills extends Component {
  constructor(props){
    super(props)
    this.state = { 
      skills: []
    }
  }
  async componentDidMount(){
    const skills = await api.get('/skill')
    this.setState({skills: skills.data})
  }
  render() {
    return (
      <Section className="page-section" id="skills">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
        <Divider />
        <div className="skills">
          <ul className="list-inline text-center">
            {
              this.state.skills &&  this.state.skills.map( ({title}, index) =>{
                return <li className="badge card text-uppercase text-center text-uppercase text-secondary  col-md-4 col-lg-2 mb-1" key={index}>{title}</li>
              })
            }
          </ul>
        </div>
      </Section>
    );
  }
}

export default Skills;
