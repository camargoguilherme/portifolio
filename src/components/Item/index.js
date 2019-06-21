import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      // <!-- Portfolio Item 1 -->
        <div className="col-md-6 col-lg-4">
          <h4 className="text-center">TEXTO</h4>
          <div className="portfolio-item mx-auto" >

          <img className="img-fluid" src={this.props.src} alt="" />
          </div>
        </div>
    );
  }
}

export default Item;
