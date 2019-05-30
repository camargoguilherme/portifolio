import React, { Component } from "react";
import Section from '../../components/Section';
import data from '../../database/data.json'
class Copyright extends Component {
  constructor(props){
    super(props)
    this.state = {...data.profile}
  }
  render(){
    const { name, email, area, phone } = this.state
    return(
      <Section className="copyright py-4 text-center text-white">
        <small>{name} {area} 2019</small>
        <br/>
        <small>{email}</small>
        <br/>
        <small>{phone}</small>
      </Section>
    );   
  }
}

export default Copyright;