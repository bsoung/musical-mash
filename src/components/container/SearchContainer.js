import React, { Component } from 'react';
import { SearchView } from '../view';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SearchContainer extends Component {

	searchMusicVideo(e) {
		const { search, setSearchTerm, searchSongs, searchVideos } = this.props;

		// detect if enter is pressed
		if (e.keyCode != 13) {
			return;
		}

		const previousSearchTerm = search.searchTerm;
		let searchTerm = e.target.value;

		// re-render searches on same search (every other same search is in all caps)
		if (previousSearchTerm === searchTerm) {
			if (searchTerm === searchTerm.toLowerCase()) {
				searchTerm = searchTerm.toUpperCase();
			} 
		}

		// don't make extra api calls on same search 
		if (searchTerm !== previousSearchTerm) {

			setSearchTerm(searchTerm);
			
			searchSongs(searchTerm);
			searchVideos(searchTerm);
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
		setSearchTerm: (searchTerm) => dispatch(actions.setSearchTerm(searchTerm))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);











