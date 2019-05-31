import React, { Component } from 'react';
import ButtonSocial from '../ButtonSocial'

import { MEDIAS } from '../../services/api';

class ListButtonSocial extends Component {
  constructor(props){
    super(props)
    this.state = {
      medias: [],
      ready: false
    }
  }

  async componentDidMount(){
    const medias = await MEDIAS();
    this.setState({ medias, ready: true });
  }

  render(){
    const { medias, ready } = this.state;
    if(ready){
      return (
        <div className="col-lg-12 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">REDES SOCIAIS</h4>
          <h6 className="text-center mb-4">Entre em contato comigo por minhas redes sociais.</h6>
          {
            medias && medias.map( (item, index) =>{
              return <ButtonSocial key={index} >{item}</ButtonSocial>
            })
          }
        </div>
      );
    }else{
      return null;
    }

  }
}
export default ListButtonSocial