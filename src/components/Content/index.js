import React, { Component } from "react";
import Detalhes from "../Detalhes";

class Content extends Component {
  constructor(props){
    super(props)
    this.state = {...props.data}
  }

  render(){
    return(
      <div className="row">
        { this.state.about && this.state.about.map( (item, index) =>{
            return <Detalhes key={index} about={item}></Detalhes>
        })}
      </div>
    );   
  }
}

export default Content;