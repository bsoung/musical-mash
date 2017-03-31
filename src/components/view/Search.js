import React from 'react';

export default (props) => (
	<div>
			<h3>Music Mash! Powered by Soundcloud and Youtube</h3>
			<input onKeyDown={props.onMusicSearch.bind(this)} id="search_song" type="text" placeholder="Search item" />
	</div>
)