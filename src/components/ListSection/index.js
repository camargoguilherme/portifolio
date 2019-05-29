import React, { Component, Fragment } from 'react';

import Section from '../Section';
import Divider from '../Divider';
import Form from '../Form';
import Button from '../Button';
import Item from '../Item';
import Content from '../Content';

class ListSection extends Component {
  state = {
    portfolio: [
      { 
        "data-target": "#portfolioModal1",
        src: "img/portfolio/cabin.png"
      },
      { 
        "data-target": "#portfolioModal2",
        src: "img/portfolio/cake.png"
      },
      { 
        "data-target": "#portfolioModal3",
        src: "img/portfolio/circus.png"
      },
      { 
        "data-target": "#portfolioModal4",
        src: "img/portfolio/game.png"
      },
      { 
        "data-target": "#portfolioModal5",
        src: "img/portfolio/safe.png"
      },
      { 
        "target": "#portfolioModal6",
        src: "img/portfolio/submarine.png"
      },
    ],
    about: [
      {info: 'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.'},
      {info: 'You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!'}
    ]
  }
  
  render(){
    return (
      <Fragment>
        <Section className="page-section portfolio" id="portfolio">
          {/* <!-- Portfolio Section Heading --> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          <Divider />
          <div className="row">
            { this.state.portfolio.map( item =>{
              return <Item target={item.target} src={item.src}/>
            } )}
          </div>
        </Section>
  
        <Section className="page-section bg-primary text-white mb-0" id="about">
          {/* <!-- About Section Heading --> */}
          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
          <Divider className="divider-light"/>
          <Content info1={this.state.about[0].info} info2={this.state.about[1].info} />
          <Button />
        </Section>
  
        <Section className="page-section" id="contact">
          {/* <!-- Contact Section Heading --> */}
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          <Divider />
          <Form />
        </Section>
      </Fragment>
    );
  }
}
export default ListSection;