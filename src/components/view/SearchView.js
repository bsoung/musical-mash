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
					placeholder="Type a search word and press enter! You'll get a pair of random song and video related to your search :)" 
					/>
			</div>
		)
	}
}





