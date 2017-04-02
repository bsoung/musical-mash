import React, { Component } from 'react';
import { SearchView } from '../view';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SearchContainer extends Component {
	searchMusicVideo(e) {
		const { search } = this.props;
		// detect if enter is pressed
		if (e.keyCode != 13) {
			return;
		}

		const previousSearchTerm = search.searchTerm;
		const searchTerm = e.target.value;

		// don't make extra api calls on same search
		if (searchTerm !== previousSearchTerm) {

			this.props.setSearchTerm(searchTerm);

			this.props.searchSongs(searchTerm);

			this.props.searchVideos(searchTerm);
		} else {

			// TODO: rename action creators to 'searchedSameSong / Video', 'sameVideo'
			this.props.setSong(true);
			this.props.setVideo(true);
		}

	}

	render() {
		return (
			<div>
				<SearchView onMusicVideoSearch={this.searchMusicVideo.bind(this)} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		search: state.search
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchSongs: (song) => dispatch(actions.searchSongs(song)),
		searchVideos: (video) => dispatch(actions.searchVideos(video)),
		setSearchTerm: (searchTerm) => dispatch(actions.setSearchTerm(searchTerm)),
		setSong: (bool) => dispatch(actions.setSong(bool)),
		setVideo: (bool) => dispatch(actions.setVideo(bool)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);











