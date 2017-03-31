import constants from '../constants';
import _ from 'lodash';

let initialState = {
	allSongs: null
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		default:
			console.log("redux set")
			return state;
	}
}