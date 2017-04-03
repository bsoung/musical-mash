import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import secret from '../../secret';
import MusicPlayerContainer from './MusicPlayerContainer';
import _ from 'lodash';
import * as actions from '../../actions'

class SongContainer extends Component {

	componentWillUpdate(nextProps) {
		let nextSongs = nextProps.songs.allSongs || null;
		let currentSongs = this.props.songs.allSongs || null;
		let currentSearch = this.props.search.searchTerm || null;
		let nextSearch = nextProps.search.searchTerm || null;

		if (nextSongs !== null) {

			// re-search if same term is entered
			if (currentSongs === null || currentSearch !== nextSearch) {
				this.grabRandomSong(nextSongs);

				// update correctly when searching for a new term
			} else if (currentSongs.length > 0 && currentSongs[0].id !== nextSongs[0].id) {
				this.grabRandomSong(nextSongs);

				// update correctly when searching for a new term after no results
			} else if (currentSongs.length < 1 && nextSongs.length > 0) {
				this.grabRandomSong(nextSongs);

			}
		}
	}

	getNonSequentialRandomSong(songs) {
		let previousIndex = this.props.songs.previousSongIndex;
		let randomIndex = null;
		let randomSong = null;

		// prevent infinite loop if only one media object
		if (songs.length === 1) {
			return songs[0];
		}

		randomIndex = _.random(0, songs.length - 1);

		// make sure we don't roll same index twice for random selection
		if (previousIndex !== randomIndex && randomSong !== undefined) {
			this.props.setSongIndex(randomIndex);
			randomSong = songs[randomIndex];

			return randomSong;

		} else {
		  this.getNonSequentialRandomSong(songs);
		}
	}

	createRandomSong(songs) {
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

	grabRandomSong(songs) {
		if (songs.length < 1) {
			return;
		}

		let randomSong = this.createRandomSong(songs);
		let songDurationInSeconds = (randomSong.duration / 1000) || 0;

		this.props.setSongDuration(songDurationInSeconds);

		if (this.props.songs.currentSong !== randomSong) {
			this.props.setRandomSong(randomSong);
		}
	}

	render() {
		const { songs } = this.props;
		let resolveUrl = null;

		if (songs.currentSong !== null) {
			resolveUrl = songs.currentSong.permalink_url;

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
		songs: state.songs,
		search: state.search
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSongDuration: (duration) => dispatch(actions.setSongDuration(duration)),
        setRandomSong: (song) => dispatch(actions.setRandomSong(song)),
        setSongIndex: (index) => dispatch(actions.setSongIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);











