import React, { Component } from 'react';
import { SongContainer, VideoContainer, SearchContainer } from '../container';

class LandingLayout extends Component {
	render() {
		return (
			<div>
				<SearchContainer />
				<SongContainer />
				<VideoContainer />
			</div>
		)
	}
}

export default LandingLayout;