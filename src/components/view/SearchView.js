import React, { Component } from 'react';

export default class SearchView extends Component {
	render() {
		return (
			<div>
				<input 
					autoFocus
					onKeyDown={this.props.onMusicVideoSearch} 
					className="input input-width border-none h2"
					id="search_song" 
					type="text" 
					placeholder="Pop in a search and press enter! Out of ideas? Try your favorite artists, foods, movies, books, or video games. Good luck :)" 
					/>
			</div>
		)
	}
}





