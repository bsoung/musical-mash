import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import secret from '../../secret';
import MusicPlayerContainer from './MusicPlayerContainer';
import _ from 'lodash';
import * as actions from '../../actions'

let PREVIOUS_INDEX = null;

class SongContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			randomSong: null
		}
	}

	componentDidUpdate() {
		console.log(this.props.songs)
	}

	componentWillUpdate(nextProps) {

		if (nextProps.songs.allSongs !== null) {

			if (this.props.songs.allSongs === null || this.props.search.searchTerm !== nextProps.search.searchTerm) {
				let songs = nextProps.songs.allSongs;
				let randomSong = this.setRandomSong(songs);
				let songDurationInSeconds = randomSong.duration / 1000;

				this.props.setSongDuration(songDurationInSeconds);

				// refactor to redux state
				if (this.state.randomSong !== randomSong) {
					this.setState({
						randomSong: randomSong
					});
				}
			} 
		}

	}

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

	setRandomSong(songs) {

		let song = null;
		let loaded = false;

		if (songs !== null) {

			if (songs.length < 1) {
				alert("No songs to set random songs!");
				return;
			}

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
		let resolveUrl = null;
		let randomSong = null;

		// console.log(randomSong)

		if (this.state.randomSong !== null) {
			randomSong = this.state.randomSong;

			// console.log(randomSong);
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
		songs: state.songs,
		search: state.search
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSongDuration: (duration) => dispatch(actions.setSongDuration(duration))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);











