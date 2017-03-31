import React, { Component } from 'react';
import { Search } from '../view';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Video extends Component {
	render() {
		return (
			<div>
				Video Container
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		videos: state.videos.allVideos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);











