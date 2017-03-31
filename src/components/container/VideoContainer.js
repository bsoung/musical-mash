import React, { Component } from 'react';
import { VideoView } from '../view';
import { connect } from 'react-redux';

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


export default connect(mapStateToProps)(VideoContainer);











