import React, { Component } from "react";

class Detalhes extends Component {
  constructor(props){
    super(props)
    this.state = {...props.details}
  }
  render(){
    return(
      <div className="col-md-6 col-lg-6 align-content-center">
        <h6 className="page-section-heading text-center text-white">{ this.state.title }</h6>
        <ul>
          {
            this.state.items &&  this.state.items.map( (item, index) =>{
              return <li className="text-center" key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );   
  }
}

export default Detalhes;