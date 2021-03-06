import React, { Component, Fragment } from 'react';
import Portifolio from '../../pages/Portifolio';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Skills from '../../pages/Skills';
import Infos from '../../pages/Infos';
import Blog from '../../pages/Blog';

import { PROFILE, ABOUT, DETAILS, SKILLS, BLOG, PORTIFOLIO } from '../../services/api'

class ListSection extends Component {  
  constructor(props){
    super(props)
    this.state = {
      profile: [], 
      about: [], 
      skills: [], 
      details: [], 
      blog: [],
      ready: false
     }
  }
  async componentDidMount(){
    const profile = await PROFILE();
    const about = await ABOUT();
    const details = await DETAILS();
    const skills = await SKILLS();
    const blog = await BLOG();
    const portifolio = await PORTIFOLIO();

    this.setState({ profile, about, skills, details, blog, portifolio, ready: true });
  }
  render(){
    const { portifolio, profile, about, skills, details, blog, ready } = this.state;

    if(ready){
      return (
        <Fragment>
          <Portifolio portifolio={portifolio} />
          <About about={about} curriculum={profile.curriculum} />
          <Skills skills={skills} />
          <Infos details={details} />
          <Blog blog={blog} />
          <Contact />
        </Fragment>
      );
    }else{
      return null;
    }
  }
}
export default ListSection;