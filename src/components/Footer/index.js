import React, { Component } from "react";

import ListButtonSocial from "../ListButtonSocial";

class Footer extends Component {
	render() {
		return(
			<footer class="footer text-center">
				<div class="container">
					<div class="row">
					
						<div class="col-lg-4 mb-5 mb-lg-0">
							<h4 class="text-uppercase mb-4">Location</h4>
							<p class="lead mb-0">2215 John Daniel Drive
								<br/>Clark, MO 65243</p>
						</div>

						<ListButtonSocial />

						<div class="col-lg-4">
							<h4 class="text-uppercase mb-4">About Freelancer</h4>
							<p class="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by
								<a href="http://startbootstrap.com">Start Bootstrap</a>.
							</p>
						</div>

					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;