import React, { Component, Fragment } from 'react';

class ItemBlog extends Component {
  constructor(props){
    super(props)
    this.state = { ...props.item}
  }
  render(){
    return (
      <Fragment>
        <li className="nav-item mx-0 px-lg-3">
          <img className="img-fluid col-3" src={this.state.src} alt="" />
          <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href={this.state.url}>{this.state.title}</a>
        </li>
      </Fragment>
    );
  }
}

export default ItemBlog;