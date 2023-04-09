import React, { FC } from 'react';

import { INewsHomeHot } from '@/types/components/News/types';

const NewsHomeHot: FC<INewsHomeHot> = ({
	styles = '',
	src,
	title,
	dateTime,
	href,
	styleTitle = '',
}) => {
	return (
		<div className={`${styles} relative`}>
			<a
				href={href}
				className=' text-white absolute inset-0 z-10 bg-shadow-news'
			>
				<img
					src={src}
					alt=''
					className='w-full h-full object-cover object-center'
				/>
				<span
					className={`z-10 absolute bottom-6 text-white left-4 uppercase text-lg font-bold ${styleTitle}`}
				>
					{title}
				</span>
				<small className='z-10 absolute bottom-2 left-4'>{dateTime}</small>
			</a>
		</div>
	);
};

export default NewsHomeHot;
