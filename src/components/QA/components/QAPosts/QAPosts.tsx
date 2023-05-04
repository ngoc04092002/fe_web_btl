import React from 'react';

import QAPost from './QAPost';

import ButtonWrapper from '@/components/helpers/ButtonWrapper/ButtonWrapper';

type Props = {};

const QAPosts = (props: Props) => {
	return (
		<div>
			<QAPost />
			<QAPost />
			<QAPost />
			<div className='text-center w-full'>
				<ButtonWrapper styles='shadow-md !text-[#657786] w-1/3 !bg-white font-bold rounded mt-12'>
					Xem thêm
				</ButtonWrapper>
			</div>
		</div>
	);
};

export default QAPosts;
