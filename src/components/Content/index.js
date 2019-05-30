import React, { Component } from "react";
import data from '../../database/data.json'
import Detalhes from "../Detalhes/index.js";
class Content extends Component {
  constructor(props){
    super(props)
    this.state = {...data}
  }
  render(){
    return(
      <div className="row">
        { this.state.details && this.state.details.map( (item, index) =>{
            return <Detalhes key={index} details={item}></Detalhes>
        })}
      </div>
    );   
  }
}

export default Content;