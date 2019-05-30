import React, { Component } from "react";

import ListButtonSocial from "../ListButtonSocial";

class Footer extends Component {
	render() {
		return(
			<footer className="footer text-center">
				<div className="container">
						<ListButtonSocial />
				</div>
			</footer>
		);
	}
}

export default Footer;