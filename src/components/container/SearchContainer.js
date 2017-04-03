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
		let searchTerm = e.target.value;

		// hack to re-render searches even on same term
		if (previousSearchTerm === searchTerm) {
			if (searchTerm === searchTerm.toLowerCase()) {
				searchTerm = searchTerm.toUpperCase();
			} 
		}

		// don't make extra api calls on same search
		if (searchTerm !== previousSearchTerm) {


			this.props.setSearchTerm(searchTerm);
			

			this.props.searchSongs(searchTerm);
			this.props.searchVideos(searchTerm);

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











