import React, { Component } from 'react';
import { SongContainer, VideoContainer, SearchContainer } from '../container';

export class LandingLayout extends Component {
	onClickAbout(e) {
		e.preventDefault();

		swal({
		  title: "What's this project about!?",
		  text: "A custom <span style='color:#F8BB86'>html<span> message.",
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