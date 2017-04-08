import React, { Component } from 'react';
import { SongContainer, VideoContainer, SearchContainer } from '../container';

export class LandingLayout extends Component {
	render() {
		return (
			<div className="landing-container">
				<h3 className="search-title">Audio Story - Powered by Soundcloud and Youtube</h3>
				<SearchContainer />
				<SongContainer />
				<VideoContainer />
			</div>
		)
	}
}

export default LandingLayout;