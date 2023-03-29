import React from 'react';

import {
	PropsAuthContainer,
	// IFormSignUp,
} from '@/types/components/AuthLayoutWrapper/type';

const AuthContainer: React.FC<PropsAuthContainer> = ({ id, children }) => {
	return (
		<>
			<div className={'h-[50vh] relative bg-[linear-gradient(87deg,#11cdef,#1171ef)]'}>
				<section
					id={id}
					className='w-full h-screen flex items-center justify-center absolute z-10'
				>
					<div
						className={`mx-3 sm:w-[44rem] w-[22rem] h-[38rem] sm:h-[30rem] flex items-center bg-slate-200 rounded-2xl flex-col shadow-3xl ${
							id === 'sign-in' ? 'lg:flex-row' : ''
						}`}
					>
						{children}
					</div>
				</section>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='none'
					version='1.1'
					viewBox='0 0 2560 100'
					x='0'
					y='0'
					className='absolute bottom-0 fill-[#172b4d]'
				>
					<polygon
						className='fill-default'
						points='2560 0 2560 100 0 100'
					></polygon>
				</svg>
			</div>
			<div className='h-[50vh] bg-[#172b4d]'></div>
		</>
	);
};

export default AuthContainer;
