import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import secret from '../../secret';
import MusicPlayerContainer from './MusicPlayerContainer';
import _ from 'lodash';
import * as actions from '../../actions'

export class SongContainer extends Component {
	componentWillUpdate(nextProps) {
		const { search, songs } = this.props;

		const nextSongs = nextProps.songs.allSongs;
		const currentSongs = songs.allSongs;

		const currentSearch = search.sameSearchTrigger;
		const nextSearch = nextProps.search.sameSearchTrigger;

		if (nextSongs !== null) {

			// search if first-time searching or triggering the same search
			if (currentSongs === null || currentSearch !== nextSearch) {
				this.grabRandomSong(nextSongs);

				// update correctly when executing a new search
			} else if (currentSongs.length > 0 && nextSongs.length > 0) {

				if (currentSongs[0].id !== nextSongs[0].id) {
					this.grabRandomSong(nextSongs);
				}

				// update correctly when executing a new search after a previous search returned no results
			} else if (currentSongs.length < 1 && nextSongs.length > 0) {
				this.grabRandomSong(nextSongs);

			}
		}
	}

	getNonSequentialRandomSong(currentSongs) {
		const { setSongIndex, songs } = this.props;

		const previousIndex = songs.previousSongIndex;

		let randomIndex = null;
		let randomSong = null;

		// prevent infinite loop if only one media object
		if (currentSongs.length === 1) {
			return currentSongs[0];
		}

		randomIndex = _.random(0, currentSongs.length - 1);

		// make sure we don't roll same index twice for random selection
		if (previousIndex !== randomIndex && randomSong !== undefined) {
			setSongIndex(randomIndex);
			randomSong = currentSongs[randomIndex];

			return randomSong;

		} else {
		  this.getNonSequentialRandomSong(currentSongs);
		}
	}

	createRandomSong(songs) {
		let song = null;
		let loaded = false;

		if (songs !== null) {

			// keep rolling a song until we get an actual song
			while (loaded === false) {
				if (song !== undefined && song !== null) {
					loaded = true;
					
					return song;
				}

				song = this.getNonSequentialRandomSong(songs);
			}
		}
	}

	grabRandomSong(currentSongs) {
		const { songs, setSongDuration, setRandomSong } = this.props;

		if (currentSongs.length < 1) {
			return;
		}

		const randomSong = this.createRandomSong(currentSongs);
		let songDurationInSeconds = (randomSong.duration / 1000) || 0;

		setSongDuration(songDurationInSeconds);

		if (songs.currentSong !== randomSong) {
			setRandomSong(randomSong);
		}
	}

	render() {
		const { songs } = this.props;
		let resolveUrl = null;

		if (songs.currentSong !== null) {
			resolveUrl = songs.currentSong.permalink_url;

		} else {

			return (
		   	<div className="mt3 mb3 border p2 rounded b2">
          <h2 className="m0">Waiting for song name...</h2>
          <h3 className="mt0">Waiting for author name...</h3>
        </div>
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











