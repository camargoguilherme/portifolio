import React, { Component } from "react";

const ButtonSocial = (props) =>{
		return(
			<a class="btn btn-outline-light btn-social mx-1" href={props.children.link}>
        <i class={`fab fa-fw ${props.children.media}`}></i>
      </a>
		);
}

export default ButtonSocial;