import React, { Component, Fragment } from 'react';

class ItemBlog extends Component {
  constructor(props){
    super(props)
    this.state = { ...props.item}
  }
  render(){
    return (
      <Fragment>
        <div className="card" style={{width: '20rem'}}>
          <img className="card-img-top" src={this.state.image} alt={this.state.title} />
          <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <p className="card-text">{this.state.resume}</p>
            <a href={this.state.link} className="btn btn-primary" target="_blank">Ir para o post</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ItemBlog;