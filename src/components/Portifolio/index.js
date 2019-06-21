import React, { Component } from "react";
import Section from '../Section';
import Divider from '../Divider';
import Item from '../Item';

import data from '../../database/data.json';

class Portifolio extends Component {
  constructor(props){
    super(props)
    this.state = { ...props.item}
  }
  render() {
    return (
      <Section className="page-section portfolio" id="portfolio">
        {/* <!-- Portfolio Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <Divider />
        <div className="row">
          {  this.state.portfolio && this.state.portfolio.map( (item, index) =>{
            return <Item key={index} target={item.target} src={item.src}/>
          } )}
        </div>
      </Section>
    );
  }
}

export default Portifolio;
