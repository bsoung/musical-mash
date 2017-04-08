import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import * as videoActions from '../../actions/video_actions';

export class VideoContainer extends Component {
	componentWillUpdate(nextProps) {
		const { search, videos } = this.props;
		
		const nextVideos = nextProps.videos.allVideos;
		const currentVideos = videos.allVideos;

		const sameSearchHappened = search.sameSearchTrigger !== nextProps.search.sameSearchTrigger;

		if (nextVideos !== null) {

			// search if first-time searching or triggering the same search 
			if (currentVideos === null || sameSearchHappened) {
				this.grabRandomVideo(nextVideos);

				// update correctly when executing a new search
			} else if (currentVideos.length > 0 && nextVideos.length > 0) {

				if (currentVideos[0].id.videoId !== nextVideos[0].id.videoId) {
					this.grabRandomVideo(nextVideos);
				}

				// update correctly when executing a new search after a previous search returned no results
			} else if (currentVideos.length < 1 && nextVideos.length > 0) {
				this.grabRandomVideo(nextVideos);
			} 
		}
	}

	componentDidUpdate() {
		const { songs, videos, setVideoState } = this.props;
		const player = videos.player;
		
		if (player !== null) {
			// if we play/pause our music, our video plays/pauses as well
			if (songs.isSongPlaying) {
				player.mute();
				player.playVideo();

			} else {
				player.pauseVideo();
			}
		}
	}

	onReady(e) {
		const { videos, setVideoPlayer } = this.props;

		setVideoPlayer(e.target);
  }

	getNonSequentialRandomVideo(currentVideos) {
		const { videos, setVideoIndex } = this.props;

		const previousIndex = videos.previousVideoIndex;
		let randomIndex = null;
		let randomVideo = null;

		// prevent infinite loop if only one media object
		if (currentVideos.length === 1) {
			return currentVideos[0];
		}

		randomIndex = _.random(0, currentVideos.length - 1);

		if (previousIndex !== randomIndex) {
			setVideoIndex(randomIndex);
			randomVideo = currentVideos[randomIndex];

			return randomVideo;

		} else {

		  this.getNonSequentialRandomVideo(currentVideos);
		}
	}

	chooseRandomVideo(videos) {
		let video = null;
		let loaded = false;

		if (videos.allVideos !== null) {

			while (loaded === false) {
				if (video !== undefined && video !== null) {
					loaded = true;
					return video;
				}

				video = this.getNonSequentialRandomVideo(videos);
			}
		}
	}

	grabRandomVideo(currentVideos) {
		const { videos, setRandomVideo } = this.props;

		if (currentVideos.length < 1) {
			return;
		}

		const randomVideo = this.chooseRandomVideo(currentVideos);
		
		if (videos.currentVideo !== randomVideo) {
			setRandomVideo(randomVideo);
		}
	}

	render() {
		const { videos, songs } = this.props;
		let estimatedTime = songs.songDurationSeconds;

		if (videos.currentVideo !== null) {
			let videoId = videos.currentVideo.id.videoId;

			let opts = {
	      height: '390',
	      width: '640',
	      playerVars: 
	      { 
	        autoplay: 0, 
	        controls: 0,
	        disablekb: 1,
	        iv_load_policy: 3,
	        modestbranding: 1,
	        rel: 0,
	        showinfo: 0,
	        end: estimatedTime 
	      }
	   	};

			return (
				<div className="video-container animated zoomIn">	
					<div className="inner-video-border">
						<YouTube
							opts={opts}
							videoId={videoId} 
							onReady={this.onReady.bind(this)}
						/>
					</div>
				</div>
			)

		} else {
			return (
				<div className="video-container animated bounceIn loading-bg">
					<div className="inner-video-border">
						<div className="loader">
						  <div className="line"></div>
						  <div className="line"></div>
						  <div className="line"></div>
						  <div className="line"></div>
						  <div className="wait-text">Waiting...</div>
						</div>
					</div>


				</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		videos: state.videos,
		songs: state.songs,
		search: state.search
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setVideoPlayer: (eventTarget) => dispatch(videoActions.setVideoPlayer(eventTarget)),
		setRandomVideo: (video) => dispatch(videoActions.setRandomVideo(video)),
		setVideoIndex: (index) => dispatch(videoActions.setVideoIndex(index)),
		setVideoState: (bool) => dispatch(videoActions.setVideoState(bool))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);











