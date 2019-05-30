import React, { Component } from 'react';
import ItemMenu from '../ItemMenu';

// import { Container } from './styles';

class Nav extends Component {
  state = {
    menu: [
      {
        id: 'portfolio',
        title: 'Portfolio'
      },
      {
        id: 'about',
        title: 'Sobre'
      },
      {
        id: 'skills',
        title: 'Habilidades'
      },
      {
        id: 'contact',
        title: 'Contato'
      },
      {
        id: 'infos',
        title: 'Infos'
      },
      {
        id: 'blog',
        title: 'Blog'
      },
    ]
  }
  render() {
    return (
      // <!-- Navigation -->
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Guilherme Camargo</a>
          <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {
                this.state.menu && this.state.menu.map( (item, index) =>{
                  return <ItemMenu key={index} itemMenu={item} />
                }) 
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
