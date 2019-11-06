import React, { Component } from "react";
import Section from '../Section';
import Divider from '../../components/Divider';
import Item from './item';


class Portifolio extends Component {
  constructor(props){
    super(props)
    this.state = { ...props}
  }
  render() {
    return (
      <Section className="page-section portifolio" id="portifolio">
        {/* <!-- Portifolio Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portifolio</h2>
        <Divider />
        <div className="row">
          { 
            this.state.portifolio && this.state.portifolio.map( (item, index) =>{
              return <Item key={index} item={item}/>
            })
          }
        </div>
      </Section>
    );
  }
}

export default Portifolio;
