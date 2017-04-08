import React, { Component } from 'react';
import { SearchView } from '../view';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/search_actions';

export class SearchContainer extends Component {
	doesMediaExist(media, mediaName) {
		if (media.length === 0) {

			// sweet alert here
			alert(`No ${mediaName} found!`);
		}
	}

	searchMusicVideo(e) {
		const { search, setSearchTerm, searchSongs, searchVideos, sameMediaSearched } = this.props;

		// detect if enter is pressed
		if (e.keyCode != 13) {
			return;
		}

		const previousSearchTerm = search.searchTerm;
		let searchTerm = e.target.value;

		// don't make extra api calls on same search 
		if (searchTerm !== previousSearchTerm) {
			setSearchTerm(searchTerm);
			
			searchSongs(searchTerm)
				.then(data => {
					const songs = data.response;

					this.doesMediaExist(songs, 'songs');

					
				})
				.catch(err => {
					alert("One moment while we catch our breathe!");
				});

			searchVideos(searchTerm)
				.then(data => {
					const videos = data.response;

					this.doesMediaExist(videos, 'videos');

				})
				.catch(err => {
					alert("One moment while we catch our breathe!");
				});

		} else {
			this.props.sameSearchTriggered();
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
		search: state.search,
		songs: state.songs
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











