import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Loading = () => {
	const data = useLoaderData();
	return (
		<div
			id='error-page'
			className='flex items-center justify-center'
		>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error occurred.</p>
			<p>{`${data.id}  ${data.name}`}</p>
		</div>
	);
};

export default Loading;
