import React, { Component } from "react";
import './styles.css';
import api from '../../services/api';

class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			resume: '',
			avatar: ''
		}
	}
	
	async componentDidMount(){
		const profile = await api.get('/profile')
		this.setState({...profile.data[0]})
	}

	render() {
		return(
			<header className="masthead bg-primary text-white text-center">
				<div className="container d-flex align-items-center flex-column">

					{/* <!-- Masthead Avatar Image --> */}
					<img className="masthead-avatar mb-5" src={this.state.avatar} alt=""/>

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