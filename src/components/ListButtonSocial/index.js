import React, { Component } from 'react';
import ButtonSocial from '../ButtonSocial'
import data from '../../database/data.json'

class ListButtonSocial extends Component {
  constructor(props){
    super(props)
    this.state = {
      medias: data.medias
    }
  }
  render(){
    return (
      <div class="col-lg-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">REDES SOCIAIS</h4>
        <h6 class="text-uppercase mb-4">Entre em contato comigo por minhas redes sociais.</h6>
        {
          this.state.medias.map( item =>{
            return <ButtonSocial>{item}</ButtonSocial>
          })
        }
      </div>
    );
  }
}
export default ListButtonSocial