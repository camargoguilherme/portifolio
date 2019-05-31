import React, { Component, Fragment } from 'react';
import Portifolio from '../Portifolio';
import About from '../About';
import Contact from '../Contact';
import Skills from '../Skills';
import Infos from '../Infos';
import Blog from '../Blog';

import { profile } from '../../services/api'

class ListSection extends Component {  
  constructor(props){
    super(props)
    this.state = {
      
     }
  }
  async componentDidMount(){
  }
  render(){
    const { about, skills, details, blog } = this.state

    alert(JSON.stringify(profile))
    return (
      <Fragment>
        <Portifolio profile={profile}/>
        <About about={about}/>
        <Skills skills={skills}/>
        <Infos details={details}/>
        <Blog blog={blog}/>
        <Contact />
      </Fragment>
    );
  }
}
export default ListSection;