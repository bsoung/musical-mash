import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import * as actions from '../../actions';

class VideoContainer extends Component {

	componentWillUpdate(nextProps) {
		const { search, videos } = this.props;

		let nextVideos = nextProps.videos.allVideos || null;
		let currentVideos = videos.allVideos || null;
		let currentSearch = search.searchTerm || null;
		let nextSearch = nextProps.search.searchTerm || null;

		if (nextVideos !== null) {

			// re-search if same term is entered (every other term is in all caps)
			if (currentVideos === null || currentSearch !== nextSearch) {
				this.grabRandomVideo(nextVideos);

				// update correctly when executing a new search
			} else if (currentVideos.length > 0 && currentVideos[0].id.videoId !== nextVideos[0].id.videoId) {
				this.grabRandomVideo(nextVideos);

				// update correctly when executing a new search after a previous search returned no results
			} else if (currentVideos.length < 1 && nextVideos.length > 0) {
				this.grabRandomVideo(nextVideos);

			} 
		}
	}

	componentDidUpdate() {
		const { songs, videos } = this.props;

		// sync our music play state with our video play state
		if (videos.player !== null) {
			if (songs.isSongPlaying) {

				videos.player.playVideo();
				videos.player.mute();

			} else {

				videos.player.pauseVideo();
			}
		}
	}

	onReady(e) {
		this.props.setVideoPlayer(e.target);
  }

	getNonSequentialRandomVideo(videos) {
		let previousIndex = this.props.videos.previousVideoIndex;
		let randomIndex = null;
		let randomVideo = null;

		// prevent infinite loop if only one media object
		if (videos.length === 1) {
			return videos[0];
		}

		randomIndex = _.random(0, videos.length - 1);

		if (previousIndex !== randomIndex && randomVideo !== undefined) {
			this.props.setVideoIndex(randomIndex);
			randomVideo = videos[randomIndex];

			return randomVideo;

		} else {

		  this.getNonSequentialRandomVideo(videos);
		}
	}

	createRandomVideo(videos) {
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

	grabRandomVideo(videos) {
		if (videos.length < 1) {
			return;
		}

		let randomVideo = this.createRandomVideo(videos);

		// utilize redux actions here to get more info
		
		if (this.props.videos.currentVideo !== randomVideo) {
			this.props.setRandomVideo(randomVideo);
		}
	}

	render() {
		const { videos, songs } = this.props;
		let videoId = null;

		// end video when song ends, otherwise put video on loop (focus is on song)
		let estimatedTime = songs.songDurationSeconds;

		let opts = null;
	
		if (videos.currentVideo !== null) {
			videoId = videos.currentVideo.id.videoId;

			opts = {
	      height: '390',
	      width: '640',
	      playerVars: 
	      { 
	        autoplay: 0, 
	        controls: 0,
	        disablekb: 1,
	        iv_load_policy: 3,
	        cc_load_policy: 0,
	        modestbranding: 1,
	        rel: 0,
	        showinfo: 0,
	        loop: 1,
	        playlist: videoId,
	        end: estimatedTime 
	      }
	    };

	    console.log(videoId);

		} else {
			return (
				<div className="video-container mt3 mb3 border p2 rounded b2 mx-auto">
					<h3 className="mg0">Waiting for video...</h3>
				</div>
			)
		}
		
		return (
			<div className="video-container mt3 mb3 border p2 rounded b2 mx-auto">	
				<YouTube 
					opts={opts}
					videoId={videoId} 
					onReady={this.onReady.bind(this)} 
				/>
			</div>
		)
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
		setVideoPlayer: (eventTarget) => dispatch(actions.setVideoPlayer(eventTarget)),
		setRandomVideo: (video) => dispatch(actions.setRandomVideo(video)),
		setVideoIndex: (index) => dispatch(actions.setVideoIndex(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);











