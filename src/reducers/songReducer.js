import songConstants from '../constants/song_constants';
import searchConstants from '../constants/search_constants';
import _ from 'lodash';

const initialState = {
	allSongs: null,
	songDurationSeconds: null,
	currentSong: null,
	previousSongIndex: null,
	isSongPlaying: false
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case searchConstants.SEARCH_SONGS:
			updated.allSongs = action.payload;

			return updated;

		case songConstants.SET_SONG_DURATION:
			updated.songDurationSeconds = action.payload;

			return updated;

		case songConstants.SET_RANDOM_SONG:
			updated.currentSong = action.payload;

			return updated;

		case songConstants.SET_SONG_INDEX:
			updated.previousSongIndex = action.payload;

			return updated;

		case songConstants.SET_SONG_STATE:
			updated.isSongPlaying = action.payload;

			return updated;

		default:
			return state;
	}
}






