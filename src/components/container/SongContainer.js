import React, { Component } from 'react';
import { SongView } from '../view';
import { connect } from 'react-redux';
import _ from 'lodash';

let PREVIOUS_INDEX = 0;

class SongContainer extends Component {

	getNonSequentialRandomSong(songs) {
		let randomIndex = null;
		let randomSong = null;

		randomIndex = _.random(0, songs.length - 1);

		if (PREVIOUS_INDEX !== randomIndex && randomSong !== undefined) {
			PREVIOUS_INDEX = randomIndex;
			randomSong = songs[randomIndex];

			return randomSong;

		} else {
		  this.getNonSequentialRandomSong(songs);
		}
	}

	setRandomSong() {
		const { songs } = this.props;
		let song = null;
		let loaded = false;

		if (songs !== null) {
			while (loaded === false) {
				if (song !== undefined && song !== null) {
					loaded = true;
					return song;
				}

				song = this.getNonSequentialRandomSong(songs);
				
			}
		}
	}

	render() {
		let randomSong = this.setRandomSong();

		return (
			<div>
			  <SongView song={randomSong} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		songs: state.songs.allSongs
	}
}

export default connect(mapStateToProps)(SongContainer);











