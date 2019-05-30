import React from "react";

const ButtonDownload = (props) =>{
		return(
			<div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light" target="_blank" rel="noopener noreferrer" href={props.children}>
          <i className="fas fa-download mr-2"></i>
          Curriculum Vitae
        </a>
      </div>
		);
}

export default ButtonDownload;