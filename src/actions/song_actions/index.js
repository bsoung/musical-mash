import constants from '../../constants';

export function setSongDuration(duration) {
	return {
		type: constants.SET_SONG_DURATION,
		payload: duration
	}
}

export function setSongIndex(index) {
	return {
		type: constants.SET_SONG_INDEX,
		payload: index
	}
}

export function setRandomSong(song) {
	return {
		type: constants.SET_RANDOM_SONG,
		payload: song
	}
}

export function setSongState(bool) {
	return {
		type: constants.SET_SONG_STATE,
		payload: bool
	}
}