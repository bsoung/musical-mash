import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import * as actions from '../../actions';

let PREVIOUS_INDEX = null;

class VideoContainer extends Component {
	onReady(e) {
		this.props.setVideoPlayer(e.target);
  }

  onPlayVideo() {
  	const { videos } = this.props;

    videos.player.playVideo();
    videos.player.mute();
  }

	getNonSequentialRandomVideo(videos) {
		let randomIndex = null;
		let randomVideo = null;

		// prevent infinite loop if only one media object
		if (videos.length === 1) {
			return videos[0];
		}

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

		if (videos.allVideos !== null) {

			if (videos.allVideos.length < 1) {
				return;
			}

			while (loaded === false) {
				if (video !== undefined && video !== null) {
					loaded = true;
					return video;
				}

				video = this.getNonSequentialRandomVideo(videos.allVideos);
			}
		}
	}

	render() {
		const { videos, songs } = this.props;
		let randomVideo = this.setRandomVideo();
		let videoId = null;
		let estimatedTime = songs.songDurationSeconds + 5;
	
		const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 0, 
        controls: 0,
        disablekb: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        loop: 1,
        end: estimatedTime 
      }
    };

		if (randomVideo !== undefined) {

			videoId = randomVideo.id.videoId;

		} else {
			return (
				<div>Waiting for video...</div>
			)
		}
		
		return (
			<div>	
				<YouTube 
					opts={opts}
					videoId={videoId} 
					onReady={this.onReady.bind(this)} 
					onPlay={this.onPlayVideo.bind(this)} 
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		videos: state.videos,
		songs: state.songs
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setVideoPlayer: (eventTarget) => dispatch(actions.setVideoPlayer(eventTarget))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);











