import React from 'react';

export default (props) => {
	const { videos } = props;
	
	return (
		<div>
			<h3>Video View</h3>
			<ul>
				{
					(videos === null) ? '' : videos.map(video => (
						<li key={video.id.videoId}>
							{video.snippet.title}
						</li>
					))
				}
			</ul>
		</div>
	)

}
