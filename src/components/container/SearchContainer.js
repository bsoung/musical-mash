import React, { Component } from 'react';
import { SearchView } from '../view';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/search_actions';

export class SearchContainer extends Component {
	searchMusicVideo(e) {
		const { 
			search, 
			setSearchTerm, 
			searchSongs, 
			searchVideos, 
			sameSearchTriggered } = this.props;

		// detect if enter is pressed
		if (e.keyCode !== 13) {
			return;
		}

		const previousSearchTerm = search.searchTerm;
		let searchTerm = e.target.value;

		// only get from api on a different search word
		if (searchTerm !== previousSearchTerm) {
			setSearchTerm(searchTerm);

			searchVideos(searchTerm);
			searchSongs(searchTerm)
				.then(response => {
					if (response && response.length === 0) {
						swal({
						  title: ":(",
						  text: "Aww - No results were found! Please try again!",
						  imageUrl: "../../images/sadpanda.jpg"
						});
					}
				})
				.catch(err => {
					console.error(err);
					swal("Oops", "Something went wrong... Try a page refresh!", "error");
				})

		} else {
			sameSearchTriggered();
		}
	}

	render() {
		return (
			<div className="search-container">
				<SearchView onMusicVideoSearch={this.searchMusicVideo.bind(this)} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		search: state.search,
		songs: state.songs,
		videos: state.videos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchSongs: (song) => dispatch(searchActions.searchSongs(song)),
		searchVideos: (video) => dispatch(searchActions.searchVideos(video)),
		setSearchTerm: (searchTerm) => dispatch(searchActions.setSearchTerm(searchTerm)),
		sameSearchTriggered: () => dispatch(searchActions.sameSearchTriggered())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);











