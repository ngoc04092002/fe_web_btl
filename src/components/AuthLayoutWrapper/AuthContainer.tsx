import React from 'react';

import {
	PropsAuthContainer,
	// IFormSignUp,
} from '@/types/components/AuthLayoutWrapper/type';

const AuthContainer: React.FC<PropsAuthContainer> = ({ id, children }) => {
	return (
		<section
			id={id}
			className='w-full h-screen flex items-center justify-center'
		>
			<div
				className={`mx-3 w-[44rem] h-[30rem] flex items-center bg-slate-200 rounded-2xl flex-col shadow-3xl ${
					id === 'sign-in' ? 'lg:flex-row' : ''
				}`}
			>
				{children}
			</div>
		</section>
	);
};

export default AuthContainer;
