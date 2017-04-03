import React from 'react';

export default (props) => (
	<div>
		<h3>Music Mash! Powered by Soundcloud and Youtube</h3>
		<input 
			onKeyDown={props.onMusicVideoSearch.bind(this)} 
			className="input input-width border-none h2"
			id="search_song" 
			type="text" 
			placeholder="Click here to search for something!" 
			/>
	</div>
)
