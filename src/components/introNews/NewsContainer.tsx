import React from 'react';

type Props = {
	children: React.ReactNode;
	title?: string;
};

const NewsContainer = (props: Props) => {
	return (
		<section className='mt-12'>
			<h1 className='mx-0 mb-4 text-[1.3rem] font-bold font-[emoji]'>{props.title}</h1>
			{props.children}
		</section>
	);
};

export default NewsContainer;
