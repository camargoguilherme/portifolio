import React, { Component } from "react";

const ButtonDownload = (props) =>{
		return(
			<div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-light" target="_blank" href={props.children}>
          <i class="fas fa-download mr-2"></i>
          Curriculum Vitae!
        </a>
      </div>
		);
}

export default ButtonDownload;