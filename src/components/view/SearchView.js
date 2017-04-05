import React from 'react';

export default (props) => (
	<div>
		<h3>Audio Story - Powered by Soundcloud and Youtube</h3>
		<input 
			autoFocus
			onKeyDown={props.onMusicVideoSearch.bind(this)} 
			className="input input-width border-none h2"
			id="search_song" 
			type="text" 
			placeholder="Click here to search for something!" 
			/>
	</div>
)
