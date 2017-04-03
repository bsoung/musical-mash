import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import * as actions from '../../actions';

class VideoContainer extends Component {
		constructor(props) {
			super(props);

			this.state = {
				currentVideo: null
			}
		}

		componentWillUpdate(nextProps) {
			let nextVideos = nextProps.videos.allVideos || null;
			let currentVideos = this.props.videos.allVideos || null;
			let currentSearch = this.props.search.searchTerm || null;
			let nextSearch = nextProps.search.searchTerm || null;

			if (nextVideos !== null) {
				
				// re-search if same term is entered
				if (currentVideos === null || currentSearch !== nextSearch) {
					console.log("we reach here? in componentWillUpdate")
					this.grabRandomVideo(nextVideos);

					// update correctly when searching for a new term
				} else if (currentVideos.length > 0 &&currentVideos[0].id.videoId !== nextVideos[0].id.videoId) {
					
					console.log('DIFFERENT')

					this.grabRandomVideo(nextVideos);

					// update correctly when searching for a new term after no results
				} else if (currentVideos.length < 1 && nextVideos.length > 0) {

					console.log("fall here?")
					this.grabRandomVideo(nextVideos);

				} 

			}
	}

	onReady(e) {
		this.props.setVideoPlayer(e.target);
  }

  onPlayVideo() {
  	const { videos } = this.props;

    videos.player.playVideo();
    videos.player.mute();
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
			this.props.setPreviousIndex(randomIndex);
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

		// refactor into redux
		if (this.props.videos.currentVideo !== randomVideo) {

			this.setState({
				currentVideo: randomVideo
			})
		}
	}

	render() {
		const { videos, songs } = this.props;

		let videoId = null;
		let estimatedTime = songs.songDurationSeconds + 2;
	
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

		if (this.state.currentVideo !== null) {

			videoId = this.state.currentVideo.id.videoId;

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
		songs: state.songs,
		search: state.search
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setVideoPlayer: (eventTarget) => dispatch(actions.setVideoPlayer(eventTarget)),
		setPreviousIndex: (index) => dispatch(actions.setPreviousIndex(index))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);











