import React from 'react';

export default (props) => {
	const { video } = props;
	
	return (
		<div>
			<h3>Video View</h3>
			<ul>
				{
					(video === null || video === undefined) ? '' : <strong>{video.snippet.title}</strong>
				}
			</ul>
		</div>
	)

}
