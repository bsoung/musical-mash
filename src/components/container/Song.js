import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Song extends Component {
	render() {
		const { songs } = this.props;
		
		return (
			<div>
			  Song Container
			  <ul>
					{
						(songs === null) ? '' : songs.map(song => (
							<li key={song.id}>
								{song.title}
							</li>
						))
					}
			  </ul>

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

export default connect(mapStateToProps, mapDispatchToProps)(Song);











