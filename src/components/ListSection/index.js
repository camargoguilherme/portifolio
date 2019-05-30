import React, { Component, Fragment } from 'react';
import Portifolio from '../Portifolio';
import About from '../About';
import Contact from '../Contact';
import Skills from '../Skills';
import Infos from '../Infos';
import Blog from '../Blog';

class ListSection extends Component {  
  render(){
    return (
      <Fragment>
        <Portifolio />
        <About />
        <Skills />
        <Infos />
        <Blog />
        <Contact />
      </Fragment>
    );
  }
}
export default ListSection;