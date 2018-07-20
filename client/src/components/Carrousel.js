import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Carrousel extends Component {
	constructor (props) {
		super(props);
		this.state = {currentImageIndex: 0};
	}

	changeSlide(delta) {
		const length = this.props.pictures.length;
		const currentImageIndex = (this.state.currentImageIndex + delta + length) % length;
		this.setState({currentImageIndex});
	}

	render () {
		return (
			<div className="carrousel">
				<Arrow direction="left" clickFunction={() => this.changeSlide(-1)} glyph="&#8249;" />
				<img src={this.props.pictures[this.state.currentImageIndex]} alt='productImage' />
				<Arrow direction="right" clickFunction={() => this.changeSlide(1)} glyph="&#8250;" />
			</div>
		);
	}
}

Carrousel.propTypes = {
	pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div
		className={ `slide-arrow ${direction}` }
		onClick={ clickFunction }>
		{ glyph }
	</div>
);


export default Carrousel
