import constants from '../constants';
import _ from 'lodash';

let initialState = {
	allSongs: null,
	sameSongSearchCount: 0,
	songDurationSeconds: null
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SEARCH_SONGS:
			updated.allSongs = action.payload;

			return updated;

		case constants.SET_SAME_SONG_COUNT:
			updated.sameSongSearchCount = action.payload;

			console.log("updated count", updated);

			return updated;

		case constants.SET_SONG_DURATION:
			updated.songDurationSeconds = action.payload;

			return updated;

		default:
			return state;
	}
}