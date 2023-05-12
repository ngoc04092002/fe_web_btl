import dayjs from 'dayjs';
import React, { FC } from 'react';

import CommentActions from '../CommentActions';

import { IQAResponse } from '@/types/pages/IQA';
import { getImage } from '@/utils/CustomImagePath';

type Props = { data: IQAResponse };

const QAPost: FC<Props> = ({ data }) => {
	return (
		<div className='bg-white rounded p-3 mt-12'>
			<div className='flex items-center'>
				<div className='mr-2'>
					<img
						src={data.clientEntityQa.avatar || getImage('user.png')}
						alt=''
						className='w-10 h-10 rounded-full'
					/>
				</div>
				<div className='font-bold'>
					<h1 className='text-[#657786]'>{data.clientEntityQa.username}</h1>
					<p className='text-sm'>
						<span className='color-main'>Đã đăng:</span>{' '}
						<span className='text-[#657786]'>
							{dayjs(data.createdAt).format('DD/MM/YYYY HH:ss A')}
						</span>
					</p>
				</div>
			</div>
			<div className='mt-3'>
				<p className='leading-[1.5] text-[#3C4146]'>{data.content}</p>
				{data?.img && (
					<img
						src={data.img}
						alt=''
						className='w-full h-[300px] mt-2'
					/>
				)}
			</div>
			<CommentActions data={data} />
		</div>
	);
};

export default QAPost;
