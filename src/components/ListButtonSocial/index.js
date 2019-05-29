import React, { Component } from 'react';
import ButtonSocial from '../ButtonSocial'
class ListButtonSocial extends Component {
  state = {
    btnMedias:[
      {
        media: "fa-facebook-f",
        link: ""
      },
      {
        media: "fa-twitter",
        link: ""
      },
      {
        media: "fa-linkedin-in",
        link: ""
      },
      {
        media: "fa-dribbble",
        link: ""
      }
    ]
  }
  render(){
    return (
      <div class="col-lg-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Around the Web</h4>
        {
          this.state.btnMedias.map( item =>{
            return <ButtonSocial>{item}</ButtonSocial>
          })
        }
      </div>
    );
  }
}
export default ListButtonSocial