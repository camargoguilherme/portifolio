import React, { Component } from "react";

import ListButtonSocial from "../ListButtonSocial";

class Footer extends Component {
	render() {
		return(
			<footer class="footer text-center">
				<div class="container">
					<div class="row">
						<ListButtonSocial />
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;