import React from 'react';

const Divider = (props) => {
  return (
    // <!-- Icon Divider -->
    <div className={`divider-custom ${props.className}`}>
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon">
        <i className="fas fa-star"></i>
      </div>
      <div className="divider-custom-line"></div>
    </div>
  );
}

export default Divider;
