import { CloseOutlined, MessageFilled, SendOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { useState } from 'react';

import styles from './chat-message.module.scss';

import { getImage } from '@/utils/CustomImagePath';

type Props = {};
const cx = classNames.bind(styles);

const ChatMessage = (props: Props) => {
	const [showBoxChat, setShowBoxChat] = useState(false);

	const handleShowBoxChat = () => {
		setShowBoxChat(!showBoxChat);
	};
	const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = '40px';
		e.target.style.height = e.target.scrollHeight + 'px';
	};
	return (
		<div className={`fixed z-[10000] ${showBoxChat ? 'bottom-0' : 'bottom-8'} right-8`}>
			{!showBoxChat && (
				<div
					className='cursor-pointer'
					onClick={handleShowBoxChat}
				>
					<MessageFilled className='text-6xl color-main hover:text-[#03bdcb] duration-[0s]' />
				</div>
			)}
			{showBoxChat && (
				<div className='bg-white flex justify-between flex-col h-[400px] w-[340px] rounded-tl-md shadow-006 rounded-tr-md overflow-hidden'>
					<div className='flex items-center bg-main px-3 py-2 shadow-026'>
						<div className='mr-2'>
							<img
								src={getImage('user.png')}
								alt=''
								className='w-10 h-10'
							/>
						</div>
						<ul className='text-white'>
							<li className='text-sm font-semibold'>Ngọc Vũ Văn</li>
							<li className='text-sm'>0123456789</li>
						</ul>
						<CloseOutlined
							onClick={handleShowBoxChat}
							className='justify-items-end block ml-auto text-white cursor-pointer text-xl font-bold'
						/>
					</div>
					<div className={cx('chat_msg_body')}></div>
					<div className='flex items-center px-2 mb-2'>
						<textarea
							rows={1}
							onInput={resizeTextArea}
							className='border border-solid !border-[#01adba] input-none flex-1 bg-[#ccc] rounded-lg resize-none'
							name='content'
							placeholder='Aa'
						/>
						<SendOutlined className='ml-2'/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ChatMessage;
