import songConstants from '../../constants/song_constants';

export function setSongDuration(duration) {
	return {
		type: songConstants.SET_SONG_DURATION,
		payload: duration
	}
}

export function setSongIndex(index) {
	return {
		type: songConstants.SET_SONG_INDEX,
		payload: index
	}
}

export function setRandomSong(song) {
	return {
		type: songConstants.SET_RANDOM_SONG,
		payload: song
	}
}

export function setSongState(bool) {
	return {
		type: songConstants.SET_SONG_STATE,
		payload: bool
	}
}