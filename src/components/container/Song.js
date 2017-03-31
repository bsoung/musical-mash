import React, { Component } from 'react';
import { Search } from '../view';
import { APIManager } from '../../utils';

export default class Song extends Component {
	searchMusic(e) {
		// detect if enter is pressed
		if (e.keyCode != 13) {
			return;
		}

		const searchTerm = e.target.value;
		const url = `/search/${searchTerm}`;

		APIManager.get(url, null)
			.then((response) => {
				console.log(response, "RESPONSE");
			})
			.catch((err) => {
				console.error(err);
			})

		
	}

	render() {
		return (
			<div>
				Song Container
				<Search onMusicSearch={this.searchMusic.bind(this)} />
			</div>
		)
	}
}