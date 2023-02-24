import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorAuthLayout = () => {
	const error = useRouteError();
	return (
		<div
			id='error-page'
			className='flex items-center justify-center'
		>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error occurred.</p>
			<p>{error.message || error.statusText}</p>
		</div>
	);
};

export default ErrorAuthLayout;
