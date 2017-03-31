import React, { Component } from 'react';
import { SongView } from '../view';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SongContainer extends Component {
	render() {
		const { songs } = this.props;

		return (
			<div>
			  <SongView songs={songs} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		songs: state.songs.allSongs
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);











