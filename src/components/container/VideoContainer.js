import React, { Component } from 'react';
import { VideoView } from '../view';
import { connect } from 'react-redux';

let PREVIOUS_INDEX = 0;

class VideoContainer extends Component {

	getNonSequentialRandomVideo(videos) {
		let randomIndex = null;
		let randomVideo = null;

		randomIndex = _.random(0, videos.length - 1);

		if (PREVIOUS_INDEX !== randomIndex && randomVideo !== undefined) {
			PREVIOUS_INDEX = randomIndex;
			randomVideo = videos[randomIndex];

			return randomVideo;

		} else {
		  this.getNonSequentialRandomVideo(videos);
		}
	}

	setRandomVideo() {
		const { videos } = this.props;
		let video = null;
		let loaded = false;

		if (videos !== null) {
			while (loaded === false) {
				if (video !== undefined && video !== null) {
					loaded = true;
					return video;
				}

				video = this.getNonSequentialRandomVideo(videos);
			}
		}
	}

	render() {
		let randomVideo = this.setRandomVideo();

		console.log("video container rerendering???")

		return (
			<div>
				<VideoView video={randomVideo} />
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











