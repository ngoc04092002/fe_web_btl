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
}) => {
	return (
		<a
			href='/news'
			className={`flex items-start ${styles}`}
		>
			<div className='mr-3'>
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
