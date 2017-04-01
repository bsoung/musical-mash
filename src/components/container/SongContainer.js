import React, { Component } from 'react';
import { SongView } from '../view';
import { connect } from 'react-redux';
import _ from 'lodash';

let PREVIOUS_INDEX = 0;

class SongContainer extends Component {

	getRandomNonRepeatIndex(songs) {
		let randomIndex = null;
		let randomSong = null;

		randomIndex = _.random(0, songs.length - 1);

		if (PREVIOUS_INDEX !== randomIndex) {
			PREVIOUS_INDEX = randomIndex;
			console.log(randomIndex, 'randomIndex');
			randomSong = songs[randomIndex];
			return randomSong;

		} else {
		  this.getRandomNonRepeatIndex(songs);
		}

	}

	render() {
		const { songs } = this.props;
		let randomSong = null;

		if (songs !== null) {
			randomSong = this.getRandomNonRepeatIndex(songs);
		}
		
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











