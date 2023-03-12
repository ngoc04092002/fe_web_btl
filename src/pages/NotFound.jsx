import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getImage } from '../utils/CustomImagePath';

import HeadTitle from '@/hooks/Head';

const NotFound = () => {
	HeadTitle('Not Found');
	const navigate = useNavigate();

	return (
		<div
			data-testid='error-page'
			className='text-xl flex items-center flex-col justify-center w-full h-screen bg-slate-200'
		>
			<img
				src={getImage('404.png')}
				alt='404'
			/>
			<h1 className='font-bold'>Oops!</h1>
			<p>Sorry, an unexpected error occurred.</p>
			<p>NotFound</p>
			<Link
				className='underline decoration-cyan-400 font-bold hover:text-gray-500'
				onClick={() => {
					navigate(-1);
				}}
			>
				Return
			</Link>
		</div>
	);
};

export default NotFound;
