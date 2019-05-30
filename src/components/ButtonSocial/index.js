import React from "react";

const ButtonSocial = (props) =>{
		return(
			<a className="btn btn-outline-light btn-social mx-1" target="_blank" rel="noopener noreferrer" href={props.children.link}>
        <i className={`fab fa-fw ${props.children.media}`}></i>
      </a>
		);
}

export default ButtonSocial;