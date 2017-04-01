import React from 'react';

export default (props) => {
	const { song } = props;

	return (
		<div>
			<h3>Song View</h3>
			<ul>
				{
					(song === null || song === undefined) ? '' : <strong>{song.title}</strong>
				}
		  </ul>
		</div>
	)
}
