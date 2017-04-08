import constants from '../constants';
import { APIManager } from '../utils';

/*
 * Async action methods
 */

const getRequest = (path, params, actionType) => {
	return (dispatch) => {
		// TODO: dispatch type of get request - show loading screen
		APIManager
			.get(path, params)
			.then(data => {
				const payload = data.response;

				dispatch({
					type: actionType,
					payload: payload,
					params: params
				});

				// TODO: dispatch success action
				return data;
			})
			.catch(err => {
				console.error(err.message);
				// TODO: dispatch error action
			});
	}
}

/*
 * Async Search actions
 */

export function searchVideos(searchTerm) {
	return (dispatch) => {
		return dispatch(
			getRequest(`/video/${searchTerm}`, null, constants.SEARCH_VIDEOS)
		);
	}
}

export function searchSongs(searchTerm) {
	return (dispatch) => {
		return dispatch(
			getRequest(`/music/${searchTerm}`, null, constants.SEARCH_SONGS)
		);
	}
}

/*
 * Search actions
 */

export function setSearchTerm(searchTerm) {
	return {
		type: constants.SET_SEARCH_TERM,
		payload: searchTerm
	}
}

export function sameSearchTriggered() {
	return {
		type: constants.SAME_SEARCH_TRIGGERED
	}
}

/*
 * Song actions
 */

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

/*
 * Video actions
 */

export function setVideoPlayer(eventTarget) {
	return {
		type: constants.SET_VIDEO_PLAYER,
		payload: eventTarget
	}
}

export function setVideoIndex(index) {
	return {
		type: constants.SET_VIDEO_INDEX,
		payload: index
	}
}

export function setRandomVideo(video) {
	return {
		type: constants.SET_RANDOM_VIDEO,
		payload: video
	}
}

export function setVideoState(bool) {
	return {
		type: constants.SET_VIDEO_STATE,
		payload: bool
	}
}

















