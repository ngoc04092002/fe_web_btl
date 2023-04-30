import React, { FC } from 'react';

import { INewsCard } from '@/types/components/News/types';

const NewsCardVertical: FC<INewsCard> = ({
	title,
	des,
	styles = '',
	styleImg = '',
	styleTitle = '',
	src,
	dateTime = '',
	styleDivInfo = '',
	styleDivImg = '',
	href = '/news',
}) => {
	return (
		<a
			href={href}
			className={`flex items-start ${styles} mb-3`}
		>
			<div className={`mr-3 ${styleDivImg}`}>
				<img
					src={src}
					alt=''
					className={`object-cover object-center w-[26rem] h-[5rem] ${styleImg}`}
				/>
			</div>
			<div className={styleDivInfo}>
				<h3 className={`hover:color-main text-sm text-[#111111] font-medium ${styleTitle}`}>
					{title}
				</h3>
				{dateTime && <p className='text-[#767676] mt-1 vertical-2 text-[13px]'>{dateTime}</p>}
				{des && <p className='text-[#767676] mt-4 vertical-2 text-[13px]'>{des}</p>}
			</div>
		</a>
	);
};

export default NewsCardVertical;
