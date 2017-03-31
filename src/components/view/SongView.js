import React from 'react';

export default (props) => {
	const { songs } = props;

	return (
		<div>
			<h3>Song View</h3>
			<ul>
				{
					(songs === null) ? '' : songs.map(song => (
						<li key={song.id}>
							{song.title}
						</li>
					))
				}
		  </ul>
		</div>
	)
}
