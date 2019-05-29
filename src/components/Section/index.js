import React, { Component } from 'react';

class Section extends Component {
	render() {
		return (
			<section id={this.props.id} className={this.props.className}>
				<div className="container">
					{this.props.children}
				</div>
			</section>
		);
	}
}

export default Section;