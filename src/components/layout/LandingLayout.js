import React, { Component } from 'react';
import { SongContainer, VideoContainer, SearchContainer } from '../container';

export class LandingLayout extends Component {
	onClickAbout(e) {
		e.preventDefault();

		swal({
			title: 'Hey there!',
		  text: "This project was built as a challenge to do something cool with the SoundCloud API. You'll grab two random but relevant search results and play them in harmoney. Pick something to search for, and discover some <span style='color:#F8BB86'>awesome<span> combinations!",
		  html: true
		});
	}

	render() {
		return (
			<div className="landing-container">
				<div className="title-container">
					<h3 className="search-title">Audio Story - Powered by Soundcloud and Youtube</h3>
				</div>
				<SearchContainer />
				<SongContainer />
				<VideoContainer />
				<div className="about-link">
					<a onClick={this.onClickAbout.bind(this)}>about this project</a>
				</div>
			</div>
		)
	}
}

export default LandingLayout;