import React from 'react';


export default (props) => {
	const { video } = props;

	// TODO: Improve on this crappy loading screen
	if (!video) {
		return (
			<div>
				<h3>Waiting for Search to display video</h3>
				Loading...
			</div>
		)
	}
	
	const videoId = video.id.videoId;

	// const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className='video-detaul col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url} muted ></iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}
