import React, { Component } from 'react';
import { SearchView } from '../view';
import { connect } from 'react-redux';
import * as actions from '../../actions';

let COUNT = 0;

class SearchContainer extends Component {
	componentDidUpdate() {
		const defaultSearchTerm = '';

		if (this.props.search.searchTerm !== defaultSearchTerm) {
			this.props.setSearchTerm(defaultSearchTerm);
		}

	}

	searchMusicVideo(e) {
		const { search } = this.props;

		// detect if enter is pressed
		if (e.keyCode != 13) {
			return;
		}

		const previousSearchTerm = search.searchTerm;
		let searchTerm = e.target.value;

		// don't make extra api calls on same search
		if (searchTerm !== previousSearchTerm) {

			this.props.setSearchTerm(searchTerm);

			// setSameSong
			this.props.searchSongs(searchTerm);
			this.props.searchVideos(searchTerm);

		} else {
		
			COUNT++;
			// TODO: rename to sameSongSet
			this.props.setSameSongCount(COUNT);
			this.props.setSameVideoCount(COUNT);
		}

		if (COUNT >= 10) {
			COUNT = 0;
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
		setSameSongCount: (n) => dispatch(actions.setSameSongCount(n)),
		setSameVideoCount: (n) => dispatch(actions.setSameVideoCount(n)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);











