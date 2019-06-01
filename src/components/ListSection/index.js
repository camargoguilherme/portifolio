import React, { Component, Fragment } from 'react';
import Portifolio from '../Portifolio';
import About from '../About';
import Contact from '../Contact';
import Skills from '../Skills';
import Infos from '../Infos';
import Blog from '../Blog';

import { PROFILE, ABOUT, DETAILS, SKILLS } from '../../services/api'

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
    // const blog = await BLOG();
    this.setState({ profile, about, skills, details, ready: true });
  }
  render(){
    const { profile, about, skills, details, blog, ready } = this.state;

    if(ready){
      alert(JSON.stringify(profile))
      return (
        <Fragment>
          <Portifolio profile={profile} />
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