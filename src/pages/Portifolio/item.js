import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props)

    this.state = { ...props.item }
  }
  render() {
    return (
      // <!-- Portfolio Item 1 -->
        <div className="col-md-6 col-lg-4 text-center">
          <div className="card" style={{width: '20rem'}}>
            <img className="card-img-top" src={this.state.image} alt={this.state.title} />
            <div className="card-body">
              <p className="card-text">{this.state.title}</p>
              <a href={this.state.github} target="_blank" without rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>
    );
  }
}

export default Item;
