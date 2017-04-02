import React, { Component } from 'react';
// import { VideoView } from '../view';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

let PREVIOUS_INDEX = 0;

class VideoContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			player: null
		}
	}

	onReady(event) {
    this.setState({
      player: event.target,
    });
  }

  onPlayVideo() {
    this.state.player.playVideo();
    this.state.player.mute();
  }

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
		let videoId = null;
		const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        end: 5 // TODO: THIS IS KEY FOR SYNCING WITH OUR MUSIC - using the duration info from sc
      }
    };

		if (randomVideo !== undefined) {
			videoId = randomVideo.id.videoId;

		} else {
			return (
				<div>...waiting for video</div>
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
		videos: state.videos.allVideos
	}
}


export default connect(mapStateToProps)(VideoContainer);











