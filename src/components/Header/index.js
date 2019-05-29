import React, { Component, Fragment } from "react";
import './styles.css';
import data from '../../database/data.json';

class Header extends Component {
	constructor(props){
		super(props)
		const { name, resume, perfil } = data.profile
		this.state = {
			name,
			resume,
			perfil
		}
	}
		
	render() {
		return(
			<header className="masthead bg-primary text-white text-center">
				<div className="container d-flex align-items-center flex-column">

					{/* <!-- Masthead Avatar Image --> */}
					<img className="masthead-avatar mb-5" src={this.state.perfil} alt=""/>

					{/* <!-- Masthead Heading --> */}
					<h1 className="masthead-heading text-uppercase mb-0">{this.state.name}</h1>

					{/* <!-- Icon Divider --> */}
					<div className="divider-custom divider-light">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
							<i className="fas fa-star"></i>
						</div>
						<div className="divider-custom-line"></div>
					</div>

					{/* <!-- Masthead Subheading --> */}
					<p className="masthead-subheading font-weight-light mb-0">{this.state.resume}</p>

				</div>
			</header>			
		);
	}
}

export default Header;