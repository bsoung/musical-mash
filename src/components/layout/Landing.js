import React, { Component } from 'react';
import { Song, Video, SearchMedia } from '../container';

export default class Landing extends Component {
	render() {
		return (
			<div>
				Landing Page
				<SearchMedia />
				<Song />
				<Video />
			</div>
		)
	}
}