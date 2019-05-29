import React, { Component } from "react";

const Content = (props) => {
	return(
		<div className="row">
			<div className="col-lg-4 ml-auto">
          <p className="lead">{props.info1}</p>
        </div>
        <div className="col-lg-4 mr-auto">
          <p className="lead">{props.info2}</p>
        </div>
		</div>
	);
}

export default Content;