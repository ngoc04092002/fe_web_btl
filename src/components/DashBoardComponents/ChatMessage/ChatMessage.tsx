import classNames from 'classnames/bind';
import React from 'react';

import styles from './chat-message.module.scss';

import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const cx = classNames.bind(styles);

const ChatMessage = (props: Props) => {
	return (
		<div
			className={`${cx(
				'chat_message-container',
			)} absolute w-full left-0 top-[70px] bg-white mb-10 shadow-lg`}
		>
			<div className='flex items-center mb-2 cursor-pointer hover:bg-[#e5e5e5c7] p-3'>
				<img
					src={getImage('user.png')}
					alt=''
					className='w-9 h-9 rounded-[50%] object-cover mr-4'
				/>
				<p>Ngọc Văn</p>
			</div>
			<div className='flex items-center mb-2 cursor-pointer hover:bg-[#e5e5e5c7] p-3'>
				<img
					src={getImage('user.png')}
					alt=''
					className='w-9 h-9 rounded-[50%] object-cover mr-4'
				/>
				<p>Ngọc Văn</p>
			</div>
			<div className='flex items-center mb-2 cursor-pointer hover:bg-[#e5e5e5c7] p-3'>
				<img
					src={getImage('user.png')}
					alt=''
					className='w-9 h-9 rounded-[50%] object-cover mr-4'
				/>
				<p>Ngọc Văn</p>
			</div>
			<div className='flex items-center mb-2 cursor-pointer hover:bg-[#e5e5e5c7] p-3'>
				<img
					src={getImage('user.png')}
					alt=''
					className='w-9 h-9 rounded-[50%] object-cover mr-4'
				/>
				<p>Ngọc Văn</p>
			</div>
			<div className='flex items-center mb-2 cursor-pointer hover:bg-[#e5e5e5c7] p-3'>
				<img
					src={getImage('user.png')}
					alt=''
					className='w-9 h-9 rounded-[50%] object-cover mr-4'
				/>
				<p>Ngọc Văn</p>
			</div>
			<div className='flex items-center mb-2 cursor-pointer hover:bg-[#e5e5e5c7] p-3'>
				<img
					src={getImage('user.png')}
					alt=''
					className='w-9 h-9 rounded-[50%] object-cover mr-4'
				/>
				<p>Ngọc Văn</p>
			</div>
		</div>
	);
};

export default ChatMessage;
