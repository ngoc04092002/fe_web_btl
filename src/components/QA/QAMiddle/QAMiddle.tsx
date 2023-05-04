import React, { FC, useContext } from 'react';

import QAPosts from '../components/QAPosts/QAPosts';

import { BackDropContext } from '@/pages/Home';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const QAMiddle: FC<Props> = () => {
	const { toggleBackDrop } = useContext(BackDropContext);
	return (
		<div>
			<div
				className='bg-white flex items-center p-3 cursor-pointer rounded-lg'
				onClick={toggleBackDrop}
			>
				<img
					src={getImage('user.png')}
					alt='user'
					className='w-10 h-10 mr-2'
				/>
				<p className='text-[#8e9fad] text-lg font-bold select-none'>Câu hỏi của bạn là gì?</p>
			</div>
			<div className='mt-4'>
				<QAPosts />
			</div>
		</div>
	);
};

export default QAMiddle;
