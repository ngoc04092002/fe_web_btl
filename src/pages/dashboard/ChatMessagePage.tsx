import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';

import { ChatMessage } from '@/components';
import BodyChatMessage from '@/components/ChatMessage/BodyChatMessage';
import { AuthContext } from '@/context/AuthProvider';
import chatMessageClient from '@/infrastructure/chatMessageWebsocketActions';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

let stompClient: any = null;

const ChatMessagePage = (props: Props) => {
	const [showUser, setShowUser] = useState(false);
	const [msg, setMsg] = useState('');
	const { user } = useContext(AuthContext);

	const handleChangeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMsg(e.target.value);
	};

	const handleToggleShowUser = () => {
		setShowUser(!showUser);
	};

	const handleSendMessage = () => {
		if (stompClient !== null && stompClient.connected) {
			chatMessageClient.postMessage({
				rid: 'rid',
				from: (user as IUser)?.username,
				to: 'postUser?.username' || '',
				msg: msg,
				// createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
			});
			setMsg('');
		}
	};

	const newMsgData = [
		{
			from: (user as IUser)?.username,
			to: 'postUser?.username' || '',
			msg: msg,
		},
	];

	return (
		<div className='w-full mb-20'>
			<div
				className='relative bg-white flex items-center justify-between border-0 border-b border-solid border-[#ccc] pb-3 cursor-pointer rounded px-3 pt-2'
				onClick={handleToggleShowUser}
			>
				<img
					src={getImage('user.png')}
					alt=''
					className='w-12 h-12 rounded-[50%] object-cover select-none'
				/>
				{showUser ? <CaretDownOutlined /> : <CaretUpOutlined />}
				{showUser && <ChatMessage />}
			</div>
			<div className='mt-4 max-h-[420px] p-3 bg-white'>
				<BodyChatMessage
					handleChangeMsg={handleChangeMsg}
					handleSendMessage={handleSendMessage}
					msg={msg}
					msgData={newMsgData}
					isLoading={false}
				/>
			</div>
		</div>
	);
};

export default ChatMessagePage;
