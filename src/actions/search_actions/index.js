import { AsyncManager } from '../../utils';
import constants from '../../constants';

export function searchVideos(searchTerm) {
	return (dispatch) => {
		return dispatch(
			AsyncManager.getRequest(`/video/${searchTerm}`, null, constants.SEARCH_VIDEOS)
		);
	}
}

export function searchSongs(searchTerm) {
	return (dispatch) => {
		return dispatch(
			AsyncManager.getRequest(`/music/${searchTerm}`, null, constants.SEARCH_SONGS)
		);
	}
}

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