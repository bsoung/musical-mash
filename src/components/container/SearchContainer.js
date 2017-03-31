import React, { Component } from 'react';
import { SearchView } from '../view';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SearchContainer extends Component {

	searchMusicVideo(e) {
		// detect if enter is pressed
		if (e.keyCode != 13) {
			return;
		}

		const searchTerm = e.target.value;

		this.props.searchSongs(searchTerm);
		this.props.searchVideos(searchTerm);
	}

	render() {
		return (
			<div>
				Search Media
				<SearchView onMusicVideoSearch={this.searchMusicVideo.bind(this)} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchSongs: (song) => dispatch(actions.searchSongs(song)),
		searchVideos: (video) => dispatch(actions.searchVideos(video))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);











