import React from 'react';
import { Form } from 'react-router-dom';

type Props = {
	id: string;
	children: React.ReactNode;
};

const AuthContainer: React.FC<Props> = (props) => {
	const { id, children } = props;
	return (
		<Form
			method='post'
			action={`/${id}`}
			id={id}
			className='w-full h-screen flex items-center justify-center'
		>
			<div
				className={`mx-3 w-[44rem] h-[30rem] flex  items-center bg-slate-200 rounded-2xl flex-col shadow-3xl ${
					id === 'sign-in' ? 'lg:flex-row' : ''
				}`}
			>
				{children}
			</div>
		</Form>
	);
};

export default AuthContainer;
