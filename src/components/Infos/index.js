import React, { Component, Fragment } from "react";
import Section from '../Section';
import Divider from '../Divider';
import Content from '../Content';
import Button from '../Button';

import api from '../../services/api'

class Infos extends Component {
  constructor(props){
    super(props)
    this.state = {
      details: props.details
     }
  }
  render() {
    return (
      <Section className="page-section bg-primary text-white mb-0" id="infos">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">MAIS INFORMAÇÕES</h2>
        <Divider className="divider-light"/>
        
        <div className="row">
          { this.state.details && this.state.details.map( (item, index) =>{
              return  <Fragment>
                        <div className={`col-lg-4 ${index % 2 == 0 ? 'ml-auto': 'mr-auto'}`}>
                          <h4 className="text-center">{ item.title }</h4>
                          <p className="lead">{item.info}</p>
                        </div>
                      </Fragment>
          })}
        </div>
      </Section>
    );
  }
}

export default Infos;
