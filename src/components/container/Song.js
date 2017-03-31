import React, { Component } from 'react';
import { Search } from '../view';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Song extends Component {
	searchMusic(e) {
		// detect if enter is pressed
		if (e.keyCode != 13) {
			return;
		}

		const searchTerm = e.target.value;

		this.props.searchSongs(searchTerm);

		// const url = `/search/${searchTerm}`;

		// APIManager.get(url, null)
		// 	.then((response) => {
		// 		console.log(response, "RESPONSE");
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	})

		
	}

	render() {
		return (
			<div>
				Song Container
				<Search onMusicSearch={this.searchMusic.bind(this)} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		songs: state.songs
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchSongs: (song) => dispatch(actions.searchSongs(song))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);











