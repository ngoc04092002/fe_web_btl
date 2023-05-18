import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import { ChatMessage } from '@/components';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

const ChatMessagePage = (props: Props) => {
	const [showUser, setShowUser] = useState(false);

	const handleToggleShowUser = () => {
		setShowUser(!showUser);
	};
	return (
		<div className='w-full bg-white mb-20'>
			<div
				className='relative flex items-center justify-between border-0 border-b border-solid border-[#ccc] pb-3 cursor-pointer rounded px-3 pt-2'
				onClick={handleToggleShowUser}
			>
				<img
					src={getImage('user.png')}
					alt=''
					className='w-12 h-12 rounded-[50%] object-cover'
				/>
				{showUser ? <CaretDownOutlined /> : <CaretUpOutlined />}
				<ChatMessage />
			</div>
			<div></div>
		</div>
	);
};

export default ChatMessagePage;
