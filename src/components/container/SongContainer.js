import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import secret from '../../secret';
import MusicPlayerContainer from './MusicPlayerContainer';
import _ from 'lodash';

let PREVIOUS_INDEX = null;

class SongContainer extends Component {

	getNonSequentialRandomSong(songs) {

		let randomIndex = null;
		let randomSong = null;

		// prevent infinite loop if only one media object
		if (songs.length === 1) {
			return songs[0];
		}

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

		if (songs.allSongs !== null) {

			if (songs.allSongs.length < 1) {
				alert("No songs to set random songs!");
				return;
			}

			while (loaded === false) {
				if (song !== undefined && song !== null) {
					loaded = true;
					return song;
				}

				song = this.getNonSequentialRandomSong(songs.allSongs);
			}
		}
	}

	render() {
		let randomSong = this.setRandomSong();
		let resolveUrl = null;

		if (randomSong !== undefined) {
			resolveUrl = randomSong.permalink_url;
		} else {

			return (
				<div>Waiting for music search...</div>
			)
		}

		return (
			<SoundPlayerContainer resolveUrl={resolveUrl} clientId={secret.SC_CLIENT_ID}>
        <MusicPlayerContainer />
      </SoundPlayerContainer>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		songs: state.songs
	}
}

export default connect(mapStateToProps)(SongContainer);











