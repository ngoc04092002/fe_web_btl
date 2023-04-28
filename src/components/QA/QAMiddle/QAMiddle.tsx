import React, { FC } from 'react';

import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const QAMiddle: FC<Props> = () => {
	return (
		<div>
			<div className='bg-white flex items-center p-3 cursor-pointer rounded-lg'>
				<img
					src={getImage('user.png')}
					alt='user'
					className='w-10 h-10 mr-2'
				/>
				<p className='text-[#8e9fad] text-lg font-bold select-none'>Câu hỏi của bạn là gì?</p>
			</div>
		</div>
	);
};

export default QAMiddle;
