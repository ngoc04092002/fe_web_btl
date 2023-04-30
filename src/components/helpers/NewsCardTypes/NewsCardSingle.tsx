import React, { FC } from 'react';

import { INewsCard } from '@/types/components/News/types';

const NewsCardSingle: FC<INewsCard> = ({
	des,
	styles = '',
	title,
	styleImg = '',
	styleTitle = '',
	src,
	href = '/news',
}) => {
	return (
		<div className={`w-full md:w-2/5 ${styles}`}>
			<a href={href}>
				<img
					src={src}
					alt=''
					className={`object-cover object-center w-full h-[16rem] ${styleImg}`}
				/>
			</a>
			<p className={`hover:color-main my-3 text-[#111111] leading-6 text-[21px] ${styleTitle}`}>
				<a href='/news'>{title}</a>
			</p>
			{des && <p className='vertical-3 leading-5 text-[#767676] text-sm'>{des}</p>}
		</div>
	);
};

export default NewsCardSingle;
