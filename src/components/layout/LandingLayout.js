import React, { Component } from 'react';
import { SongContainer, VideoContainer, SearchContainer } from '../container';

export default class Landing extends Component {
	render() {
		return (
			<div>
				Landing Page
				<SearchContainer />
				<SongContainer />
				<VideoContainer />
			</div>
		)
	}
}