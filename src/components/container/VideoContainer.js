import React, { Component } from 'react';
import { VideoView } from '../view';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class VideoContainer extends Component {
	render() {
		const { videos } = this.props;

		return (
			<div>
				<VideoView videos={videos} />
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);











