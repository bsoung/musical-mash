import { AsyncManager } from '../../utils';
import searchConstants from '../../constants/search_constants';

export function searchVideos(searchTerm) {
	return (dispatch) => {
		return dispatch(
			AsyncManager.getRequest(`/video/${searchTerm}`, null, searchConstants.SEARCH_VIDEOS)
		);
	}
}

export function searchSongs(searchTerm) {
	return (dispatch) => {
		return dispatch(
			AsyncManager.getRequest(`/music/${searchTerm}`, null, searchConstants.SEARCH_SONGS)
		);
	}
}

export function setSearchTerm(searchTerm) {
	return {
		type: searchConstants.SET_SEARCH_TERM,
		payload: searchTerm
	}
}

export function sameSearchTriggered() {
	return {
		type: searchConstants.SAME_SEARCH_TRIGGERED
	}
}