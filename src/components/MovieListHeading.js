import React from 'react';
import '../App.css'

const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<h1 className='head'>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;