import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Stomp } from '@stomp/stompjs';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';

import { ChatMessage } from '@/components';
import BodyChatMessage from '@/components/ChatMessage/BodyChatMessage';
import { AuthContext } from '@/context/AuthProvider';
// import { FetchApiGetRidMessages } from '@/hooks/fetchApiChatMessage';
import { CreateMessageRequest, MessageResponse } from '@/types/components/ChatMessage/type';
import { IUser } from '@/types/pages/types';
import { getImage } from '@/utils/CustomImagePath';

type Props = {};

let stompClient: any = null;

const ChatMessagePage = (props: Props) => {
	const { rid } = useParams();
	const [showUser, setShowUser] = useState(false);
	const [msg, setMsg] = useState('');
	const { user } = useContext(AuthContext);
	const [msgData, setMsgData] = useState<MessageResponse[] | []>([]);
	const handleChangeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMsg(e.target.value);
	};
	console.log('rid', rid);
	const handleToggleShowUser = () => {
		setShowUser(!showUser);
	};

	// websocket
	useEffect(() => {
		const socket = new SockJS('http://localhost:8080/websocket');
		stompClient = Stomp.over(() => socket);
		// stompClient = new SocketClient().getClient();
		if (stompClient !== null) {
			stompClient.connect(
				{},
				() => {
					stompClient.subscribe('/receive/message', (response: any) => {
						const resData: CreateMessageRequest = JSON.parse(response.body);
						if (resData.rid.includes((user as IUser)?.id?.toString() || '')) {
							console.log(msgData);
							setMsgData((prev) => [...prev, resData]);
						}
					});
				},
				onError,
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onError = (err: any) => {
		console.log(err);
	};

	const handleSendMessage = () => {
		console.log('send');
		if (stompClient !== null && stompClient.connected) {
			stompClient.send(
				'/send/message',
				{},
				JSON.stringify({
					rid: '2-7',
					from: (user as IUser)?.username,
					to: 'postUser?.username' || '',
					msg: msg,
					// createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
				}),
			);
			setMsg('');
		}
	};

	const newMsgData = [...msgData];

	return (
		<div className='w-full mb-20'>
			<div
				className='relative bg-white flex items-center justify-between border-0 border-b border-solid border-[#ccc] pb-3 cursor-pointer rounded px-3 pt-2'
				onClick={handleToggleShowUser}
			>
				<div className='flex items-center'>
					<img
						src={getImage('user.png')}
						alt=''
						className='w-12 h-12 mr-4 rounded-[50%] object-cover select-none'
					/>
					<p>Ngọc Văn</p>
				</div>
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
