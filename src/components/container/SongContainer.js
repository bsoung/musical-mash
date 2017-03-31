import React, { Component } from 'react';
import { SongView } from '../view';
import { connect } from 'react-redux';

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


export default connect(mapStateToProps)(SongContainer);











