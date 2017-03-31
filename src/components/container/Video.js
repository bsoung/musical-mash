import React, { Component } from 'react';
import { Search } from '../view';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Video extends Component {
	render() {
		const { videos } = this.props;
		
		return (
			<div>
				Video Container
				<ul>
					{
						(videos === null) ? '' : videos.map(video => (
							<li key={video.id.videoId}>
								{video.snippet.title}
							</li>
						))
					}
				</ul>
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











