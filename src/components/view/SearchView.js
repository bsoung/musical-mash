import React, { Component } from 'react';

export default class SearchView extends Component {
	render() {
		return (
			<div className="search-container">
				<input 
					autoFocus
					onKeyDown={this.props.onMusicVideoSearch} 
					className="input input-width border-none h2"
					id="search_song" 
					type="text" 
					placeholder="Type in anything and press enter!" 
					/>
			</div>
		)
	}
}





